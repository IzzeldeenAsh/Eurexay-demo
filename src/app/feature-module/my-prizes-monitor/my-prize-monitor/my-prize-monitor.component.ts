import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IPrizeParticipantsList } from 'src/app/core/models/prizeParticipantsList.interface';
import { IPrize } from 'src/app/core/models/prizes.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { PrizesGetService } from 'src/app/core/services/prizes/prizes-get.service';

@Component({
  selector: 'app-my-prize-monitor',
  templateUrl: './my-prize-monitor.component.html',
  styleUrls: ['./my-prize-monitor.component.scss']
})
export class MyPrizeMonitorComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  currentPrize!:IPrize;
  prizeUUID: string = '';
  participantsList:IPrizeParticipantsList[] = [];
  loading:boolean=false;
  constructor( private activatedRoute: ActivatedRoute,private _prizeGet: PrizesGetService,private _alert:AlertsService){}
  ngOnInit(): void {
   this.getUUID();
   
  }
  getUUID() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      if (param.get('prizeUUID')) {
        this.prizeUUID = param.get('prizeUUID');
        this.getPrizeByUUID(this.prizeUUID);
        this.getPrizeParticipante(this.prizeUUID);
      }
    });
  }
  getPrizeByUUID(uuid:string) {
    this.loading=true;
    this._prizeGet
      .getPrizeByID(uuid)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0' && res['result']) {
            this.currentPrize = res['result'];
            this.loading = false;
          } else {
            this.loading = false;
            this._alert.error('', `${res.status.message}`);
          }
        },
        error: (error) => {
          this.loading = false;
          this._alert.error('', 'An error occurred.');
        },
      });
  }
  getPrizeParticipante(uuid:string){
    this.loading=true;
    this._prizeGet.getWhoParicipatedInThisPrize(uuid)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res=>{
        if (res.status.code === '0' && res['result']) {
          this.participantsList = res['result'];
          this.loading = false;
        } else {
          this.loading = false;
          this._alert.error('', `${res.status.message}`);
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
