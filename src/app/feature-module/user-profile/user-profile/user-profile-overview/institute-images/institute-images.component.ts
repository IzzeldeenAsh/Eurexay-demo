import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadInstituteImagesComponent } from './upload-institute-images/upload-institute-images.component';
import { FilesUploadService } from 'src/app/core/services/filesUpload/files-upload.service';
import { Subject, takeUntil } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-institute-images',
  templateUrl: './institute-images.component.html',
  styleUrls: ['./institute-images.component.scss']
})
export class InstituteImagesComponent implements OnInit ,OnDestroy {
  private readonly unsubscribe$ = new Subject();
@Input() canEdit: boolean = false;
loading:boolean=false;
images:any[]=[];
currentProfile:string | null = null;
documents:any;
constructor(
  public modalService: NgbModal,
  private _userImages:FilesUploadService,
  private _alert:AlertsService,
  private route :ActivatedRoute
  ){
}
  ngOnInit(): void {
    this.getDocs()
  }
 

openModal() {
  // Use NgbModal to open the modal
  const modalRef = this.modalService.open(UploadInstituteImagesComponent);
  modalRef.result.then(
    (result) => {
      // The modal was closed with a result

      // Call the function to reload documents
      this.getDocs();
    },
    (reason) => {
      // The modal was dismissed (e.g., backdrop click or Escape key)

      // You can handle dismissal if needed
    }
  );
}

getDocs(){
  this.loading = true;
  this.route.parent?.params.subscribe((params) => {
    this.currentProfile = params['userName'];
  });
  if(this.currentProfile){
    this._userImages.getDocuments(this.currentProfile)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      {
        next: (data) => {
          this.loading = false;
          if (data.status.code === '0' && data.result) {
          this.documents = data['result']
          this.images = this.documents.filter((file:any)=> file.label === 'INSTITUTE_IMAGE')
          }
        },
        error: (err) => {
          this.loading = false;
        },
      }
    )
  }
}

viewImage(imageCode:any) {
  // Convert base64 string to a Blob
  const byteString = atob(imageCode.split(',')[1]);
  const mimeString = imageCode.split(',')[0].split(':')[1].split(';')[0];
  const byteArray = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([byteArray], { type: mimeString });

  // Create a Blob URL
  const blobUrl = URL.createObjectURL(blob);

  // Open Blob URL in a new tab
  window.open(blobUrl, '_blank');
}
deleteImage(id:number){
  this.loading=true
  this._userImages.deleteFile(id)
  .subscribe(
    {
      next : (res)=>{
        if (res.status.code === '0') {
        this._alert.success('Image deleted successfully','');
        this.getDocs();
        this.loading=false
        } else {
          this._alert.error('', `${res.status.description}`);
          this.loading=false
        }
      },
      error:err=>{
        this.loading=true
      }
    }
  )
}

ngOnDestroy(): void {
  this.unsubscribe$.next(true);
  this.unsubscribe$.complete();
}
}
