import { useState, useEffect } from "react";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@prisma/client";

export function usePrompts(debouncedSearchTerm: string) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPromptsData = async () => {
      setLoading(true);
      try {
        const results = await fetchPrompts(debouncedSearchTerm);
        setPrompts(results);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromptsData();
  }, [debouncedSearchTerm]);

  return { prompts, loading };
}
