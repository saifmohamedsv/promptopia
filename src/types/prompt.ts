import type { User } from "./user";

export type Prompt = {
  id: string;
  creator: User;
  creatorId: string;
  prompt: string;
  chatURL: string;
  tag: string;
};

export enum PromptFormFields {
  ID = "id",
  PROMPT = "prompt",
  CHAT_URL = "chatURL",
  TAG = "tag",
}

export type PromptFormValues = {
  [PromptFormFields.ID]?: string;
  [PromptFormFields.PROMPT]: string;
  [PromptFormFields.CHAT_URL]: string;
  [PromptFormFields.TAG]: string;
};
