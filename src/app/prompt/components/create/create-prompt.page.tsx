"use client";

import { PromptForm } from "../form";
import { createPrompt } from "@/actions/prompt";

export default function CreatePromptPage() {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        Create and share amazing prompts with the world
      </p>

      <PromptForm action={createPrompt} />
    </section>
  );
}
