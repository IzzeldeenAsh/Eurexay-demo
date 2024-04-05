import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { PasswordEncryptionService } from '../../services/auth/password-encryption.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alert/alerts.service';
import { CurrentUserService } from '../../services/user-info/current-user.service';
import { ICurrentUserResponse } from '../../models/userInfo.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  badLogin:string=''
  loading: boolean = false;
  hide = true;
  encryptedPassword: string = '';
 loginError=false
  private readonly unsubscribe$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthenticationService,
    private _passwordEncrypter: PasswordEncryptionService,
    private _userInfo :CurrentUserService,
  ) {}

  ngOnInit() {
    this.form();
  }

  togglePasswordVisibility($event: Event) {
    $event.preventDefault();
    this.hide = !this.hide;
  }

  form() {
    this.loginForm = this.fb.group({
      email: new FormControl('Demo@eurekxay.com', [Validators.required, Validators.email]),
      password: new FormControl('demo1234cn*', [Validators.required]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  submit() {
    this.loginError=false
    this.loading = true;
    this.encryptedPassword = this._passwordEncrypter.encrypt(
      '3c7be2ceafca4b8595758e8bfd3e251d',
      this.password.value
    );
    const emailEncrypted = this._passwordEncrypter.encrypt(  '3c7be2ceafca4b8595758e8bfd3e251d',this.email.value)
    this._auth
      .login(this.email.value, this.encryptedPassword)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) => {
          this.loading = false;
          if (data.status.code === '0' && data.result) {
            localStorage.setItem('uname',emailEncrypted);
            console.log('Logged')
            this.getUserInfo();
          }else{
            this.loginError=true;
            this.badLogin=data.status.description
          }
        },
        error: (err) => {
          this.loginError=true
          this.loading = false;
        },
      });
  }

  getUserInfo(){
    this._userInfo.getUserInfo()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next : (res:ICurrentUserResponse)=>{
        if(res.status.code === '0'){
          console.log(res)
        this.router.navigate(['/welcome']);
        }else{
          localStorage.clear();
          this.loginError=true
          this.router.navigate(['/auth'])
        }
      },
      error: (error)=>{
        localStorage.clear();
        this.loginError=true
        this.router.navigate(['/auth'])
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
