import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 text-foreground backdrop-blur-md"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl justify-center px-6 py-5 text-center text-sm font-medium sm:px-8"
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-300 transition-colors hover:text-red-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
