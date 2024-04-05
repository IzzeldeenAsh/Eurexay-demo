export interface PaymentPlanning {
  id: number;
  caseUUID: string;
  planningMethod: string;
  amount: number;
  percentage: number;
  paymentNo: number;
}

export interface CaseRequirement {
  name: string | null;
  description: string | null;
  type: string | null;
  responsibility: string | null;
  owner: string | null;
}
export interface OwnerInfo {
  instituteName: string | null;
participantTyp: string | null;
  username: string | null;
  profilePicBase64: string | null;
}

interface CaseOffer{
  offerUUID:string;
  offerStatus:string;
}
export interface IAvailableCases {
  id: number;
  uuid: string;
  name: string;
  caseOffer: CaseOffer | null;
  caseAbstract: string;
  budget: number;
  startDate: string;
  expiryDate: string;
  duration: number;
  durationType: string;
  caseType: string;
  nickname: string;
  paymentPlanningMethod: string;
  paymentPlanning: PaymentPlanning[];
  caseRequirements: CaseRequirement[] | null;
  ownerUsername: string;
  ownerInfo:OwnerInfo;
  createdDate: string,
  modifiedDate:string | null,
}



