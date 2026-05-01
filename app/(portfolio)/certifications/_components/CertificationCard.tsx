import { FaIdBadge, FaRegCalendarCheck, FaRegFilePdf } from "react-icons/fa";

import type { Certification } from "../certifications.data";

type CertificationCardProps = {
  certification: Certification;
};

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-white/10 bg-slate-950/70 p-5 lg:p-6">
      <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
            {certification.issuer}
          </p>
        <h2 className="mt-3 text-xl font-semibold tracking-normal text-foreground lg:text-2xl">
          {certification.title}
        </h2>
      </div>

      <p className="mt-4 flex items-start gap-2 text-sm font-medium leading-5 text-zinc-400">
        <FaRegCalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-300/80" aria-hidden="true" />
        {certification.issuedDate}
      </p>
      <p className="mt-2 flex items-start gap-2 text-sm font-medium leading-5 text-zinc-400">
        <FaIdBadge className="mt-0.5 h-4 w-4 shrink-0 text-red-300/80" aria-hidden="true" />
        Credential ID: {certification.credentialId}
      </p>

      <p className="mt-5 flex-1 text-sm leading-6 text-zinc-300">
        {certification.summary}
      </p>

      <a
        href={certification.pdfHref}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-red-300/40 bg-red-950/20 px-4 text-sm font-semibold text-red-100 transition-colors hover:border-red-300/70 hover:bg-red-900/30"
      >
        <FaRegFilePdf className="h-4 w-4" aria-hidden="true" />
        View PDF
      </a>
    </article>
  );
}
