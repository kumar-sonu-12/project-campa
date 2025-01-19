import { z } from "zod";
import { LoginFormData } from "./loginFormData";

export const generateZodSchema = (loginFormData: typeof LoginFormData) => {
  const schemaObject: Record<string, z.ZodSchema> = {};

  loginFormData.forEach((field) => {
    if (field.zod) {
      switch (field.zod) {
        case "email":
          schemaObject[field.id] = z
            .string()
            .email(`${field.label} must be a valid email`);
          break;
        case "password":
          schemaObject[field.id] = z
            .string()
            .min(6, `${field.label} must be 6 digits number`);
          break;
        case "optional":
          schemaObject[field.id] = z.string().optional();
          break;
        default:
          break;
      }
    }
  });

  return z.object(schemaObject);
};
