import { FC } from "react";

type Props = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

const ContactLink: FC<Props> = ({ title, href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={title}
    className="text-2xl block p-4 outline-none hover:scale-105 hover:bg-gray-800
        focus:bg-gray-800 active:ring-3 focus:ring-3 ring-sky-500/50
        transition-all transition-background rounded-full ease-in-out"
  >
    <Icon />
  </a>
);

export default ContactLink;
