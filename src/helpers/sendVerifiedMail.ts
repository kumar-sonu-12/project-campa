import { resend } from "@/lib/resend";

import { VerifiedEmail } from "@/emails/verifiedEmail";

import { ApiResponse } from "@/types/ApiResponse";
import { VerifiedEmailDataProp } from "@/types/EmailData";

export async function sendVerifiedEmail({
  firstname,
  landmark,
  lastname,
  city,
  state,
  mobile,
  pincode,
  email,
  street,
  password,
}: VerifiedEmailDataProp): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mayan6378@gmail.com"],
      subject: "campa customer response",
      react: VerifiedEmail({
        firstname,
        lastname,
        email,
        mobile,
        street,
        landmark,
        city,
        state,
        pincode,
        password,
      }),
    });

    console.log(data);

    if (error) {
      return {
        success: false,
        message: "some error occured!!",
      };
    }
    return { success: true, message: "succesfull to send verification email" };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
