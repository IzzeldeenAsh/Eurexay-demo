export interface IUser {
  [key: string]: any;
  username: string;
    participantType: string;
    fullName: string;
    instituteName: string;
    country: string;
    city: string;
    continent: string;
    phoneNumber: string;
    faxNumber: string;
    poBox: string;
    registrationNumber: string;
    certificateNumber: string;
    academicNumber: string;
    sector: string;
    websiteUrl: string;
    addressLine: string;
    zipCode: string | null;
    bio: string;
    domains: string[];
    profilePicBase64: string;
    iban?:any;
    bankCountry?:any
    bankName?:string;
  }


  export interface ICurrentUserResponse {
    status: {
        code: string;
        description: string;
        reason: string;
    };
    result: {
        username: string;
        participantType: string;
        fullName: string;
        instituteName: string;
        country: string;
        city: string;
        continent: string;
        phoneNumber: string;
        faxNumber: string;
        poBox: string;
        registrationNumber: string;
        certificateNumber: string;
        academicNumber: string;
        sector: string;
        websiteUrl: string;
        addressLine: string;
        zipCode: string;
        bio: string;
        domains: string[];
        bankName: string | null;
        iban: string | null;
        bankCountry: string | null;
        profilePicBase64: string;
    };
}
