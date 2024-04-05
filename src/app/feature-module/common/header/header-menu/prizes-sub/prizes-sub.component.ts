import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prizes-sub',
  templateUrl: './prizes-sub.component.html',
  styleUrls: ['./prizes-sub.component.scss']
})
export class PrizesSubComponent {
  constructor(private router:Router){}
  navigate(event:Event, route:any){
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate([`/${route}`])
  }
}
