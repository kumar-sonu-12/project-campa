import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase/firebaseAdmin";
import User from "@/model/User";
import { createErrorResponse } from "@/helpers/createErrorResponse";

export async function userAuthMiddleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    console.log("token", token);
    console.log("🕵️ Authentication Diagnostic Log", {
      fullUrl: request.url,
      method: request.method,

      // Detailed Cookie Inspection
      cookieInspection: {
        allCookies: request.cookies.getAll(),
        tokenCookie: request.cookies.get("token")?.value
          ? "✅ Token Present"
          : "❌ No Token",
        adminCookie: request.cookies.get("isAdmin")?.value
          ? "✅ Admin Cookie Present"
          : "❌ No Admin Cookie"
      }
    });
    if (!token) {
      return createErrorResponse("Unauthorized access", 401);
    }

    const decodedToken = await auth.verifyIdToken(token);
    const { email } = decodedToken;
    const lowercaseEmail = email?.toLowerCase();

    if (!email) {
      return createErrorResponse("Invalid token, email not found", 400);
    }

    const user = await User.findOne({ email: lowercaseEmail });

    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error verifying user:", error);
    return createErrorResponse("Unauthorized access", 401);
  }
}
