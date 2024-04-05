import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilesUploadService } from 'src/app/core/services/filesUpload/files-upload.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss'],
})


export class AddDocumentComponent implements OnInit {
  fileGroup!: FormGroup;
  fileUploaded: any;
  invalidMessage: boolean=false;
  constructor(
    public dialogRef: MatDialogRef<AddDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _filesUploadService: FilesUploadService
  ) {}
  onNoClick() {
    this.dialogRef.close();
  }
  onUpload() {}

  ngOnInit() {
    this.fileGroup = this.fb.group({
      file: [''],
      expiryDate: [''],
      name:[''],
      fileUploaded: [false],
    });

    if (this.data === 'certificate') {
      this.fileGroup.get('expiryDate')?.setValidators(Validators.required);
      this.fileGroup.get('name')?.setValidators(Validators.required);
    }
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileGroup.get('fileUploaded')?.setValue(true);
        this.fileUploaded = file;
       
    } else {
      this.fileGroup.get('fileUploaded')?.setValue(false);
    }
  }

  submit() {
    this.invalidMessage= false
    const formData = new FormData();

    if(this.data === 'certificate') {
    if ( this.fileGroup.invalid){
      this.invalidMessage =true
      return 
    }
    formData.append('certificates',this.fileUploaded);
    const certificatUniqueName = this.fileUploaded.name
    const certificatName = this.fileGroup.get('name')?.value;
    const certificateExpiry = this.fileGroup.get('expiryDate')?.value;
    const certificatInfo= {
      [certificatUniqueName] :{
        "name": certificatName,
    "expiryDate": certificateExpiry
      }
    }
    formData.append('certificatesInfo',JSON.stringify(certificatInfo))   
    this.uploadAPICall(formData)
    } else if (this.data=== 'Award'){
      formData.append('awards',this.fileUploaded);
      this.uploadAPICall(formData)
    } else if (this.data === 'Accreditation'){
      formData.append('accreditations',this.fileUploaded);
      this.uploadAPICall(formData)
    }

    
  }
  

  uploadAPICall(formData:any){
    this._filesUploadService.uploadUserFiles(formData).subscribe(res=>{
      if (res.status.code === '0') {
        this.dialogRef.close();
      } else{
        Swal.fire({
          icon: 'error',
          title: 'File Upload Failed',
          text: 'Your file could not be uploaded successfully. Please try again later.',
          confirmButtonColor: '#0778b9'
        });
      }
    })
  }
  
}
