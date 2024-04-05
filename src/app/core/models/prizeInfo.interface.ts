export interface Prize {
    name: string;
    uuid: string;
    prizeAbstract: string;
    requirements: string;
    amount: number;
    announcementDate: string;
    submissionEndDate: string;
    judges: string;
    deliveryMethod: string;
    deliveryInfo: string;
    publicPrize: boolean;
    limited: boolean;
    allowedParticipantNumber: number;
    externalUrl: string;
    allowedCountries: string[];
}