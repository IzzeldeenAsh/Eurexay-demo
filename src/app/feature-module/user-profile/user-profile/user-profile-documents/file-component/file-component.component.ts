import { Component, Input, OnInit } from '@angular/core';
interface IDocument {
  id: number;
  label: string;
  name: string;
  extraInfo1: null | string;
  extraInfo2: null | string;
  content: string;
}

@Component({
  selector: 'app-file-component',
  templateUrl: './file-component.component.html',
  styleUrls: ['./file-component.component.scss']
})
export class FileComponentComponent   {
@Input() displayedCertificates:any[] = [];
@Input() name:string=''
certificateIcon = `
<svg
xmlns="http://www.w3.org/2000/svg"
width="28"
height="30"
viewBox="0 0 28 30"
fill="none"
>
<path
  d="M20.3522 4.38867C21.6427 4.38867 22.6858 5.42033 22.6858 6.6967V9.08991H18.0186V6.6967C18.0186 5.42033 19.0617 4.38867 20.3522 4.38867Z"
  fill="white"
  stroke="#3764BA"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M3.15039 3.28444C3.15039 2.80482 3.5392 2.41602 4.01881 2.41602H21.8175C22.2971 2.41602 22.686 2.80482 22.686 3.28444V25.9448C22.686 27.8632 21.1307 29.4184 19.2123 29.4184H4.01881C3.5392 29.4184 3.15039 29.0296 3.15039 28.55V3.28444Z"
  fill="#3764BA"
/>
<path
  d="M16.0291 25.7364C16.0291 27.4064 17.3948 28.7573 19.0832 28.7573L4.02771 28.8956C2.33934 28.8956 0.973633 27.5446 0.973633 25.8747V22.7477L16.0291 22.6094V25.7364Z"
  fill="white"
/>
<path
  d="M22.1373 25.7364C22.1373 27.4064 20.7716 28.7573 19.0832 28.7573M19.0832 28.7573C17.3948 28.7573 16.0291 27.4064 16.0291 25.7364V22.6094L0.973633 22.7477V25.8747C0.973633 27.5446 2.33934 28.8956 4.02771 28.8956L19.0832 28.7573Z"
  stroke="#3764BA"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M7.13574 8.31348H13.2978"
  stroke="white"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M7.51221 11.3555H16.9756"
  stroke="white"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M7.51221 14.0898H16.9756"
  stroke="white"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M7.51221 16.6523H16.9756"
  stroke="white"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M7.51221 19.248H16.9756"
  stroke="white"
  stroke-width="0.868421"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M25.2879 12.2488L24.7717 12.1637C24.062 12.0467 23.449 12.6742 23.5995 13.3762L23.7071 13.8868C23.9222 14.8866 22.6855 15.5354 21.965 14.8121L21.5993 14.4399C21.0939 13.9293 20.2228 14.0889 19.9217 14.7377L19.7066 15.2057C19.2872 16.1311 17.9 15.9502 17.7494 14.9398L17.6741 14.4292C17.5666 13.7166 16.7708 13.3444 16.1471 13.6954L15.6954 13.9507C14.8029 14.4612 13.792 13.5039 14.2651 12.5998L14.5018 12.1425C14.8351 11.5043 14.4157 10.7385 13.6952 10.664L13.179 10.6108C12.1574 10.5044 11.9101 9.14302 12.8242 8.68565L13.2973 8.45155C13.9426 8.13246 14.0608 7.27096 13.5231 6.78168L13.136 6.4306C12.3725 5.74986 12.9854 4.50549 13.9963 4.66504L14.5125 4.75008C15.2222 4.86708 15.8352 4.23951 15.6847 3.53751L15.5772 3.02698C15.3621 2.02715 16.5988 1.37833 17.3193 2.10161L17.6849 2.47386C18.1903 2.98441 19.0614 2.82483 19.3625 2.17601L19.5776 1.70806C19.997 0.782691 21.3842 0.963511 21.5348 1.97398L21.6101 2.48451C21.7176 3.19715 22.5134 3.56949 23.1371 3.21849L23.5888 2.96323C24.4813 2.45267 25.4922 3.40985 25.0191 4.31395L24.7825 4.77137C24.4491 5.40956 24.8685 6.1754 25.5891 6.24986L26.1052 6.30296C27.1268 6.40933 27.3742 7.77086 26.4601 8.22823L25.9869 8.4622C25.3417 8.78129 25.2234 9.64292 25.7611 10.1322L26.1482 10.4832C26.9117 11.1639 26.2988 12.4084 25.2879 12.2488Z"
  fill="#ECB852"
  stroke="white"
  stroke-width="0.868421"
  stroke-miterlimit="10"
  stroke-linecap="round"
/>
</svg>
`
downloadFile(data: any) {
  const splittedName = data.name.split('.');
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

  const src = `data:text/csv;base64,${data.content}`;
  const link = document.createElement('a');
  link.href = src;
  link.download = `${name}.${extension}`;
  link.click();
  link.remove();
};

}
