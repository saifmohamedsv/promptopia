"use client";

import { PromptCard } from "@/components/prompt";
import { Input } from "@chakra-ui/react";
import { usePrompts } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { Loader } from "@/components/ui";
import { useState } from "react";
import { debounce } from "@/lib/utils";
import type { Prompt as ClientPrompt } from "@/types/prompt";
import type { Prompt } from "@prisma/client";
import { useOnFilterChange } from "@/hooks/filters";

export function Feed() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const term = searchParams.get("term")
    ? (searchParams.get("term") as string)
    : undefined;

  const { prompts, loading, refetch } = usePrompts();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value as string;
    setSearchTerm(term);
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
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {renderPrompts()}
    </section>
  );
}
