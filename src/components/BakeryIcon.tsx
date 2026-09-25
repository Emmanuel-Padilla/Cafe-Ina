import { bakery } from "../data/bakery";

// The transparent croissant follows the surrounding text color in either theme.
export function BakeryIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        maskImage: `url(${bakery.icon})`,
        maskSize: "contain",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskImage: `url(${bakery.icon})`,
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
