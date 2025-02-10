import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { auth } from "@/lib/firebase/firebaseAdmin";
import { createErrorResponse } from "@/helpers/createErrorResponse";
// import bcrypt from "bcryptjs";
// import { boolean } from "zod";

export async function POST(request: Request) {
  try {
    await dbConnect();

    // 🔹 Parse request body
    const body = await request.json();
    if (!body) return createErrorResponse("Invalid request body", 400);

    const { token, method, password, Email } = body;
    // console.log("Received login request with method:", method);
    // console.log("tt", Email, password);

    let user = null;

    if (method === "email") {
      if (!Email || !password) {
        return createErrorResponse("Email and password are required", 400);
      }
      // console.log("tt", Email, password);/

      user = await User.findOne({ email: Email.toLowerCase() });
      // console.log(user);
      if (!user) {
        return createErrorResponse("User not found", 404);
      }

      // const isPasswordValid = await bcrypt.compare(password, user.password);
      let isPasswordValid = false;
      if (password === user.password) {
        isPasswordValid = true;
      }
      // console.log(isPasswordValid);
      // console.log();
      if (!isPasswordValid) {
        return createErrorResponse("Incorrect password", 401);
      }
    } else if (method === "token") {
      if (!token) {
        return createErrorResponse("ID token is required", 400);
      }

      try {
        const decodedToken = await auth.verifyIdToken(token);
        const email = decodedToken.email?.toLowerCase();

        if (!email) {
          return createErrorResponse("Invalid token, email not found", 400);
        }

        user = await User.findOne({ email });
        if (!user) {
          return createErrorResponse("User not found", 404);
        }
        if (!user.isVerify) {
          return createErrorResponse(
            "User verification is pending. Please wait 2-3 days for verification.",
            400
          );
        }
        if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && !user.isAdmin) {
          user.isAdmin = true;
          await user.save();
        }
      } catch (error) {
        console.error("Firebase token verification failed:", error);
        return createErrorResponse("Invalid authentication token", 401);
      }
    } else {
      return createErrorResponse("Invalid authentication method", 400);
    }

    const maxAge = 7 * 24 * 60 * 60;
    const headers = new Headers({
      "Content-Type": "application/json",
      "Set-Cookie": [
        `token=${
          token || ""
        }; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        `email=${user.email}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        `isAdmin=${user.isAdmin}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Strict`
      ].join(", ")
    });

    return new Response(
      JSON.stringify({
        message: `Login successful via ${method}`,
        user: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          isAdmin: user.isAdmin,
          isVerify: user.isVerify
        }
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to log in",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
