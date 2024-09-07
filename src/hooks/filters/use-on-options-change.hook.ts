import { useCallback } from "react";
import { SelectSingleOption } from "@/types";

export function useOnOptionChange(
  set: Function,
  loading: boolean,
  key: string
) {
  return useCallback(
    async (option: SelectSingleOption | null) => {
      if (loading) return;
      if (!option) {
        set({ [key]: undefined });
      } else {
        set({ [key]: option.value });
      }
    },
    [set, loading, key]
  );
}
