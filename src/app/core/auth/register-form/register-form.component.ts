import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterValidators } from '../validators/register-validators';
import { ICountry } from '../../models/countries.interface';
import { CustomValidators } from '../validators/custom-validators';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { PasswordEncryptionService } from '../../services/auth/password-encryption.service';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { AlertsService } from '../../services/alert/alerts.service';
import { emailAvailabilityValidator } from '../validators/email-validation';
import { HttpClient } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
interface ICertificatesInfo {
  [key: string]: {
    name: string;
    expiryDate: Date;
  };
}
export class AccountRegister {
  username: string | null = null;
  password: string | null = null;
  fullName: string | null = null;
  instituteName: string | null = null;
  country: string | null = null;
  city: string | null = null;
  continent: string | null = null;
  phoneNumber: string | null = null;
  faxNumber: string | null = null;
  poBox: string | null = null;
  registrationNumber: string | null = null;
  certificateNumber: string | null = null;
  academicNumber: string | null = null;
  sector: string | null = null;
  websiteUrl: string | null = null;
  addressLine: string | null = null;
  zipCode: string | null = null;
  bio: string | null = null;
  participantType: string | null = null; // Options: BUSINESS, RESEARCHER, INDIVIDUAL, ADMIN
  domains: (string | null)[] = [];
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent
  extends AppComponentBase
  implements OnInit, OnDestroy
{
  private $destroy: Subject<void> = new Subject();

  accountType: string = '';
  sectors: string[] = ['Private', 'Public'];
  hide = true;
  countires: ICountry[] = [];
  imgURL: string | ArrayBuffer | null = null;
  isInvalidImageFormat = false;
  isLinear = false;
  fileUploaded: boolean = false;
  uploadedFileName: string = '';
  certificateGroup!: FormGroup;
  certificateFilesArray: any[] = [];
  continents: string[] = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia'];
  selectedCountry: any = null;
  domains: string[] = [
    'Technology',
    'Healthcare',
    'Finance and Banking',
    'Education',
    'Manufacturing',
    'Energy and Utilities',
    'Retail and Consumer Goods',
    'Agriculture and Food Production',
    'Transportation and Logistics',
    'Entertainment and Media',
    'Tourism and Hospitality',
    'Real Estate and Construction',
    'Automotive',
    'Aerospace and Aviation',
    'Environmental and Sustainability',
    'Pharmaceuticals',
    'Telecommunications',
    'Fashion and Apparel',
    'Sports and Recreation',
    'Nonprofit and Social Services',
  ];
  countryCode!: any;
  profilePicture: any;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _passwordEncrypter: PasswordEncryptionService,
    private _auth: AuthenticationService,
    private _alert: AlertsService,
    private http: HttpClient
  ) {
    super();
    this.firstFormGroup
      .get('emailAddress')
      ?.valueChanges.pipe(
        debounceTime(300), // Debounce for 300ms
        distinctUntilChanged() // Only emit when the value has changed
      )
      .subscribe(() => {
        this.firstFormGroup.get('emailAddress')?.updateValueAndValidity();
      });
  }

  ngOnInit(): void {
    
    this.route.queryParams.pipe(takeUntil(this.$destroy)).subscribe((param) => {
      this.accountType = param['accountType'];
    });

    // this.addCertificate();
    this.phoneNumber.valueChanges
      .pipe(takeUntil(this.$destroy))
      .subscribe((phoneNumber) => this.updateWholeNumber());
  }

