import type { Metadata } from "next";

import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { siteConfig } from "../../lib/site";
import ContactDetails from "./_components/ContactDetails";
import ContactForm from "./_components/ContactForm";
import { contactContent } from "./contact.data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with John Carlo Red for Salesforce roles, collaboration, and project inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 px-6 py-16 sm:px-8 sm:py-20">
      <section className="relative mx-auto w-full max-w-6xl">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="max-w-xl pt-4 lg:pt-10">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {contactContent.heading}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
              {contactContent.intro}
            </p>

            <ContactDetails details={contactContent.details} />

            <SocialLinks links={contactContent.socialLinks} variant="iconOnly" />
          </div>

          <div className="relative lg:pt-6">
            <div className="pointer-events-none absolute inset-x-10 top-6 h-24 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative">
              <ContactForm email={siteConfig.email} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
