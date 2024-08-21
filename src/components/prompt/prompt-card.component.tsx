"use client";

import type { Prompt } from "@/types/prompt";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  prompt: Prompt;
}

export function PromptCard({ prompt }: Props) {
  const [copied, setCopied] = useState("");
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

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="prompt_card ">
      <div className="flex justify-between items-start gap-5">
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

        <div className="copy_btn" title="Copy Prompt" onClick={handleCopy}>
          <Image
            src={
              copied === promptContent
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={20}
            height={20}
            alt="Copy Prompt"
          />
        </div>
      </div>

      <p className="mt-4 max-w-full break-words text-wrap text-md text-gray-700">
        {trimmedPrompt}
      </p>

      <p className="font-inter my-4 text-sm orange_gradient">
        <a
          target="_blank"
          href={chatURL}
          className="cursor-pointer flex items-center gap-1"
        >
          See full answer{" "}
          <Image
            src="/assets/icons/link.svg"
            width={12}
            height={12}
            alt="Link"
          />
        </a>
      </p>

      <p className="font-inter text-sm blue_gradient cursor-pointer">{tag}</p>

      {isCreator && pathname === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => router.push(`/prompt/${id}`)}
          >
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer">
            Delete
          </p>
        </div>
      )}
    </div>
  );
}