  firstFormGroup = this._formBuilder.group({
    fullName: ['', Validators.required],
    countryName: ['', Validators.required],
    phoneNumber: [null, Validators.required],
    registrationNumber: [null, Validators.required],
     continent: ['', Validators.required],
    academicNumber: [
      null,
      this.accountType === 'RESEARCHER' ? Validators.required : null,
    ],
    wholeNumber: new FormControl(),
  });
  secondFormGroup = this._formBuilder.group(
    {
      emailAddress: [
        '',
        {
          Validators: [Validators.required, Validators.email],
          asyncValidators: [emailAvailabilityValidator(this.http)],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        [
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidators.patternValidator(
            /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/,
            { hasSpecialCharacters: true }
          ),

          Validators.minLength(8),
        ],
      ],
      repassword: ['', [Validators.required]],
    },
    {
      validator: RegisterValidators.ConfirmedValidator(
        'password',
        'repassword'
      ),
    }
  );

  thirdFormGroup = this._formBuilder.group({
    sector: ['', Validators.required],
    instituteName: ['', Validators.required],
    instituteDomains: ['', Validators.required],
  });
  // forthFormGroup = this._formBuilder.group({
  //   certificate: this._formBuilder.array([]),
  // });

  profilePicSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type.startsWith('image/')) {
      this.isInvalidImageFormat = false;
      this.previewImage(file);
      this.profilePicture = file;
    } else {
      this.isInvalidImageFormat = true;
      this.imgURL = null;
      this.profilePicture = null;
    }
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result;
    };
    reader.readAsDataURL(file);
  }

  togglePasswordVisibility($event: Event) {
    $event.preventDefault();
    this.hide = !this.hide;
  }

  onCountrySelected(obj: any) {
    if (obj) {
      this.selectedCountry = obj.country
      this.continent.setValue(obj.continent)
      this.countryName.setValue(obj.country);
      this.countryCode = obj.dial
      // this.countryFlag.forEach((country:any)=>{
      //   if(obj['country'].includes(country['country'])){
      //     console.log( country['code'])
      //     this.countryCode = '+'+ country['code']
      //   }
      // })
    }
  }
  updateWholeNumber() {
    const countryCode = this.countryCode;
    const phoneNumber = this.phoneNumber.value;

    const wholeNumber = `${countryCode}${phoneNumber}`;
    this.firstFormGroup.get('wholeNumber')?.setValue(wholeNumber);
  }


  get wholeNumber() {
    return this.firstFormGroup.get('wholeNumber') as FormControl;
  }

  get instituteName() {
    return this.thirdFormGroup.get('instituteName') as FormControl;
  }
  get instituteDomains() {
    return this.thirdFormGroup.get('instituteDomains') as FormControl;
  }
  get sector() {
    return this.thirdFormGroup.get('sector') as FormControl;
  }
  get password() {
    return this.secondFormGroup.get('password') as FormControl;
  }
  get fullName() {
    return this.firstFormGroup.get('fullName') as FormControl;
  }
  get phoneNumber() {
    return this.firstFormGroup.get('phoneNumber') as FormControl;
  }
  get countryName() {
    return this.firstFormGroup.get('countryName') as FormControl;
  }
  get registrationNumber() {
    return this.firstFormGroup.get('registrationNumber') as FormControl;
  }
   get continent() {
    return this.firstFormGroup.get('continent') as FormControl;
  }
  get academicNumber() {
    return this.firstFormGroup.get('academicNumber') as FormControl;
  }
  get emailAddress() {
    return this.secondFormGroup.get('emailAddress') as FormControl;
  }
  get repassword() {
    return this.secondFormGroup.get('repassword') as FormControl;
  }

  sumbitForm() {
    const account: any = new AccountRegister();
    let certificatesInfo: ICertificatesInfo = {};

    // for (const certificate of this.certificate.value) {
    //   if (certificate.fileUploaded) {
    //     certificatesInfo[certificate.uploadedFileName] = {
    //       name: certificate.certificateName,
    //       expiryDate: certificate.expirayDate,
    //     };
    //   }
    // }
    account.username = this.emailAddress.value;
    account.password = this._passwordEncrypter.encrypt(
      '3c7be2ceafca4b8595758e8bfd3e251d',
      this.password.value
    );
    account.fullName = this.fullName.value;
    account.instituteName = this.instituteName.value;
    account.country = this.countryName.value;
    account.city = null;
    account.continent = null;
    account.phoneNumber = this.wholeNumber.value;
    account.faxNumber = null;
    account.poBox = null;
    account.registrationNumber = this.registrationNumber.value;
    account.certificateNumber = null;
    account.academicNumber = this.academicNumber.value;
    account.sector = this.sector.value;
    account.websiteUrl = null;
    account.addressLine = null;
    account.zipCode = null;
    account.bio = null;
    account.participantType = this.accountType;
    account.domains = this.instituteDomains.value;
    account.continent = this.continent.value;
    const formData = new FormData();

    formData.append('requestBody', JSON.stringify(account));
    formData.append('profileImage', this.profilePicture);


    this._auth.registerParticipant(formData).subscribe((res) => {
      if (res.status.code === '0') {
        Swal.fire({
          title: 'Registering',
          text: 'Please Wait',
          timer: 5000,
          didOpen: () => {
            Swal.showLoading();
          },
        })
          .then(() => {
            let emailEncrypted = this._passwordEncrypter.encrypt(
              '3c7be2ceafca4b8595758e8bfd3e251d',
              account.username
            );

            this.router.navigate(['/auth/verification-email'], {
              queryParams: {
                email: emailEncrypted,
                fullName: account.fullName,
              },
            });
          });
      } else {
        this._alert.error('', `${res.status.description}`);
      }
    });
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
