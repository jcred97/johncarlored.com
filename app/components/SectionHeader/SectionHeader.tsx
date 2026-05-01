import type { IconType } from "react-icons";

type SectionHeaderProps = {
  icon: IconType;
  title: string;
  level?: 1 | 2;
  size?: "md" | "lg";
};

const headingStyles = {
  md: "text-3xl",
  lg: "text-4xl",
} satisfies Record<NonNullable<SectionHeaderProps["size"]>, string>;

const iconStyles = {
  md: "h-5 w-5",
  lg: "h-6 w-6",
} satisfies Record<NonNullable<SectionHeaderProps["size"]>, string>;

export default function SectionHeader({
  icon: Icon,
  title,
  level = 2,
  size = "md",
}: SectionHeaderProps) {
  const headingClassName = `${headingStyles[size]} font-semibold tracking-normal text-foreground`;

  return (
    <div className="flex items-center gap-3">
      <Icon className={`${iconStyles[size]} text-red-300`} aria-hidden="true" />
      {level === 1 ? (
        <h1 className={headingClassName}>{title}</h1>
      ) : (
        <h2 className={headingClassName}>{title}</h2>
      )}
    </div>
  );
}
