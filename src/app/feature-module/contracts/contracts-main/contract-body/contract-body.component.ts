import { Component, Input } from '@angular/core';
import { IContract } from 'src/app/core/models/contract.interface';

@Component({
  selector: 'app-contract-body',
  templateUrl: './contract-body.component.html',
  styleUrls: ['./contract-body.component.scss']
})
export class ContractBodyComponent {
@Input() currentContract!:IContract
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
