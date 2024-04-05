import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ICase } from 'src/app/core/models/createCase.interface';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { INotifiactions } from 'src/app/core/models/noticiations';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';
import { INavLinks } from 'src/app/core/models/navLinks.interface';
@Component({
  selector: 'app-cases-main',
  templateUrl: './cases-main.component.html',
  styleUrls: ['./cases-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CasesMainComponent extends Unsub implements OnInit {
  offersList: any;
  offersCount: any;
  ownerCases:ICase[]=[]
  navLinks: INavLinks[];
  activeLinkIndex = -1;
  notifications!:INotifiactions;
  constructor(
    private router: Router,
    private _sharedService:SharedService,
    private _notifications:NotificationsService,
    private sanitizer: DomSanitizer,
  ) {
    super()
    this.navLinks = [

      {
        label: 'Available Cases',
        link: './available-Cases',
        index: 0,
        icon:this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>`)
      },
      {
        label: 'My Cases',
        link: './my-cases',
        index: 1,
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
      </svg>`)
      },
      {
        label: 'Offers',
        link: './offers',
        index: 2,
        icon:this.sanitizer.bypassSecurityTrustHtml(`	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path opacity="0.3" d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z" fill="black"></path>
        <path d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z" fill="black"></path>
      </svg>`)
      },
      {
        label: 'My Contracts',
        link: './contracts',
        index: 3,
        icon:this.sanitizer.bypassSecurityTrustHtml(`	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path opacity="0.3" d="M11.425 7.325C12.925 5.825 15.225 5.825 16.725 7.325C18.225 8.825 18.225 11.125 16.725 12.625C15.225 14.125 12.925 14.125 11.425 12.625C9.92501 11.225 9.92501 8.825 11.425 7.325ZM8.42501 4.325C5.32501 7.425 5.32501 12.525 8.42501 15.625C11.525 18.725 16.625 18.725 19.725 15.625C22.825 12.525 22.825 7.425 19.725 4.325C16.525 1.225 11.525 1.225 8.42501 4.325Z" fill="black"></path>
        <path d="M11.325 17.525C10.025 18.025 8.425 17.725 7.325 16.725C5.825 15.225 5.825 12.925 7.325 11.425C8.825 9.92498 11.125 9.92498 12.625 11.425C13.225 12.025 13.625 12.925 13.725 13.725C14.825 13.825 15.925 13.525 16.725 12.625C17.125 12.225 17.425 11.825 17.525 11.325C17.125 10.225 16.525 9.22498 15.625 8.42498C12.525 5.32498 7.425 5.32498 4.325 8.42498C1.225 11.525 1.225 16.625 4.325 19.725C7.425 22.825 12.525 22.825 15.625 19.725C16.325 19.025 16.925 18.225 17.225 17.325C15.425 18.125 13.225 18.225 11.325 17.525Z" fill="black"></path>
      </svg>`)
      },
      {
        label: 'Cases Management',
        link: './case-management-list',
        index: 4,
        icon:this.sanitizer.bypassSecurityTrustHtml(`	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.13 15.88C10.88 15.88 10.63 15.75 10.49 15.52C10.28 15.17 10.39 14.7 10.75 14.49L11.64 13.96V12.88C11.64 12.47 11.98 12.13 12.39 12.13C12.8 12.13 13.14 12.47 13.14 12.88V14.38C13.14 14.64 13 14.89 12.78 15.02L11.53 15.77C11.39 15.84 11.26 15.88 11.13 15.88Z" fill="#292D32"/>
        <path opacity="0.4" d="M21.8499 11.41L21.2299 18.19C21.0199 20.19 20.1999 22.23 15.7999 22.23H8.1799C3.7799 22.23 2.9599 20.19 2.7599 18.2L2.1499 11.69C2.1599 11.7 2.1699 11.71 2.1899 11.72C2.5299 11.94 2.8599 12.16 3.2199 12.36C3.3599 12.45 3.5099 12.53 3.6599 12.61C4.7899 13.23 5.9999 13.72 7.2499 14.06C7.7499 14.21 8.2599 14.32 8.7799 14.41C8.9799 16.01 10.3499 17.25 11.9999 17.25C13.6699 17.25 15.0499 15.98 15.2299 14.35V14.34C15.7399 14.24 16.2499 14.11 16.7499 13.96C17.9999 13.57 19.2099 13.05 20.3399 12.39C20.3999 12.36 20.4499 12.33 20.4899 12.3C20.9499 12.05 21.3899 11.76 21.8099 11.46C21.8299 11.45 21.8399 11.43 21.8499 11.41Z" fill="#292D32"/>
        <path d="M21.09 6.98002C20.24 6.04002 18.83 5.57002 16.76 5.57002H16.52V5.53002C16.52 3.85002 16.52 1.77002 12.76 1.77002H11.24C7.48004 1.77002 7.48004 3.85002 7.48004 5.53002V5.57002H7.24004C5.17004 5.57002 3.75004 6.04002 2.91004 6.98002C1.92004 8.09002 1.95004 9.56002 2.05004 10.57L2.06004 10.64L2.15004 11.69C2.16004 11.7 2.18004 11.71 2.20004 11.72C2.54004 11.94 2.87004 12.16 3.23004 12.36C3.37004 12.45 3.52004 12.53 3.67004 12.61C4.80004 13.23 6.01004 13.72 7.25004 14.06C7.28004 16.65 9.40004 18.75 12 18.75C14.62 18.75 16.75 16.62 16.75 14V13.96C18.01 13.58 19.22 13.05 20.35 12.39C20.41 12.36 20.45 12.33 20.5 12.3C20.96 12.05 21.4 11.76 21.82 11.46C21.83 11.45 21.85 11.43 21.86 11.41L21.9 11.05L21.95 10.58C21.96 10.52 21.96 10.47 21.97 10.4C22.05 9.40002 22.03 8.02002 21.09 6.98002ZM8.91004 5.53002C8.91004 3.83002 8.91004 3.19002 11.24 3.19002H12.76C15.09 3.19002 15.09 3.83002 15.09 5.53002V5.57002H8.91004V5.53002ZM12 17.25C10.35 17.25 8.98004 16.01 8.78004 14.41C8.76004 14.28 8.75004 14.14 8.75004 14C8.75004 12.21 10.21 10.75 12 10.75C13.79 10.75 15.25 12.21 15.25 14C15.25 14.12 15.24 14.23 15.23 14.34V14.35C15.05 15.98 13.67 17.25 12 17.25Z" fill="#292D32"/>
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
