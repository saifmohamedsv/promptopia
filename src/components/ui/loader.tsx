import Image from "next/image";

export const Loader = ({ size = 48 }: { size?: number }) => {
  return (
    <Image
      src={"/assets/icons/loader.svg"}
      width={size}
      height={size}
      alt="Promptopia Loader"
      className="my-12"
    />
  );
};
