import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { INotifiactions } from 'src/app/core/models/noticiations';
import { LayoutService } from 'src/app/core/services/layout/layout.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
type Tabs = 'MyContracts' | 'availableContracts' | 'PageTitle' | 'Aside' | 'Content' | 'Footer';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, OnDestroy {
  activeTab: any = 'MyContracts';
  model: any;
  tabNames: string[] = [ 'availableContracts' ,'MyContracts'];
  @ViewChild('form', { static: true }) form!: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
  myContractsNumber:number=0;
  participatedInNumber:number=0;
  notifications!:INotifiactions;
  private readonly destroy$ = new Subject<void>();

  constructor(private layout: LayoutService ,private route: ActivatedRoute ,   private _sharedService:SharedService,) {
    
    this.route.queryParams.subscribe(params => {
      if(params['index']){
        const tabIndex = +params['index']; // Convert the string to a number
        this.setActiveTab(tabIndex);
      } else{
        this.activeTab = this.tabNames[0];
      }
     
    });
  }

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }


  setActiveTab(tabIndex: number) {
      
      this.activeTab = this.tabNames[tabIndex];
      if(tabIndex === 1){
     
      }
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    location.reload();
  }
  assignMyContractsNumber(event:any){
    this.myContractsNumber=event
  }
  assignParticipatedInNumber(event:any){
    this.participatedInNumber=event
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
