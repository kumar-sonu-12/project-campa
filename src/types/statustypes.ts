export interface ApplicationStatus {
  isFormSubmitted: boolean;
  isVerified: boolean;
  hasPaid: boolean;
  applicationDate?: string;
  verificationDate?: string;
  paymentDate?: string;
}

export interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  businessExperience: string;
  preferredLocation: string;
  investmentCapacity: string;
}
