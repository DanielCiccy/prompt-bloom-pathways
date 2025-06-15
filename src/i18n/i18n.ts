
import en from "./en";
import fr from "./fr";
import de from "./de";
import it from "./it";
import es from "./es";

const LANGS = { en, fr, de, it, es };

type LangKey = keyof typeof LANGS;

let lang: LangKey = "en";

export const setLanguage = (l: LangKey) => { lang = l; };

export const t = (key: string) => {
  const keys = key.split(".");
  let current: any = LANGS[lang];
  for (const k of keys) {
    if (current?.[k] === undefined) return key;
    current = current[k];
  }
  return current;
};
