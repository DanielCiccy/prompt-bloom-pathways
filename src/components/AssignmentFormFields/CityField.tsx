
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const CityField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="city" className="block text-sm text-blue-900 mb-1 font-semibold">Ville</label>
      <Controller
        name="city"
        control={control}
        rules={{ required: "Ville requise" }}
        render={({ field, fieldState }) => (
          <>
            <Input id="city" placeholder="Ville" {...field} />
            {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
export default CityField;
