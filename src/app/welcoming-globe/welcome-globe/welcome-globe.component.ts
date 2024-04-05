
import {  Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-welcome-globe',
  templateUrl: './welcome-globe.component.html',
  styleUrls: ['./welcome-globe.component.scss']
})
export class WelcomeGlobeComponent implements OnInit    {
  constructor(
    private router:Router,
    private userInfo:UserInfoService,

    ){}
  show:boolean=false;
  ngOnInit(): void {
    this.show = true;
setTimeout(() =>{ this.router.navigate(['/auth']);},5000);


  }
}
