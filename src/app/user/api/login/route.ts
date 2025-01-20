import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { auth } from "@/lib/firebase/firebaseAdmin";
import { createErrorResponse } from "@/helpers/createErrorResponse";
// import { cookies } from "next/headers";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { token } = await request.json();
    console.log("Received token:", token);

    if (!token) {
      return createErrorResponse("ID token is required", 400);
    }

    const decodedToken = await auth.verifyIdToken(token);
    const { email } = decodedToken;
    const lowercaseEmail = email?.toLowerCase();

    if (!email) {
      return createErrorResponse("Invalid token, email not found", 400);
    }
    console.log(email);

    const user = await User.findOne({ email: lowercaseEmail });

    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    if (!user.isVerify) {
      return createErrorResponse("User must be verified to log in", 400);
    }

    if (
      lowercaseEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      !user.isAdmin
    ) {
      user.isAdmin = true;
      await user.save();
    }

    console.log(user.isAdmin);
    // Respond with user data
    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          isAdmin: user.isAdmin,
          isVerify: user.isVerify
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
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
