import {
  FaTwitter,
  FaGithub,
  FaGlobeAmericas,
  FaSkull,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { MdArticle, MdMail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

type Link = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

export const user = {
  name: "Ludal 🚀",
  bio: "French junior DevOps engineer. 🇫🇷",
  email: "contact@iamludal.fr",
};

export const contactLinks: Link[] = [
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
    title: "Telegram",
    href: "https://t.me/iamludal",
    icon: FaTelegram,
  },
  {
    title: "Email",
    href: `mailto:${user.email}`,
    icon: MdMail,
  },
];
export const otherLinks: Link[] = [
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
