import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase/firebaseAdmin";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await auth.verifyIdToken(token);
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid session:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
