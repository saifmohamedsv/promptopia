import { useState, useEffect } from "react";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { debounce } from "@/lib/utils";

export function usePrompts() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const term = searchParams.get("term");

  const fetchPromptsData = async (term: string) => {
    setLoading(true);
    const results = await fetchPrompts(term || "");
    setPrompts(results);
    setLoading(false);
  };

  const debounceSearch = debounce(fetchPromptsData, 750);

  useEffect(() => {
    debounceSearch(term || "");
  }, [term]);

  return { prompts, loading };
}
