import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IContract } from 'src/app/core/models/contract.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { ContractsService } from 'src/app/core/services/contracts/contracts.service';

@Component({
  selector: 'app-participated-in-cases',
  templateUrl: './participated-in-cases.component.html',
  styleUrls: ['./participated-in-cases.component.scss']
})
export class ParticipatedInCasesComponent implements OnInit ,OnDestroy {
  private readonly destroy$ = new Subject<void>();
  availableContracts:IContract[]=[];
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
      this.getAvailableContracts();
    }

    getAvailableContracts(){
      this._contractService.getAvailableContracts().pipe(takeUntil(this.destroy$)).subscribe(
        {
          next: (res)=>{
            if (res.status.code === '0') {
              this.availableContracts=res['result'];
              this.loading=false
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

  
    
 
}
