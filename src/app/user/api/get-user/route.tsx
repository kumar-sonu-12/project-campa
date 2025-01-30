import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { userAuthMiddleware } from "@/app/middlewares/UserAuth";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const authResponse = await userAuthMiddleware(request);
  if (authResponse.status !== 200) {
    return authResponse;
  }
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email") || "";
    const isReciept = url.searchParams.get("isReciept");
    // console.log(usertype);
    // console.log("jllo");

    console.log("jjj", isReciept);
    let query = {};
    if (email) {
      query = { email: email };
    }

    // let users = {};

    // if (isReciept) {
    //   users = await User.find(query, {
    //     final_form: 1
    //   });
    // } else {
    const users = await User.find(query, {
      firstname: 1,
      lastname: 1,
      email: 1,
      mobile: 1,
      state: 1,
      city: 1,
      isVerify: 1,
      hasPaid: 1,
      isFormSubmitted: 1,
      final_form: 1,
    });
    // }
    // console.log(users);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
