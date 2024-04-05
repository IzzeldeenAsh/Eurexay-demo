export interface IPrize {
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
    deliveryMethod:  'ON_SITE' | 'POST_OFFICE' | 'EMAIL' | 'UPLOAD';
    deliveryInfo: string;
    publicPrize: boolean;
    limited: boolean;
    allowedParticipantNumber: number;
    participantsNumber: number;
    externalUrl: string;
    prizeFiles: any[]; // You may want to change this based on the actual data structure of prizeFiles
    allowedCountries: string[];
  }