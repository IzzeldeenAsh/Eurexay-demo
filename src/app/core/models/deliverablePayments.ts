export interface Deliverable {
    name: string;
    percentage: number;
    amount: number;
    description: string;

  }
  
  export interface IDelivarblePayment {
    caseUUID: string;
    deliverables: Deliverable[];
  }
  