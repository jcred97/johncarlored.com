import type { ExperienceTabId } from "../experience.data";

type TabButtonProps = {
  id: ExperienceTabId;
  label: string;
  isActive: boolean;
  onSelect: (id: ExperienceTabId) => void;
};

export default function TabButton({
  id,
  label,
  isActive,
  onSelect,
}: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:text-base ${
        isActive
          ? "bg-slate-950 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
      }`}
    >
      {label}
    </button>
  );
}
