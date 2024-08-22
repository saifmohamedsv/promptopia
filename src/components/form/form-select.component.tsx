import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  type SelectProps,
} from "@chakra-ui/react";
import { useField } from "formik";

type Props = {
  label: string;
  name: string;
} & SelectProps;

export const FormSelect: React.FC<Props> = ({
  label,
  children,
  name = "",
  as = "input",
  ...props
}: Props) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select {...field} id={name} {...(props as any)}>
        {children}
      </Select>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
