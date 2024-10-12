import "./globals.css";
import { ThemeProvider } from "@/theme/theme.provider";
import { AuthProvider } from "@/components/providers";
import { Navbar, NavbarAuthProviders } from "@/components/ui/navbar";
import { Box, Container } from "@chakra-ui/react";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share great AI prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <Box
              minHeight="100vh"
              bgGradient="linear(to-br, brand.50, accent.50)"
              backgroundSize="400% 400%"
              animation="gradientBG 15s ease infinite"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage:
                  "url('https://img.freepik.com/free-vector/modern-circuit-board-technology-background_1035-13416.jpg?t=st=1728769508~exp=1728773108~hmac=cedab1f5a93cd907680252c17892cd66cf8982e95c0a595112fe849991bb0ba7&w=2000')",
                opacity: 0.1,
                pointerEvents: "none",
              }}
            >
              <Navbar authProviders={<NavbarAuthProviders />} />
              <Container maxW="container.xl" py={8} position="relative" zIndex={1}>
                {children}
              </Container>
            </Box>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
