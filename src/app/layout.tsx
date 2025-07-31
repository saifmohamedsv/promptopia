import "./globals.css";
import { ThemeProvider } from "@/theme/theme.provider";
import { AuthProvider } from "@/components/providers";
import { Navbar, NavbarAuthProviders } from "@/components/ui/navbar";
import { Box, Container, Flex } from "@chakra-ui/react";
import { CollapsibleSidebar } from "@/components/ui/sidebar/collapsible-sidebar";

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
            <Flex minHeight="100vh">
              <Box
                flex={1}
                bg="gray.50"
                backgroundImage="radial-gradient(circle at 1px 1px, gray.200 1px, transparent 0)"
                backgroundSize="40px 40px"
                position="relative"
              >
                <Navbar authProviders={<NavbarAuthProviders />} />
                <Container maxW="container.xl" py={8} position="relative" zIndex={1}>
                  {children}
                </Container>
              </Box>
            </Flex>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
