export const FormDataArray = [
  {
    label: "First name",
    type: "text",
    id: "firstname",
    placeholder: "Enter your firstname",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "last name",
    type: "text",
    id: "lastname",
    placeholder: "Enter your lastname",
    className: "col-span-1",
    zod: "string"
  },
  {
    label: "Your email",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
    className: "col-span-1",
    zod: "email"
  },
  {
    label: "Phone number",
    type: "tel",
    id: "mobile",
    placeholder: "9514175544",
    className: "col-span-1",
    zod: "number"
  },
  {
    label: "State",
    type: "dropdown",
    id: "state",
    options: [
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
      { value: "Assam", label: "Assam" },
      { value: "Bihar", label: "Bihar" },
      { value: "Chhattisgarh", label: "Chhattisgarh" },
      { value: "Goa", label: "Goa" },
      { value: "Gujarat", label: "Gujarat" },
      { value: "Haryana", label: "Haryana" },
      { value: "Himachal Pradesh", label: "Himachal Pradesh" },
      { value: "Jharkhand", label: "Jharkhand" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Kerala", label: "Kerala" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Manipur", label: "Manipur" },
      { value: "Meghalaya", label: "Meghalaya" },
      { value: "Mizoram", label: "Mizoram" },
      { value: "Nagaland", label: "Nagaland" },
      { value: "Odisha", label: "Odisha" },
      { value: "Punjab", label: "Punjab" },
      { value: "Rajasthan", label: "Rajasthan" },
      { value: "Sikkim", label: "Sikkim" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Telangana", label: "Telangana" },
      { value: "Tripura", label: "Tripura" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Uttarakhand", label: "Uttarakhand" },
      { value: "West Bengal", label: "West Bengal" },
      { value: "Jammu & Kashmir", label: "Jammu & Kashmir" }
    ],

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
    placeholder: "Enter your street adress(eg.hauzkhas)",
    className: "col-span-2",
    zod: "optional"
  },
  {
    label: "Landmark",
    type: "text",
    id: "landmark",
    placeholder: "whats ur landmark",
    className: "col-span-1",
    zod: "optional"
  },

  {
    label: "Pincode",
    type: "text",
    id: "pincode",
    placeholder: "Enter your pincode",
    className: "col-span-1",
    zod: "pincode"
  },

  {
    label: "Business Types",
    type: "dropdown",
    id: "Business_Types",
    placeholder: "Please choose an option",
    className: "col-span-1",
    options: [
      { value: "Dealership", label: "Dealership" },
      { value: " Super Stockist", label: "Super Stockist" },
      { value: " Distributorship", label: "Distributorship" }
    ],
    optionClassName:
      "font-[500] text-[12px] bg-black leading-[16.39px] text-[#a4a4a4]",
    zod: "optional"
  },
  {
    label: "Investment Plan",
    type: "dropdown",
    id: "Investment_Plan",
    placeholder: "Please choose an option",
    className: "col-span-1",
    zod: "optional",
    options: [
      { value: "5-7 lakh", label: "5-7 lakh" },
      { value: "10-15 lakh", label: "10-15 lakh" },
      { value: "15 lakh - 2 cr", label: "15 lakh - 2 cr" }
    ],
    optionClassName:
      "font-[500] text-[12px] w-full leading-[16.39px] text-[#a4a4a4]"
  }
];
