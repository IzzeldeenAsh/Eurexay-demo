interface ICreatePrize {
    prizeTitle: string;
    // whoCanParticipate: 'INDIVIDUAL' | 'BUSINESS' | 'RESEARCHER' | 'ALL';
    prizAbstract: string;
    prizeRequirements: string;
    prizeAmount: number;
    resultDate: string;
    submissionDate:string;
    judges: string[];
    delivery: 'ON_SITE' | 'POST_OFFICE' | 'EMAIL' | 'UPLOAD';
    participantsNumber: number|null;
    isPublic: boolean;
    limitParticipants: boolean;
    countriesSelected: string[];
    continentsSelected:string[];
    attachments?:any;
    address:any;
    postOfficeNumber:any;
    email:any ;
    externalURL:string;
  }

  const inits: ICreatePrize = {
    prizeTitle: '',
    // whoCanParticipate: 'INDIVIDUAL',
    prizAbstract: '',
    prizeRequirements: '',
    prizeAmount: 0,
    resultDate: '',
    submissionDate: '',
    delivery:'UPLOAD',
    judges: [],
    participantsNumber: 1,
    isPublic: true,
    limitParticipants: true,
    continentsSelected:[],
    countriesSelected:[],
    attachments:[],
    address:null,
    postOfficeNumber:null,
    email:null,
    externalURL:'',
  };

  export { ICreatePrize, inits };
