"use client";

import type { Prompt } from "@/types/prompt";
import * as Yup from "yup";
import { Formik } from "formik";
import { PromptFormFields, type PromptFormValues } from "./prompt.form.types";
import { Link } from "@chakra-ui/next-js";
import { VStack } from "@chakra-ui/react";
import { FormField, FormSelect } from "@/components/form";
import { promptCategoriesList } from "@/constants/prompt-categories";

interface Props {
  prompt?: Prompt;
  action: (values: PromptFormValues) => void;
}

const PromptFormSchema = Yup.object().shape({
  [PromptFormFields.PROMPT]: Yup.string().required("Prompt is required"),
  [PromptFormFields.CHAT_URL]: Yup.string()
    .url("Enter a valid URL")
    .required("URL is required"),
  [PromptFormFields.TAG]: Yup.string().required("Tag is required"),
});

export function PromptForm({ action, prompt }: Props) {
  const initialValues = {
    ...(prompt?.id ? { [PromptFormFields.ID]: prompt?.id } : {}),
    [PromptFormFields.PROMPT]: prompt?.prompt || "",
    [PromptFormFields.CHAT_URL]: prompt?.chatURL || "",
    [PromptFormFields.TAG]: prompt?.tag || "",
  };

  console.log(initialValues);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PromptFormSchema}
      onSubmit={async (
        values: PromptFormValues,
        { setSubmitting, resetForm }
      ) => {
        await action(values);
        if (!prompt) resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
          <VStack gap={6}>
            <FormField
              label="Prompt"
              name={PromptFormFields.PROMPT}
              as="textarea"
              placeholder="Write your prompt here."
              rows={5}
            />
            <FormField
              as="input"
              label="Chat Link"
              name={PromptFormFields.CHAT_URL}
              placeholder="Paste a chat link."
            />

            <FormSelect
              name={PromptFormFields.TAG}
              label="Select a category"
              placeholder="Choose an option"
            >
              {promptCategoriesList.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </FormSelect>
          </VStack>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" color="gray.400" _hover={{ color: "gray.600" }}>
              Cancel
            </Link>
            <button
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
