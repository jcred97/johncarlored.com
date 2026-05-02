import type { Metadata } from "next";
import { FaCertificate } from "react-icons/fa";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { createPageMetadata } from "../../lib/metadata";
import CertificationCard from "./_components/CertificationCard";
import { certifications } from "./certifications.data";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description:
    "View John Carlo Red's Salesforce and technology certifications with supporting PDF credentials.",
  path: "/certifications",
  image: "/og/certifications",
  imageAlt: "Salesforce certifications by John Carlo Red",
});

export default function CertificationsPage() {
  return (
    <main className="flex flex-1 px-6 py-24 sm:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={FaCertificate}
          title="Certifications"
          level={1}
          size="lg"
        />

        {certifications.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {certifications.map((certification) => (
              <CertificationCard
                key={`${certification.issuer}-${certification.title}`}
                certification={certification}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-md border border-white/10 bg-slate-950/70 p-8 text-center">
            <p className="text-lg font-semibold text-foreground">
              Certification PDFs have not been added yet.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Add PDF files under public/certifications and list them in
              certifications.data.ts to publish credential cards here.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
