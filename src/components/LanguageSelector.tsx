
import React, { useState, useEffect } from "react";
import { setLanguage, getLanguage } from "@/i18n/i18n";
import { Languages } from "lucide-react";

const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
  { value: "es", label: "Español" },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState<string>("en");

  useEffect(() => {
    setSelected(getLanguage());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setSelected(newLang);
    setLanguage(newLang as any); // We know this matches LangKey
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <Languages size={18} />
      <select
        className="rounded-md border px-2 py-1 text-sm bg-white/90 text-zinc-800"
        value={selected}
        onChange={handleChange}
        aria-label="Select language"
      >
        {LANG_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
