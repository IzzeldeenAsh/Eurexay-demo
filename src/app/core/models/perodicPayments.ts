export interface Payment {
    paymentNo: number;
    amount: number;
    percentage: number;
  }
  
  export interface IPerodicPayment {
    caseUUID: string;
    planningMethod: 'MONTHLY' | 'QUARTERLY';
    payments: Payment[];
  }
  

  