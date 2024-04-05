import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases-sub-menu',
  templateUrl: './cases-sub-menu.component.html',
  styleUrls: ['./cases-sub-menu.component.scss']
})
export class CasesSubMenuComponent {
constructor(private router:Router){}
navigate(event:Event, route:any){
  event.stopPropagation();
  event.preventDefault();
  this.router.navigate([`/${route}`])
}
}
