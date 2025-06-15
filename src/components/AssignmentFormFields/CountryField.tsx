
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const countries = [
  { value: "FR", label: "France" },
  { value: "BE", label: "Belgique" },
  { value: "ES", label: "Espagne" },
  { value: "DE", label: "Allemagne" },
  { value: "IT", label: "Italie" },
  { value: "US", label: "États-Unis" },
  { value: "UK", label: "Royaume-Uni" },
  { value: "CA", label: "Canada" },
  { value: "PT", label: "Portugal" },
  { value: "CH", label: "Suisse" },
  { value: "MA", label: "Maroc" },
  { value: "TN", label: "Tunisie" },
  { value: "SN", label: "Sénégal" },
  { value: "CM", label: "Cameroun" },
  { value: "OTHER", label: "Autre" },
];

const CountryField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="country" className="block text-sm text-blue-900 mb-1 font-semibold">Pays</label>
      <Controller
        name="country"
        control={control}
        rules={{ required: "Pays requis" }}
        render={({ field, fieldState }) => (
          <>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le pays…" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((opt) => (
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
export default CountryField;
