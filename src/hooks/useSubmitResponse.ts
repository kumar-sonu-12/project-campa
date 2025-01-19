import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface FormSubmitParams<T> {
  routeUrls: string[];
  successMessage?: string;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
  mainForm: boolean;
}

export const useFormSubmit = <T>({
  routeUrls,
  successMessage = "Form submitted successfully!",
  mainForm
}: FormSubmitParams<T>) => {
  const submit = async (data: Record<string, unknown>): Promise<void> => {
    try {
      console.log("Submitting form data:", data);

      const response = await axios.post<T>(
        !mainForm ? routeUrls[0] : routeUrls[1],
        !mainForm ? data : { formData: data, email: "ayanm3206@gmail.com" }
      );

      console.log("Form submission response:", response.data);

      if (response.status === 200) {
        toast.success(successMessage);
        // if (onSuccess) {
        //   onSuccess(response.data);
        // }
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(axiosError.response?.data?.message || "Error occurred.");
      } else {
        toast.error("An unexpected error occurred during submission.");
      }

      // if (onError) {
      //   onError(error);
      // }
    }
  };

  return { submit };
};
