"use client";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import getAllApplicantDetails from "@/services/getApplicantDetails";
import { EmailDataProp } from "@/types/EmailData";
import { ApplicantDetailsCard } from "../GetApplicantDetails/card";

export interface DataProp {
  applicantData: EmailDataProp[];
}

export const AllTable = ({ applicantData }: DataProp) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<
    EmailDataProp[] | null
  >(null);

  const handleOnRowClick = async (email: string) => {
    try {
      const res = await getAllApplicantDetails({ params: email });
      console.log(res);
      setSelectedApplicant(res);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error fetching applicant details:", error);
    }
  };

  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sno</TableHead>
            <TableHead>Applicant Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead>isVerify</TableHead>
            <TableHead>hasPaid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicantData.map((applicant, index) => (
            <TableRow
              key={index}
              onClick={() => handleOnRowClick(applicant.email)}
              className="cursor-pointer"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {applicant.firstname} {applicant.lastname}
              </TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>{applicant.mobile}</TableCell>
              <TableCell>{applicant.city}</TableCell>
              <TableCell>{applicant.state}</TableCell>
              <TableCell>{`${applicant.isVerify}`}</TableCell>
              <TableCell>{`${applicant.hasPaid}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {/* <DialogHeader>
           
          // </DialogHeader> */}
          <DialogTitle>
            {selectedApplicant ? (
              <ApplicantDetailsCard
                data={selectedApplicant}
                onClose={() => {
                  setIsDialogOpen(false);
                }}
              />
            ) : (
              <p className="text-5xl flex justify-center items-center font-semibold text-black">
                Loading details...
              </p>
            )}
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
};
