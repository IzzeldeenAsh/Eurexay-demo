import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreatePrize } from 'src/app/core/models/create-prize';
import { IPrize } from 'src/app/core/models/prizes.interface';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component  implements OnInit {
  uploadedFiles: File[] = [];
  @Input() prizeEdit!:IPrize;
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreatePrize>,
    isFormValid: boolean
    
  ) => void;
  form!: FormGroup;
  @Input() defaultValues!: Partial<ICreatePrize>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
 
    if(this.prizeEdit){
      this.uploadedFiles = this.defaultValues.attachments;
      this.uploadedFiles=[]
      for (const prizeFile of this.prizeEdit.prizeFiles) {
        const content = prizeFile.content;
        const fileName = prizeFile.fileName;
      
        // Create a Blob from the content
        const blob = new Blob([content], { type: 'application/octet-stream' });
      
        // Create a File from the Blob
        const file = new File([blob], fileName);
      
        // Push the File into the uploadedFiles array
        this.uploadedFiles.push(file);
        
      }
      this.form.get('attachments')?.patchValue(this.uploadedFiles)
     }else{
      if(this.defaultValues.attachments.length){
        this.uploadedFiles= this.defaultValues.attachments;
      }
     
     }
  }
 

  initForm() {
    this.form = this.fb.group({
      prizeTitle: [this.prizeEdit ? this.prizeEdit.name : this.defaultValues.prizeTitle, [Validators.required]],
      prizAbstract: [
        this.prizeEdit ? this.prizeEdit.prizeAbstract :
        this.defaultValues.prizAbstract,
        [Validators.required],
      ],
      // whoCanParticipate: [ this.defaultValues.whoCanParticipate, [Validators.required]],
      prizeRequirements: [ this.prizeEdit ? this.prizeEdit.requirements :this.defaultValues.prizeRequirements,[Validators.required]],
      attachments:[ this.prizeEdit ? this.prizeEdit.prizeFiles :this.defaultValues.attachments]
      
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('prizeTitle')?.hasError('required') ||
      this.form.get('prizAbstract')?.hasError('required') ||
      this.form.get('whoCanParticipate')?.hasError('required') ||
      this.form.get('prizeRequirements')?.hasError('required') 
    );
  }
  attchFile() {
    // Get a reference to the file input element
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    // Allow selecting multiple files
    fileInput.setAttribute('multiple', 'true');
    // Trigger a click event on the file input element
    fileInput.click();
  }
  
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFiles = inputElement.files;
  
    if (selectedFiles && selectedFiles.length > 0) {
      // Handle each selected file here (e.g., upload it, display its details, etc.)
      for (let i = 0; i < selectedFiles.length; i++) {
        this.uploadedFiles.push(selectedFiles[i]);
      }
  
      // Update the form value with the array of uploaded files
      this.form.get('attachments')?.patchValue(this.uploadedFiles);
    }
  }
  

  deleteFile(index:number){
    this.uploadedFiles.splice(index,1);
    this.form.get('attachments')?.patchValue(this.uploadedFiles)
  }

  get prizAbstract(){
    return this.form.get('prizAbstract') as FormControl
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
