import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundVideo', { static: false })
  videoRef!: ElementRef<HTMLVideoElement>;

  showPlayButton: boolean = true;
  userName:string = ''
  constructor(
    private router: Router,
     private userInfo:CurrentUserService,
    
    ) {}
  ngOnInit(): void {
    this.userInfo
    .currentUserName$
    .pipe(take(1))
    .subscribe((username:string) => {
      this.userName = username;
    })
 
  }

  onVideoEnded() {
    // Video has ended, navigate to the '/dashboard' route
    if(this.userName){
      if( this.userName === 'IzzeldeenAdmin@eurekxay.com'){
        this.router.navigate(['/admin-dashboard']);
      }else{
        this.router.navigate(['/dashboard']);
      }
    }
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
