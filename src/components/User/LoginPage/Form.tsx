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
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/signinwithgoogle";
import { Building2 } from "lucide-react";
import { signInWithEmail } from "@/lib/firebase/signinwithemail";

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
    console.log(data);
    try {
      setLoading(true);
      const user = await signInWithEmail(data.email, data.password);
      // console.log(user);

      if (user.isAdmin) {
        router.push("/admin");
      } else if (user.isVerify) {
        router.push("/user");
      }
    } catch (error) {
      console.error("Email Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const user = await signInWithGoogle();
      // console.log(user);
      if (user.isAdmin) {
        router.push("/admin");
      }
      if (user.isVerify && !user.isAdmin) {
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-8 lg:py-16"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #673C96 0%, #56327D 24.5%, #211330 100%)"
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="w-full max-w-[440px] relative">
        <div className="relative bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-lg shadow-[0_4px_24px_rgba(103,60,150,0.15)] border border-white/[0.08]">
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            <div className="mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] rounded-2xl shadow-inner border border-white/[0.08]">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white/90" />
                </div>
                <div className="absolute -inset-px bg-gradient-to-b from-white/[0.15] to-transparent rounded-2xl blur-[2px]" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-[32px] font-semibold text-white mb-2 tracking-[-0.01em] text-center">
              Enterprise Portal
            </h1>
            <p className="text-white/50 text-sm sm:text-base font-normal text-center">
              Please authenticate to proceed
            </p>
          </div>

          <Form {...form}>
            <form
              className="space-y-4 sm:space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {LoginFormData.map((data, index) => {
                if (["text"].includes(data.type)) {
                  return (
                    <FormField
                      key={index}
                      control={form.control}
                      name={data.id}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs sm:text-[13px] font-medium text-white/70 mb-1.5 block">
                            {data.label.toUpperCase()}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-10 sm:h-12 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30 focus:border-white/20 focus:ring-white/10 rounded-lg transition-all duration-200 text-sm sm:text-base"
                              type={data.type}
                              placeholder={data.placeholder}
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300/90 text-xs sm:text-sm mt-1.5" />
                        </FormItem>
                      )}
                    />
                  );
                }
                return null;
              })}

              <div className="space-y-3 sm:space-y-4 pt-2">
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-12 bg-white text-[#211330] hover:bg-white/90 font-medium rounded-lg transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? "Authenticating..." : "Authenticate"}
                </Button>

                <div className="relative py-3 sm:py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/[0.08]"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-4 text-white/40 bg-[#211330] uppercase tracking-wider">
                      or continue with google
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full h-10 sm:h-12 bg-transparent text-white hover:bg-white/[0.04] font-medium rounded-lg border border-white/[0.08] transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? "Connecting..." : "Continue with Google"}
                </Button>
              </div>
            </form>
          </Form>

          <p className="mt-6 sm:mt-8 text-center text-white/40 text-xs sm:text-sm">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>

      <LoginModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        label="Wait, your application is getting verified"
      />
    </div>
  );
};
