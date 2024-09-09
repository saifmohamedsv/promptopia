import { fetchUserPromptsById, getUserById } from "@/actions/user";
import { ProfilePage } from "../components/profile.page";
import type { Prompt } from "@/types/prompt";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const user = await getUserById(id);
  const prompts = await fetchUserPromptsById(id);

  return <ProfilePage data={prompts as Prompt[]} user={user} />;
}
