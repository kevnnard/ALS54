import Image from "next/image";

export default function LogoBrandComponent({
  logo = "",
  width = 50,
  height = 50,
}: LogoInterface): JSX.Element {
  return (
    <Image
      src={`/images/logos/${logo}.png`}
      alt="ALS 54 STUDIO"
      width={width}
      height={height}
      priority
    />
  );
}
