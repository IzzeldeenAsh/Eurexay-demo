import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPrizeParticipantsList } from 'src/app/core/models/prizeParticipantsList.interface';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent {
  constructor(private router:Router){}
@Input() participantsList:IPrizeParticipantsList[]=[]
@Input() totalAllowed!:number
toProfile(username:string){
  this.router.navigate([`/user-profile/${username}/up-overview`])
}
}
