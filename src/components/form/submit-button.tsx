"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {}

export function SubmitButton({}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
      type="submit"
    >
      {pending ? "Adding prompt...." : "Submit"}
    </button>
  );
}
