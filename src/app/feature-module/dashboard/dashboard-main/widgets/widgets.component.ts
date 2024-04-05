import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit , OnDestroy {
  private readonly unsubscribe$ = new Subject();
  username!: string;
  showBtn:boolean=false
  link:any;
  @Input() offersReceived!: any;
  @Input() availableCasesNumber!: any;
  @Input() availablePrizesNumber!: any;
  @Input() ownerContracts!: any;
  @Input() loader!: boolean
  constructor(private _sharedService:SharedService){

  }

  ngOnInit(): void {

   this._sharedService.userDataShared$.pipe(takeUntil(this.unsubscribe$)).subscribe((data:IUser)=>{
   if(data){
    this.username = data.username;
    this.showBtn=true
    const url = `/user-profile/${this.username}/account-settings`
    this.link= [url]
   }
   })
  }
  notAvailable(){
    Swal.fire({
      title: '',
      text: 'This Feature is not available yet.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#bebebe',
      showConfirmButton:false
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }


}
