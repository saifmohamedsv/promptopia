"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import type { PromptFormValues } from "@/components/pages/prompt/form/prompt.form.types";

export const createPrompt = async (values: PromptFormValues) => {
  const session = await getSession();
  const creatorId = session?.user.id;
  await prisma.prompt.create({ data: { ...values, creatorId } });

  redirect("/");
};
