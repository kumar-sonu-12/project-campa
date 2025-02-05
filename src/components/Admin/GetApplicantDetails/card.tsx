"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EmailDataProp } from "@/types/EmailData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, User, Lock } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ApplicantData } from "@/config/CardData";

const FormSchema = z.object({
  hasPaid: z.enum(["true", "false"], {
    errorMap: () => ({ message: "Please select payment status." })
  }),
  isVerify: z.enum(["true", "false"], {
    errorMap: () => ({ message: "Please select verification status." })
  }),
  isFormSubmitted: z.enum(["true", "false"], {
    errorMap: () => ({ message: "Please select form submission status." })
  }),
  businessType: z.string()
});

export const ApplicantDetailsCard = ({
  data,
  onClose
}: {
  data: EmailDataProp[];
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [deleteloading, setDeleteLoading] = useState(false);

  console.log("lll", data[0]?.final_form?.franchiseTypes);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hasPaid: data[0].hasPaid ? "true" : "false",
      isVerify: data[0].isVerify ? "true" : "false",
      isFormSubmitted: data[0].isFormSubmitted ? "true" : "false",
      businessType: data[0]?.final_form?.franchiseTypes || ""
    }
  });

  const handleStatusChange = (value: string, itemType: string) => {
    if (itemType === "hasPaid" && !data[0].isVerify) {
      toast.error("User must be verified before changing payment status");
      return false;
    }
    return true;
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/admin/api/delete-applicants`,
        {
          data: { email: data[0].email, mobile: data[0].mobile }
        }
      );

      toast.success(res.data.message);
      setDeleteLoading(false);
      onClose();
    } catch (error) {
      toast.error("Failed to delete applicant.");
      console.error(error);
    }
  };

  const onSubmit = async (response: z.infer<typeof FormSchema>) => {
    try {
      console.log("kk", response.businessType);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/admin/update-applicants`,
        {
          email: data[0].email,
          hasPaid: response.hasPaid === "true",
          isVerify: response.isVerify === "true",
          isFormSubmitted: response.isFormSubmitted === "true",
          businessType: response.businessType
        }
      );
      console.log(res);

      toast.success(res.data.message, {
        style: {
          backgroundColor: "black",
          color: "white"
        }
      });
      setLoading(false);
      onClose();
    } catch (error) {
      toast.error("Failed to update applicant status.");
      console.error(error);
    }
  };

  return (
    <Card className="w-full h-full max-h-[70vh] overflow-y-auto max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Applicant Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">
                    {data[0].firstname} {data[0].lastname}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{data[0].email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Mobile</p>
                  <p className="font-medium">{data[0].mobile}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Password</p>
                  <p className="font-medium">{data[0].password}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    {data[0].city}, {data[0].state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Status Update
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ApplicantData.map((item, index) => {
                if (
                  item.itemType === "businessType" &&
                  index === ApplicantData.length - 1
                ) {
                  return (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name={item.itemType}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{item.type}</FormLabel>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Business Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {[
                                  { value: "dealership", label: "dealership" },
                                  {
                                    value: "superStockist",
                                    label: "superStockist"
                                  },
                                  {
                                    value: "distributorship",
                                    label: "distributorship"
                                  }
                                ].map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </FormItem>
                      )}
                    />
                  );
                }

                return (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name={item.itemType}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{item.type}</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(value) => {
                            if (handleStatusChange(value, item.itemType)) {
                              field.onChange(value);
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {item.selectItem.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option === "true"
                                    ? item.whentrue
                                    : item.whennottrue}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </FormItem>
                    )}
                  />
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <Button
                type="button"
                className="w-[120px]"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => setLoading(true)}
                className="w-[120px]"
              >
                {loading ? "Updating..." : "Update Status"}
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  setDeleteLoading(true);
                  handleDelete();
                }}
                className="w-[120px]"
              >
                {deleteloading ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
