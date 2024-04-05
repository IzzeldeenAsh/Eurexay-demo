import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { INavLinks } from 'src/app/core/models/navLinks.interface';


@Component({
  selector: 'app-finance-main',
  templateUrl: './finance-main.component.html',
  styleUrls: ['./finance-main.component.scss']
})
export class FinanceMainComponent implements OnInit {
  navLinks: INavLinks[];
  activeLinkIndex = -1;
constructor(private sanitizer: DomSanitizer,private router:Router){
  this.navLinks = [

    {
      label: 'My Invoices',
      link: './my-invoices',
      index: 0,
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M22.0005 7.77002V9.00002H2.00049V7.54002C2.00049 5.25002 3.86049 3.40002 6.15049 3.40002H16.0005V5.97002C16.0005 7.24002 16.7605 8.00002 18.0305 8.00002H20.9705C21.3705 8.00002 21.7105 7.93002 22.0005 7.77002Z" fill="#292D32"/>
      <path d="M2.00049 9V16.46C2.00049 18.75 3.86049 20.6 6.15049 20.6H17.8505C20.1405 20.6 22.0005 18.75 22.0005 16.46V9H2.00049ZM8.00049 17.25H6.00049C5.59049 17.25 5.25049 16.91 5.25049 16.5C5.25049 16.09 5.59049 15.75 6.00049 15.75H8.00049C8.41049 15.75 8.75049 16.09 8.75049 16.5C8.75049 16.91 8.41049 17.25 8.00049 17.25ZM14.5005 17.25H10.5005C10.0905 17.25 9.75049 16.91 9.75049 16.5C9.75049 16.09 10.0905 15.75 10.5005 15.75H14.5005C14.9105 15.75 15.2505 16.09 15.2505 16.5C15.2505 16.91 14.9105 17.25 14.5005 17.25Z" fill="#292D32"/>
      <path d="M20.9705 1H18.0305C16.7605 1 16.0005 1.76 16.0005 3.03V5.97C16.0005 7.24 16.7605 8 18.0305 8H20.9705C22.2405 8 23.0005 7.24 23.0005 5.97V3.03C23.0005 1.76 22.2405 1 20.9705 1ZM19.0105 6.57C18.9805 6.6 18.9105 6.64 18.8605 6.64L17.8205 6.79C17.7905 6.8 17.7505 6.8 17.7205 6.8C17.5705 6.8 17.4405 6.75 17.3505 6.65C17.2305 6.53 17.1805 6.36 17.2105 6.18L17.3605 5.14C17.3705 5.09 17.4005 5.02 17.4305 4.99L19.1305 3.29C19.1605 3.36 19.1905 3.44 19.2205 3.52C19.2605 3.6 19.3005 3.67 19.3405 3.74C19.3705 3.8 19.4105 3.86 19.4505 3.9C19.4905 3.96 19.5305 4.02 19.5605 4.05C19.5805 4.08 19.5905 4.09 19.6005 4.1C19.6905 4.21 19.7905 4.31 19.8805 4.38C19.9005 4.4 19.9205 4.42 19.9305 4.42C19.9805 4.46 20.0405 4.51 20.0805 4.54C20.1405 4.58 20.1905 4.62 20.2505 4.65C20.3205 4.69 20.4005 4.73 20.4805 4.77C20.5605 4.81 20.6405 4.84 20.7105 4.86L19.0105 6.57ZM21.4005 4.18L21.0805 4.5C21.0605 4.53 21.0305 4.54 21.0005 4.54C20.9905 4.54 20.9805 4.54 20.9705 4.54C20.2505 4.33 19.6805 3.76 19.4705 3.04C19.4605 3 19.4705 2.96 19.5005 2.93L19.8305 2.6C20.3705 2.06 20.8805 2.07 21.4105 2.6C21.6805 2.87 21.8105 3.13 21.8105 3.39C21.8005 3.65 21.6705 3.91 21.4005 4.18Z" fill="#292D32"/>
      </svg>
      `)
    },
   

  ];
}
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if( res instanceof NavigationEnd){
       this.activeLinkIndex = this.navLinks.findIndex((tab:INavLinks)=> tab.link === '.' + this.router.url)
      }
     });
  }

}
