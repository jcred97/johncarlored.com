import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectBackLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-sm font-semibold text-red-200 transition-colors hover:text-red-100"
    >
      <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
      Back to projects
    </Link>
  );
}
