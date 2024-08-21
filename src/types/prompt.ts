import type { User } from "./user";

export type Prompt = {
  id: string;
  creator: User;
  creatorId: string;
  prompt: string;
  chatURL: string;
  tag: string;
};
