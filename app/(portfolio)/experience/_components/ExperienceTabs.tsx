"use client";

import { useState } from "react";

import type { ExperienceTab, ExperienceTabId } from "../experience.data";
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";

type ExperienceTabsProps = {
  tabs: readonly ExperienceTab[];
};

export default function ExperienceTabs({ tabs }: ExperienceTabsProps) {
  const [activeTabId, setActiveTabId] = useState<ExperienceTabId>(
    tabs[0]?.id ?? "work",
  );
  const currentTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:text-base ${
                  isActive
                    ? "bg-slate-950 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {currentTab ? <ExperienceTimeline entries={currentTab.items} /> : null}
    </div>
  );
}
