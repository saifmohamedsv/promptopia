"use client";

import { Container, VStack } from "@chakra-ui/react";
import { PromptForm } from "../form";
import { createPrompt } from "@/actions/prompt";

export default function CreatePromptPage() {
  return (
    <Container maxW="container.md" py={12}>
      <VStack spacing={8} align="stretch">
        <PromptForm action={createPrompt} />
      </VStack>
    </Container>
  );
}
