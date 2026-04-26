import type { ContactDetail } from "../contact.data";
import { detailIcons } from "../contact.icons";

type ContactDetailsProps = {
  details: readonly ContactDetail[];
};

export default function ContactDetails({ details }: ContactDetailsProps) {
  return (
    <div className="mt-10 space-y-5">
      {details.map((detail) => {
        const Icon = detailIcons[detail.label];

        return (
          <div key={detail.label} className="flex gap-4">
            <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Icon
                className="h-4.5 w-4.5 text-zinc-300"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-zinc-100">
                {detail.label}
              </p>
              <p className="mt-1 text-sm text-zinc-300">{detail.value}</p>
              <p className="mt-1 text-xs leading-6 text-zinc-500">
                {detail.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
