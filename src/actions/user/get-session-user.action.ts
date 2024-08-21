import { getSession } from "@/lib/auth";
import prisma from "@/lib/db";
import type { User } from "@prisma/client";

export async function getSessionUser(): Promise<User> {
  const session = await getSession();

  return await prisma.user.findUniqueOrThrow({
    where: { email: session?.user?.email as string },
  });
}
