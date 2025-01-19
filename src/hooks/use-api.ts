import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const useApplicantActions = () => {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const updateApplicantStatus = async (
    email: string,
    hasPaid: boolean,
    isVerify: boolean,
    url: string,
    onClose: () => void
  ) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/${url}`,
        {
          email,
          hasPaid,
          isVerify
        }
      );
      toast.success(res.data.message);
      onClose();
    } catch (error) {
      toast.error("Failed to update applicant status.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteApplicant = async (
    email: string,
    mobile: string,
    onClose: () => void,
    url: string
  ) => {
    try {
      setDeleteLoading(true);
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/${url}`,
        {
          data: { email, mobile }
        }
      );
      toast.success(res.data.message);
      onClose();
    } catch (error) {
      toast.error("Failed to delete applicant.");
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    loading,
    deleteLoading,
    updateApplicantStatus,
    deleteApplicant
  };
};
