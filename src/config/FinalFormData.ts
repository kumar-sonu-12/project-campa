export const FinalFormDataArray = [
  // Personal Info Section
  {
    label: "Personal Info",
    type: "heading",
    id: "headingPersonalInfo",
    className: "col-span-2",
    Zod: ""
  },
  {
    label: "First Name",
    type: "text",
    id: "firstname",
    placeholder: "Enter your first name",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "Last Name",
    type: "text",
    id: "lastname",
    placeholder: "Enter your last name",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
    className: "col-span-1",
    zod: "email"
  },
  {
    label: "Phone Number",
    type: "tel",
    id: "mobile",
    placeholder: "Enter your phone number",
    className: "col-span-1",
    zod: "tel"
  },
  {
    label: "State",
    type: "dropdown",
    id: "state",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ].map((state) => ({ value: state, label: state })),
    placeholder: "Select your state",
    className: "col-span-2",
    zod: "string"
  },
  {
    label: "City",
    type: "text",
    id: "city",
    placeholder: "Enter your city",
    className: "col-span-2",
    zod: "string"
  },
  {
    label: "Street Address",
    type: "text",
    id: "street",
    placeholder: "Enter your street address",
    className: "col-span-1",
    zod: "optional"
  },
  {
    label: "Landmark",
    type: "text",
    id: "landmark",
    placeholder: "Enter a landmark",
    className: "col-span-1",
    zod: "optional"
  },
  {
    label: "Pincode",
    type: "text",
    id: "pincode",
    placeholder: "Enter your pincode",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "Age",
    type: "text",
    id: "age",
    placeholder: "Enter your age",
    className: "col-span-1",
    zod: "number"
  },
  {
    label: "Firm Name",
    type: "text",
    id: "firmName",
    placeholder: "Enter your firm name",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "Educational Details",
    type: "text",
    id: "educationalDetails",
    placeholder: "Enter your educational details",
    className: "col-span-1",
    zod: "string"
  },

  {
    label: "Franchise Info",
    type: "heading",
    id: "headingFranchiseInfo",
    className: "col-span-2",
    zod: ""
  },
  {
    label: "State",
    type: "dropdown",
    id: "franchiseState",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ].map((state) => ({ value: state, label: state })),
    placeholder: "Select your state",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "District",
    type: "text",
    id: "franchiseDistrict",
    placeholder: "Enter your district",
    className: "col-span-1",
    zod: "optional"
  },
  {
    label: "City",
    type: "text",
    id: "franchiseCity",
    placeholder: "Enter your city",
    className: "col-span-1",
    zod: "optional"
  },
  {
    label: "Pincode",
    type: "text",
    id: "franchisePincode",
    placeholder: "Enter your Pincode",
    className: "col-span-1",
    zod: "optional"
  },
  {
    label: "Experience Detail",
    type: "text-area",
    id: "experienceDetail",
    placeholder: "Share your experience",
    className: "col-span-2",
    zod: "optional"
  },

  {
    label: "Transport Facilities",
    type: "dropdown",
    id: "transportFacilities",
    placeholder: "Select an option",
    className: "col-span-1",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ],
    zod: "optional"
  },
  {
    label: "Storage Facilities",
    type: "text",
    id: "storageFacilities",
    placeholder: "Enter Storage Facilities",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "If yes mention godown size in sq.ft.",
    type: "text",
    id: "storageFacilitiesInfo",
    placeholder: "Enter Storage Facilities",
    className: "col-span-1",
    zod: "number"
  },
  {
    label: "Vehicle Details",
    type: "text",
    id: "vehicleDetails",
    placeholder: "Enter vehicle details",
    className: "col-span-1",
    zod: "number"
  },

  {
    label: "Investment Capacity",
    type: "dropdown",
    id: "investmentCapacity",
    placeholder: "Select an option",
    className: "col-span-2",
    options: [
      { value: "5-7 lakh", label: "5-7 Lakh" },
      { value: "10-15 lakh", label: "10-15 Lakh" },
      { value: "15 lakh - 2 cr", label: "15 Lakh - 2 Cr" }
    ],
    zod: "optional"
  },
  {
    label: "Franchise Types",
    type: "dropdown",
    id: "franchiseTypes",
    placeholder: "Select a franchise type",
    className: "col-span-2",
    options: [
      { value: "dealership", label: "Dealership" },
      { value: "superStockist", label: "Super Stockist" },
      { value: "distributorship", label: "Distributorship" }
    ],
    zod: "optional"
  }
];
