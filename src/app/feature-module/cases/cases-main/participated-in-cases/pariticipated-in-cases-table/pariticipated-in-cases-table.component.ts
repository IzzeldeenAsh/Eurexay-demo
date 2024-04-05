import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { IContract } from 'src/app/core/models/contract.interface';

@Component({
  selector: 'app-pariticipated-in-cases-table',
  templateUrl: './pariticipated-in-cases-table.component.html',
  styleUrls: ['./pariticipated-in-cases-table.component.scss']
})
export class PariticipatedInCasesTableComponent  implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.sortCaseByDateStart();
  }
@Input()  availableContracts:IContract[]=[];
sortCaseByDateStart() {
  this.availableContracts.sort((a: any, b: any) => {
    let dateA = new Date(a.generationDate).getTime();
    let dateB = new Date(b.generationDate).getTime();
    return dateB - dateA;
  });
}
summary(uuid:string){
  this.router.navigateByUrl(`/contracts-main/contract/${uuid}?amParti44=true`);
}
caseManangementNavigate(){
  this.router.navigateByUrl(`cases-main/case-management-list`);
}
}
