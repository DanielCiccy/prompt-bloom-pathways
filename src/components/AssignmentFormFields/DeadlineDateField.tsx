
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const DeadlineDateField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="deadline_date" className="block text-sm text-blue-900 font-semibold mb-1">Date limite</label>
      <Controller
        name="deadline_date"
        control={control}
        rules={{ required: "Date requise" }}
        render={({ field, fieldState }) => (
          <>
            <Input id="deadline_date" type="date" {...field} />
            {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
export default DeadlineDateField;
