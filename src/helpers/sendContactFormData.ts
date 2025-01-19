import { resend } from "@/lib/resend";

import { ResponseEmail } from "@/emails/responseEmail";

import { ApiResponse } from "@/types/ApiResponse";
import { EmailDataProp } from "@/types/EmailData";

export async function sendResponseEmail({
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
  email,
}: EmailDataProp): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mayan6378@gmail.com"],
      subject: "campa customer response",
      react: ResponseEmail({
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
        email,
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
