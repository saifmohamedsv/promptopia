"use server";

import prisma from "@/lib/db";

export async function fetchPrompts() {
  return await prisma.prompt.findMany({
    include: {
      creator: true,
    },
  });
}
