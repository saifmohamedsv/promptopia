"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  Box,
  Flex,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Navbar({ authProviders }: { authProviders: React.ReactNode }) {
  const { data: session } = useSession();
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const borderColor = useColorModeValue("rgba(226, 232, 240, 0.5)", "rgba(74, 85, 104, 0.5)");

  return (
    <Box
      as="nav"
      bg={bgColor}
      py={4}
      borderBottom={1}
      borderStyle="solid"
      borderColor={borderColor}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(10px)"
    >
      <Flex maxW="container.xl" mx="auto" alignItems="center" justifyContent="space-between">
        <ChakraLink as={Link} href="/" _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              ml={2}
            >
              Promptopia
            </Text>
          </Flex>
        </ChakraLink>
        <Flex alignItems="center">
          {session?.user ? (
            <>
              <Button as={Link} href="/prompt" colorScheme="brand" me={4} size="md">
                Create Prompt
              </Button>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <Avatar size="sm" src={session.user.image || undefined} name={session.user.name || undefined} />
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/favorites">
                    Favorites
                  </MenuItem>
                  <MenuItem as={Link} href="/profile">
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>{authProviders}</>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
