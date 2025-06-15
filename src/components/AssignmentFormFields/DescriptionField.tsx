
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const DescriptionField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="description" className="block text-sm text-blue-900 mb-1 font-semibold">Description</label>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            id="description"
            placeholder="Décrivez le devoir, les ressources, les liens..."
            {...field}
            rows={3}
          />
        )}
      />
    </div>
  );
};
export default DescriptionField;
