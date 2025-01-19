// import ReceiptDisplay from '@/components/ReceiptForm';

// import ReceiptDisplay from "@/components/User/LoginPage/statusPage/RecieptForm";
import { ReceiptDisplay } from "@/components/User/LoginPage/statusPage/RecieptForm";
import getUserDetails from "@/services/getUserDetail";

// Dummy data
const Page = async () => {
  const res = await getUserDetails({
    params: "ayanm3206@gmail.com",
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
