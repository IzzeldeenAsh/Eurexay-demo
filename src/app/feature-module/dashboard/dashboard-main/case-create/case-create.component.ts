import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.scss']
})
export class CaseCreateComponent {
  constructor(private router:Router){
    
  }
  openCreateCase() {
    this.router.navigate(['create-case']);
  }
}
