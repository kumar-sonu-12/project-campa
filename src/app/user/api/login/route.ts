import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { auth } from "@/lib/firebase/firebaseAdmin"; // Firebase Admin SDK setup
import { createErrorResponse } from "@/helpers/createErrorResponse";
// import { cookies } from "next/headers";

export async function POST(request: Request) {
  await dbConnect();
  // const cookieStore = cookies();

  try {
    // Parse the request body
    const { token } = await request.json();
    console.log("hello", token);

    if (!token) {
      return createErrorResponse("ID token is required", 400);
    }

    // Verify the ID token using Firebase Admin
    const decodedToken = await auth.verifyIdToken(token);
    const { email } = decodedToken;
    const lowercaseEmail = email?.toLowerCase();
    // Check if the user exists in the database
    const user = await User.findOne({ email: lowercaseEmail });

    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    if (!user.isVerify) {
      return createErrorResponse("User must be verified to log in", 400);
    }

    if (user.isAdmin) {
      return createErrorResponse("isadmin", 200);
    }

    // Optionally: You can use the UID from Firebase for additional checks
    // e.g., user.firebaseUID === uid

    // Set a session cookie
    // await cookieStore.set("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 3600, // 1 hour
    //   path: "/"
    // });

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
    return new Response(JSON.stringify({ error: "Failed to log in" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
