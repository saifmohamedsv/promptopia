"use client";

import { PromptCard } from "@/components/prompt";
import { Loader } from "@/components/ui";
import type { Prompt } from "@/types/prompt";
import type { User } from "@prisma/client";
import { Box, Heading, Text, VStack, SimpleGrid, Avatar, Container, Flex, Badge } from "@chakra-ui/react";

interface Props {
  user: User;
  data: Prompt[];
}

export function ProfilePage({ user, data }: Props) {
  const username = user?.username.toWellFormed();

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={16} align="stretch">
        <Box bg="gray.800" backdropFilter="blur(10px)" borderRadius="3xl" p={12} boxShadow="xl">
          <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
            <Avatar size="2xl" name={username} src={user.image || undefined} mb={{ base: 6, md: 0 }} mr={{ md: 12 }} />
            <VStack align={{ base: "center", md: "start" }} spacing={4}>
              <Heading as="h1" size="3xl" bgGradient="linear(to-r, teal.400, orange.400)" bgClip="text">
                {username}
              </Heading>
              <Text fontSize="xl" color="gray.200">
                {user.email}
              </Text>
              <Badge colorScheme="teal" fontSize="md" px={4} py={2} borderRadius="full">
                {data.length} Prompts Created
              </Badge>
            </VStack>
          </Flex>
        </Box>

        <Box>
          <Heading as="h2" size="2xl" mb={8} bgGradient="linear(to-r, teal.400, orange.400)" bgClip="text">
            My Prompts
          </Heading>
          {!data.length ? (
            <Loader />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {data.map((prompt) => (
                <PromptCard prompt={prompt as Prompt} key={prompt.id} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Container>
  );
}
