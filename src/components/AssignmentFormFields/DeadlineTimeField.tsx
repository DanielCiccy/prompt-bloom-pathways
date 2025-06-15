
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const DeadlineTimeField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <label htmlFor="deadline_time" className="block text-sm text-blue-900 font-semibold mb-1">Heure limite</label>
      <Controller
        name="deadline_time"
        control={control}
        rules={{ required: "Heure requise" }}
        render={({ field, fieldState }) => (
          <>
            <Input id="deadline_time" type="time" {...field} />
            {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
export default DeadlineTimeField;
