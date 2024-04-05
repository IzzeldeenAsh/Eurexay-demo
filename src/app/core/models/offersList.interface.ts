// models/case.model.ts

export interface ParticipantInfo {
  instituteName: string;
  participantType: string;
  username: string;
  profilePicBase64: string;
}

export interface PaymentPlanning {
  id: number;
  caseUUID: string;
  planningMethod: string;
  amount: number;
  percentage: number;
  paymentNo: number;
}

export interface CaseInfo {
  id: number;
  uuid: string;
  name: string;
  caseAbstract: string;
  budget: number;
  startDate: string;
  expiryDate: string;
  status: string;
  duration: number;
  durationType: string;
  caseType: string;
  nickname: string;
  paymentPlanningMethod: string;
  paymentPlanning: PaymentPlanning[];
  caseRequirements: any[];
  ownerUser: any;
  participantUser: any;
  modifiedDate: any;
  allowedUsernames: any;
}

export interface IOffer{
  submissionDate: string;
  offerId:number;
  offerUUID:string;
  caseUUID: string;
  ownerUsername: string;
  participantInfo: ParticipantInfo;
  caseInfo: CaseInfo;
  isProcessing?: boolean;
  offerStatus:string;
  contractUUID?: string;
  createdDate:string; 
modifiedDate: string
}
