import axios from "axios";

const API_URL_preview = `${process.env.NEXT_PUBLIC_ROUTE_URL}/user/api/get-user`;

const getUserDetails = async ({
  params,
  isReciept
}: {
  params: string;
  isReciept: boolean;
}) => {
  try {
    // const queryParams: Record<string, string> = {};

    // const queryString = new URLSearchParams(queryParams).toString();
    const url = `${API_URL_preview}?email=${params}&isReciept=${isReciept}`;

    console.log("url:", url);

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error getting applicants:", error);
    return [];
  }
};

export default getUserDetails;
