"use client";

import { PromptFormFields, type PromptFormValues, type Prompt } from "@/types/prompt";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Link } from "@chakra-ui/next-js";
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { promptCategoriesList } from "@/constants/prompt-categories";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  prompt?: Prompt;
  action: (values: PromptFormValues) => void;
}

const PromptFormSchema = Yup.object().shape({
  [PromptFormFields.PROMPT]: Yup.string().required("Prompt is required"),
  [PromptFormFields.CHAT_URL]: Yup.string().url("Enter a valid URL").required("URL is required"),
  [PromptFormFields.TAG]: Yup.string().required("Tag is required"),
});

export function PromptForm({ prompt, action }: Props) {
  const initialValues: PromptFormValues = {
    [PromptFormFields.ID]: prompt?.id || "",
    [PromptFormFields.PROMPT]: prompt?.prompt || "",
    [PromptFormFields.CHAT_URL]: prompt?.chatURL || "",
    [PromptFormFields.TAG]: prompt?.tag || "",
  };

  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("rgba(226, 232, 240, 0.7)", "rgba(74, 85, 104, 0.7)");
  const inputBgColor = useColorModeValue("rgba(247, 250, 252, 0.8)", "rgba(45, 55, 72, 0.5)");

  return (
    <Box
      bg={bgColor}
      borderRadius="3xl"
      p={8}
      boxShadow="xl"
      borderWidth={1}
      borderColor={borderColor}
      backdropFilter="blur(10px)"
      transition="all 0.3s"
      _hover={{ boxShadow: "2xl", transform: "translateY(-5px)" }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        backgroundImage="radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 10.5%), radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 10.5%)"
        backgroundSize="50px 50px"
        backgroundPosition="0 0, 25px 25px"
        transform="rotate(45deg)"
        zIndex={0}
      />
      <Box position="relative" zIndex={1}>
        <Heading as="h2" size="xl" mb={6} bgGradient="linear(to-r, brand.500, accent.500)" bgClip="text">
          {prompt ? "Edit Your Prompt" : "Create a New Prompt"}
        </Heading>
        <Text fontSize="lg" mb={8} color={useColorModeValue("gray.600", "gray.300")}>
          Share your creative ideas with the AI community
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={PromptFormSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await action(values);
            if (!prompt) resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <VStack spacing={6} align="stretch">
                <Field name={PromptFormFields.PROMPT}>
                  {({ field }) => (
                    <FormControl isInvalid={!!errors.prompt && touched.prompt}>
                      <FormLabel fontWeight="medium" color={textColor}>
                        Prompt
                      </FormLabel>
                      <Textarea
                        {...field}
                        placeholder="Write your creative prompt here..."
                        rows={5}
                        bg={inputBgColor}
                        borderColor={borderColor}
                        _hover={{ borderColor: "brand.300" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                        color={textColor}
                        backdropFilter="blur(5px)"
                      />
                      <FormErrorMessage>{errors.prompt}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name={PromptFormFields.CHAT_URL}>
                  {({ field }) => (
                    <FormControl isInvalid={!!errors.chatURL && touched.chatURL}>
                      <FormLabel fontWeight="medium" color={textColor}>
                        Chat Link
                      </FormLabel>
                      <Input
                        {...field}
                        placeholder="Paste your chat link here"
                        bg={inputBgColor}
                        borderColor={borderColor}
                        _hover={{ borderColor: "brand.300" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                        color={textColor}
                        backdropFilter="blur(5px)"
                      />
                      <FormErrorMessage>{errors.chatURL}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name={PromptFormFields.TAG}>
                  {({ field }) => (
                    <FormControl isInvalid={!!errors.tag && touched.tag}>
                      <FormLabel fontWeight="medium" color={textColor}>
                        Category
                      </FormLabel>
                      <Select
                        {...field}
                        placeholder="Choose a category"
                        bg={inputBgColor}
                        borderColor={borderColor}
                        _hover={{ borderColor: "brand.300" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                        color={textColor}
                        backdropFilter="blur(5px)"
                      >
                        {promptCategoriesList.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage>{errors.tag}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  type="submit"
                  colorScheme="brand"
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  size="lg"
                  width="full"
                  backdropFilter="blur(5px)"
                  bgGradient="linear(to-r, brand.500, accent.500)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, brand.600, accent.600)",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  {prompt ? "Update Prompt" : "Create Prompt"}
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
