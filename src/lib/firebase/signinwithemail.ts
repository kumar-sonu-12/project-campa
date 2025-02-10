// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase/firebaseConfig";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { auth } from "./firebaseconfig";
// import { auth } from "firebase-admin";

import { AuthError } from "firebase/auth";
import { AxiosError } from "axios";

export const signInWithEmail = async (email: string, password: string) => {
  try {
    console.log(email, password);
    // const result = await signInWithEmailAndPassword(auth, email, password);
    // console.log(result);
    // const token = await result.user.getIdToken();
    // console.log(token);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/auth/login`,
      {
        method: "email",
        Email: email,
        password
      }
    );

    toast.success(response.data.message, {
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });

    return response.data.user;
  } catch (error: unknown) {
    console.error("Email Sign-in Error:", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message?: string;
        error?: string;
      }>;
      const { status, data } = axiosError.response || {};

      if (status === 404 || status === 400) {
        toast.error(data?.message || "User not found");
      } else if (data?.error) {
        toast.error(data.error);
      } else {
        toast.error("Sign-in failed. Please try again.");
      }
    } else if (error instanceof Error && "code" in error) {
      const authError = error as AuthError;

      switch (authError.code) {
        case "auth/invalid-credential":
          toast.error("Invalid email or password");
          break;
        case "auth/user-not-found":
          toast.error("No account found with this email");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;
        default:
          toast.error("An unexpected error occurred");
      }
    } else {
      toast.error("An unexpected error occurred");
    }

    throw error;
  }
};
// export const signUpWithEmail = async (email: string, password: string, additionalData?: any) => {
//   try {
//     const result = await createUserWithEmailAndPassword(auth, email, password);
//     const token = await result.user.getIdToken();

//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/auth/register`,
//       {
//         token,
//         email,
//         ...additionalData
//       }
//     );

//     toast.success(response.data.message, {
//       style: {
//         backgroundColor: "black",
//         color: "white"
//       }
//     });

//     return response.data.user;
//   } catch (error) {
//     console.error("Email Sign-up Error:", error);

//     if (axios.isAxiosError(error) && error.response) {
//       const { status, data } = error.response;

//       if (status === 409) {
//         toast.error("Email already in use");
//       } else if (data && data.error) {
//         toast.error(data.error);
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//     } else if (error.code === 'auth/email-already-in-use') {
//       toast.error("Email is already registered");
//     } else {
//       toast.error("An unexpected error occurred during registration");
//     }

//     throw error;
//   }
// };

// export const resetPassword = async (email: string) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     toast.success("Password reset email sent", {
//       style: {
//         backgroundColor: "black",
//         color: "white"
//       }
//     });
//   } catch (error) {
//     console.error("Password Reset Error:", error);

//     if (error.code === 'auth/user-not-found') {
//       toast.error("No account found with this email");
//     } else {
//       toast.error("Failed to send password reset email");
//     }

//     throw error;
//   }
// };
