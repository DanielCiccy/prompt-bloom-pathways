
import en from "./en";
import fr from "./fr";
import de from "./de";
import it from "./it";
import es from "./es";

const LANGS = { en, fr, de, it, es };

type LangKey = keyof typeof LANGS;

// Helper: detect persisted lang in localStorage or fallback to browser or "en"
function getInitialLang(): LangKey {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("lang");
    if (stored && (stored in LANGS)) return stored as LangKey;
    const navLang = navigator.language.slice(0,2);
    if (navLang in LANGS) return navLang as LangKey;
  }
  return "en";
}

let lang: LangKey = getInitialLang();

export const setLanguage = (l: LangKey) => {
  lang = l;
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", l);
  }
};

export const getLanguage = (): LangKey => lang;

export const t = (key: string) => {
  const keys = key.split(".");
  let current: any = LANGS[lang];
  for (const k of keys) {
    if (current?.[k] === undefined) return key;
    current = current[k];
  }
  return current;
};
