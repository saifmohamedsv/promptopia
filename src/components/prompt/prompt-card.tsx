"use client";

import type { Prompt } from "@/types/prompt";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CopyButton } from "../copy-button";
import { Box, Text, Flex, Avatar, Tag, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon, EditIcon, DeleteIcon, ChatIcon } from "@chakra-ui/icons";

interface Props {
  prompt: Prompt;
}

export function PromptCard({ prompt }: Props) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const isCreator = session?.user?.id === prompt?.creator?.id;

  const {
    creator: { image, username, email },
    creatorId,
    chatURL,
    id,
    prompt: promptContent,
    tag,
  } = prompt;

  const trimmedPrompt = promptContent.length > 200 ? promptContent.slice(0, 200) + "..." : promptContent;
  const trimmedEmail = email.length > 18 ? email.slice(0, 19) + "..." : email;

  const handleCategoryClick = (category: string) => router.push(`/?term=${category}`);

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius="2xl"
      p={6}
      boxShadow="lg"
      borderWidth={1}
      borderColor="neutral.200"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      height="100%"
    >
      <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Flex
          onClick={() => !isCreator && router.push(`/profile/${creatorId}`)}
          alignItems="center"
          cursor={!isCreator ? "pointer" : "default"}
        >
          <Avatar src={image} size="md" mr={3} />
          <Box>
            <Text fontWeight="bold" color="neutral.800" title={email}>
              {trimmedEmail}
            </Text>
            <Text fontSize="sm" color="neutral.500">
              {username}
            </Text>
          </Box>
        </Flex>
        <CopyButton textToCopy={promptContent} />
      </Flex>

      <Text fontSize="lg" fontWeight="medium" mb={4} color="neutral.700" noOfLines={3} flex="1">
        {trimmedPrompt}
      </Text>

      <Box mt="auto">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Tag
            size="md"
            variant="subtle"
            colorScheme="accent"
            borderRadius="full"
            px={3}
            py={1}
            cursor="pointer"
            onClick={() => handleCategoryClick(tag)}
          >
            #{tag.toLowerCase().replaceAll(" ", "_")}
          </Tag>
          <IconButton
            as={Link}
            href={chatURL}
            isExternal
            aria-label="Go to chat"
            icon={<ChatIcon />}
            size="sm"
            colorScheme="brand"
            variant="ghost"
          />
        </Flex>

        {isCreator && pathname === "/profile" && (
          <Flex mt={4} justifyContent="flex-end">
            <IconButton
              aria-label="Edit prompt"
              icon={<EditIcon />}
              size="sm"
              variant="ghost"
              colorScheme="blue"
              mr={2}
              onClick={() => router.push(`/prompt/${prompt.id}`)}
            />
            <IconButton aria-label="Delete prompt" icon={<DeleteIcon />} size="sm" variant="ghost" colorScheme="red" />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
