import { useCopy } from "@/hooks";
import Image from "next/image";

interface Props {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: Props) {
  const { copyToClipBoard, textCopied } = useCopy();

  return (
    <div
      className="copy_btn"
      title="Copy into clipboard"
      onClick={() => copyToClipBoard(textToCopy)}
    >
      <Image
        src={
          textCopied === textToCopy
            ? "/assets/icons/tick.svg"
            : "/assets/icons/copy.svg"
        }
        width={20}
        height={20}
        alt="Copy into clipboard"
      />
    </div>
  );
}
