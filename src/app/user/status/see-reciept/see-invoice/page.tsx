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
    <div className="min-h-screen bg-gray-50 py-8">
      <div
        id="invoice-content"
        className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-300 rounded-sm"
      >
        <div className="p-10 avoid-break">
          <div className="mb-12 text-center border-b border-gray-300 pb-8">
            <div className="mb-6">
              <Image
                src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
                width={120}
                height={80}
                alt="Company Logo"
                className="mx-auto grayscale"
              />
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                CAMPA COLA COMPANY PRIVATE LIMITED
              </h1>
              {CompanyInfoArray.map((item, idx) => (
                <div key={idx}>
                  {item.head ? (
                    <span className="font-medium">
                      {item.head}: {item.label}
                    </span>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Invoice To:
              </h2>
              <div className="text-sm text-gray-700">
                <p className="font-medium">NAME</p>
                <p>State, Pincode</p>
                <p>email@gmail.com</p>
                <p>Phone: 7766445343</p>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">INVOICE</h1>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  Invoice #: <span className="font-medium">#CAMPA1234</span>
                </p>
                <p>Date: 09/01/2025</p>
                <p>Due Date: 09/01/2025</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 border border-gray-200 text-sm font-semibold text-gray-900">
                    Description
                  </th>
                  <th className="text-right py-3 px-4 border border-gray-200 text-sm font-semibold text-gray-900">
                    Amount (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {ApplicantData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                      {item.head}
                    </td>
                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-900 text-right font-medium">
                      ₹{item.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Terms */}
          <div className="mb-10 text-sm">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Payment Instructions
                </h3>
                <p className="text-gray-700 mb-1">
                  Bank Name: State Bank of India
                </p>
                <p className="text-gray-700 mb-1">
                  Account Number: 110045667889
                </p>
                <p className="text-gray-700 mb-1">IFSC Code: SBIN0003456</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Important Notes
                </h3>
                <p className="text-red-600 text-xs italic">
                  * Cash deposits are not accepted. Payment must be made via
                  bank transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="avoid-break">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">
              Terms & Conditions
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-xs text-gray-700 leading-relaxed">
              {terms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-xs text-gray-600 text-center">
            <p>
              This is a computer generated invoice and does not require physical
              signature
            </p>
            <p className="mt-1">
              CIN: L17110MH1973PLC019786 | GST: 27AAACR5055K1Z7
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-gray-900 text-white py-2 px-6 rounded-sm hover:bg-gray-800 text-sm font-medium shadow-sm"
        >
          Download Invoice PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
