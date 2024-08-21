"use client";

import { signIn, type ClientSafeProvider } from "next-auth/react";

export function AuthProviderButton({
  provider,
}: {
  provider: ClientSafeProvider;
}) {
  return (
    <button
      type="button"
      className="black_btn"
      key={provider.name}
      onClick={() => signIn(provider.id)}
    >
      Sign in with {provider.name}
    </button>
  );
}
