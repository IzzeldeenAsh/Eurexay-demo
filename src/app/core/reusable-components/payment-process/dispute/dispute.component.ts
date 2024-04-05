import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dispute',
  templateUrl: './dispute.component.html',
  styleUrls: ['./dispute.component.scss']
})
export class DisputeComponent {
  disputeReason:string='';
  loading:boolean=false;
  constructor(    public activeModal: NgbActiveModal){}
  closeModal(){
    this.activeModal.close()
  }
  reject(){
    
  }
}
