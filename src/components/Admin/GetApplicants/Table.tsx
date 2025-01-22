import { useState } from "react";
import { ArrowUpDown, Download, Search } from "lucide-react";
import ExcelJS from "exceljs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { EmailDataProp } from "@/types/EmailData";
import { ApplicantDetailsCard } from "../GetApplicantDetails/card";
import getAllApplicantDetails from "@/services/getApplicantDetails";

export interface DataProp {
  applicantData: EmailDataProp[];
}

export const AllTable = ({ applicantData }: DataProp) => {
  const [data, setData] = useState<EmailDataProp[]>(applicantData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof EmailDataProp | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<
    EmailDataProp[] | null
  >(null);

  console.log(applicantData);

  const handleSort = (key: keyof EmailDataProp) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] && b[key]) {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = applicantData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(term)
      )
    );

    setData(filteredData);
  };

  const exportToExcel = async () => {
    // Only export the currently visible/filtered data
    const visibleData = data;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Applicants");

    // Custom headers for the Excel file
    const headers = [
      "S.No",
      "Applicant Name",
      "Email",
      "Mobile",
      "City",
      "State",
      "Is Verified",
      "Has Paid",
      "Is Form Submitted"
    ];
    worksheet.addRow(headers);
    visibleData.forEach((item, index) => {
      worksheet.addRow([
        index + 1,
        `${item.firstname} ${item.lastname}`,
        item.email,
        item.mobile,
        item.city,
        item.state,
        item.isVerify ? "Yes" : "No",
        item.hasPaid ? "Yes" : "No",
        item.isFormSubmitted ? "Yes" : "No",
        item.business_Types
      ]);
    });

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" }
    };

    worksheet.columns.forEach((column) => {
      let maxLength = 0;
      if (column.eachCell) {
        column.eachCell({ includeEmpty: true }, (cell) => {
          const columnLength = cell.value ? cell.value.toString().length : 10;
          if (columnLength > maxLength) {
            maxLength = columnLength;
          }
        });
      }
      column.width = Math.min(Math.max(maxLength + 2, 10), 30);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `applicants_${new Date().toLocaleDateString()}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  // const handlePrint = async () => {
  //   if (typeof window === "undefined") return;

  //   const element = document.getElementById("Leads");
  //   if (!element) return;

  //   const options = {
  //     margin: [20, 20, 20, 20],
  //     filename: "Campa-Cola-Approval-letter.pdf",
  //     image: { type: "jpeg", quality: 1 },
  //     html2canvas: {
  //       scale: 2,
  //       useCORS: true,
  //       letterRendering: true,
  //       logging: false
  //     },
  //     jsPDF: {
  //       unit: "mm",
  //       format: "a4",
  //       orientation: "portrait",
  //       compress: true
  //     },
  //     pagebreak: { mode: ["", "css", "legacy"] }
  //   };

  //   try {
  //     const html2pdf = (await import("html2pdf.js")).default();
  //     await html2pdf.from(element).set(options).save();
  //   } catch (error) {
  //     console.error("PDF generation failed:", error);
  //   }
  // };

  const handleOnRowClick = async (email: string) => {
    try {
      const res = await getAllApplicantDetails({ params: email });
      setSelectedApplicant(res);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error fetching applicant details:", error);
    }
  };

  return (
    <div className="min-h-screen h-auto bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 md:p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                Applicant Data
              </h1>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button
                  onClick={exportToExcel}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto"
                >
                  <Download className="h-5 w-5" />
                  <span>Export to Excel</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <Table id="Leads" className="min-w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="whitespace-nowrap px-2 sm:px-4">
                          Sno
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("firstname")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            Applicant Name
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("email")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            Email
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("mobile")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            Mobile
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("city")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            City
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("state")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            State
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("business_Types")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            business Type
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("isFormSubmitted")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            isFinalFormSubmitted
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("isVerify")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            isVerify
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead
                          onClick={() => handleSort("hasPaid")}
                          className="cursor-pointer whitespace-nowrap px-2 sm:px-4"
                        >
                          <div className="flex items-center gap-2">
                            hasPaid
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((applicant, index) => (
                        <TableRow
                          key={index}
                          onClick={() => handleOnRowClick(applicant.email)}
                          className="cursor-pointer hover:bg-gray-50"
                        >
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {index + 1}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.firstname} {applicant.lastname}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.email}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.mobile}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.city}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.state}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            {applicant.business_Types}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                applicant.isFormSubmitted
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {applicant.isFormSubmitted ? "yes" : "no"}
                            </span>
                          </TableCell>

                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                applicant.isVerify
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {applicant.isVerify ? "Yes" : "No"}
                            </span>
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-2 sm:px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                applicant.hasPaid
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {applicant.hasPaid ? "Yes" : "No"}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle>
            {selectedApplicant ? (
              <ApplicantDetailsCard
                data={selectedApplicant}
                onClose={() => setIsDialogOpen(false)}
              />
            ) : (
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center items-center font-semibold text-black">
                Loading details...
              </p>
            )}
          </DialogTitle>
        </DialogContent>
      </Dialog>

      {/* <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Download Leads
        </button>
      </div> */}
    </div>
  );
};
