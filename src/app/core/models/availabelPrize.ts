export interface Status {
    code: string;
    description: string;
    reason: string;
  }
  
  export interface OwnerParticipant {
    id: number;
    fullName: string;
    instituteName: string;
    country: string;
    city: string;
    phoneNumber: string;
    faxNumber: string;
    poBox: string;
    registrationNumber: string;
    certificateNumber: string | null;
    academicNumber: string | null;
    sector: string;
    websiteUrl: string;
    addressLine: string;
    zipCode: string;
    bio: string | null;
    iban: string;
    bankName: string;
    bankCountry: string | null;
    participantType: string;
    domains: string[] | null;
    userDto: UserDto;
    profilePicBase64: string;
  }
  
  export interface UserDto {
    id: number;
    username: string;
    userType: string;
    status: string;
    isEnabled: boolean;
    creationDate: string;
    rejectionReason: string | null;
  }
  
  export interface PrizeFile {
    id: number;
    label: string;
    fileName: string;
    prizeUuid: string;
    extraInfo1: string;
    extraInfo2: string | null;
    content: string;
    prizeId: number;
  }
  
  export interface IavailablePrizes {
    id: number;
    name: string;
    uuid: string;
    prizeAbstract: string;
    requirements: string;
    amount: number;
    announcementDate: string;
    submissionEndDate: string;
    status: string;
    judges: string;
    deliveryMethod: string;
    deliveryInfo: string;
    publicPrize: boolean;
    limited: boolean;
    allowedParticipantNumber: number;
    participantsNumber: number;
    externalUrl: string;
    ownerParticipant: OwnerParticipant;
    prizeFiles: PrizeFile[];
    allowedCountries: string[];
  }
  

  