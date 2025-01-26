import generateRandomPassword from "@/helpers/generatePassword";
import { sendResponseEmail } from "@/helpers/sendContactFormData";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  console.log("hello from backend side");

  try {
    const {
      firstname,
      landmark,
      lastname,
      city,
      state,
      street,
      mobile,
      Investment_Plan,
      pincode,
      Business_Types,
      email
    } = await request.json();

    console.log("Data fetched:", { firstname, lastname, state });
    console.log("hello");
    const lowercaseEmail = email?.toLowerCase();

    const existingUser = await User.findOne({ email });
    console.log("Checking existing user with email:", email);
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return new Response(
        JSON.stringify({
          message: "Email already exists. Please use another email.",
          isVerify: existingUser.isVerify,
          hasPaid: existingUser.hasPaid,
          isAdmin: existingUser.isAdmin
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    await sendResponseEmail({
      firstname,
      landmark,
      lastname,
      city,
      state,
      street,
      mobile,
      Investment_Plan,
      pincode,
      business_Types: Business_Types,
      email
    });

    const newUser = await User.create({
      firstname,
      lastname,
      email: lowercaseEmail,
      mobile,
      state,
      city,
      // send_email,
      Business_Types
    });

    if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      const newPassword = generateRandomPassword(7);
      console.log(newPassword);
      const updatedUser = await User.findOneAndUpdate(
        { _id: newUser._id },
        {
          isAdmin: true,
          password: newPassword
        },
        { new: true }
      );
      console.log("Admin user updated:", updatedUser);
    }

    console.log("User saved:", newUser);

    return new Response(
      JSON.stringify({
        message: "Form submitted successfully!",
        isVerify: newUser.isVerify,
        hasPaid: newUser.hasPaid,
        isAdmin: newUser.isAdmin
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    return new Response(
      JSON.stringify({ error: "Failed to process the request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
