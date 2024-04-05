import { Component, Input } from '@angular/core';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DisputeComponent } from '../dispute/dispute.component';
import { ConfirmationService } from 'primeng/api';

interface IPaymentPlanning {
  id: number;
  caseUUID: string;
  planningMethod: 'MONTHLY' | 'DELIVERABLES' | 'QUARTERLY'; // Adjust as needed for other possible values
  amount: number;
  percentage: number;
  paid: boolean;
  paidDate: Date | null;
  caseManagementId: number;
  status: string; // Adjust as needed for other possible values
  paymentNo: number;
  startDate?:string;
  dueDate?: string;
  name?: string; // Optional field
  description?: string; // Optional field
}


@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.scss'],
})
export class PaymentProcessComponent {
  loggenInUser!: string;
  isHold=false;
  firstInactiveDeliverableIndex: number = -1;
  @Input() isAdmin!: boolean;
  @Input() participantUsername!: string;
  constructor(
    private _CurrentUserService: CurrentUserService,
    private modalService: NgbModal,
    private confirmationService: ConfirmationService,
  ) {
    this.payments = [
      {
        "id": 1,
        "caseUUID": "dummy_case_1",
        "planningMethod": "MONTHLY",
        "amount": 5623.12,
        "percentage": 87.54,
        "paid": true,
        "paidDate": null,
        "caseManagementId": 0,
        "status": "IN_PROGRESS",
        "paymentNo": 1,
        "startDate": '2024-4-4',
        "dueDate": '2024-4-4',
        "name": "Task 1",
        "description": "Dummy description for task 1"
    },
    {
      "id": 2,
      "caseUUID": "dummy_case_1",
      "planningMethod": "MONTHLY",
      "amount": 5623.12,
      "percentage": 87.54,
      "paid": true,
      "paidDate": null,
      "caseManagementId": 0,
      "status": "INACTIVE",
      "paymentNo": 1,
      "startDate": '2024-4-4',
      "dueDate": '2024-4-4',
      "name": "Task 1",
      "description": "Dummy description for task 1"
  },
  {
    "id": 3,
    "caseUUID": "dummy_case_1",
    "planningMethod": "MONTHLY",
    "amount": 5623.12,
    "percentage": 87.54,
    "paid": true,
    "paidDate": null,
    "caseManagementId": 0,
    "status": "INACTIVE",
    "paymentNo": 1,
    "startDate": '2024-4-4',
    "dueDate": '2024-4-4',
    "name": "Task 1",
    "description": "Dummy description for task 1"
},
{
  "id": 4,
  "caseUUID": "dummy_case_1",
  "planningMethod": "MONTHLY",
  "amount": 5623.12,
  "percentage": 87.54,
  "paid": true,
  "paidDate": null,
  "caseManagementId": 0,
  "status": "INACTIVE",
  "paymentNo": 1,
  "startDate": '2024-4-4',
  "dueDate": '2024-4-4',
  "name": "Task 1",
  "description": "Dummy description for task 1"
},
{
  "id": 5,
  "caseUUID": "dummy_case_1",
  "planningMethod": "MONTHLY",
  "amount": 5623.12,
  "percentage": 87.54,
  "paid": true,
  "paidDate": null,
  "caseManagementId": 0,
  "status": "INACTIVE",
  "paymentNo": 1,
  "startDate": '2024-4-4',
  "dueDate": '2024-4-4',
  "name": "Task 1",
  "description": "Dummy description for task 1"
},
{
  "id": 6,
  "caseUUID": "dummy_case_1",
  "planningMethod": "MONTHLY",
  "amount": 5623.12,
  "percentage": 87.54,
  "paid": true,
  "paidDate": null,
  "caseManagementId": 0,
  "status": "INACTIVE",
  "paymentNo": 1,
  "startDate": '2024-4-4',
  "dueDate": '2024-4-4',
  "name": "Task 1",
  "description": "Dummy description for task 1"
},

    ];
  }
  @Input() payments: IPaymentPlanning[] = [];
  @Input() owner!: string;
  ngOnInit(): void {
    this.getLoggenInUser();
    this.firstInactiveDeliverableIndex = this.getFirstInActiveIndex();
  }

  getLoggenInUser(): void {
    this._CurrentUserService.currentUserName$.subscribe((loggenInUser) => {
      this.loggenInUser = loggenInUser;
    });
  }

  dispute(event: Event) {
    event.stopPropagation();
    const modalRef = this.modalService.open(DisputeComponent);
    // modalRef.componentInstance.offerUUID = offer.offerUUID
    // modalRef.componentInstance.caseName = offer.caseInfo.name
  }

  confirm2(event: Event,id:number) {
    if(this.isAdmin){
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to hold this payment?',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass: 'p-button-danger text-white p-button-sm',
        accept: () => {
       this.payments.forEach((payment:any)=>{
          if(payment.id === id){
            payment.status = "ON_HOLD"
          }
        })
        console.log(this.payments)
        },
        reject: () => {
          
        },
      });
    }
  }
  confirm5(event: Event,id:number) {
    if(this.participantUsername === this.loggenInUser){
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to submit this payment?',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass: 'p-button-danger text-white p-button-sm',
        accept: () => {
       this.payments.forEach((payment:any)=>{
          if(payment.id === id){
            payment.status = "COMPLETED"
          }
        })
        console.log(this.payments)
        },
        reject: () => {
          
        },
      });
    }
  }
  confirm3(event: Event,id:number) {
  if(this.isAdmin){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to unhold this payment?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger text-white p-button-sm',
      accept: () => {
     this.payments.forEach((payment:any)=>{
        if(payment.id === id){
          payment.status = "IN_PROGRESS"
        }
      })
      console.log(this.payments)
      },
      reject: () => {
        
      },
    });
  }
  }
  confirm4(event: Event,id:number) {
   if(this.isAdmin){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to realse payment for this?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-primary text-white p-button-sm',
      accept: () => {
     this.payments.forEach((payment:any)=>{
        if(payment.id === id){
          payment.status = "COMPLETED"
        }
      })
      console.log(this.payments)
      },
      reject: () => {
        
      },
    });
   }
  }

  getFirstInActiveIndex():number{
    for(let i=0 ; i<this.payments.length ; i++){
      if(this.payments[i].status === "INACTIVE" && this.payments[i].planningMethod === "DELIVERABLES") return i;
    }
    return -1;
  }
}
