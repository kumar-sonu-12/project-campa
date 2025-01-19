"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";
// import html2pdf from "html2pdf.js";

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

  const handlePrint = async () => {
    if (typeof window === "undefined") return;

    const element = document.getElementById("approval letter");
    if (!element) return;

    const options = {
      margin: [20, 20, 20, 20],
      filename: "Campa-Cola-Approval-letter.pdf",
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
      pagebreak: { mode: ["", "css", "legacy"] }
    };

    try {
      const html2pdf = (await import("html2pdf.js")).default();
      await html2pdf.from(element).set(options).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };
  const ApplicantData = [
    { head: "Serial No", label: "CAMPAPVTLTD/943766932" },
    { head: "Reference No", label: "CAMPAPVTLTD/943766932" },
    { head: "Application No", label: "CAMPAPVTLTD/943766932" },
    { head: "Application Name", label: "Name" },
    { head: "Application Address", label: "Address" },
    { head: "Site Name", label: "State" }
  ];

  const RentData = [
    { head: "Rent", label: "Rent per month" },
    {
      head: "Advance Registration Amount Paid by Applicant",
      label: "Rs. Price / INR"
    }
  ];

  const processLabels = [
    "Step 1: Initialize the project",
    "Step 2: Set up the environment",
    "Step 3: Build the components",
    "Step 4: Connect the backend",
    "Step 5: Test and debug",
    "Step 6: Deploy the application"
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

  return (
    <div className="p-10">
      <div className="min-h-screen " id="approval letter">
        <div className="border-2 border-purple-300 p-8 flex flex-col gap-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
          <div
            id="heading"
            className="text-3xl underline font-bold text-purple-800 text-center mb-6"
          >
            <span className="">APPROVAL DOCUMENT</span>
          </div>

          <div className="flex justify-between items-center bg-purple-50 p-6 rounded-lg shadow-md">
            <div>
              <h2 className="text-lg font-bold text-purple-800 mb-4">
                CAMPA COLA COMPANY PRIVATE LIMITED
              </h2>
              {CompanyInfoArray.map((item, idx) => (
                <div
                  key={idx}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  {item.head && (
                    <span className="font-semibold text-purple-700">
                      {item.head}:&nbsp;
                    </span>
                  )}
                  {item.label}
                </div>
              ))}
            </div>
            <Image
              src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
              height={150}
              width={200}
              alt="Company Logo"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex justify-between gap-4 bg-purple-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-xl text-purple-800">
                TO, NAME
              </h3>
              <p className="text-base text-purple-600">email@gmail.com</p>
              <p className="text-base text-purple-600">State, Pincode</p>
            </div>
            <div>
              <p className="font-semibold text-base text-purple-800">
                Phone: 7766445343
              </p>
              <p className="font-semibold text-base text-purple-800">
                Invoice: #CAMPA1234
              </p>
              <p className="text-base text-purple-600">
                Invoice Date: 09/01/2025
              </p>
              <p className="text-base text-purple-600">Due Date: 09/01/2025</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-center text-purple-800 mb-4">
              PARTICULARS
            </h4>
            <div className="grid grid-cols-2 border border-purple-300 rounded-lg overflow-hidden shadow-base">
              {ApplicantData.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-3 bg-purple-200 border-b border-purple-300 font-semibold text-purple-800">
                    {item.head}
                  </div>
                  <div className="px-4 py-3 bg-purple-50 border-b border-purple-300 text-purple-700">
                    {item.label}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-center text-purple-800 mb-4">
              RENT APPROVED
            </h4>
            <div className="grid grid-cols-2 border border-purple-300 rounded-lg overflow-hidden shadow-base">
              {RentData.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-3 bg-purple-200 border-b border-purple-300 font-semibold text-purple-800">
                    {item.head}
                  </div>
                  <div className="px-4 py-3 bg-purple-50 border-b border-purple-300 text-purple-700">
                    {item.label}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg shadow-base">
            <h4 className="text-lg font-semibold text-center text-purple-800 mb-6">
              PROCESS CHART
            </h4>
            <div className="grid gap-4">
              {processLabels.map((label, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col gap-2 items-center"
                >
                  <div className="border-2 border-purple-300 w-full rounded-lg p-4 shadow-md bg-white text-center text-purple-700 hover:bg-purple-100 transition-colors duration-300">
                    {label}
                  </div>
                  {index !== processLabels.length - 1 && (
                    <ArrowDown size={24} className="text-purple-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow-base">
            <h4 className="font-bold text-lg text-purple-800 mb-4">
              Terms & Conditions
            </h4>
            <ul className="list-disc pl-6 text-purple-700 space-y-2">
              {terms.map((term, index) => (
                <li key={index} className="text-base">
                  {term}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-base text-purple-700 bg-purple-50 p-6 rounded-lg shadow-base">
            <p className="mb-2">
              Payment Mode: You can make payment through NEFT/RTGS/IMPS/Net
              Banking.
            </p>
            <p>
              Note: Cash deposits are not allowed as per company rules and
              regulations.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <button
          onClick={handlePrint}
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
        >
          Download approval letter as PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
