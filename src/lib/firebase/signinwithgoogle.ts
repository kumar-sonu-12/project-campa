import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebaseconfig";
import axios from "axios";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const token = await result.user.getIdToken();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/auth/login`,
      { token }
    );

    console.log("Login successful:", response.data);
    toast.success(response.data.message, {
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });
    return response.data.user;
  } catch (error) {
    console.error("Error during sign-in:", error);

    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response;

      if (status === 404 || status === 400) {
        toast.error(data.message || "User not found");
      } else if (data && data.error) {
        toast.error(data.error);
      } else {
        toast.error("An unknown error occurred during sign-in.");
      }
    } else {
      toast.error("Failed to sign in. Please try again.");
    }

    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};
