"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  const CompanyInfoArray = [
    { head: "CIN", label: "L17110MH1973PLC019786" },
    { head: "PAN", label: "AAACR5055K" },
    { head: "GST", label: "27AAACR5055K1Z7" },
    {
      label:
        "Building 10A, 5 TTC Industrial Area, Reliance Corporate Park, Thane Belapur Road, Ghansoli, Navi Mumbai, Thane, Maharashtra, 400701"
    },
    { head: "Email Id", label: "info@rilbusiness.com" }
  ];

  const ApplicantData = [
    { head: "Processing Fee for Approval", label: "25,500" },
    { head: "18% GST for Indian Residents Only", label: "4,590" },
    { head: "Total", label: "30,090" }
  ];

  const terms = [
    "Self-attested copy of Voter Card / Aadhar Card.",
    "Self-attested copy of PAN card.",
    "Self-attested passport size photograph (two).",
    "Copy of property-related documents such as Lease/Rent Agreement/Latest Tax Receipt.",
    "Two references from your locality (having good goodwill in the society) with full details including contact numbers.",
    "A photograph of the space applied for Campa Cola Franchise.",
    "Processing Fee and Agreement fee are totally refundable.",
    "Total working days of the project is approx 10 - 14 days."
  ];

  const handlePrint = async () => {
    if (typeof window === "undefined") return;

    const element = document.getElementById("invoice-content");
    if (!element) return;

    const options = {
      margin: [20, 20, 20, 20],
      filename: "Campa-Cola-Invoice.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] }
    };

    try {
      const html2pdf = (await import("html2pdf.js")).default();
      await html2pdf.from(element).set(options).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div
        id="invoice-content"
        className="max-w-4xl mx-auto bg-white shadow-lg border-2 border-black/[0.8] rounded-lg overflow-hidden"
      >
        <div className="p-10 avoid-break t">
          <div
            id="heading"
            className="text-3xl underline font-bold text-blue-600 text-center mb-6"
          >
            <span className="">Invoice</span>
          </div>

          <div className="flex justify-between items-center mb-10 avoid-break">
            <div className="max-w-[60%]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CAMPA COLA COMPANY PRIVATE LIMITED
              </h2>
              <div className="space-y-2.5">
                {CompanyInfoArray.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-sm leading-relaxed text-gray-700"
                  >
                    {item.head && (
                      <span className="font-medium text-gray-900">
                        {item.head}:{" "}
                      </span>
                    )}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[200px] h-[150px] relative">
              <Image
                src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="Company Logo"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-10 avoid-break border border-blue-100">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  BILL TO
                </h3>
                <p className="text-base font-medium text-gray-800">NAME</p>
                <p className="text-sm text-gray-700 mt-1">email@gmail.com</p>
                <p className="text-sm text-gray-700">State, Pincode</p>
              </div>
              <div className="text-right">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    Invoice No:{" "}
                    <span className="text-blue-600">#CAMPA1234</span>
                  </p>
                  <p className="text-sm text-gray-700">
                    Issue Date: <span className="font-medium">09/01/2025</span>
                  </p>
                  <p className="text-sm text-gray-700">
                    Due Date: <span className="font-medium">09/01/2025</span>
                  </p>
                  <p className="text-sm text-gray-700">
                    Phone: <span className="font-medium">7766445343</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 avoid-break">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Particulars
                </div>
                <div className="bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Amount
                </div>
              </div>
              {ApplicantData.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
                >
                  <div className="px-6 py-4 text-sm text-gray-700">
                    {item.head}
                  </div>
                  <div className="px-6 py-4 text-sm font-medium text-gray-900">
                    ₹{item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-10 avoid-break border border-gray-200">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">
              Payment Information
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Payment Mode:</span>{" "}
                NEFT/RTGS/IMPS/Net Banking
              </p>
              <p className="text-red-600 font-medium">
                Note: Cash deposits are not allowed as per company rules and
                regulations.
              </p>
            </div>
          </div>

          <div className="avoid-break">
            <h4 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Terms & Conditions
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {terms.map((term, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
        >
          Download Invoice PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
