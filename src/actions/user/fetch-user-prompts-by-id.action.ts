import prisma from "@/lib/db";
import type { Prompt } from "@prisma/client";

export async function fetchUserPromptsById(id: string): Promise<Prompt[]> {
  return await prisma.prompt.findMany({
    where: { creatorId: id },
    include: {
      creator: true,
    },
  });
}
