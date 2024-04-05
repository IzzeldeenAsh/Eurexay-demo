interface UserDto {
  id: number;
  username: string;
  userType: string;
  status: string;
  isEnabled: boolean;
  creationDate: string;
  rejectionReason: string | null;
}

export interface IParticipant {
  id: number;
  fullName: string;
  instituteName: string;
  country: string;
  city: string | null;
  continent: string;
  phoneNumber: string;
  faxNumber: string | null;
  poBox: string | null;
  registrationNumber: string;
  certificateNumber: string | null;
  academicNumber: string;
  sector: string;
  websiteUrl: string | null;
  addressLine: string | null;
  zipCode: string | null;
  bio: string | null;
  iban: string | null;
  bankName: string | null;
  bankCountry: string | null;
  participantType: string;
  domains: string[];
  userDto: UserDto;
  profilePicBase64: string;
}

interface CaseRequirementDTO {
  id: number;
  uuid: string;
  name: string;
  description: string;
  attachmentName: string;
  caseId: number;
  attachmentContent: string;
}

interface CaseDto {
  id: number;
  createdDate: string;
  modifiedDate: string;
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
  paymentPlanning: any[];
  caseRequirementDTOS: CaseRequirementDTO[];
  ownerUser: UserDto;
  participantUser: UserDto;
  allowedUsernames: string | null;
}

interface BusinessCase {
  id: number;
  createdDate: string;
  modifiedDate: string;
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
  paymentPlanning: any[];
  caseRequirementDTOS: CaseRequirementDTO[];
  ownerUser: UserDto;
  participantUser: UserDto;
  allowedUsernames: string | null;
}

interface CaseOffer {
  id: number;
  createdDate: string;
  modifiedDate: string;
  caseUUID: string;
  participantUser: UserDto;
  ownerUser: UserDto;
  participantUsername: string;
  ownerUsername: string;
  caseDTO: CaseDto;
  submissionDate: string;
  participantInfo: {
      instituteName: string;
      participantType: string;
      username: string;
      profilePicBase64: string;
  };
  ownerInfo: any;
  uuid: string;
  enabled: boolean;
  status: string;
  rejectionReason: string;
  contractUUID: any;
}

interface ContractDTO {
  id: number;
  createdDate: string;
  modifiedDate: string;
  uuid: string;
  status: string;
  enabled: boolean;
  ownerAcceptanceDate: string;
  participantAcceptanceDate: string;
  generationDate: string;
  participant: IParticipant;
  owner: IParticipant;
  businessCase: BusinessCase;
  caseOffer: CaseOffer;
}

export interface ICaseManagementRecord {
  id: number;
  status: string;
  progressPercentage: number;
  updatedDateTime: any;
  contractDTO: ContractDTO;
  ownerUsername: string;
  participantUsername: string;
}
