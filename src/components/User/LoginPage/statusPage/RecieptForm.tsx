"use client";
import { useRef } from "react";
import {
  LucideIcon,
  FileText,
  Receipt,
  User,
  Building2,
  MapPin,
  Truck,
  IndianRupee,
  Warehouse,
  Shield
} from "lucide-react";
import { EmailDataProp } from "@/types/EmailData";
// import { generateApprovalLetter, generateInvoice } from "@/lib/generatePdf";
import Link from "next/link";

const SectionHeader = ({
  icon: Icon,
  title
}: {
  icon: LucideIcon;
  title: string;
}) => (
  <div className="py-3 px-4 bg-white/[0.08] flex items-center gap-3 border-b border-white/10">
    <Icon className="text-purple-400 w-5 h-5" strokeWidth={1.5} />
    <span className="font-semibold text-base text-purple-100">{title}</span>
  </div>
);

interface DetailRowProps {
  label: string;
  value: string | React.ReactNode;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <div className="flex flex-col sm:flex-row border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
    <div className="w-full sm:w-1/3 py-3 px-4 text-gray-400 text-sm sm:text-base font-medium bg-white/[0.02] sm:bg-transparent">
      {label}
    </div>
    <div className="w-full sm:w-2/3 py-3 px-4 text-gray-200 text-sm sm:text-base break-words bg-white/[0.04] sm:bg-transparent">
      {value || "Not specified"}
    </div>
  </div>
);

export function ReceiptDisplay({ data }: { data: EmailDataProp[] }) {
  const receiptRef = useRef(null);

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-950">
        <div className="p-8 bg-white/[0.08] backdrop-blur-lg rounded-2xl border border-white/10">
          <p className="text-white text-xl">No application data available</p>
        </div>
      </div>
    );
  }

  const applicationData = data[0].final_form;

  const handlePrice = () => {
    switch (applicationData?.franchiseTypes) {
      case "dealership":
        return "57000/-";
      case "superStockist":
        return "42000/-";
      case "distributorship":
        return "82000/-";
      default:
        return "Not specified";
    }
  };

  // const downloadApprovalLetter = () => {
  //   const fileName = `campa-cola-approval-${applicationData?.firstname}-${applicationData?.lastname}.pdf`;
  //   if (applicationData) {
  //     generateApprovalLetter(applicationData, fileName);
  //   }
  // };

  // const downloadInvoice = () => {
  //   const fileName = `campa-cola-invoice-${applicationData?.firstname}-${applicationData?.lastname}.pdf`;
  //   if (applicationData) {
  //     generateInvoice(applicationData, fileName);
  //   }
  // };

  return (
    <div
      className="min-h-screen py-4 sm:py-8 md:py-12 px-3 sm:px-6"
      style={{
        background: `radial-gradient(80% 80% at 50% 100%, #3E1556 0%, #2A1039 35%, #180827 100%)`
      }}
    >
      <div
        ref={receiptRef}
        className="max-w-4xl mx-auto bg-white/[0.08] backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden text-gray-200 border border-white/10"
      >
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0))]" />
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-purple-300 opacity-80" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-white">
              Campa Cola Distributorship
            </h1>
            <p className="text-center mt-2 sm:mt-3 text-purple-200/80 text-base sm:text-lg font-medium">
              Application Details & Documentation
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="bg-white/[0.05] rounded-xl overflow-hidden border border-white/10 mb-8">
            <div className="divide-y divide-white/10">
              <section>
                <SectionHeader icon={User} title="Personal Information" />
                <DetailRow
                  label="Full Name"
                  value={`${applicationData?.firstname} ${applicationData?.lastname}`}
                />
                <DetailRow
                  label="Email Address"
                  value={applicationData?.email}
                />
                <DetailRow
                  label="Mobile Number"
                  value={applicationData?.mobile}
                />
                <DetailRow label="Age" value={applicationData?.age} />
              </section>

              <section>
                <SectionHeader icon={MapPin} title="Current Address" />
                <DetailRow label="State" value={applicationData?.state} />
                <DetailRow label="City" value={applicationData?.city} />
                <DetailRow label="Pincode" value={applicationData?.pincode} />
              </section>

              <section>
                <SectionHeader icon={Building2} title="Franchise Details" />
                <DetailRow
                  label="Business Type"
                  value={applicationData?.businessType}
                />
                <DetailRow
                  label="Business Name"
                  value={applicationData?.businessName}
                />
                <DetailRow
                  label="Franchise Type"
                  value={applicationData?.franchiseTypes}
                />
                <DetailRow
                  label="Franchise State"
                  value={applicationData?.franchiseState}
                />
                <DetailRow
                  label="Franchise City"
                  value={applicationData?.franchiseCity}
                />
                <DetailRow
                  label="Franchise District"
                  value={applicationData?.franchiseDistrict}
                />
                <DetailRow
                  label="Franchise Pincode"
                  value={applicationData?.franchisePincode}
                />
                <DetailRow label="Landmark" value={applicationData?.landmark} />
              </section>

              <section>
                <SectionHeader icon={Warehouse} title="Storage & Experience" />
                <DetailRow
                  label="Storage Facilities"
                  value={applicationData?.storageFacilities}
                />
                <DetailRow
                  label="Storage Details"
                  value={applicationData?.storageFacilitiesInfo}
                />
                <DetailRow
                  label="Business Experience"
                  value={applicationData?.experience}
                />
                <DetailRow
                  label="Experience Details"
                  value={applicationData?.experienceDetails}
                />
              </section>

              <section>
                <SectionHeader icon={Truck} title="Transport & Logistics" />
                <DetailRow
                  label="Transport Facilities"
                  value={applicationData?.transportFacilities}
                />
                <DetailRow
                  label="Vehicle Details"
                  value={applicationData?.vehicleDetails}
                />
              </section>

              <section>
                <SectionHeader icon={IndianRupee} title="Investment Detail" />
                <DetailRow
                  label="Investment Capacity"
                  value={applicationData?.investmentCapacity}
                />
              </section>

              <section>
                <SectionHeader icon={IndianRupee} title="Expense Detail" />
                <DetailRow label="Total Bill" value={handlePrice()} />
              </section>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/user/status/see-reciept/see-approval-letter">
              <button
                // onClick={downloadApprovalLetter}
                className="group bg-gradient-to-r w-full from-purple-700 to-purple-800 text-white py-3 px-6 rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-200 flex items-center justify-center gap-3 text-base font-semibold shadow-lg hover:shadow-purple-900/20"
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Approval Letter</span>
              </button>
            </Link>
            <Link href="/user/status/see-reciept/see-invoice">
              <button
                // onClick={downloadInvoice}
                className="group bg-gradient-to-r w-full from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center gap-3 text-base font-semibold shadow-lg hover:shadow-purple-900/20"
              >
                <Receipt className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>see Invoice</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
