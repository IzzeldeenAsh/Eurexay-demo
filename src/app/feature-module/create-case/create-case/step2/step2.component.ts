import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription, take } from 'rxjs';
import { ICreateCase } from 'src/app/core/models/createCase.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { CreateCaseService } from 'src/app/core/services/cases/create-case.service';
export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step.scss'],
})
export class Step2Component implements OnInit {
  fileIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="#3BB7FD"/>
  <path d="M15.7999 2.20999C15.3899 1.79999 14.6799 2.07999 14.6799 2.64999V6.13999C14.6799 7.59999 15.9199 8.80999 17.4299 8.80999C18.3799 8.81999 19.6999 8.81999 20.8299 8.81999C21.3999 8.81999 21.6999 8.14999 21.2999 7.74999C19.8599 6.29999 17.2799 3.68999 15.7999 2.20999Z" fill="#2364A6"/>
  <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="white"/>
  <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="white"/>
  </svg>`
  quillConfiguration = QuillConfiguration
  @Input() caseUUID!:string;
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreateCase>,
    isFormValid: boolean
  ) => void;
  form!: FormGroup;
  @Input() defaultValues!: Partial<ICreateCase>;
  requirementsForm!:FormGroup
  requirements: any;
  uploadedFiles: File[] = [];
  saving:boolean=false
  showFileSizeAlert:boolean=false;
  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private _createCaseService:CreateCaseService,
    private _alert:AlertsService
    ) {}

  ngOnInit() {
    this.requirements = this.defaultValues.caseRequirements && this.defaultValues.caseRequirements.length>0 ? this.defaultValues.caseRequirements : []
    this.initForm();
    this.updateParentModel({}, true);

  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  initForm() {
  
   this.requirements=this.defaultValues.caseRequirements
   console.log(' this.requirements', this.requirements)
   console.log(' this.defaultValues.caseRequirements', this.defaultValues.caseRequirements)
    this.requirementsForm = this.fb.group({
      name: ['', [Validators.required, this.uniqueRequirementNameValidator(this.requirements)]],
      description: ['', [Validators.required, this.minAbstractLength(10)]],
      attachments:[ ]
    
    })
    this.form = this.fb.group({
      caseRequirements:[[this.defaultValues.caseRequirements]],
    });
    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, true);
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  addRequirement() {
    this.saving=true;
    if (this.requirementsForm.valid) {
      const requirement = this.requirementsForm.value;
      const formData = new FormData();
      console.log('requirement',requirement)
      formData.append('name', requirement.name );
      formData.append('description', requirement.description );
      formData.append('caseUUID',this.caseUUID);
      if(requirement.attachments && requirement.attachments.length>0){
        formData.append('attachment',  requirement.attachments[0]);
      } else{
        formData.append('attachment', new Blob(), '');
      }
      this._createCaseService.createCaseRequirements(formData).pipe(take(1)).subscribe({
        next: res=>{
          if (res.status.code === '0') {
            this.requirements=res['result']
            this.form.get('caseRequirements')?.setValue(this.requirements);
            this.requirementsForm.reset();
            this.uploadedFiles=[]
            this.saving=false;
          }else {
            this._alert.error('', `${res.status.description}`);
            this.saving=false;
          }
        },
        error: (err) => {
          this.saving = false;
        },
      })
     
    }
  }
  deleteRequirement(index: number) {
    this.saving=true;
    const task = this.requirements.at(index)
    this._createCaseService.deleteCaseRequirement(task.uuid).pipe(take(1)).subscribe({
      next: res=>{
        if (res.status.code === '0') {
          this.saving=false;
          this.requirements.splice(index, 1);
          this.form.get('caseRequirements')?.setValue(this.requirements);
          this.requirementsForm.reset();
          this.uploadedFiles=[]
        }else {
          this.saving=false;
        }
      },
      error: (err) => {
        this.saving = false;
      },
    })
  }

  uniqueRequirementNameValidator(requirements: any[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (requirements.some(req => req.name === value)) {
        return { duplicateName: true };
      }
      return null;
    };
  }
  minAbstractLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value && control.value.trim().length < minLength) {
        return { minAbstractLength: true };
      }
      return null;
    };
  }
  get description(){
    return this.requirementsForm.get('description') as FormControl
   }

   deleteFile(index:number){
    this.uploadedFiles.splice(index,1);
    this.requirementsForm.get('attachments')?.patchValue(this.uploadedFiles)
  }

  attchFile() {
    // Get a reference to the file input element
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    // Allow selecting multiple files
    fileInput.click();
  }
  
  handleFileInput(event: Event) {
    this.showFileSizeAlert=false
    const inputElement = event.target as HTMLInputElement;
    const selectedFiles = inputElement.files;
    const maxFileSize = 2 * 1024 * 1024;
    if (selectedFiles && selectedFiles.length > 0) {
      // Handle each selected file here (e.g., upload it, display its details, etc.)
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        if(file.size <= maxFileSize){
          this.uploadedFiles.push(file);
        }else{
          this.showFileSizeAlert=true;
          break
        }
      }
      console.log('uploaded files',this.uploadedFiles)
      // Update the form value with the array of uploaded files
      this.requirementsForm.get('attachments')?.patchValue(this.uploadedFiles);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
