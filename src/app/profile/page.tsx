import { fetchMyPrompts, getSessionUser } from "@/actions/user";
import { ProfilePage } from "./components/profile.page";
import type { Prompt } from "@/types/prompt";
import { Box } from "@chakra-ui/react";

export default async function Page() {
  const user = await getSessionUser();
  const prompts = await fetchMyPrompts();

  return (
    <Box maxW="container.xl" mx="auto" px={4} py={8}>
      <ProfilePage data={prompts as Prompt[]} user={user} />
    </Box>
  );
}
