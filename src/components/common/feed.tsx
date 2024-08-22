"use client";

import { PromptCard } from "@/components/prompt";
import { useState } from "react";
import type { Prompt } from "@prisma/client";
import type { Prompt as ClientPrompt } from "@/types/prompt";
import { Input } from "@chakra-ui/react";
import { usePrompts } from "@/hooks";
import { Loader } from "./loader";

export function Feed() {
  const [searchText, setSearchText] = useState("");
  const { prompts, loading } = usePrompts(searchText);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
      <form className="relative w-full flex-center">
        <Input
          type="text"
          placeholder="Search using a prompt, tag or a username"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      {renderPrompts()}
    </section>
  );
}
