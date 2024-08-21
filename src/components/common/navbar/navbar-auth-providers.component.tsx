import { getProviders, signIn, type ClientSafeProvider } from "next-auth/react";
import { Loader } from "../loader";
import { AuthProviderButton } from "./navbar-auth-provider-button.component";

interface NavbarAuthProvidersProps {}

export async function NavbarAuthProviders({}: NavbarAuthProvidersProps) {
  const providers = await getProviders();

  if (!providers) return <Loader />;

  return (
    <>
      {Object.values(providers).map((provider) => (
        <AuthProviderButton key={provider.id} provider={provider} />
      ))}
    </>
  );
}
