import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@/lib/firebase/firebaseAdmin";
// import User from "@/model/User";
import { createErrorResponse } from "@/helpers/createErrorResponse";
// import User from "@/model/User";
// import dbConnect from "@/lib/dbConnect";
// import User from "./model/User";

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"]
};

export async function middleware(request: NextRequest) {
  // await dbConnect();
  // console.log("User model:", User);
  const path = request.nextUrl.pathname;
  const isAdminRoute = path.startsWith("/admin");
  const isApiRoute = path.includes("/api/");

  const handleError = (message: string, status: number) => {
    if (isApiRoute) {
      return createErrorResponse(message, status);
    }
    return status === 401
      ? redirectToLogin(request)
      : redirectToUnauthorized(request);
  };

  const email = request.cookies.get("email")?.value;
  const isAdmin = request.cookies.get("isAdmin")?.value;
  if (!email) return handleError("Unauthorized access", 401);

  try {
    // const decodedToken = await auth.verifyIdToken(token);
    // const email = decodedToken.email?.toLowerCase();
    // if (!email) return handleError("Invalid token format", 400);

    // const user = await User.findOne({ email });
    // if (!user) return handleError("User not found", 404);

    if (isAdminRoute && !isAdmin) {
      return handleError("Admin access required", 403);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error:", error);
    return handleError("Invalid or expired token", 401);
  }
}

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

function redirectToUnauthorized(request: NextRequest) {
  return NextResponse.redirect(new URL("/unauthorized", request.url));
}
