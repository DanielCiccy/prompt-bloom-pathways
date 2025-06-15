
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const SchoolNameField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="school_name" className="block text-sm text-blue-900 mb-1 font-semibold">Établissement scolaire</label>
      <Controller
        name="school_name"
        control={control}
        rules={{ required: "Établissement requis" }}
        render={({ field, fieldState }) => (
          <>
            <Input id="school_name" placeholder="Nom de l'école ou lycée" {...field} />
            {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};

export default SchoolNameField;
