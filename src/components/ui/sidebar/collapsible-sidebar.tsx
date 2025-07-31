"use client";

import { useState } from "react";
import { Box, VStack, IconButton, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, ChatIcon, ViewIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  if (!session) return null;

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      width={isOpen ? "200px" : "60px"}
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      transition="width 0.3s"
      zIndex={1000}
    >
      <IconButton
        aria-label="Toggle Sidebar"
        icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        onClick={() => setIsOpen(!isOpen)}
        position="absolute"
        right="-15px"
        top="20px"
        zIndex={2}
      />
      <VStack spacing={6} align="stretch" mt={16} px={4}>
        <Link href="/favorites" passHref>
          <Flex as="a" align="center">
            <StarIcon mr={2} />
            {isOpen && <Text>Favorites</Text>}
          </Flex>
        </Link>
        <Link href="/profile" passHref>
          <Flex as="a" align="center">
            <ChatIcon mr={2} />
            {isOpen && <Text>My Profile</Text>}
          </Flex>
        </Link>
        <Flex as="button" align="center" onClick={() => signOut()}>
          <ViewIcon mr={2} />
          {isOpen && <Text>Logout</Text>}
        </Flex>
      </VStack>
    </Box>
  );
}
