"use server";

import prisma from "@/lib/db";

export async function fetchPrompts(searchText?: string) {
  const searchCondition = searchText
    ? {
        OR: [
          { prompt: { contains: searchText, mode: "insensitive" } },
          { tag: { contains: searchText, mode: "insensitive" } },
          {
            creator: {
              username: { contains: searchText, mode: "insensitive" },
            },
          },
        ],
      } 
    : {};

  return prisma.prompt.findMany({
    where: searchCondition,
    include: {
      creator: true,
    },
  });
}
