import { getSession } from "@/lib/auth";
import prisma from "@/lib/db";
import type { Prompt } from "@prisma/client";

export async function fetchMyPrompts(): Promise<Prompt[]> {
  const session = await getSession();

  return await prisma.prompt.findMany({
    where: { creatorId: session?.user.id },
    include: {
      creator: true,
    },
  });
}
