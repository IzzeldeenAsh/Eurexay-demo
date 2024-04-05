import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  providedIn: 'root'
})
export class AdminSideDataService {

  constructor(){}
  public sideBar: SideBar[] = [
    {
      tittle: 'Main Menu',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'dashboard',
          route:'/admin-dashboard/admin/dashboard/main-dashboard' ,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'space_dashboard',
          base: 'dashboard',
          subMenus: [
          ],
        },
        {
          menuValue: 'cases',
          route: '/admin-dashboard/admin/cases/main-cases',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'space_dashboard',
          base: 'dashboard',
          subMenus: [
          ],
        },
        {
          menuValue: 'finance',
          route: '/admin-dashboard/admin/finance/main-finance',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'space_dashboard',
          base: 'finance',
          subMenus: [
          ],
        },
        {
          menuValue: 'users',
          route: '/admin-dashboard/admin/users/main-users',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'space_dashboard',
          base: 'users',
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




