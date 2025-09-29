import ContactLink from "@/components/ContactLink";
import OtherLink from "@/components/OtherLink";
import config from "@/config";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-8 sm:p-16 text-white font-sans animate-fade-in-slide">
      <Image src="/logo.png" alt="Logo" width={100} height={24} priority />
      <h1 className="text-3xl font-light">
        Salut, moi c'est <strong className="font-semibold">{config.displayName}</strong> 👋
      </h1>
      <p className="max-w-sm text-xl text-center opacity-60 font-light">{config.description}</p>

      <ul className="flex gap-4">
        {config.contactLinks.map(link => (
          <li key={link.title}>
            <ContactLink title={link.title} href={link.href} icon={link.icon} />
          </li>
        ))}
      </ul>

      <ul className="flex flex-col w-full gap-4 max-w-md">
        {config.otherLinks.map(link => (
          <li key={link.title}>
            <OtherLink
              title={link.title}
              href={link.href}
              image={link.image}
              description={link.description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
