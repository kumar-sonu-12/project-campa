import { NextRequest, NextResponse } from "next/server";
import { adminAuthMiddleware } from "@/app/middlewares/AdminAuth";

export async function middleware(request: NextRequest) {
  const authResponse = await adminAuthMiddleware(request);
  if (authResponse.status !== 200) {
    return authResponse;
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/api/:path*",
};
