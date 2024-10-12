"use client";

import { PromptCard } from "@/components/prompt";
import { Input, VStack, SimpleGrid, Text, Box, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { usePrompts } from "@/hooks";
import { Loader } from "@/components/ui";
import { useSearchInput } from "@/hooks/use-search-input.hook";
import type { Prompt } from "@prisma/client";
import type { Prompt as ClientPrompt } from "@/types/prompt";
import { SearchIcon } from "@chakra-ui/icons";

export function Feed() {
  const { searchTerm, handleSearchChange, debouncedSearchTerm } = useSearchInput(500);
  const { prompts, loading } = usePrompts(debouncedSearchTerm);

  const renderPrompts = () => {
    if (loading) {
      return <Loader />;
    }

    if (!prompts.length && !loading) {
      return (
        <Text fontSize="xl" textAlign="center" color="gray.600">
          No prompts found. Be the first to create one!
        </Text>
      );
    }

    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {prompts.map((prompt: Prompt) => (
          <PromptCard prompt={prompt as ClientPrompt} key={prompt.id} />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <VStack spacing={12} width="100%">
      <Box w="full" bg="white" borderRadius="2xl" p={4} boxShadow="xl" backdropFilter="blur(10px)">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="brand.500" mt={2} />
          </InputLeftElement>
          <Input
            placeholder="Search prompts, tags, or usernames"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            size="lg"
            _placeholder={{ color: "gray.400" }}
            bg="white"
            color="gray.700"
            borderColor="gray.200"
            _hover={{ borderColor: "brand.400" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          />
        </InputGroup>
      </Box>
      {renderPrompts()}
    </VStack>
  );
}
