import { Component, Input } from '@angular/core';
import { IContract } from 'src/app/core/models/contract.interface';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent {
  @Input() currentContract!:IContract
  viewprofile(username:string|undefined){
    if(username){
     window.open(`/user-profile/${username}/up-overview/`, '_blank');
    }
   }
}
