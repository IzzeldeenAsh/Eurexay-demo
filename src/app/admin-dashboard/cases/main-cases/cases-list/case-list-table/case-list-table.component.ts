import { Component, OnInit } from '@angular/core';
import { ICase } from 'src/app/core/models/createCase.interface';

@Component({
  selector: 'app-case-list-table',
  templateUrl: './case-list-table.component.html',
  styleUrls: ['./case-list-table.component.scss']
})
export class CaseListTableComponent implements OnInit {
  cases!: ICase[];

  selectedCases!: ICase;

  constructor() {
    const dummyCases: ICase[] = [];

for (let i = 0; i < 40; i++) {
  const caseData: ICase = {
    id: i + 1, // Assuming you have a unique identifier for each case
    uuid: `${i}`, // Generating a random UUID for each case
    name: `Case ${i + 1}`,
    caseAbstract: `Abstract for Case ${i + 1}`,
    budget: Math.floor(Math.random() * 10000) + 1000, // Random budget between 1000 and 10000
    startDate: '2024-02-01', // Assuming a fixed start date for all cases
    expiryDate: '2024-03-01', // Assuming a fixed expiry date for all cases
    status: 'DRAFT', // Assuming an initial status for each case
    duration: Math.floor(Math.random() * 12) + 1, // Random duration between 1 and 12 months
    durationType: 'MONTH', // Assuming a fixed duration type for all cases
    caseType: 'DESCRIPTIVE',
    nickname: `Nickname${i + 1}`,
    paymentPlanningMethod: 'MONTHLY',
    paymentPlanning: [] , // Assuming no initial payment planning
    caseRequirements: null, // Assuming no initial requirements
    ownerUsername: `Owner${i + 1}`,
    participantUsername: 'Mart', // Assuming no initial participant
    modifiedDate: null, // Assuming no modification date initially
    allowedParticipants: null, // Assuming no allowed participants initially
  };
  
  dummyCases.push(caseData);
  }

  this.cases = dummyCases;

}
ngOnInit() {
 
} 


}
