import { z } from "zod";
import { FinalFormDataArray } from "./FinalFormData";

export const generateZodSchema = (formDataArray: typeof FinalFormDataArray) => {
  const schemaObject: Record<string, z.ZodSchema> = {};

  formDataArray.forEach((field) => {
    if (field.zod) {
      switch (field.zod) {
        case "string":
          schemaObject[field.id] = z
            .string()
            .min(1, `${field.label} is required`);
          break;
        case "email":
          schemaObject[field.id] = z
            .string()
            .email(`${field.label} must be a valid email`);
          break;
        case "tel":
          schemaObject[field.id] = z
            .string()
            .length(10, `${field.label} must be 10 digits`)
            .regex(/^\d+$/, `${field.label} must be a valid number`);
          break;
        case "number":
          schemaObject[field.id] = z
            .string()
            .regex(/^\d+$/, `${field.label} must be a valid number`);
          break;
        case "pincode":
          schemaObject[field.id] = z
            .string()
            .length(6, `${field.label} must be exactly 6 digits`)
            .regex(/^\d+$/, `${field.label} must be a valid pincode`);
          break;
        case "checkbox":
          schemaObject[field.id] = z.boolean().refine((val) => val === true, {
            message: `${field.label} is required`
          });
          break;
        case "optional":
          schemaObject[field.id] = z.string().optional();
          break;
        default:
          schemaObject[field.id] = z.string();
          break;
      }
    }

    if (field.type === "dropdown") {
      schemaObject[field.id] = z.string().min(1, `${field.label} is required`);
    }
  });

  return z.object(schemaObject);
};
