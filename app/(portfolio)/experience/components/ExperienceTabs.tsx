'use client'

import { useState } from "react";

import type { ExperienceTab, ExperienceTabId } from "../experience.data";
import TabButton from "./TabButton";
import TimelineEntry from "./TimelineEntry";

type ExperienceTabsProps = {
  tabs: readonly ExperienceTab[];
};

function getInitialTabId(tabs: readonly ExperienceTab[]): ExperienceTabId {
  return tabs[0]?.id ?? "work";
}

function getCurrentTab(
  tabs: readonly ExperienceTab[],
  activeTabId: ExperienceTabId,
) {
  return tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
}

export default function ExperienceTabs({ tabs }: ExperienceTabsProps) {
  const [activeTabId, setActiveTabId] = useState<ExperienceTabId>(
    getInitialTabId(tabs),
  );
  const currentTab = getCurrentTab(tabs, activeTabId);

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-1">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={tab.id === activeTabId}
              onSelect={setActiveTabId}
            />
          ))}
        </div>
      </div>

      {currentTab ? (
        <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-slate-950/65 px-5 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.3)] sm:px-8 sm:py-10">
          {currentTab.items.map((entry, index) => (
            <TimelineEntry
              key={`${currentTab.id}-${entry.organization}-${index}`}
              entry={entry}
              isLast={index === currentTab.items.length - 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
