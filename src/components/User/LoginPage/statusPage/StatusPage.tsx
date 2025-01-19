"use client";
import { EmailDataProp } from "@/types/EmailData";
import { CheckCircle, Clock, LucideMessageSquareText } from "lucide-react";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ApplicantStatusPage({
  data
}: {
  data: EmailDataProp[];
}) {
  const applicant = data[0];
  //   const router = useRouter();
  console.log("data2", applicant);
  // console.log(typeof Clock);
  const getStatusClass = (isCompleted?: boolean) =>
    isCompleted
      ? "text-purple-300 border-purple-300"
      : "text-gray-400/60 border-gray-400/60";

  const getStatusIcon = (isCompleted?: boolean) =>
    isCompleted ? (
      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
    ) : (
      <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
    );

  const statusSteps = [
    {
      title: "User Verified",
      isCompleted: applicant?.isVerify === true,
      description:
        applicant?.isVerify && applicant?.isVerify === true
          ? "Completed"
          : "Under Review"
    },
    {
      title: "Application Submitted",
      isCompleted: applicant?.isFormSubmitted === true,
      description:
        applicant?.isFormSubmitted && applicant?.isFormSubmitted === true
          ? "Completed"
          : "Pending"
    },

    {
      title: "Payment Status",
      isCompleted: applicant?.hasPaid === true,
      description:
        applicant?.hasPaid && applicant?.hasPaid === true
          ? "Completed"
          : "Awaiting Payment"
    }
  ];

  const handleClick = ({ step }: { step?: boolean }) => {
    if (!step) {
      toast.error(
        "please wait for 2 to 3 days till your process get completed."
      );
    } else {
      toast.success("your process is complete go for further processess");
    }
  };

  return (
    <div
      className="min-h-screen w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(
          50% 80% at 50% 100%, 
          #673C96 0%, 
          #56327D 35%, 
          #211330 100%
        )`
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div
          className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl p-6 sm:p-8 border border-white/20
            hover:shadow-purple-500/10 transition-shadow duration-500"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white text-center
              bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400"
          >
            Application Status
          </h2>

          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-purple-300/50 to-purple-300/10"></div>

            {statusSteps.map((step, index) => (
              <div
                key={step.title}
                onClick={() => handleClick({ step: step.isCompleted })}
                className={cn(
                  "relative flex cursor-pointer items-center transition-all duration-300 hover:translate-x-1",
                  index !== statusSteps.length - 1 ? "mb-8 sm:mb-12" : ""
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2",
                    getStatusClass(step.isCompleted),
                    "bg-white/5 backdrop-blur-sm z-10 transition-all duration-300",
                    "shadow-lg hover:scale-110 hover:shadow-purple-500/20"
                  )}
                >
                  {getStatusIcon(step.isCompleted)}
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm sm:text-base",
                      step.isCompleted ? "text-purple-200" : "text-gray-300/80"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {applicant?.hasPaid && (
            <div className="mt-8 sm:mt-12 text-center">
              <Link href="/user/status/see-reciept">
                <button
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-purple-300/50 
                  rounded-full shadow-lg text-sm font-medium text-white 
                  bg-purple-500/30 hover:bg-purple-500/50 backdrop-blur-sm
                  transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20
                  focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:ring-offset-2 focus:ring-offset-purple-900/50"
                >
                  <LucideMessageSquareText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  See Receipt
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
