export enum DurationType {
  DAY = 'DAY',
  MONTH = 'MONTH',
  YEAR = 'YEAR'
}

export enum CaseType {
  DESCRIPTIVE = 'DESCRIPTIVE',
  ILLUSTRATIVE = 'ILLUSTRATIVE',
  CUMULATIVE = 'CUMULATIVE',
  CRITICAL_INSTANCE = 'CRITICAL_INSTANCE'
}

export interface ICaseInfo {
  uuid: string;
  name: string;
  caseAbstract: string;
  budget: number;
  startDate: string;
  expiryDate: string;
  duration: number;
  durationType: DurationType;
  caseType: CaseType;
  nickname: string;
}
export interface ICaseRequirement {
  name: string;
  description: string;
  attachments?:any;
}



export interface ICaseDataRequirements {
  uuid: string;
  caseRequirements: ICaseRequirement[];
}
export interface ICase {
  id: number;
  uuid: string;
  name: string;
  caseAbstract: string;
  budget: number;
  startDate: string;
  expiryDate: string;
  status: string;
  duration: number;
  durationType: 'MONTH' | 'DAY' | 'YEAR';
  caseType:  'DESCRIPTIVE' | 'ILLUSTRATIVE' | 'CUMULATIVE' | 'CRITICAL_INSTANCE';
  nickname: string;
  paymentPlanningMethod: 'MONTHLY' | 'QUARTERLY' | 'DELIVERABLES' | null;
  paymentPlanning: any[];
  caseRequirements: ICaseRequirement[] | null;
  ownerUsername: string;
  participantUsername: string | null;
  modifiedDate: string | null;
  allowedParticipants:string|null;
}

export interface CaseRequirement {
  name: string | null;
  description: string | null;
  type: string | null;
  responsibility: string | null;
  owner: string | null;
}




interface ICreateCase {
  uuid: string;
  name: string;
  caseAbstract: any;
  budget: number | null;
  startDate: string  | null;
  expiryDate: string | null;
  duration:number;
  durationType: 'MONTH' | 'DAY' | 'YEAR';
  caseType:   'DESCRIPTIVE' | 'ILLUSTRATIVE' | 'CUMULATIVE' | 'CRITICAL_INSTANCE';
  nickname: string;
  caseRequirements: ICaseRequirement[] | null;
  paymentPlanningMethod: 'MONTHLY' | 'QUARTERLY' | 'DELIVERABLES' | null;
  paymentPlanning: any;
  ownerUsername: string;
  participantUsername: string | null;
  allowedParticipants:any
}

const inits: ICreateCase = {
  uuid: '',
  name: '',
  caseAbstract: null,
  budget: null,
  startDate: null,
  expiryDate: null,
  duration: 1,
  durationType: 'MONTH' ,
  caseType: 'DESCRIPTIVE',
  nickname: '',
  caseRequirements:[],
  paymentPlanningMethod: 'MONTHLY',
  paymentPlanning: null,
  ownerUsername:'',
  participantUsername: null,
  allowedParticipants: null,
};

export { ICreateCase, inits };
