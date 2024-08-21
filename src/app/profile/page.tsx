import { fetchMyPrompts, getSessionUser } from "@/actions/user";
import { ProfilePage } from "@/components/pages/profile/profile.page";
import type { Prompt } from "@/types/prompt";

export default async function Page() {
  const user = await getSessionUser();
  const prompts = await fetchMyPrompts();

  return <ProfilePage data={prompts as Prompt[]} user={user} />;
}
