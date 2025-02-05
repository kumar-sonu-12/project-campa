"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { z } from "zod";
import { TitleHead } from "@/components/ui/TypoGraphy/ContactFormTypography";
import { FormDataArray } from "@/config/ContactFormData";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { generateZodSchema } from "@/config/ContactFormSchemaData";
import { useFormSubmit } from "@/hooks/useSubmitResponse";
import { FinalFormDataArray } from "@/config/FinalFormData";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export const ContactFormMain = ({ mainForm }: { mainForm: boolean }) => {
  const router = useRouter();
  const schema = generateZodSchema(
    mainForm ? FinalFormDataArray : FormDataArray
  );
  const defaultValues = mainForm
    ? FinalFormDataArray
    : FormDataArray.reduce(
        (acc, field) => ({
          ...acc,
          [field.id]: field.type === "dropdown" ? "" : ""
        }),
        {}
      );

  const { submit } = useFormSubmit({
    routeUrls: [
      `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/user/send-email`,
      `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/user/submit-form`
    ],
    successMessage: "form submitted",
    mainForm
  });
  const FormArray = mainForm ? FinalFormDataArray : FormDataArray;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
    await submit(data);
    if (mainForm) {
      router.push("/user/status");
    }
  };

  return (
    <div
      id="Franchise-Application"
      style={{
        background: `
          radial-gradient(
          50% 80% at 50% 100%, 
          #673C96 0%, 
          #56327D 35%, 
          #211330 100%
        )`
      }}
      className="min-h-screen px-[16px] sm:px-6 lg:px-20 py-10 flex flex-col items-center gap-10 mt-0 relative"
    >
      <Image
        src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734393655/gc1dkcw6rozqcxpacdzs.svg"
        layout="fill"
        alt="main bg image"
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734393655/gc1dkcw6rozqcxpacdzs.svg"
        className="absolute inset-0 object-cover opacity-50"
      />
      <TitleHead>Contact Campa Cola Today!</TitleHead>
      <div
        style={{
          borderRadius: "11px",
          background: "linear-gradient(180deg, #582590 0%, #1A0B2A 100%)",
          boxShadow: "0px 0px 17.5px rgba(0, 0, 0, 0.25)"
        }}
        className="w-full max-w-3xl p-6 backdrop-blur-md"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-none md:grid md:grid-cols-2 gap-6"
          >
            {FormArray.map((data) => {
              switch (data.type) {
                case "text":
                case "email":
                case "tel":
                  return (
                    <FormField
                      key={data.id} // Use unique key here
                      control={form.control}
                      name={data.id}
                      render={({ field }) => (
                        <FormItem className={data.className}>
                          <FormLabel className="text-sm font-bold text-white">
                            {data.label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="py-[14px]"
                              type={data.type}
                              placeholder={data.placeholder}
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );

                case "text-area":
                  return (
                    <FormField
                      key={data.id} // Use unique key here
                      control={form.control}
                      name={data.id}
                      render={({ field }) => (
                        <FormItem className={data.className}>
                          <FormLabel className="text-sm font-bold text-white">
                            {data.label}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="py-[14px]"
                              // type={data.type}
                              placeholder={data.placeholder}
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                case "heading":
                  return (
                    <FormLabel key={data.id} className={data.className}>
                      <div className="text-[#E7D2FF] mt-2 w-full text-[18px] sm:text-[22px] font-[900] leading-normal ">
                        {data.label}
                      </div>
                    </FormLabel>
                  );
                case "dropdown":
                  return (
                    <FormField
                      key={data.id} // Use unique key here
                      control={form.control}
                      name={data.id}
                      render={({ field }) => (
                        <FormItem className={data.className}>
                          <FormLabel className="text-sm font-bold text-white">
                            {data.label}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ?? ""}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={data.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {data.options?.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                default:
                  return null;
              }
            })}
            <Button
              type="submit"
              className="col-span-2 h-14 flex justify-center items-center text-xl font-semibold bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 hover:border hover:border-yellow-400 rounded-md"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
