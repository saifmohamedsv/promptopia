'use client'
import { createTheme } from "@/theme/index";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme();

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
