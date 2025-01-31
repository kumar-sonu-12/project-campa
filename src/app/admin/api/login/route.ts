import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import generateRandomPassword from "@/helpers/generatePassword";
import { sendVerifiedEmail } from "@/helpers/sendVerifiedMail";
import { adminAuthMiddleware } from "@/app/middlewares/AdminAuth";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  await dbConnect();

  const authResponse = await adminAuthMiddleware(request);
  if (authResponse.status !== 200) {
    return authResponse;
  }

  try {
    const { email, hasPaid, isVerify } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updateFields: Partial<{
      hasPaid: boolean;
      isVerify: boolean;
      password: string;
    }> = {};

    // Validate and prepare `hasPaid` update
    if (typeof hasPaid !== "undefined") {
      if (typeof hasPaid !== "boolean") {
        return new Response(
          JSON.stringify({ message: "hasPaid must be a boolean" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      updateFields.hasPaid = hasPaid;
    }

    // Validate and prepare `isVerify` update
    if (typeof isVerify !== "undefined") {
      if (typeof isVerify !== "boolean") {
        return new Response(
          JSON.stringify({ message: "isVerify must be a boolean" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      updateFields.isVerify = isVerify;

      if (isVerify) {
        updateFields.password = generateRandomPassword(10);
      } else {
        updateFields.password = "none";
      }
    }

    // Ensure at least one field is updated
    if (Object.keys(updateFields).length === 0) {
      return new Response(
        JSON.stringify({ message: "No valid fields to update" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Find and update the user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send email if verified
    if (isVerify) {
      await sendVerifiedEmail({ ...updatedUser });
    }

    return new Response(
      JSON.stringify({
        message: "User updated successfully",
        user: updatedUser,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to update user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
