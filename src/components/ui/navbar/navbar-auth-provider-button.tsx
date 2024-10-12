"use client";

import { Button } from "@chakra-ui/react";
import { signIn, type ClientSafeProvider } from "next-auth/react";

export function AuthProviderButton({ provider }: { provider: ClientSafeProvider }) {
  return (
    <Button type="button" className="black_btn" key={provider.name} onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </Button>
  );
}
