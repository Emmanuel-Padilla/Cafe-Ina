import type { Locale } from "../types";
import es from "./es";
import en from "./en";

export const translations = { es, en } satisfies Record<Locale, typeof es>;

export type TranslationShape = typeof es;

export default translations;
