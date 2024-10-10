import { useCallback, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "./use-debounce.hook";

export function useSearchInput(debounceDelay: number = 500) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get("term") || "");
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  const updateUrlParams = useCallback(
    (term: string) => {
      const url = new URL(window.location.href);
      if (term) {
        url.searchParams.set("term", term);
      } else {
        url.searchParams.delete("term");
      }
      router.replace(url.toString(), { scroll: false });
    },
    [router]
  );

  useEffect(() => {
    updateUrlParams(debouncedSearchTerm);
  }, [debouncedSearchTerm, updateUrlParams]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return { searchTerm, handleSearchChange, debouncedSearchTerm };
}
