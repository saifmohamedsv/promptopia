import { useState, useEffect, useCallback } from "react";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@prisma/client";
import { useSearchParams } from "next/navigation";

export function usePrompts() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const term = searchParams.get("term") || "";

  const fetchPromptsData = async (searchTerm: string) => {
    setLoading(true);
    const results = await fetchPrompts(searchTerm);
    setPrompts(results);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPromptsData(term);
    };
    fetchData();
  }, [term]);

  return { prompts, loading };
}
