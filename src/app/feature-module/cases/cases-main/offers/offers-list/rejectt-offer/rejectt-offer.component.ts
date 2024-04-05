import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { OffersService } from 'src/app/core/services/offers/offers.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';

@Component({
  selector: 'app-rejectt-offer',
  templateUrl: './rejectt-offer.component.html',
  styleUrls: ['./rejectt-offer.component.scss']
})
export class RejecttOfferComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private _offerService:OffersService,
    private _alert:AlertsService,
    private _sharedService:SharedService
    ){

  }
  ngOnInit(): void {
    console.log('offerUUID',this.offerUUID)
    console.log('caseName',this.caseName);
    this.rejectionReason=`Thank you for your offer regarding ${this.caseName}. Unfortunately, your offer was declined. I appreciate your consideration.`
  }
  @Input() offerUUID!: string;
  @Input() caseName!: string;
  loading:boolean=false;
  rejectionReason:string =``
  reject(){
    this.loading=true;
    this._offerService.rejectOffer(this.offerUUID , this.rejectionReason).pipe(take(1)).subscribe(
      {
        next: (res: any) => {
          if (res.status.code === '0') {
            this.loading=false;
            this.activeModal.close();
            this._sharedService.refreshOffersList()
          } else {
            this._alert.error('', `${res.status.description}`);
            this.loading=false;
            return;
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
          this.loading=false;
          this.activeModal.close()
        },
      }
    )
  }
  closeModal(){
    this.activeModal.close()
  }
}
