import { hero } from "../../(portfolio)/_home/hero/hero.data";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} John Carlo Red
        </p>
        <SocialLinks links={hero.socialLinks} variant="footer" />
      </div>
    </footer>
  );
}
