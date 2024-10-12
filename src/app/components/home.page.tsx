"use client";
import { Feed } from "./feed.component";
import { Box, Heading, Text, VStack, Container, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function HomePage() {
  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={16} align="stretch">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bg="white"
          borderRadius="3xl"
          p={12}
          boxShadow="xl"
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
          <VStack align="flex-start" spacing={6} zIndex={1} flex={1}>
            <Heading as="h1" size="4xl" bgGradient="linear(to-r, brand.500, accent.500)" bgClip="text">
              Discover & Share
              <br />
              AI Prompts
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Promptopia: Where creativity meets artificial intelligence. Explore, create, and share innovative prompts
              to inspire your AI-powered projects.
            </Text>
            <Button as={Link} href="/prompt" size="lg" colorScheme="brand">
              Start Creating
            </Button>
          </VStack>
          <Box flex={1} ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_23-2149246003.jpg?w=1800&t=st=1728768220~exp=1728768820~hmac=9ca554ade1f1f33e2f0d8876276f8556e9c65e79e8ba735efd33c4ffd1b5e730"
              alt="AI Illustration"
              borderRadius="2xl"
            />
          </Box>
        </Flex>
        <Feed />
      </VStack>
    </Container>
  );
}
