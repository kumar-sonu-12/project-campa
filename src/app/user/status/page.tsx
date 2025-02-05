import { cookies } from "next/headers";
import ApplicantStatusPage from "@/components/User/LoginPage/statusPage/StatusPage";
import getUserDetails from "@/services/getUserDetail";

export const dynamic = "force-dynamic";

const Page = async () => {
  const cookieStore = await cookies();
  const userEmail = cookieStore.get("email")?.value;

  console.log("User Email from Cookie:", userEmail);

  const res = await getUserDetails({
    params: userEmail || "",
    isReciept: false
  });

  return (
    <div>
      <ApplicantStatusPage data={res} />
    </div>
  );
};

export default Page;
