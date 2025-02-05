// import ReceiptDisplay from '@/components/ReceiptForm';

// import ReceiptDisplay from "@/components/User/LoginPage/statusPage/RecieptForm";
import { ReceiptDisplay } from "@/components/User/LoginPage/statusPage/RecieptForm";
import getUserDetails from "@/services/getUserDetail";
import { cookies } from "next/headers";

// Dummy data
const Page = async () => {
  const cookieStore = await cookies();
  const userEmail = cookieStore.get("email")?.value;
  const res = await getUserDetails({
    params: userEmail || "",
    isReciept: true
  });

  console.log(res);
  return (
    <>
      <ReceiptDisplay data={res} />
    </>
  );
};

export default Page;
