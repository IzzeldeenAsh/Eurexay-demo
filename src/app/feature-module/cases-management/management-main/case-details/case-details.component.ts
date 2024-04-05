import { Component, Input } from '@angular/core';
import { ICaseManagementRecord } from 'src/app/core/models/case-managements-records.interface';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent {
  constructor(public _currentUser:CurrentUserService){}
  @Input() currentCaseManage!:ICaseManagementRecord;
  ngOnInit(): void {
    
  }
  downloadFile(data: any) {
    const splittedName = data.attachmentName.split('.');
    const extension = splittedName[splittedName.length - 1];
    const name = splittedName[0];
    let mimeType = '';

    // Define MIME types based on file extensions
    switch (extension.toLowerCase()) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'json':
        mimeType = 'application/json';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      case 'jpg':
      case 'jpeg':
        mimeType = 'image/jpeg';
        break;
      default:
        mimeType = 'application/octet-stream'; // Default to binary data
    }

    const src = `data:text/csv;base64,${data.attachmentContent}`;
    const link = document.createElement('a');
    link.href = src;
    link.download = `${name}.${extension}`;
    link.click();
    link.remove();
  }

 
}
