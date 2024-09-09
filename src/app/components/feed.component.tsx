"use client";

import { PromptCard } from "@/components/prompt";
import { Input } from "@chakra-ui/react";
import { usePrompts } from "@/hooks";
import { Loader } from "@/components/ui";
import { useSearchInput } from "@/hooks/use-search-input.hook";
import type { Prompt } from "@prisma/client";
import type { Prompt as ClientPrompt } from "@/types/prompt";

export function Feed() {
  const { handleSearchChange, searchTerm } = useSearchInput(500);
  const { prompts, loading } = usePrompts();

  const renderPrompts = () => {
    if (loading) {
      return <Loader />;
    }

    if (!prompts.length && !loading) {
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
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      {renderPrompts()}
    </section>
  );
}
