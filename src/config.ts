import {
  FaTwitter,
  FaGithub,
  FaGlobeAmericas,
  FaSkull,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { MdArticle, MdMail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

export type Link = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

export const USER = {
  name: "Ludal 🚀",
  bio: "French junior DevOps engineer. 🇫🇷",
  email: "contact@iamludal.fr",
};

export const CONTACT_LINKS: Link[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/iamludal/",
    icon: FaLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/iamludal",
    icon: FaTwitter,
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
    title: "Website",
    href: "https://iamludal.fr",
    icon: FaGlobeAmericas,
  },
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
    title: "daily.dev",
    href: "https://app.daily.dev/iamludal",
    icon: MdArticle,
  },
  {
    title: "Root-Me",
    href: "https://www.root-me.org/iamludal",
    icon: FaSkull,
  },
];
