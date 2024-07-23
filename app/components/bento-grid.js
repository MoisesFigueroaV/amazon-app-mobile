// components/magicui/bento-grid.js
import { cn } from "@/lib/utils";
import { BentoGrid as MagicBentoGrid } from "magicui";
import { BentoCard as MagicBentoCard } from "magicui";

export function BentoGrid({ children }) {
  return <MagicBentoGrid className="grid grid-cols-3 gap-4">{children}</MagicBentoGrid>;
}

export function BentoCard({ Icon, name, description, href, cta, className }) {
  return (
    <MagicBentoCard className={cn("relative p-4 rounded-lg border", className)}>
      <Icon className="w-6 h-6 mb-2" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-2">{description}</p>
      <a href={href} className="mt-4 inline-block text-blue-500 hover:underline">{cta}</a>
    </MagicBentoCard>
  );
}
