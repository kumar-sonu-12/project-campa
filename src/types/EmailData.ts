export interface EmailDataProp {
  firstname?: string;
  lastname?: string;
  email: string;
  mobile?: string;
  pincode?: string;
  street?: string;
  landmark?: string;
  state?: string;
  city?: string;
  Business_Types?: string;
  Investment_Plan?: string;
  isVerify?: boolean;
  hasPaid?: boolean;
  isFormSubmitted?: boolean;
  businessType?: string;
  password?: string;
  final_form?: EmailDataProp;
  franchiseDistrict?: string;
  franchiseTypes?: string;
  franchiseState?: string;
  franchiseCity?: string;
  franchisePincode?: string;
  investmentCapacity?: string;
  storageFacilities?: string;
  storageFacilitiesInfo?: string;
  experienceDetails?: string;
  transportFacilities?: string;
  vehicleDetails?: string;
  businessName?: string;
  experience?: string;
  age?: string;
}

export interface VerifiedEmailDataProp {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  landmark: string;
  street: string;
  pincode: string;
  password: string;
  // final_form: EmailDataProp;
}
