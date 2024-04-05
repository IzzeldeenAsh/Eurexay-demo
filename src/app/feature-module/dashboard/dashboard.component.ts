import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';

@HostListener('window: resize', ['$event'])
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public innerHeight!: string;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private _notifications: NotificationsService,
    private _sharedService: SharedService
  ) {
    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  }
  ngOnInit() {
    this.router.navigateByUrl('/dashboard');
    this.getUserNotifications();
  }
  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

  getUserNotifications() {
    this._notifications
      .getNotificaitons()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          if (data.status.code === '0' && data.result) {
            this._sharedService.setNotificationData(data['result']);
          }
        },
        error: (err) => {},
      });
  }


}
