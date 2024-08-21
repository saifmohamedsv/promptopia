import prisma from "@/lib/db";
import type { User } from "@prisma/client";

export async function getUserById(id: string): Promise<User> {
  return await prisma.user.findUniqueOrThrow({
    where: { id },
  });
}
