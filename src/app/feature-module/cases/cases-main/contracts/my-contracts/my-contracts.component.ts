import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IContract } from 'src/app/core/models/contract.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { ContractsService } from 'src/app/core/services/contracts/contracts.service';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.component.html',
  styleUrls: ['./my-contracts.component.scss']
})
export class MyContractsComponent implements OnInit ,OnDestroy {
  private readonly destroy$ = new Subject<void>();
  @Output() myContractsNumber: EventEmitter<any> = new EventEmitter();
mycontracts:IContract[]=[]
loading:boolean=true;
constructor(
private _alert:AlertsService,
private _contractService:ContractsService,
private router:Router
){

}
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
  ngOnInit(): void {
    this.getMyContracts();
 
  }

  getMyContracts(){
    this._contractService.getOwnerContracts().pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (res)=>{
          if (res.status.code === '0') {
            this.mycontracts=res['result']
            this.sortCaseByDateStart();
            this.loading=false;
           this.myContractsNumber.emit(this.mycontracts.length)
          }else{
            this._alert.error('', `${res.status.description}`);
            this.loading=false
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
          this.loading=false
      }
      }
    )
  }

  summary(uuid:string){
    this.router.navigateByUrl(`/contracts-main/contract/${uuid}?amOw44=true`);
  }

  sortCaseByDateStart() {
    this.mycontracts.sort((a: any, b: any) => {
      let dateA = new Date(a.generationDate).getTime();
      let dateB = new Date(b.generationDate).getTime();
      return dateB - dateA;
    });
  }
}
