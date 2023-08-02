import Image from "next/image";

const LinkMobile = ({ dataLink }: { dataLink: LinkMenuInterface }) => {
  return (
    <li className="text-black py-5 flex gap-2 items-center">
      <Image
        src={`/images/icons/${dataLink.iconMenu}.png`}
        alt="Menu Link ALS 54 Studio"
        width={28}
        height={20}
      />
      <h4 className="font-extrabold text-xl uppercase">{dataLink.titleMenu}</h4>
    </li>
  );
};

export default LinkMobile;
