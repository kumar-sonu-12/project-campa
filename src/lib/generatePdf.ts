import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import { EmailDataProp } from "@/types/EmailData";

export const generateApprovalLetter = async (
  data: EmailDataProp,
  fileName: string = "approval_letter.pdf"
) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // Add custom font
  // pdf.addFont(
  //   "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
  //   "Roboto",
  //   "normal"
  // );
  // pdf.addFont(
  //   "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Bold.ttf",
  //   "Roboto",
  //   "bold"
  // );
  // pdf.setFont("Roboto");

  // Background gradient (approximation)
  pdf.setFillColor(62, 21, 86);
  pdf.rect(0, 0, 210, 297, "F");

  // White container
  pdf.setFillColor(255, 255, 255);
  pdf.roundedRect(10, 10, 190, 277, 3, 3, "F");

  // Header
  pdf.setFontSize(24);
  pdf.setTextColor(128, 0, 128);
  // pdf.setFont("Roboto", "bold");
  pdf.setFont("helvetica", "bold");
  const supportedText = "APPROVAL DOCUMENT";
  pdf.text(supportedText, 10, 10);

  // Company Info
  pdf.setFillColor(248, 240, 252);
  pdf.roundedRect(15, 35, 180, 50, 2, 2, "F");

  pdf.setFontSize(14);
  pdf.setTextColor(88, 28, 135);
  pdf.text("CAMPA COLA COMPANY PRIVATE LIMITED", 20, 45);

  pdf.setFontSize(10);
  pdf.setTextColor(75, 0, 130);
  pdf.setFont("helvetica", "bold");
  const companyInfo = [
    "CIN: L17110MH1973PLC019786",
    "PAN: AAACR5055K",
    "GST: 27AAACR5055K1Z7",
    "Email Id: info@rilbusiness.com",
    "Address: Building 10A, 5 TTC Industrial Area, Reliance Corporate Park,",
    "Thane Belapur Road, Ghansoli, Navi Mumbai, Thane, Maharashtra, 400701"
  ];
  companyInfo.forEach((line, index) => {
    pdf.text(line, 20, 55 + index * 5);
  });

  // Company Logo (placeholder)
  // pdf.addImage(
  //   "https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg",
  //   "SVG",
  //   150,
  //   40,
  //   40,
  //   40
  // );

  // Recipient Info
  pdf.setFillColor(237, 233, 254);
  pdf.roundedRect(15, 90, 180, 30, 2, 2, "F");

  pdf.setFontSize(12);
  pdf.setTextColor(88, 28, 135);
  pdf.setFont("helvetica", "normal");
  pdf.text("TO, NAME", 20, 100);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(75, 0, 130);
  pdf.text(`${data.email}`, 20, 107);
  pdf.text(`${data.franchiseState}, ${data.franchisePincode}`, 20, 114);

  pdf.setFont("helvetica", "normal");
  pdf.text(`Phone: ${data.mobile}`, 120, 100);
  pdf.text(`Invoice: #CAMPA${"hjjjh".slice(-4)}`, 120, 107);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 120, 114);

  // Applicant Details
  pdf.setFontSize(14);
  pdf.setTextColor(88, 28, 135);
  pdf.setFont("helvetica", "bold");
  pdf.text("PARTICULARS", 105, 130, { align: "center" });

  const applicantData = [
    { head: "Serial No", label: `CAMPAPVTLTD/${data.mobile}` },
    { head: "Reference No", label: `CAMPAPVTLTD/${data.mobile}` },
    { head: "Application No", label: `CAMPAPVTLTD/${data.mobile}` },
    { head: "Application Name", label: `${data.firstname} ${data.lastname}` },
    {
      head: "Application Address",
      label: `${data.franchiseCity}, ${data.franchiseState}`
    },
    { head: "Site Name", label: `${data.franchiseState}` }
  ];

  applicantData.forEach((item, index) => {
    const y = 140 + index * 10;
    pdf.setFillColor(index % 2 === 0 ? 248 : 237, 240, 254);
    pdf.rect(15, y, 90, 10, "F");
    pdf.rect(105, y, 90, 10, "F");

    pdf.setFontSize(10);
    pdf.setTextColor(88, 28, 135);
    pdf.setFont("Roboto", "bold");
    pdf.text(item.head, 20, y + 7);
    pdf.setFont("Roboto", "normal");
    pdf.setTextColor(75, 0, 130);
    pdf.text(item?.label, 110, y + 7);
  });

  // Terms & Conditions
  pdf.setFontSize(14);
  pdf.setTextColor(88, 28, 135);
  pdf.setFont("helvetica", "bold");
  pdf.text("Terms & Conditions", 20, 210);

  pdf.setFontSize(9);
  pdf.setTextColor(75, 0, 130);
  pdf.setFont("helvetica", "normal");
  const terms = [
    "1. Self-attested copy of Voter Card / Aadhar Card.",
    "2. Self-attested copy of PAN card.",
    "3. Self-attested passport size photograph (two).",
    "4. Copy of property-related documents such as Lease/Rent Agreement/Latest Tax Receipt.",
    "5. Two references from your locality (having good goodwill in the society) with full details.",
    "6. A photograph of the space applied for Campa Cola Franchise.",
    "7. Processing Fee and Agreement fee are totally refundable.",
    "8. Total working days of the project is approx 10 - 14 days."
  ];
  terms.forEach((term, index) => {
    pdf.text(term, 20, 220 + index * 7);
  });

  // Payment Info
  pdf.setFillColor(237, 233, 254);
  pdf.roundedRect(15, 260, 180, 20, 2, 2, "F");

  pdf.setFontSize(10);
  pdf.setTextColor(75, 0, 130);
  pdf.text(
    "Payment Mode: You can make payment through NEFT/RTGS/IMPS/Net Banking.",
    20,
    270
  );
  pdf.text(
    "Note: Cash deposits are not allowed as per company rules and regulations.",
    20,
    275
  );

  pdf.save(fileName);
};

