import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  height = 40,
  width = 270,
  className,
}: LogoProps) {
  return (
    <>
      <Image
        src={"/images/nd-logo.svg"}
        width={width}
        height={height}
        alt=""
        className={className}
        priority
      />
    </>
  );
}
