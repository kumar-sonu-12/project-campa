import { EmailDataProp } from "@/types/EmailData";

export const applicantTypes = [
  {
    type: "all-applicants",
    usertype: "allapplicants"
  },
  {
    type: "verified-applicants",
    usertype: "isVerified"
  },
  {
    type: "paid-applicants",
    usertype: "hasPaid"
  },
  {
    type: "formsubmitted-applicants",
    usertype: ""
  }
];

export const ApplicantData = (data: EmailDataProp[]) => [
  {
    type: "Payment Status:",
    itemType: "hasPaid",
    selectItem: ["true", "false"],
    defaultValue: data[0].hasPaid ? "true" : "false"
  },
  {
    type: "Verification Status:",
    itemType: "isVerify",
    selectItem: ["true", "false"],
    defaultValue: data[0].isVerify ? "true" : "false"
  }
];
