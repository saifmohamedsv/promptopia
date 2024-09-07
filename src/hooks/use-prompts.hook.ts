import { useState, useEffect, useCallback } from "react";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { debounce } from "@/lib/utils";

export function usePrompts(term?: string) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  // const term = searchParams.get("term") as string;

  const fetchPromptsData = async (params: { [key: string]: any }) => {
    setLoading(true);
    const results = await fetchPrompts(params.term || "");
    setPrompts(results);
    setLoading(false);
    console.log(123);
    
  };

  // const debounceSearch = useCallback(debounce(fetchPromptsData, 750), []);

  useEffect(() => {
    if (!term) fetchPromptsData({ term: "" });
    // debounceSearch({ term });
  }, [term]);

  // Refetch method to trigger a manual fetch with custom params
  const refetch = (params: { [key: string]: any }) => {
    fetchPromptsData(params);
  };

  return { prompts, loading, refetch };
}
