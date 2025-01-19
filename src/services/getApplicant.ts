import axios from "axios";

const API_URL_preview = `${process.env.NEXT_PUBLIC_ROUTE_URL}/admin/api`;

const getAllApplicants = async ({ usertype }: { usertype: string }) => {
  try {
    // console.log("query", queryString);
    const url = `${API_URL_preview}/all-applicants?usertype=${usertype}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error getting applicants:", error);
    return [];
  }
};

export default getAllApplicants;
