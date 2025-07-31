"use client";
import { Feed } from "./feed.component";
import { Box, Heading, Text, VStack, Container, Button, Flex, Image, SimpleGrid, Avatar, Stack, Icon, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SearchIcon, EditIcon, ChatIcon } from "@chakra-ui/icons";

export function HomePage() {
  const { data: session } = useSession();
  const bgGradient = useColorModeValue(
    "linear(to-br, brand.50, gray.50)",
    "linear(to-br, gray.900, brand.900)"
  );

  return (
    <Box  minH="100vh">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={32} align="stretch">
          {/* Hero Section */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="center"
            minH={{ base: "70vh", lg: "80vh" }}
            gap={{ base: 12, lg: 20 }}
          >
            <VStack 
              align={{ base: "center", lg: "flex-start" }} 
              spacing={8} 
              maxW="600px"
              flex={1}
            >
              <Box>
                <Text 
                  color="brand.500" 
                  fontWeight="semibold" 
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Welcome to Promptopia
                </Text>
                <Heading
                  as="h1"
                  size="3xl"
                  lineHeight="1.2"
                  fontWeight="extrabold"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Craft Perfect
                  <Text as="span" color="brand.500" position="relative" _after={{
                    content: '""',
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "brand.50",
                    zIndex: -1,
                  }}> AI Prompts</Text>
                  <Text>Together</Text>
                </Heading>
              </Box>
              <Text
                fontSize="xl"
                color="gray.600"
                textAlign={{ base: "center", lg: "left" }}
                maxW="480px"
              >
                Join our community of innovators who are revolutionizing the way we interact with AI. Create, share, and discover powerful prompts.
              </Text>
              <Stack 
                direction={{ base: "column", sm: "row" }} 
                spacing={4}
                w={{ base: "full", sm: "auto" }}
              >
                <Button
                  as={Link}
                  href="/prompts"
                  size="lg"
                  colorScheme="brand"
                  px={8}
                  height="60px"
                  fontSize="lg"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  Explore Prompts
                </Button>
                <Button
                  as={Link}
                  href="/create-prompt"
                  size="lg"
                  variant="ghost"
                  px={8}
                  height="60px"
                  fontSize="lg"
                  _hover={{
                    bg: "brand.50",
                  }}
                >
                  Create Prompt
                </Button>
              </Stack>
            </VStack>
            <Box 
              flex={1} 
              maxW="600px"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "140%",
                height: "140%",
                bg: "brand.50",
                borderRadius: "full",
                zIndex: -1,
              }}
            >
              <Image
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_23-2149246003.jpg?w=1800&t=st=1728768220~exp=1728768820~hmac=9ca554ade1f1f33e2f0d8876276f8556e9c65e79e8ba735efd33c4ffd1b5e730"
                alt="AI Illustration"
                borderRadius="3xl"
                objectFit="cover"
                w="100%"
                h="auto"
                transform="scale(1.0)"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
            </Box>
          </Flex>

          {/* Features Section */}
          <Box py={20}>
            <VStack spacing={16}>
              <Box textAlign="center" maxW="800px" mx="auto">
                <Text 
                  color="brand.500" 
                  fontWeight="semibold" 
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Features
                </Text>
                <Heading size="2xl" mb={4}>
                  Everything you need to
                  <Text as="span" color="brand.500"> master AI prompts</Text>
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Powerful tools and features designed to help you create and share better AI prompts
                </Text>
              </Box>
              <SimpleGrid 
                columns={{ base: 1, md: 3 }} 
                spacing={12} 
                w="full"
              >
                {[
                  {
                    title: "Discover",
                    icon: SearchIcon,
                    description: "Find curated prompts that deliver exceptional results.",
                  },
                  {
                    title: "Create",
                    icon: EditIcon,
                    description: "Share your expertise and build your reputation.",
                  },
                  {
                    title: "Collaborate",
                    icon: ChatIcon,
                    description: "Join a community of prompt engineering enthusiasts.",
                  },
                ].map((feature, index) => (
                  <VStack
                    key={index}
                    align="flex-start"
                    p={8}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-8px)",
                      boxShadow: "xl",
                    }}
                    position="relative"
                    overflow="hidden"
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      bg: "brand.500",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    _hover={{
                      _after: {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    <Box
                      p={4}
                      bg="brand.50"
                      borderRadius="xl"
                      color="brand.500"
                    >
                      <feature.icon boxSize={6} />
                    </Box>
                    <Text fontSize="xl" fontWeight="bold" mt={4}>
                      {feature.title}
                    </Text>
                    <Text color="gray.600">
                      {feature.description}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Social Proof Section */}
          <Box 
            bg="gray.50" 
            py={20} 
            px={8} 
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(circle at 20% 20%, rgba(66, 153, 225, 0.1) 0%, transparent 50%)",
            }}
          >
            <VStack spacing={12} position="relative">
              <Box textAlign="center" maxW="800px" mx="auto">
                <Text 
                  color="brand.500" 
                  fontWeight="semibold" 
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Testimonials
                </Text>
                <Heading size="2xl" mb={4}>
                  Trusted by prompt engineers
                  <Text as="span" color="brand.500"> worldwide</Text>
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Join thousands of satisfied users who are already creating amazing AI experiences
                </Text>
              </Box>
              <SimpleGrid 
                columns={{ base: 1, md: 2 }} 
                spacing={8} 
                maxW="4xl" 
                mx="auto"
              >
                {[
                  {
                    name: "Sarah K.",
                    role: "AI Researcher",
                    quote: "Promptopia has revolutionized how I approach AI development.",
                  },
                  {
                    name: "Mark T.",
                    role: "Content Creator",
                    quote: "The collaborative environment here is unlike anything else.",
                  },
                ].map((testimonial, index) => (
                  <Box
                    key={index}
                    p={8}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "md",
                    }}
                  >
                    <Text fontSize="lg" mb={6} color="gray.700">
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center">
                      <Avatar 
                        size="md" 
                        mr={4} 
                        bg="brand.500"
                        transition="all 0.3s"
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                      />
                      <Box>
                        <Text fontWeight="bold">{testimonial.name}</Text>
                        <Text fontSize="sm" color="gray.500">{testimonial.role}</Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Call to Action */}
          <Box
            bg="brand.500"
            color="white"
            borderRadius="3xl"
            p={{ base: 8, md: 16 }}
            textAlign="center"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
            }}
          >
            <VStack spacing={8} maxW="2xl" mx="auto" position="relative">
              <Heading as="h2" size="2xl">
                Start Your AI Journey Today
              </Heading>
              <Text fontSize="xl" opacity={0.9}>
                Join thousands of creators who are pushing the boundaries of AI
              </Text>
              <Button
                as={Link}
                href={session ? "/prompts" : "/api/auth/signin"}
                size="lg"
                bg="white"
                color="brand.500"
                _hover={{
                  bg: "gray.100",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                px={12}
                height="60px"
                fontSize="lg"
                transition="all 0.2s"
              >
                {session ? "Explore Prompts" : "Get Started Free"}
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
