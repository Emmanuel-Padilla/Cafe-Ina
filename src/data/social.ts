import type { SocialLink } from "../types";
import { site } from "./site";

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    url: site.social.instagram,
    labelKey: "instagramCta",
  },
  {
    id: "facebook",
    url: site.social.facebook,
    labelKey: "facebookCta",
  },
];
