"use client";

// import { ArrowDown } from "lucide-react";
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
      image: { type: "pdf", quality: 5 },
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
        compress: false
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
    <div className="p-8 bg-stone-50 min-h-screen">
      <div
        className="min-h-[95vh] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-stone-200"
        id="approval letter"
      >
        {/* Premium Letterhead */}
        <div className="bg-[#1a365d] py-5 px-10 border-b border-stone-300">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="text-[2rem] font-serif font-semibold text-stone-100 tracking-tight leading-none">
                Campa Cola Company
              </h1>
              <div className="flex gap-6">
                {CompanyInfoArray.slice(0, 2).map((item, idx) => (
                  <p key={idx} className="text-xs text-stone-300 font-light">
                    <span className="font-medium">{item.head}</span>:{" "}
                    {item.label}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative w-28 h-28">
              <Image
                src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
                fill
                alt="Company Crest"
                className="object-contain grayscale opacity-90 drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="p-10 max-w-5xl mx-auto">
          {/* Document Header */}
          <div className="flex justify-between items-start mb-12">
            <div className="space-y-2">
              <p className="text-sm text-stone-600 font-medium">
                09 January 2025
              </p>
              <p className="text-xs text-stone-500 tracking-wide">
                REF: CAMPAPVTLTD/943766932
              </p>
            </div>
            <span className="bg-stone-100 text-stone-600 px-4 py-2 rounded-full text-xs tracking-wide">
              PAGE 1 OF 2
            </span>
          </div>

          {/* Recipient Block */}
          <div className="mb-14 pl-4 border-l-4 border-blue-800">
            <div className="space-y-3">
              <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                Addressed To:
              </p>
              <p className="text-2xl font-serif text-stone-900">
                [Applicant Name]
              </p>
              <div className="space-y-1">
                <p className="text-sm text-stone-600">[Street Address]</p>
                <p className="text-sm text-stone-600">[City, State ZIP Code]</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-14">
            {/* Approval Title */}
            <div className="text-center mb-16">
              <div className="mb-6">
                <div className="inline-block pb-2 border-b-2 border-blue-800">
                  <span className="text-xs tracking-[0.2em] text-blue-800 font-medium">
                    OFFICIAL APPROVAL NOTICE
                  </span>
                </div>
              </div>
              <h2 className="text-4xl font-serif font-normal text-stone-900 mb-3">
                Franchise Program Authorization
              </h2>
              <p className="text-sm text-stone-500 tracking-wide">
                Authorization Code: CCAP-2024-09-0125 | Valid Through: 09 March
                2025
              </p>
            </div>

            {/* Body Content */}
            <div className="space-y-12 text-stone-700">
              {/* Opening Section */}
              <div className="space-y-8">
                <p className="text-sm leading-relaxed text-justoldify border-t border-b border-stone-200 py-8">
                  Dear [Applicant Name],
                  <br />
                  <br />
                  We are pleased to formally confirm your acceptance into the
                  Campa Cola Franchise Program following comprehensive
                  evaluation. This document serves as official authorization
                  (Ref: CAMPAPVTLTD/943766932) and outlines the terms of your
                  participation in our distinguished network.
                </p>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {ApplicantData.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="space-y-2 pb-4 border-b border-stone-200"
                    >
                      <p className="text-xs text-stone-500 uppercase tracking-wider">
                        {item.head}
                      </p>
                      <p className="text-sm font-medium text-stone-900">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Section */}
              <div className="bg-stone-50 p-8 rounded border border-stone-200">
                <div className="space-y-6">
                  <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider">
                    Financial Commitments
                  </h4>
                  <div className="space-y-4">
                    {RentData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center pb-3 border-b border-stone-200"
                      >
                        <span className="text-sm text-stone-600">
                          {item.head}
                        </span>
                        <span className="text-sm font-medium text-stone-900">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="relative pt-10">
                <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-10">
                  Implementation Protocol
                </h4>
                <div className="space-y-8 pl-8 border-l border-stone-200">
                  {processLabels.map((label, index) => (
                    <div key={index} className="relative -left-[9px]">
                      <div className="absolute -left-[19px] top-0 w-5 h-5 bg-white border-2 border-blue-800 rounded-full flex items-center justify-center">
                        <span className="text-[0.65rem] font-bold text-blue-800">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-sm text-stone-700 pl-4">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms Section */}
              <div className="space-y-6">
                <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider">
                  Terms & Conditions
                </h4>
                <ul className="space-y-4 text-sm text-stone-700">
                  {terms.map((term, index) => (
                    <li key={index} className="flex items-start pl-4">
                      <span className="w-1 h-1 bg-blue-800 rounded-full mt-3 mr-3"></span>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing Section */}
              <div className="pt-12 border-t border-stone-200">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-stone-900">
                        Authorized Signature
                      </p>
                      <Image
                        src="/signature-placeholder.png"
                        width={160}
                        height={60}
                        alt="Official Signature"
                        className="opacity-90"
                      />
                    </div>
                    <div className="text-sm text-stone-600 space-y-1">
                      <p>Franchise Approval Department</p>
                      <p className="text-xs text-stone-500">
                        Campa Cola Company Private Limited
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-xs text-stone-500 tracking-wide">
                      <p>Document ID: CC-2024-09-0125</p>
                      <p>Issued: 09/01/2025</p>
                      <p>Valid Through: 09/03/2025</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center text-[0.7rem] text-stone-400 tracking-wide">
                  <p>
                    This digitally endorsed document holds legal validity per
                    Article 12.4 of Campa Cola Corporate Charter
                  </p>
                  <p className="mt-1">
                    Confidential - Property of Campa Cola Company Private
                    Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handlePrint}
          className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-3 rounded-sm shadow-md transition-colors text-sm font-normal tracking-wider uppercase"
        >
          Download Official Authorization
        </button>
      </div>
    </div>
  );
};

export default Page;
