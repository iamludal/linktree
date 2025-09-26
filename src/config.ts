import { FaDiscord, FaGithub, FaLinkedin, FaSkull } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { MdMail } from "react-icons/md";

export type Link = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

export const USER = {
  name: "Ludal 🚀",
  bio: "French DevOps engineer. 🇫🇷",
  email: "contact@iamludal.fr",
};

export const CONTACT_LINKS: Link[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/iamludal/",
    icon: FaLinkedin,
  },
  {
    title: "Bluesky",
    href: "https://bsky.app/profile/iamludal.fr",
    icon: FaBluesky,
  },
  {
    title: "Discord",
    href: "https://discordapp.com/users/256769299954401280",
    icon: FaDiscord,
  },
  {
    title: "Email",
    href: `mailto:${USER.email}`,
    icon: MdMail,
  },
];
export const OTHER_LINKS: Link[] = [
  {
    title: "Blog",
    href: "https://blog.iamludal.fr",
    icon: IoIosPaper,
  },
  {
    title: "GitHub",
    href: "https://github.com/iamludal",
    icon: FaGithub,
  },
  {
    title: "Root-Me",
    href: "https://www.root-me.org/iamludal",
    icon: FaSkull,
  },
];
