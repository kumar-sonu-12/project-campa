"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginFormData } from "@/config/loginFormData";
import { generateZodSchema } from "@/config/LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginModal } from "./LoginModal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/signinwithgoogle";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const schema = generateZodSchema(LoginFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleModalClose = () => setIsModalOpen(false);

  const defaultValues = LoginFormData.reduce(
    (acc, field) => ({
      ...acc,
      [field.id]: field.type === "dropdown" ? "" : ""
    }),
    {}
  );

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        { email: data.email }
      );

      if (response.data.isAdmin) {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const token = await signInWithGoogle();

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ROUTE_URL}/user/api/login`,
        { token }
      );
      if (response.data.isAdmin) {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-screen flex flex-col p-5 justify-center items-center min-h-screen h-auto"
      style={{
        background: `
          radial-gradient(
          50% 80% at 50% 100%, 
          #673C96 0%, 
          #56327D 35%, 
          #211330 100%
        )`
      }}
    >
      <div className="max-w-3xl flex flex-col gap-5">
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormLabel className="font-merienda font-[700] text-4xl text-white text-left">
              Login
            </FormLabel>
            <div className="">
              {LoginFormData.map((data, index) => {
                if (["text"].includes(data.type)) {
                  return (
                    <FormField
                      key={index}
                      control={form.control}
                      name={data.id}
                      render={({ field }) => (
                        <FormItem className="mt-3">
                          <FormLabel className="text-sm font-bold mt-[100px] text-white">
                            {data.label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="py-5"
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
                }
                return null;
              })}
            </div>
            <Button
              type="submit"
              variant="default"
              className="text-lg py-5 font-semibold bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 hover:border hover:border-yellow-400 rounded-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
        <Button
          type="button"
          variant="default"
          onClick={handleGoogleLogin}
          className="text-lg max-w-[600px] py-5 font-semibold bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 hover:border hover:border-yellow-400 rounded-md"
        >
          Login via Google
        </Button>
      </div>
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        label="Wait, your application is getting verified"
      />
    </div>
  );
};
