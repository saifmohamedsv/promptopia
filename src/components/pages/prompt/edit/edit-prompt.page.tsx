import prisma from "@/lib/db";
import { PromptForm } from "../form/prompt.form";
import type { Prompt } from "@/types/prompt";
import { editPrompt } from "@/actions/prompt";
import { findPromptById } from "@/actions/prompt";

export default async function EditPromptPage({
  params,
}: {
  params: { id: string };
}) {
  const prompt = await findPromptById(params.id);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Update Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        Create and share amazing prompts with the world
      </p>

      <PromptForm prompt={prompt as Prompt} action={editPrompt} />
    </section>
  );
}
