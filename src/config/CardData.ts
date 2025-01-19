export const ApplicantData = [
  {
    id: "ee",
    type: "Payment Status",
    itemType: "hasPaid" as const,
    selectItem: ["true", "false"] as const,
    description: "Has the applicant completed their payment?",
    whentrue: "Paid",
    whennottrue: "Not Paid"
  },
  {
    id: "ww",
    type: "Verification Status",
    itemType: "isVerify" as const,
    selectItem: ["true", "false"] as const,
    description: "Is the applicant's information verified?",
    whentrue: "Verified",
    whennottrue: "Not Verified"
  },
  {
    id: "qq",
    type: "Form Submitted",
    itemType: "isFormSubmitted" as const,
    selectItem: ["true", "false"] as const,
    description: "Has the applicant submitted the form?",
    whentrue: "Submitted",
    whennottrue: "Not Submitted"
  },
  {
    id: "bb",
    type: "Business Type",
    itemType: "businessType" as const,
    selectItem: ["E-commerce", "Retail", "Service", "Other"] as const,
    description: "Select the type of business the applicant operates."
  }
];
