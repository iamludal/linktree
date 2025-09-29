import { FaBluesky, FaDiscord, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

type Config = {
  displayName: string;
  description: string;
  meta: {
    title: string;
    description: string;
  };
  contactLinks: Array<{
    title: string;
    href: string;
    icon: React.ComponentType;
  }>;
  otherLinks: Array<{
    title: string;
    href: string;
    image: string;
    description: string;
  }>;
};

const config: Config = {
  displayName: "Ludal",
  description: "DevOps passionné d'automatisation, d'observabilité et de cybersécurité. 🇫🇷",
  meta: {
    title: "Ludal - DevOps",
    description: "DevOps passionné d'automatisation, d'observabilité et de cybersécurité.",
  },
  contactLinks: [
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
      href: `mailto:contact@iamludal.fr`,
      icon: MdMail,
    },
  ],
  otherLinks: [
    {
      title: "Blog",
      href: "https://blog.iamludal.fr",
      image: "/hashnode.png",
      description: "Un peu de lecture",
    },
    {
      title: "GitHub",
      href: "https://github.com/iamludal",
      image: "/github.png",
      description: "Mes projets perso",
    },
    {
      title: "Root-Me",
      href: "https://www.root-me.org/iamludal",
      image: "/root-me.png",
      description: "Plateforme de cybersécurité",
    },
  ],
};

export default config;
