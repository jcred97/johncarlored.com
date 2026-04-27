import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

type HeroAction = {
  label: string;
  href: string;
};

type HeroActionsProps = {
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
};

export default function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  const buttonClass =
    "inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-semibold transition-colors";

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={primaryAction.href}
        className={`${buttonClass} bg-red-300 text-slate-950 shadow-lg shadow-red-950/40 hover:bg-red-200`}
      >
        {primaryAction.label}
      </Link>
      <a
        href={secondaryAction.href}
        target="_blank"
        rel="noreferrer"
        className={`${buttonClass} gap-2 border border-red-300/40 bg-red-950/20 text-red-100 hover:border-red-300/70 hover:bg-red-900/30`}
      >
        <FaFileDownload className="h-4 w-4" aria-hidden="true" />
        {secondaryAction.label}
      </a>
    </div>
  );
}
