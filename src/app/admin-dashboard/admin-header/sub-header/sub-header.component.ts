import { Component } from '@angular/core';
import { NavigationEnd, NavigationSkipped, Router } from '@angular/router';
import { SideBar } from 'src/app/core/core.index';
import { AdminSideDataService } from 'src/app/core/services/admin-side-data/admin-side-data.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  base = '';
  page = '';
  side_bar_data: Array<SideBar> = [];

  constructor(    private data: AdminSideDataService, public router: Router,){
    router.events.subscribe((event:Object)=>{
      if(event instanceof NavigationEnd){
        const splitVal =event.url.split('/');
        this.base = splitVal[3];
        this.page=splitVal[2];
      } else if(event instanceof NavigationSkipped){
        const splitVal = event.url.split('/');
        this.page = splitVal[2];
        this.base = splitVal[3];
      }
    })

    this.data.getSideBarData.subscribe((res: Array<SideBar>) => {
      this.side_bar_data = res;
    });
  }
}
