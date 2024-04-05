import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owner-participant-card',
  templateUrl: './owner-participant-card.component.html',
  styleUrls: ['./owner-participant-card.component.scss']
})
export class OwnerParticipantCardComponent {
@Input() user:string = "Participant";
@Input() img:string = "";
}
