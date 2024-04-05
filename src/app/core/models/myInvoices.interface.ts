interface Status {
    code: string;
    description: string;
    reason: string;
  }
  
  interface ShippingAddress {
    recipientName: string;
    line1: string;
    city: string;
    countryCode: string;
    postalCode: string;
    state: string;
  }
  
  interface PayerInfo {
    email: string;
    firstName: string;
    lastName: string;
    payerId: string;
    countryCode: string;
    shippingAddress: ShippingAddress;
  }
  
  interface ParticipantInfo {
    instituteName: string;
    participantType: string;
    username: string;
    profilePicBase64: string;
  }
  
  export interface IInvoice {
    id: number;
    itemUUID: string;
    paymentType: string;
    paymentToken: string;
    payerId: string;
    paymentId: string;
    payerInfo: string; // This should ideally be parsed as JSON
    status: string;
    invoiceNumber: string;
    paidAmount: number;
    currency: string;
    createdDate: string;
    updatedDate: string;
    userId: number;
    participantInfo: ParticipantInfo;
  }
  
  export interface IMyInvoicesResponse {
    status: Status;
    result: IInvoice[];
  }
  
