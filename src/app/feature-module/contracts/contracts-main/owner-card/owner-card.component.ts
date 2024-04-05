import { Component, Input } from '@angular/core';
import { IContract } from 'src/app/core/models/contract.interface';

@Component({
  selector: 'app-owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.scss']
})
export class OwnerCardComponent {
  @Input() currentContract!:IContract
  viewprofile(username:string|undefined){
    if(username){
     window.open(`/user-profile/${username}/up-overview/`, '_blank');
    }
   }
}
