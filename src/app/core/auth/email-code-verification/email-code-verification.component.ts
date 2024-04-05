import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordEncryptionService } from '../../services/auth/password-encryption.service';
import { AlertsService } from '../../services/alert/alerts.service';
enum ErrorStates {
  NotSubmitted,
  HasError,
  NoError,
}
@Component({
  selector: 'app-email-code-verification',
  templateUrl: './email-code-verification.component.html',
  styleUrls: ['./email-code-verification.component.scss'],
})
export class EmailCodeVerificationComponent implements OnInit{
  @ViewChild('digit1Input') digit1Input!: ElementRef;
  @ViewChild('digit2Input') digit2Input!: ElementRef;
  @ViewChild('digit3Input') digit3Input!: ElementRef;
  @ViewChild('digit4Input') digit4Input!: ElementRef;
  @ViewChild('digit5Input') digit5Input!: ElementRef;
  @ViewChild('digit6Input') digit6Input!: ElementRef;

  verificationForm!: FormGroup;
  errorState: ErrorStates = ErrorStates.NotSubmitted;
  errorStates = ErrorStates;
  isLoading: boolean = false;
  encryptedEmail: string | null = '';
  fullName: string | null = '';
  email: string = '';
  showResend = false;
  countdown = 60;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _encryption: PasswordEncryptionService,
    private route: ActivatedRoute,
    private _alert: AlertsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe((param) => {
      this.encryptedEmail = param['email'];
      this.fullName = param['fullName'];
    });
    this.email = this._encryption.decrypt(
      '3c7be2ceafca4b8595758e8bfd3e251d',
      this.encryptedEmail
    );
    this.sendVerificationEmail();
  }
  @HostListener('input', ['$event.target'])
  onInput(target: HTMLInputElement) {
    const nextInput = this.getNextInput(target);
    if (nextInput) {
      const currentValue = target.value;
      if (currentValue.length === 1) {
        // Automatically move to the next input field
        nextInput.focus();
      }
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      const currentInput = event.target as HTMLInputElement;
      const previousInput = this.getPreviousInput(currentInput);

      if (previousInput && currentInput.value === '') {
        // Prevent the default behavior of the Delete key
        event.preventDefault();

        // Automatically move to the previous input field and clear its content
        previousInput.focus();
        previousInput.value = '';
      }
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;

   if(clipboardData){
    const pastedText = clipboardData.getData('text');
    const digitInputs = [
      this.digit1Input.nativeElement,
      this.digit2Input.nativeElement,
      this.digit3Input.nativeElement,
      this.digit4Input.nativeElement,
      this.digit5Input.nativeElement,
      this.digit6Input.nativeElement,
    ];

    // Distribute the pasted text into each input field
    for (let i = 0; i < Math.min(pastedText.length, digitInputs.length); i++) {
      digitInputs[i].value = pastedText[i];
    }

    // Automatically move focus to the next input field
    if (digitInputs[pastedText.length]) {
      digitInputs[pastedText.length].focus();
    }
    this.verificationForm.patchValue({
      digit1: digitInputs[0].value,
      digit2: digitInputs[1].value,
      digit3: digitInputs[2].value,
      digit4: digitInputs[3].value,
      digit5: digitInputs[4].value,
      digit6: digitInputs[5].value,
    });
    this.verifyOTP();

   }
    // Prevent the default paste behavior
    event.preventDefault();
  }

  private getNextInput(currentInput: HTMLInputElement): HTMLInputElement | null {
    switch (currentInput) {
      case this.digit1Input.nativeElement:
        return this.digit2Input.nativeElement;
      case this.digit2Input.nativeElement:
        return this.digit3Input.nativeElement;
      case this.digit3Input.nativeElement:
        return this.digit4Input.nativeElement;
      case this.digit4Input.nativeElement:
        return this.digit5Input.nativeElement;
      case this.digit5Input.nativeElement:
        return this.digit6Input.nativeElement;
      default:
        return null;
    }
  }
  private getPreviousInput(currentInput: HTMLInputElement): HTMLInputElement | null {
    switch (currentInput) {
      case this.digit2Input.nativeElement:
        return this.digit1Input.nativeElement;
      case this.digit3Input.nativeElement:
        return this.digit2Input.nativeElement;
      case this.digit4Input.nativeElement:
        return this.digit3Input.nativeElement;
      case this.digit5Input.nativeElement:
        return this.digit4Input.nativeElement;
      case this.digit6Input.nativeElement:
        return this.digit5Input.nativeElement;
      default:
        return null;
    }
  }
  sendVerificationEmail() {
    this.showResend = false;
    this.startCountdown();
    if (this.email && this.fullName) {
      this._authService
        .sendVerificationEmail(this.email, this.fullName)
        .subscribe((response) => {

        });
    }
  }
  startCountdown() {
    this.showResend = true;
    const interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        // Re-enable the "Resend" link
        this.showResend = false;

        // Clear the interval to stop the countdown
        clearInterval(interval);
      }
    }, 1000); // Update the countdown every 1 second
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.verificationForm.controls;
  }

  initForm() {
    this.verificationForm = this.fb.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required],
      digit5: ['', Validators.required],
      digit6: ['', Validators.required],
    });
  }

  verifyOTP() {
    this.isLoading = true;
    const verificationCode = Object.values(this.verificationForm.value).join(
      ''
    );
    this._authService
      .sendVerificationCode(this.email, verificationCode)
      .subscribe((response) => {
        if (response.status.code === '0') {
          this.isLoading = false;

          this._alert
            .success(
              'Registraion Completed.',
              'Please await approval for access to your account.'
            )
            .then(() => {
              this.router.navigate(['/auth']);
            });
        } else {
          this.isLoading = false;
          this._alert.error('', `${response.status.description}`).then(() => {
            this.verificationForm.reset();
          });
        }
      });
  }
}
