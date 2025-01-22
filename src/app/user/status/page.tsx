export const dynamic = "force-dynamic";
import ApplicantStatusPage from "@/components/User/LoginPage/statusPage/StatusPage";
// import getAllApplicantDetails from "@/services/getApplicantDetails";
import getUserDetails from "@/services/getUserDetail";
// import Image from "next/image";

const Page = async () => {
  const res = await getUserDetails({
    params: "",
    isReciept: false
  });
  console.log("data", res);
  return (
    <div>
      <ApplicantStatusPage data={res} />
    </div>
  );
};

export default Page;
