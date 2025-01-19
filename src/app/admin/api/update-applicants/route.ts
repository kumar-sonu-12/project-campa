import dbConnect from "@/lib/dbConnect";
import User, { FinalForm } from "@/model/User";
import generateRandomPassword from "@/helpers/generatePassword";
import { sendVerifiedEmail } from "@/helpers/sendVerifiedMail";
import { createErrorResponse } from "@/helpers/createErrorResponse";

export async function PUT(request: Request) {
  await dbConnect();

  try {
    const { email, hasPaid, isVerify, isFormSubmitted, businessType } =
      await request.json();
    // console.log(email, isVerify, isFormSubmitted, hasPaid, businessType);

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const updateFields: Partial<{
      hasPaid: boolean;
      isVerify: boolean;
      isFormSubmitted: boolean;
      password: string;
      final_form: FinalForm | null;
    }> = {};

    const user = await User.findOne({ email });
    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    if (typeof isVerify !== "undefined") {
      if (typeof isVerify !== "boolean") {
        return new Response(
          JSON.stringify({ message: "isVerify must be a boolean" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      updateFields.isVerify = isVerify;

      if (isVerify) {
        updateFields.password = generateRandomPassword(10);
      } else {
        updateFields.password = "none";
      }
    }

    if (typeof isFormSubmitted !== "undefined") {
      if (typeof isFormSubmitted !== "boolean") {
        return new Response(
          JSON.stringify({ message: "isFormSubmitted must be a boolean" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      updateFields.isFormSubmitted = isFormSubmitted;
      if (!isFormSubmitted) {
        updateFields.final_form = null;
      }
    }

    if (typeof hasPaid !== "undefined") {
      if (typeof hasPaid !== "boolean") {
        return new Response(
          JSON.stringify({ message: "hasPaid must be a boolean" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      if (!user.isVerify && isVerify === false) {
        return createErrorResponse(
          "User must be verified before updating hasPaid",
          400
        );
      }

      updateFields.hasPaid = hasPaid;
    }

    if (
      typeof isVerify === "boolean" &&
      isVerify === false &&
      typeof hasPaid === "boolean" &&
      hasPaid === true
    ) {
      console.log("hello");
      updateFields.hasPaid = false;
      updateFields.isFormSubmitted = false;
      updateFields.password = "";
    }

    if (
      typeof isFormSubmitted === "boolean" &&
      isFormSubmitted === false &&
      typeof hasPaid === "boolean" &&
      hasPaid === true
    ) {
      // console.log("hello");
      updateFields.hasPaid = false;
      updateFields.password = "";
    }

    if (businessType !== undefined) {
      if (!user.final_form) {
        user.final_form = { franchiseTypes: businessType };
      } else {
        user.final_form.franchiseTypes = businessType;
      }
      updateFields.final_form = user.final_form;
    }

    if (Object.keys(updateFields).length === 0) {
      return new Response(
        JSON.stringify({ message: "No valid fields to update" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updatedUser = await User.findOneAndUpdate({ email }, updateFields, {
      new: true
    });

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (isVerify) {
      await sendVerifiedEmail({ ...updatedUser });
    }

    const message = isVerify
      ? "User updated successfully and mail sent"
      : "User updated successfully";

    return new Response(JSON.stringify({ message, user: updatedUser }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to update user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
