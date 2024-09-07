import { debounce } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export function useSearchInput(debounceDelay: number = 500) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("term") || ""
  );

  const updateUrlParams = useCallback(
    (term: string) => {
      const url = new URL(window.location.href);

      if (term) {
        url.searchParams.set("term", term);
      } else {
        url.searchParams.delete("term");
      }

      router.replace(url.toString());
    },
    [router]
  );

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    debounce(() => updateUrlParams(term), debounceDelay)();
  };

  useEffect(() => {
    const termFromUrl = searchParams.get("term") || "";
    setSearchTerm(termFromUrl);
  }, [searchParams]);

  return { searchTerm, handleSearchChange };
}
