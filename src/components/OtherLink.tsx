import Image from "next/image";
import { FC } from "react";
import { MdArrowOutward } from "react-icons/md";

type Props = {
  title: string;
  href: string;
  image: string;
  description: string;
};

const OtherLink: FC<Props> = ({ title, href, image, description }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-6 outline-none hover:scale-[1.02] px-6 py-4
                transition-all rounded-lg bg-gray-800 hover:bg-gray-700 focus:bg-gray-700
                active:shadow-md focus:ring-3 ring-sky-500/50 ease-in-out"
  >
    <Image src={image} alt={title} width={52} height={52} className="rounded-lg" />
    <div className="flex-1">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-md opacity-60 font-light">{description}</p>
    </div>
    <MdArrowOutward className="opacity-50 text-lg" />
  </a>
);

export default OtherLink;
