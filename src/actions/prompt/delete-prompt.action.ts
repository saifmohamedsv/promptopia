import prisma from "@/lib/db";

export async function deletePrompt(id: string) {
  return await prisma.prompt.delete({
    where: { id },
  });
}
