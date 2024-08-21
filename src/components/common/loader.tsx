import Image from "next/image";

export const Loader = ({ size = 48 }) => {
  return (
    <Image
      src={"/assets/icons/loader.svg"}
      width={size}
      height={size}
      alt="Promptopia Loader"
    />
  );
};
