import prisma from "@/lib/db";

export async function findPromptById(id: string) {
  return await prisma.prompt.findUnique({
    where: { id },
  });
}
