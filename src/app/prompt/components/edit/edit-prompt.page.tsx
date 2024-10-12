import prisma from "@/lib/db";
import { PromptForm } from "../form/prompt.form";
import type { Prompt } from "@/types/prompt";
import { editPrompt } from "@/actions/prompt";
import { findPromptById } from "@/actions/prompt";
import { Container, VStack } from "@chakra-ui/react";

export default async function EditPromptPage({ params }: { params: { id: string } }) {
  const prompt = await findPromptById(params.id);

  return (
    <Container maxW="container.md" py={12}>
      <VStack spacing={8} align="stretch">
        <PromptForm prompt={prompt as Prompt} action={editPrompt} />
      </VStack>
    </Container>
  );
}
