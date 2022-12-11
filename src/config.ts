import { FaTwitter, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

type Link = {
  title: string;
  href: string;
  category: "contact" | "other";
  icon: React.ComponentType;
};

export const user = {
  name: "Ludal 🚀",
  bio: "French junior DevOps engineer. 🇫🇷",
};

export const links: Link[] = [
  {
    title: "Website",
    href: "https://iamludal.fr",
    icon: FaGlobeAmericas,
    category: "other",
  },
  {
    title: "Blog",
    href: "https://blog.iamludal.fr",
    icon: IoIosPaper,
    category: "other",
  },
  {
    title: "GitHub",
    href: "https://github.com/iamludal",
    icon: FaGithub,
    category: "other",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/iamludal",
    icon: FaTwitter,
    category: "contact",
  },
];
