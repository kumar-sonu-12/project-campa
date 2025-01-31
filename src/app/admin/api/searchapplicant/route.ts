import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { adminAuthMiddleware } from "@/app/middlewares/AdminAuth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();

  const authResponse = await adminAuthMiddleware(req);
  if (authResponse.status !== 200) {
    return authResponse;
  }

  try {
    const url = new URL(req.url);
    const filter = url.searchParams.get("data") || "";

    const regexFilter = new RegExp(filter, "i");
    const users = await User.find({
      $or: [
        { firstname: regexFilter },
        { lastname: regexFilter },
        { email: regexFilter },
        { mobile: regexFilter },
      ],
    });

    const userData = users.map((user) => ({
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      mobile: user.mobile,
      state: user.state,
      city: user.city,
      isVerify: user.isVerify,
      hasPaid: user.hasPaid,
      _id: user._id,
    }));

    return new Response(JSON.stringify({ user: userData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
