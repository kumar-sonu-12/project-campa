// import getAllApplicants from "@/services/getAllApplicant";
"use client";
import { AllTable, DataProp } from "./Table";
import { ApplicantSearchBar } from "./ApplicantSearchBar";
import { useState } from "react";
import { EmailDataProp } from "@/types/EmailData";
// import { EmailDataProp } from "@/types/EmailData";
// import { EmailDataProp } from "@/types/EmailData";

export const AllApplicantMain = ({ applicantData }: DataProp) => {
  // const responseArray = await getAllApplicants();
  const [fetchedApplicant, setFetchedApplicant] = useState(applicantData);

  const handleSearchData = async (data: EmailDataProp[]) => {
    setFetchedApplicant(data);
  };

  return (
    <div className=" relative p-4 0.5sm:p-6 pt-0 0.5sm:pt-0 flex flex-col gap-4 0.5sm:gap-6">
      <ApplicantSearchBar handleChange={handleSearchData} />
      <AllTable applicantData={fetchedApplicant} />
      {/* {responseArray?.map((items: EmailDataProp, index: number) => (
        <div key={index}>{items.email}</div>
      ))} */}
    </div>
  );
};
