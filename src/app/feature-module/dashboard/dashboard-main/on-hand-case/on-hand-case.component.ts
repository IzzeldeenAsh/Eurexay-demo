import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-on-hand-case',
  templateUrl: './on-hand-case.component.html',
  styleUrls: ['./on-hand-case.component.scss']
})
export class OnHandCaseComponent  {
  constructor(private router:Router){}
  @Input() inHandCases!:any[];
  viewProfile(event:Event,userName:string | null){
    event.stopPropagation();
    if (userName){
      const user=userName
    window.open(`/user-profile/${user}/up-overview/`, '_blank');
    }
  }

  navigateToCase(contractUUID:string){
    console.log('contractUUID',contractUUID)
    this.router.navigate([`contracts-main/contract/${contractUUID}`],{queryParams:{'amParti44':'true'}})
  }

  // 3d2a6aa4-a2fd-4ac5-a8c5-3fb350c40f5c
}
