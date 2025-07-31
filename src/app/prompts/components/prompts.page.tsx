import { Feed } from "@/app/components/feed.component";
import { Container, Heading, VStack } from "@chakra-ui/react";

export function PromptsPage() {
  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" bgGradient="linear(to-r, brand.500, accent.500)" bgClip="text">
          Explore Prompts
        </Heading>
        <Feed />
      </VStack>
    </Container>
  );
}
