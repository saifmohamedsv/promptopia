"use client";

import { PromptCard } from "@/components/prompt";
import type { Prompt } from "@prisma/client";
import type { Prompt as ClientPrompt } from "@/types/prompt";
import { Input } from "@chakra-ui/react";
import { usePrompts } from "@/hooks";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/common";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function Feed() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { prompts, loading } = usePrompts();
  const term = searchParams.get("term");

  const [searchValue, setSearchValue] = useState(term || "");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    router.push(`/?term=${searchTerm}`);
  };

  const renderPrompts = () => {
    if (loading) {
      return <Loader />;
    }

    if (!prompts.length) {
      return <h1 className="my-24">No prompts found.</h1>;
    }

    return (
      <div className="mt-16 prompt_layout">
        {prompts.map((prompt: Prompt) => (
          <PromptCard prompt={prompt as ClientPrompt} key={prompt.id} />
        ))}
      </div>
    );
  };

  return (
    <section className="feed">
      <Input
        type="text"
        placeholder="Search using a prompt, tag or a username"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {renderPrompts()}
    </section>
  );
}
