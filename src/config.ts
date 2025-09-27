import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import github from "@/assets/github.png";
import hashnode from "@/assets/hashnode.png";
import rootMe from "@/assets/root-me.jpg";
import { StaticImageData } from "next/image";

type BaseLinkType = {
  title: string;
  href: string;
};

export type ContactLinkType = BaseLinkType & {
  icon: React.ComponentType;
};

export type OtherLinkType = BaseLinkType & {
  image: StaticImageData;
  description: string;
};

export const USER = {
  name: "Ludal",
  bio: "DevOps passionné d'automatisation, d'observabilité et de cybersécurité. 🇫🇷",
  email: "contact@iamludal.fr",
};

export const CONTACT_LINKS: ContactLinkType[] = [
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
export const OTHER_LINKS: OtherLinkType[] = [
  {
    title: "Blog",
    href: "https://blog.iamludal.fr",
    image: hashnode,
    description: "Un peu de lecture",
  },
  {
    title: "GitHub",
    href: "https://github.com/iamludal",
    image: github,
    description: "Mes projets perso",
  },
  {
    title: "Root-Me",
    href: "https://www.root-me.org/iamludal",
    image: rootMe,
    description: "Plateforme de cybersécurité",
  },
];
