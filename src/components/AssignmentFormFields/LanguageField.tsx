
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
];

const LanguageField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="language" className="block text-sm text-blue-900 mb-1 font-semibold">Langue</label>
      <Controller
        name="language"
        control={control}
        rules={{ required: "Langue requise" }}
        render={({ field, fieldState }) => (
          <>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez la langue…" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
export default LanguageField;
