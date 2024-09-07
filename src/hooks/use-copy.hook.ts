import { useState } from "react";

export function useCopy() {
  const [textCopied, setTextCopied] = useState("");

  const copyToClipBoard = (text: string) => {
    setTextCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setTextCopied("");
    }, 3000);
  };

  return { textCopied, copyToClipBoard };
}
