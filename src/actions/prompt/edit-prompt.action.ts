"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { PromptFormValues } from "@/types/prompt";

export const editPrompt = async (values: PromptFormValues) => {
  const session = await getSession();
  const creatorId = session?.user.id;

  const { id, ...prompt } = values;

  await prisma.prompt.update({
    where: { id, creatorId },
    data: { ...prompt },
  });

  redirect("/");
};
