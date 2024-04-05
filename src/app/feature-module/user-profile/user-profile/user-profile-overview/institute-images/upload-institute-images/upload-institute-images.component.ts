import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-upload-institute-images',
  templateUrl: './upload-institute-images.component.html',
  styleUrls: ['./upload-institute-images.component.scss']
})
export class UploadInstituteImagesComponent implements OnInit ,OnDestroy {
  private readonly unsubscribe$ = new Subject();
  loading:boolean=false;
  constructor(
    private activeModal: NgbActiveModal,
    private fb:FormBuilder,
    private _postImages:UserInfoService,
    private _alerts:AlertsService
    ){

  }
 
  ngOnInit(): void {
      this.form = this.fb.group({
        attachments:[null]
      });

     
  }
  uploadedFiles: File[] = [];
  images: any[] = [];
  form!: FormGroup;
  showAlert:boolean=false;
  handleFileInput(event: Event) {
    this.showAlert=false
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files?.[0];
    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      // File exceeds 2MB, handle accordingly (e.g., show an error message)
      this.showAlert=true
      return;
    }
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
         const preview = e.target.result;
         this.images.push(preview);
      };
      reader.readAsDataURL(selectedFile);

      this.uploadedFiles.push(selectedFile)
      // Handle the selected file here (e.g., upload it, display its details, etc.)
      this.form.get('attachments')?.patchValue(this.uploadedFiles)
    }
  }

  attchFile() {
    // Get a reference to the file input element
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    // Trigger a click event on the file input element
    fileInput.click();
  }

  deleteFile(index:number){
    this.uploadedFiles.splice(index,1);
    this.images.splice(index,1);
    this.form.get('attachments')?.patchValue(this.uploadedFiles)
  }

  postImage() {
    this.loading = true;
    const formData = new FormData();
    this.uploadedFiles.forEach((file)=>{
      formData.append('images', file);
    })

    this._postImages.updateInstituteImages(formData)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (data) => {
        this.loading = false;
        if (data.status.code === '0' ) {
          // Handle success if needed
          this.activeModal.close()
        }else{
          this._alerts.error('','File Upload Failed, try again later.')
        }
      },
      error: (err) => {
        this.loading = false;
        this._alerts.error('','File Upload Failed, try again later.')

      },
    });
  }
  
  closeModal(){
    this.activeModal.close()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
