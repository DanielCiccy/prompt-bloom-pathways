
import React from "react";
import AppHeader from "@/components/AppHeader";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n/i18n";

type AssignmentForm = {
  title: string;
  classLevel: string;
  description?: string;
};

const classLevels = [
  { value: "elementary", label: "Elementary" },
  { value: "middle", label: "Middle School" },
  { value: "high", label: "High School" },
  { value: "university", label: "University" },
];

const CreateAssignmentTeacher: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm<AssignmentForm>();

  const onSubmit = (data: AssignmentForm) => {
    // For this UI, we'll just display an alert or toast as demo (no API yet)
    window.alert(
      `Assignment Created!\nTitle: ${data.title}\nLevel: ${classLevels.find(l => l.value === data.classLevel)?.label}\nDescription: ${data.description ?? ""}`
    );
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <div className="w-full max-w-lg mt-6">
        <button
          className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 text-sm mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>
        <div className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col gap-5 items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Create group assignment
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
            autoComplete="off"
          >
            <div>
              <label htmlFor="title" className="block text-sm text-blue-900 mb-1 font-semibold">Assignment Title</label>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="title"
                      placeholder="e.g., 'Geography project'"
                      {...field}
                    />
                    {fieldState.error && (
                      <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="classLevel" className="block text-sm text-blue-900 mb-1 font-semibold">Class level</label>
              <Controller
                name="classLevel"
                control={control}
                rules={{ required: "Class level required" }}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class level…" />
                      </SelectTrigger>
                      <SelectContent>
                        {classLevels.map((lvl) => (
                          <SelectItem key={lvl.value} value={lvl.value}>{lvl.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-blue-900 mb-1 font-semibold">Description (optional)</label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Textarea
                    id="description"
                    placeholder="Describe the assignment, relevant links, requirements…"
                    {...field}
                    rows={3}
                  />
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Create assignment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentTeacher;
