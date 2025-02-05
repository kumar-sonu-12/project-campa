import axios from "axios";

const API_URL_preview = `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/admin/v11232/all-applicants`;

const getAllApplicantDetails = async ({ params }: { params: string }) => {
  try {
    // const queryParams: Record<string, string> = {};

    // const queryString = new URLSearchParams(queryParams).toString();
    const url = `${API_URL_preview}?email=${params}`;

    console.log("url:", url);

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error getting applicants:", error);
    return [];
  }
};

export default getAllApplicantDetails;
