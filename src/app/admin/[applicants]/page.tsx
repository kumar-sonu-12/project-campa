import { AllApplicantMain } from "@/components/Admin/GetApplicants/Main";
import { applicantTypes } from "@/config/ApplicantsData";
import getApplicants from "@/services/getApplicant";

const Page = async ({
  params
}: {
  params: Promise<{ applicants: string }>;
}) => {
  const { applicants } = await params;
  // console.log(applicants);

  const applicantType = applicantTypes.find(
    (applicant) => applicant.type === applicants
  );

  let res = [];

  if (applicantType) {
    // console.log(applicantType.isVerify);
    res = await getApplicants({
      usertype: applicantType.usertype
    });
    console.log("got data", res);
  }

  return (
    <div className="w-screen min-h-screen h-auto">
      <AllApplicantMain applicantData={res} />
    </div>
  );
};

export default Page;
