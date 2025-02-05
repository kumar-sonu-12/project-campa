import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { createErrorResponse } from "@/helpers/createErrorResponse";
// import { userAuthMiddleware } from "@/app/middlewares/UserAuth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { email, formData } = await request.json();
    console.log("ss", email);

    if (!email) {
      return createErrorResponse("Email is required", 400);
    }

    if (!formData) {
      return createErrorResponse("Form data is required", 400);
    }
    console.log("form:", formData);
    const requiredFields = [
      "firstname",
      "lastname",
      "email",
      "mobile",
      "state",
      "city",
      "pincode",
      // "investmentCapacity",
      // "experience",
      // "isVerified",

      "franchiseDistrict",
      "franchiseCity",
      "franchisePincode",
      "experienceDetail",
      "franchiseTypes",
      "franchiseState",
      "storageFacilities",
      "storageFacilitiesInfo",
      "age",
      "landmark",
      "vehicleDetails",
      "transportFacilities"
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return createErrorResponse(`${field} is required`, 400);
      }
    }

    const user = await User.findOne({ email });

    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    if (!user.isVerify) {
      return createErrorResponse(
        "User must be verified to submit the form",
        400
      );
    }

    if (user.final_form && Object.keys(user.final_form).length > 0) {
      return createErrorResponse("Form has already been submitted", 400);
    }

    user.final_form = {
      ...formData
      // isVerified: true
    };
    user.isFormSubmitted = true;
    await user.save();

    return new Response(
      JSON.stringify({
        message: "Form submitted successfully",
        user: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          final_form: user.final_form
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return createErrorResponse("Failed to submit form", 500);
  }
}
