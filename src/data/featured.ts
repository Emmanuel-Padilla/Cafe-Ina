export const featuredIds = ["matcha", "coffee", "bakery", "petCup"] as const;

export type FeaturedId = (typeof featuredIds)[number];
