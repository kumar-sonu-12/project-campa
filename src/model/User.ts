import mongoose, { Document } from "mongoose";

export interface FinalForm {
  firstname?: string;
  lastname?: string;
  email?: string;
  mobile?: string;
  state?: string;
  city?: string;
  pincode?: string;
  franchiseDistrict?: string;
  franchiseTypes?: string;
  franchiseState?: string;
  investmentCapacity?: string;
  landmark?: string;
  transportFacilities?: string;
  vehicleDetails?: string;
  franchiseCity?: string;
  franchisePincode?: string;
  storageFacilities?: string;
  storageFacilitiesInfo?: string;
  businessName?: string;
  businessType?: string;
  experienceDetails?: string;
  isVerified?: boolean;
  age?: string;
}
interface UserDocument extends Document {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  state: string;
  city: string;
  pincode: string;
  password: string;
  isVerify: boolean;
  hasPaid: boolean;
  isAdmin: boolean;
  isFormSubmitted: boolean;
  business_Types: string;
  final_form: FinalForm;
}

const FinalFormSchema = new mongoose.Schema({
  firstname: { type: String, required: true, default: "" },
  lastname: { type: String, required: true, default: "" },
  email: { type: String, required: true, default: "" },
  mobile: { type: String, required: true, default: "" },
  state: { type: String, required: true, default: "" },
  city: { type: String, required: true, default: "" },
  pincode: { type: String, required: true, default: "000000" },
  franchiseDistrict: { type: String, required: false, default: "" },
  franchiseTypes: { type: String, required: true, default: "" },
  franchiseState: { type: String, required: true, default: "" },
  investmentCapacity: {
    type: String,
    required: false,
    default: "Not specified"
  },
  landmark: { type: String, required: false, default: "" },
  franchiseCity: { type: String, required: false, default: "" },
  franchisePincode: { type: String, required: false, default: "" },
  storageFacilities: { type: String, required: false, default: "" },
  storageFacilitiesInfo: { type: String, required: false, default: "" },
  experienceDetails: { type: String, required: false, default: "" },
  transportFacilities: { type: String, required: false, default: "" },
  vehicleDetails: { type: String, required: false, default: "" },
  businessName: { type: String, required: false, default: "" },
  businessType: { type: String, required: true, default: "Other" },
  experience: { type: String, required: false, default: "None" },
  // isVerified: { type: Boolean, required: true, default: false },
  age: { type: String, required: false, default: "" }
});

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true, default: "100001" },
    password: { type: String, required: true, default: "none" },
    business_Types: { type: String, required: true, default: "none" },
    isVerify: { type: Boolean, required: true, default: false },
    hasPaid: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
    isFormSubmitted: { type: Boolean, required: true, default: false },
    final_form: {
      type: FinalFormSchema,
      required: false,
      default: null
    }
  },
  { timestamps: true }
);

UserSchema.index({
  firstname: "text",
  lastname: "text",
  email: "text",
  mobile: "text"
});

const User =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

export default User;
