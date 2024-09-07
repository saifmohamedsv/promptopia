import "./globals.css";
import { fonts } from "./fonts";
import { ThemeProvider } from "@/theme/theme.provider";
import { AuthProvider } from "@/components/providers";
import { Navbar, NavbarAuthProviders } from "@/components/ui/navbar";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share great AI prompts ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.inter.variable}>
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Navbar authProviders={<NavbarAuthProviders />} />
              {children}
            </main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
