import { fetchPrompts } from "@/actions/prompt";
import { useCallback, useEffect } from "react";

interface OnFilterChangeParams {
  loading: boolean;
  values: { [key: string]: any };
  refetch: (params: { [key: string]: any }) => void;
}

export function useOnFilterChange({
  loading,
  values,
  refetch,
}: OnFilterChangeParams) {
  const updateUrlParams = useCallback((values: any) => {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined || value === null) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value as string);
      }
    }
    window.history.replaceState(undefined, "", url.toString());
  }, []);

  useEffect(() => {
    if (loading) return;

    const params = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== undefined && values[key] !== null) {
        acc[key] = values[key];
      }
      return acc;
    }, {} as { [key: string]: any });

    refetch(params);
    updateUrlParams(values);
  }, [loading, refetch, updateUrlParams, values]);
}
