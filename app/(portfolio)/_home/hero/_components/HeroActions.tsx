import { FaFileDownload } from "react-icons/fa";

import ActionLink from "../../../../components/ActionLink/ActionLink";

type HeroAction = {
  label: string;
  href: string;
};

type HeroActionsProps = {
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
};

export default function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <ActionLink href={primaryAction.href} variant="primary">
        {primaryAction.label}
      </ActionLink>
      <ActionLink
        href={secondaryAction.href}
        icon={FaFileDownload}
        newTab
        variant="secondary"
      >
        {secondaryAction.label}
      </ActionLink>
    </div>
  );
}
