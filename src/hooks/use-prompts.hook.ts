import { useState, useEffect } from "react";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@prisma/client";

export function usePrompts(searchText: string) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInitialPrompts = async () => {
      setLoading(true);
      const initialPrompts = await fetchPrompts();
      setPrompts(initialPrompts);
      setLoading(false);
    };

    fetchInitialPrompts();
  }, []);

  useEffect(() => {
    const fetchPromptsData = async () => {
      setLoading(true);
      const results = await fetchPrompts(searchText);
      setPrompts(results);
      setLoading(false);
    };

    const timeoutId = setTimeout(() => {
      fetchPromptsData();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  return { prompts, loading };
}
