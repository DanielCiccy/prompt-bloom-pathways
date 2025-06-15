
import React, { useState } from "react";
import { t } from "@/i18n/i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onStart: (assignmentCode: string) => void;
}

const AssignmentEntry: React.FC<Props> = ({ onStart }) => {
  const [code, setCode] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleStart(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim()) onStart(code.trim());
  }

  return (
    <div className="flex flex-col gap-6 items-center mt-2 mb-4">
      {!showInput ? (
        <>
          <Button size="lg" className="w-52 bg-orange-500 hover:bg-orange-600" disabled>
            {t("landing.scanQR")} <span className="ml-2 text-xs text-white">(Coming soon)</span>
          </Button>
          <Button variant="outline" size="lg" className="w-52" onClick={() => setShowInput(true)}>
            {t("landing.enterCode")}
          </Button>
        </>
      ) : (
        <form onSubmit={handleStart} className="flex flex-col gap-4 items-center">
          <Input
            autoFocus
            placeholder="e.g., MATH2024"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="text-lg w-64"
          />
          <Button type="submit" size="lg" className="w-40 bg-primary text-white hover:bg-primary/80">
            {t("landing.start")}
          </Button>
        </form>
      )}
    </div>
  );
};

export default AssignmentEntry;
