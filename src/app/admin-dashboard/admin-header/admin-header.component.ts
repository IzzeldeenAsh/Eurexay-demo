import { Component } from '@angular/core';
import { SideBarService } from 'src/app/core/core.index';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  constructor(private sideBar: SideBarService){

  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

}
