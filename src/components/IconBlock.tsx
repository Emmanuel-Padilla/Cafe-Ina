import type { LucideIcon } from "lucide-react";

type Variant = "olive" | "coffee" | "moss" | "beige";

const variantClasses: Record<Variant, string> = {
  olive: "bg-primary text-primary-foreground",
  coffee: "bg-coffee text-ivory",
  moss: "bg-moss text-ivory",
  beige: "bg-beige text-ink",
};

export function IconBlock({
  icon: Icon,
  variant = "olive",
  className = "",
}: {
  icon: LucideIcon;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`pattern-mosaic flex h-full w-full items-center justify-center ${variantClasses[variant]} ${className}`}
    >
      <Icon className="h-8 w-8 opacity-80" aria-hidden="true" />
    </div>
  );
}
