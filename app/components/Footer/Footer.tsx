import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { hero } from "../../(portfolio)/_home/hero/hero.data";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} John Carlo Red
        </p>
        <div className="flex items-center gap-6">
          {hero.socialLinks.map((link) => {
            const Icon = socialIcons[link.label];
            const opensInNewTab = !link.href.startsWith("mailto:");

            return (
              <a
                key={link.label}
                href={link.href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noreferrer" : undefined}
                aria-label={link.label}
                className="text-zinc-400 transition-colors hover:text-red-300"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
