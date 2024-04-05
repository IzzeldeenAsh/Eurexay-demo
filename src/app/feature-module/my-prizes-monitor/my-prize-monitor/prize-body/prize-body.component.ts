import { Component, Input } from '@angular/core';
import { IPrize } from 'src/app/core/models/prizes.interface';

@Component({
  selector: 'app-prize-body',
  templateUrl: './prize-body.component.html',
  styleUrls: ['./prize-body.component.scss']
})
export class PrizeBodyComponent {
@Input() prize!:IPrize;
}
