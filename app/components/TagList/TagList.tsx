type TagListProps = {
  tags: readonly string[];
  variant?: "card" | "detail";
};

const tagStyles = {
  card: "border border-white/10 bg-white/6",
  detail: "bg-white/10",
} satisfies Record<NonNullable<TagListProps["variant"]>, string>;

export default function TagList({ tags, variant = "card" }: TagListProps) {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold text-zinc-200 ${tagStyles[variant]}`}
        >
          {tag}
        </span>
      ))}
    </>
  );
}
