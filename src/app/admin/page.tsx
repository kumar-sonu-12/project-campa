// import { AllApplicantMain } from "@/components/Admin/GetAllApplicant/Main";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  const Array = [
    "all-applicants",
    "verified-applicants",
    "formsubmitted-applicants",
    "paid-applicants"
  ];
  try {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-5 ">
          {Array.map((data, idx) => (
            <Button className="w-[200px] px-6 py-6" key={idx} variant="default">
              <Link href={`/admin/${data}`}>{data}</Link>
            </Button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
    return (
      <div className="w-screen min-h-screen h-auto flex items-center justify-center">
        <p>Error loading applicants. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
