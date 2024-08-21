import { Loader } from "@/components/common";
import { PromptCard } from "@/components/prompt";
import type { Prompt } from "@/types/prompt";
import type { User } from "@prisma/client";

interface Props {
  user: User;
  data: Prompt[];
}

export function ProfilePage({ user, data }: Props) {
  const username = user?.username.toWellFormed();

  return (
    <section className="w-full">
      <h1 className="capitalize head_text text-left">
        <span className="blue_gradient">{username} Profile</span>
      </h1>

      <p className="desc text-left">
        Welcome to {username} personalized profile page, you can explore the
        prompts and be inspired.
      </p>

      <div className="mt-10 prompt_layout">
        {!data.length && <Loader />}
        {data?.map((prompt) => (
          <PromptCard prompt={prompt as Prompt} key={prompt.id} />
        ))}
      </div>
    </section>
  );
}
