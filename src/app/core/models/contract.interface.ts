interface Participant {
    id: number;
    fullName: string;
    instituteName: string;
    country: string;
    city: string | null;
    continent: string;
    phoneNumber: string | null;
    faxNumber: string | null;
    poBox: string | null;
    registrationNumber: string | null;
    certificateNumber: string | null;
    academicNumber: string | null;
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
    userDto: {
      id: number;
      username: string;
      userType: string;
      status: string;
      isEnabled: boolean;
      creationDate: string;
      rejectionReason: string | null;
    };
    profilePicBase64: string;
  }
  
  interface Owner {
    id: number;
    fullName: string;
    instituteName: string;
    country: string;
    city: string | null;
    continent: string;
    phoneNumber: string | null;
    faxNumber: string | null;
    poBox: string | null;
    registrationNumber: string | null;
    certificateNumber: string | null;
    academicNumber: string | null;
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
    userDto: {
      id: number;
      username: string;
      userType: string;
      status: string;
      isEnabled: boolean;
      creationDate: string;
      rejectionReason: string | null;
    };
    profilePicBase64: string;
  }
  
  interface BusinessCasePlanning {
    id: number;
    caseUUID: string;
    planningMethod: string;
    amount: number;
    percentage: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    relatedTo: string | null;
    relationType: string | null;
  }
  
  interface BusinessCaseRequirement {
    name: string;
    description: string;
    attachmentName:string;
    attachmentContent:string;
  }
  
  interface BusinessCase {
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
    paymentPlanning: BusinessCasePlanning[];
    caseRequirementDTOS: BusinessCaseRequirement[];
    ownerUser: {
      id: number;
      username: string;
      userType: string;
      status: string;
      isEnabled: boolean;
      creationDate: string;
      rejectionReason: string | null;
    };
    participantUser: null;
    modifiedDate: string | null;
    allowedUsernames: string[] | null;
  }
  
  export interface IContract {
    id: number;
    uuid: string;
    status: string;
    ownerAcceptanceDate: string | null;
    participantAcceptanceDate: string | null;
    generationDate: string;
    participant: Participant;
    owner: Owner;
    businessCase: BusinessCase;
  }