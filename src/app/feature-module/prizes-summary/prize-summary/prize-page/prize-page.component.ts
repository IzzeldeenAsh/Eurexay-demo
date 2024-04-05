import { Component, Input, OnInit } from '@angular/core';
import { IPrize } from 'src/app/core/models/prizes.interface';

@Component({
  selector: 'app-prize-page',
  templateUrl: './prize-page.component.html',
  styleUrls: ['./prize-page.component.scss']
})
export class PrizePageComponent implements OnInit  {
  constructor(){}


  @Input() currentPrize!:IPrize;
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


}
