export interface IPaypalResponse {
  status: {
    code: string;
    description: string;
    reason: string;
  };
  result: {
    redirectURL: string;
  };
}

export interface IPaypalCompletionResponse {
  status: {
    code: string;
    description: string;
    reason: string;
  };
  result: {
    paypalPayment: {
      paymentId: string;
      paymentStatus: string;
      paidAmount: string;
      currency: string;
      payerInfo: string | null;
      createdDate: string;
      updatedDate: string;
      paymentType: string | null;
      itemUUID: string | null;
      participantInfo: {
        instituteName: string;
        participantType: string;
        username: string;
        profilePicBase64: string;
      };
    };
  };
}
