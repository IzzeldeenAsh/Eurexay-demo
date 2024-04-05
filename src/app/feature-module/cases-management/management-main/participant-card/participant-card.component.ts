import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IParticipant } from 'src/app/core/models/case-managements-records.interface';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent {
  constructor(private router:Router){}
@Input() participant!:IParticipant;
@Input() title!:string;

participantProfile(username:string):void{
this.router.navigate([`/user-profile/${username}/up-overview`]);
}
}
