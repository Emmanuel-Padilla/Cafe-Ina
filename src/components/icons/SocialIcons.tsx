import type { SVGProps } from "react";

/**
 * Lucide's brand icon set (Facebook/Instagram) was removed upstream for
 * trademark reasons. These are generic outline glyphs drawn to match
 * lucide's stroke style (24x24, round caps, stroke-width 2) so social
 * links stay visually consistent with the rest of the icon system.
 */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 4c.6 1.8 2 3.2 4 4" />
      <path d="M10 10.5v6.25a3.25 3.25 0 1 1-3.25-3.25" />
      <path d="M14 4v10.25a3.75 3.75 0 1 1-3.75-3.75" />
      <path d="M14 8.5c1.4 1 2.8 1.5 4 1.5" />
    </svg>
  );
}
