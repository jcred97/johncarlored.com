'use client'

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

type ContactFormProps = {
  email: string;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function buildMailtoLink(targetEmail: string, form: FormState) {
  const subject = form.subject || "Portfolio contact form submission";

  return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(form.message)}`;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialFormState);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailtoLink = buildMailtoLink(email, form);
    window.location.href = mailtoLink;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,34,0.96),rgba(7,10,24,0.94))] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.36)] ring-1 ring-white/6 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-200">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            required
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-zinc-100 outline-none transition focus:border-red-300/40 focus:bg-white/[0.06]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-200">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Your email"
            required
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-zinc-100 outline-none transition focus:border-red-300/40 focus:bg-white/[0.06]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-200">Subject</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder="Subject"
            required
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-zinc-100 outline-none transition focus:border-red-300/40 focus:bg-white/[0.06]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-200">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell me a bit about the role, project, or idea."
            required
            rows={6}
            className="min-h-36 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-red-300/40 focus:bg-white/[0.06]"
          />
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-red-200"
        >
          <FaPaperPlane className="h-3.5 w-3.5" aria-hidden="true" />
          Send message
        </button>
      </div>
    </form>
  );
}
