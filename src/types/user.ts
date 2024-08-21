import type { Prompt } from "./prompt";

export type User = {
  id: string;
  email: string;
  username: string;
  image: string;
  prompts: Prompt[];
};