export const generateInvoice = async (
  data: EmailDataProp,
  fileName: string = "invoice.pdf"
) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  pdf.setFontSize(20);
  pdf.setTextColor(62, 21, 86);
  pdf.text("CAMPA COLA", 105, 20, { align: "center" });

  pdf.setFontSize(16);
  pdf.text("DISTRIBUTORSHIP INVOICE", 105, 30, { align: "center" });

  // Add invoice details
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  const invoiceNo = `INV-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;
  pdf.text(`Invoice No: ${invoiceNo}`, 20, 45);
  pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);

  pdf.setFontSize(11);
  pdf.text("Distributor Details:", 20, 65);
  pdf.setFontSize(10);
  pdf.text(`Name: ${data.firstname} ${data.lastname}`, 20, 72);
  pdf.text(`Business: ${data.businessName}`, 20, 77);
  pdf.text(
    `Address: ${data.franchiseCity}, ${data.franchiseState} - ${data.franchisePincode}`,
    20,
    82
  );

  pdf.setFillColor(62, 21, 86);
  pdf.setTextColor(255, 255, 255);
  pdf.rect(20, 95, 170, 10, "F");
  pdf.text("Description", 25, 101);
  pdf.text("Amount (₹)", 160, 101);

  pdf.setTextColor(0, 0, 0);
  pdf.text("Distributorship Registration Fee", 25, 115);
  pdf.text("50,000.00", 160, 115);

  pdf.text("Processing Fee", 25, 125);
  pdf.text("10,000.00", 160, 125);

  // Add total
  pdf.setFillColor(240, 240, 240);
  pdf.rect(20, 135, 170, 10, "F");
  pdf.setFont("helvetica", "bold");
  pdf.text("Total Amount", 25, 141);
  pdf.text("60,000.00", 160, 141);

  // Add terms and conditions
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text("Terms and Conditions:", 20, 160);
  const terms = [
    "1. All fees are non-refundable",
    "2. This invoice is valid for 30 days from the date of issue",
    '3. Payment to be made in favor of "Campa Cola Distribution"',
    "4. Subject to jurisdiction of courts in respective state"
  ];
  terms.forEach((term, index) => {
    pdf.text(term, 20, 167 + index * 5);
  });

  // Add footer
  pdf.setFontSize(8);
  pdf.setTextColor(100, 100, 100);
  pdf.text(
    "This is a computer-generated invoice and does not require a signature.",
    105,
    280,
    { align: "center" }
  );

  pdf.save(fileName);
};
