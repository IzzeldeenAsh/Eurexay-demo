import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountUp } from 'countup.js';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { IUserStatistics } from 'src/app/core/models/userStatistics.interface';
import { DashboardStatisticsService } from 'src/app/core/services/dashboard-statistics/dashboard-statistics.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-user-profile-overview',
  templateUrl: './user-profile-overview.component.html',
  styleUrls: ['./user-profile-overview.component.scss'],
})
export class UserProfileOverviewComponent implements OnInit ,OnDestroy{
  private readonly destroy$ = new Subject<void>();
  
  userData!: IUser;
  email: string | null = '';
  userName: string | null = '';
  canEdit: boolean = false;
  currentProfile:string | null = null;
  publishedCaseNumber:number=0;
  publishedPrizsNumber:number=0;
  constructor(
    private route:ActivatedRoute,
    private _userData:CurrentUserService,
    private _userStats:DashboardStatisticsService
  ) {}

  @ViewChild('publishedCases', { static: true })
  publishedCasesCounter!: ElementRef;
  @ViewChild('activeCases', { static: true }) activeCasesCounter!: ElementRef;
  @ViewChild('publishedPrizes', { static: true }) publishedPrizesCounter!: ElementRef;
  ngOnInit(): void {
    this.getStatistics()
    this.getUserInfo()
  
  }

  getUserInfo() {
    this._userData
      .currentUserProfile$
      .pipe(take(1))
      .subscribe({
        next: (res: IUser) => {
            this.userData = res
            this.getUserNameFromURL();
        },
      });
  }

  getStatistics(){
    this._userStats.getUserStatistics()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res: any) => {
        if(res.status.code=== '0') {
          const statistics:IUserStatistics = res['result'];
          this.publishedCaseNumber = statistics.publishedCasesCount
          this.publishedPrizsNumber = statistics.publishedPrizeCount
        }
      }
    })
  }
  getUserNameFromURL() {
    this.route.parent?.params.subscribe(params=>{
      this.currentProfile = params['userName'];
    })
    

    
  }
  startCounter(element: HTMLElement, targetValue: number) {
    const countUp = new CountUp(element, targetValue);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
