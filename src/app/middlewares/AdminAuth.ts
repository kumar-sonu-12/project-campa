import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase/firebaseAdmin";
import User from "@/model/User";
import { createErrorResponse } from "@/helpers/createErrorResponse";

export async function adminAuthMiddleware(request: NextRequest) {
  try {
    const cookie = request.cookies.getAll();
    console.log("cookieData", cookie);

    const token = request.cookies.get("token")?.value;
    const isAdmin = request.cookies.get("isAdmin")?.value;
    console.log("tt", token);
    console.log(isAdmin);

    if (!token || !isAdmin) {
      return createErrorResponse("Unauthorized access", 401);
    }

    const decodedToken = await auth.verifyIdToken(token);
    const { email } = decodedToken;
    console.log("email", email);
    const lowercaseEmail = email?.toLowerCase();

    if (!email) {
      return createErrorResponse("Invalid token, email not found", 400);
    }

    const user = await User.findOne({ email: lowercaseEmail });

    if (!user || !user.isAdmin) {
      return createErrorResponse("Unauthorized access", 401);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error verifying admin:", error);
    return createErrorResponse("Unauthorized access", 401);
  }
}
