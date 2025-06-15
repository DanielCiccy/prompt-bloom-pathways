
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { t } from "@/i18n/i18n";

const ageRanges = [
  { value: "6-8", labelKey: "ages_6_8" },
  { value: "9-11", labelKey: "ages_9_11" },
  { value: "12-14", labelKey: "ages_12_14" },
  { value: "15-17", labelKey: "ages_15_17" },
  { value: "18-22", labelKey: "ages_18_22" },
  { value: "23-99", labelKey: "ages_23_99" },
  { value: "multi", labelKey: "multi_age" },
  { value: "other", labelKey: "other_age" },
];

const TargetAgeRangeField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="target_age_range" className="block text-sm text-blue-900 mb-1 font-semibold">
        {t("create_assignment.target_age_range_label")}
      </label>
      <Controller
        name="target_age_range"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value || ""}
            onValueChange={field.onChange}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("create_assignment.target_age_range_placeholder")} />
            </SelectTrigger>
            <SelectContent>
              {ageRanges.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {t(`create_assignment.age_ranges.${opt.labelKey}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};
export default TargetAgeRangeField;
