"use client";

import type { Prompt } from "@/types/prompt";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CopyButton } from "../copy-button";
import { Box, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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

  const trimmedPrompt =
    promptContent.length > 200
      ? promptContent.slice(0, 200) + "..."
      : promptContent;

  const trimmedEmail = email.length > 18 ? email.slice(0, 19) + "..." : email;

  const handleCategoryClick = (category: string) =>
    router.push(`/?term=${category}`);

  return (
    <div className="prompt_card">
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={5}
      >
        <div
          onClick={() => !isCreator && router.push(`/profile/${creatorId}`)}
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
        >
          <Image
            src={image}
            width={40}
            height={40}
            loading="lazy"
            lazyBoundary="loading"
            alt="user_image"
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3
              title={email}
              className="font-satoshi font-semibold text-gray-900 text-md"
            >
              {trimmedEmail}
            </h3>
            <p className="font-inter text-sm text-gray-500">{username}</p>
          </div>
        </div>

        <CopyButton textToCopy={promptContent} />
      </Box>

      <p className="flex-1 mt-4 font-satoshi max-w-full break-words text-wrap text-md text-gray-700">
        {trimmedPrompt}
      </p>

      <Box
        mt={4}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          color={"blue.500"}
          cursor="pointer"
          onClick={() => handleCategoryClick(tag)}
        >
          {tag.toLowerCase().replaceAll(" ", "_")}
        </Text>
        <Text fontSize={"xs"} color={"primary.500"}>
          <a
            target="_blank"
            href={chatURL}
            className="cursor-pointer flex items-center gap-1"
          >
            Go to chat
            <ExternalLinkIcon />
          </a>
        </Text>
      </Box>

      {isCreator && pathname === "/profile" && (
        <Box
          mt={5}
          gap={4}
          pt={3}
          className="flex-center border-t border-gray-100 "
        >
          <Text
            size={"sm"}
            cursor={"pointer"}
            className="green_gradient"
            onClick={() => router.push(`/prompt/${id}`)}
          >
            Edit
          </Text>
          <Text size={"sm"} cursor={"pointer"} className="orange_gradient">
            Delete
          </Text>
        </Box>
      )}
    </div>
  );
}
