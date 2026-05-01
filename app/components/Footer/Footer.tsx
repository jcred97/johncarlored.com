import { hero } from "../../(portfolio)/_home/hero/hero.data";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 text-center text-sm text-zinc-400 sm:flex-row sm:justify-between sm:text-left">
        <p>
          &copy; {year} John Carlo Red
        </p>
        <SocialLinks links={hero.socialLinks} variant="footer" />
      </div>
    </footer>
  );
}
