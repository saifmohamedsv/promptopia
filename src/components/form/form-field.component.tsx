import React, { type HTMLAttributes, type HTMLProps } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  type InputProps,
  type TextareaProps,
} from "@chakra-ui/react";
import { useField } from "formik";

type FormFieldProps = {
  label: string;
  name: string;
  as?: "input" | "textarea";
} & (InputProps | TextareaProps);

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name = "",
  as = "input",
  ...props
}: FormFieldProps) => {
  const [field, meta] = useField(name);
  const isTextarea = as === "textarea";
  const Component = isTextarea ? Textarea : Input;

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Component {...field} id={name} {...(props as any)} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
