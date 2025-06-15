
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const TitleField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="title" className="block text-sm text-blue-900 mb-1 font-semibold">Titre du devoir</label>
      <Controller
        name="title"
        control={control}
        rules={{ required: "Titre requis" }}
        render={({ field, fieldState }) => (
          <>
            <Input id="title" placeholder="ex: Projet Géographie" {...field} />
            {fieldState.error && (
              <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>
            )}
          </>
        )}
      />
    </div>
  );
};
export default TitleField;
