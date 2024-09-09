import { fetchMyPrompts, getSessionUser } from "@/actions/user";
import { ProfilePage } from "./components/profile.page";
import type { Prompt } from "@/types/prompt";

export default async function Page() {
  const user = await getSessionUser();
  const prompts = await fetchMyPrompts();
  const username = user?.username.toWellFormed();

  return <ProfilePage data={prompts as Prompt[]} user={user} />;
}
