import axios from "axios";
import { cookies } from "next/headers";

const API_URL_preview = `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/admin/v11232`;

const getAllApplicants = async ({ usertype }: { usertype: string }) => {
  try {
    // console.log("query", queryString);
    const url = `${API_URL_preview}/all-applicants?usertype=${usertype}`;
    const cookiestore = await cookies();
    const cookie = cookiestore.getAll();
    console.log("cookieData", cookie);
    const response = await axios.get(url, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error getting applicants:", error);
    return [];
  }
};

export default getAllApplicants;
