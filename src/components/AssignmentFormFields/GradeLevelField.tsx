
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const grades = [
  { value: "6", label: "6ème" },
  { value: "5", label: "5ème" },
  { value: "4", label: "4ème" },
  { value: "3", label: "3ème" },
  { value: "2nde", label: "2nde" },
  { value: "1ère", label: "1ère" },
  { value: "terminale", label: "Terminale" },
  { value: "college", label: "Collège" },
  { value: "lycee", label: "Lycée" },
  { value: "other", label: "Autre" },
];

const GradeLevelField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="grade_level" className="block text-sm text-blue-900 mb-1 font-semibold">Niveau / Classe</label>
      <Controller
        name="grade_level"
        control={control}
        rules={{ required: "Niveau requis" }}
        render={({ field, fieldState }) => (
          <>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le niveau…" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((opt) => (
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
export default GradeLevelField;
