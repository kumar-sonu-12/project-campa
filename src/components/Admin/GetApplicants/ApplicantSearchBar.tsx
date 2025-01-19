"use client";
import { Input } from "@/components/ui/input";
import { EmailDataProp } from "@/types/EmailData";
import axios from "axios";
import { SearchIcon } from "lucide-react";

export const ApplicantSearchBar = ({
  handleChange
}: {
  handleChange: (data: EmailDataProp[]) => void;
}) => {
  const handleChangeSearch = async (data: string) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/admin/api/searchapplicant?data=` +
          data
      );
      handleChange(res.data.user);
    } catch (error) {
      console.error("some error occured", error);
    }
  };
  return (
    <div className="relative w-auto">
      <SearchIcon className="absolute size-4 0.5sm:size-5 left-[7px] 0.5sm:left-[10px] text-gray-500 top-[23px] 0.5sm:top-[20px]" />
      <Input
        className="h-[45px] pl-7  text-sm sm:text-base 0.5sm:pl-12 border-black focus:border-black  placeholder:text-gray-200 placeholder:font-normal text-black placeholder:text-black/[0.5]"
        placeholder="search for applicant"
        onChange={(e) => handleChangeSearch(e.target.value)}
      />
    </div>
  );
};
