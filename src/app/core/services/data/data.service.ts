import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { routes } from '../../core.index';
import { UserInfoService } from '../user-info/user-info.service';
import { SharedService } from '../shared/shared.service';
import { AlertsService } from '../alert/alerts.service';
import { IUser } from '../../models/userInfo.interface';
import { CurrentUserService } from '../user-info/current-user.service';
export interface SideBarMenu {
  menuValue: string;
  route: string | null;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
  base: string;
  subMenus: SubMenu[];
}

export interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
  base2: string;
  base3: string;
  base4: string;
  base5: string;
  base6: string;
}

export interface SideBar {
  tittle: string;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: SideBarMenu[];
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private userData:CurrentUserService,private _sharedService:SharedService,private _alert:AlertsService){
    this.getUserInfo()
  }
  userDataInfo!:IUser;
  username!:string;
  getUserInfo() {
    this.userData.currentUserName$
    .pipe(take(1))
    .subscribe((username:string)=>{
      if (username) {
        this.username = username;
        this.updateUserProfileRoute()
      }
    })
  }

  
  updateUserProfileRoute() {
    const profileMenu = this.sideBar[0].menu.find(menuItem => menuItem.menuValue === 'My Profile');
    if (profileMenu) {
      profileMenu.route = `${routes.userProfile + this.username}`;
    }
  }
  
  public sideBar: SideBar[] = [
    {
      tittle: 'Main Menu',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'space_dashboard',
          base: 'dashboard',
          subMenus: [
            {
              menuValue: '',
              route: '',
              base: 'main',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'My Profile',
          route: `${routes.userProfile + this.username}`,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'account_box',
          base: 'user-profile',
          subMenus: [
            {
              menuValue: '',
              route: '',
              base: 'main',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Cases',
          route: routes.cases,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'auto_awesome_motion',
          base: 'cases-main',
          subMenus: [
            {
              menuValue: '',
              route: '',
              base: 'main',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Prizes',
          route: routes.prizes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'workspace_premium',
          base: 'prizes',
          subMenus: [
            {
              menuValue: '',
              route: '',
              base: 'main',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Financial',
          route: routes.finance,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'insert_chart',
          base: 'finance',
          subMenus: [
          ],
        },
      ],
    },
  ];
  public getSideBarData: BehaviorSubject<Array<SideBar>> = new BehaviorSubject<
    Array<SideBar>
  >(this.sideBar);

  public resetData(): void {
    // reset sidebar data
    this.sideBar.splice(5, 1);
    this.sideBar.splice(4, 1);
    this.sideBar.splice(3, 1);
  }
}
