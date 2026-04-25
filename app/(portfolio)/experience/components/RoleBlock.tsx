import type { ExperienceRole } from "../experience.data";
import RoleLinks from "./RoleLinks";

type RoleBlockProps = {
  organization: string;
  role: ExperienceRole;
};

export default function RoleBlock({ organization, role }: RoleBlockProps) {
  return (
    <div key={`${organization}-${role.title}-${role.period}`}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <p className="text-lg font-medium text-zinc-200">{role.title}</p>
        <p className="text-sm font-medium text-zinc-400 sm:pt-0.5">
          {role.period}
        </p>
      </div>

      <ul className="mt-3 space-y-2.5 text-base leading-7 text-zinc-300">
        {role.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-200/90" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {role.links?.length ? <RoleLinks links={role.links} /> : null}
    </div>
  );
}
