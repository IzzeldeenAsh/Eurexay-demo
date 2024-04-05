import { Component, ElementRef, ViewChild } from '@angular/core';
import {  take } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  @ViewChild('backgroundVideo', { static: false })
  videoRef!: ElementRef<HTMLVideoElement>;
  showPlayButton: boolean = true;
  userData!:IUser;
  constructor(private _currentUser:CurrentUserService) {}
  ngOnInit(): void {
   this.getUserInfo()
  }

  getUserInfo(){
    this._currentUser
    .currentUserProfile$
    .pipe(take(1))
    .subscribe((user:IUser)=>{
      this.userData = user;
    })
   
  }


  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    if (video) {
      video.addEventListener('canplaythrough', () => {
        // Autoplay is now allowed, hide the play button
        this.showPlayButton = false;
        video.muted = true;
        video.play();
      });
    }
  }

  startVideo() {
    const video = this.videoRef.nativeElement;
    if (video) {
      video.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
      this.showPlayButton = false;
    }
  }
}
