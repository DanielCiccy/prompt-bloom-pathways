
import React from "react";
import { t } from "@/i18n/i18n";
import { Button } from "@/components/ui/button";

interface Recognition {
  label: string;
  color: string;
}

interface Props {
  questions: number;
  recognitions: Recognition[];
  start: Date;
  end: Date;
  sessionData: any;
  onReset: () => void;
}

const msToMinSec = (ms: number) => {
  const m = Math.floor(ms / 60000), s = Math.floor((ms % 60000) / 1000);
  return `${m}m ${s}s`;
};

const SessionSummary: React.FC<Props> = ({
  questions,
  recognitions,
  start,
  end,
  sessionData,
  onReset,
}) => (
  <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 mx-auto mt-12 animate-scale-in">
    <h2 className="text-2xl font-bold mb-3 text-primary">{t("summary.sessionSummary")}</h2>
    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-base mb-5">
      <div className="font-medium">{t("summary.timeSpent")}</div>
      <div>{msToMinSec(end.getTime() - start.getTime())}</div>
      <div className="font-medium">{t("summary.questionsAsked")}</div>
      <div>{questions}</div>
      <div className="font-medium">{t("summary.recognitions")}</div>
      <div className="flex gap-1 flex-wrap">
        {recognitions.length === 0
          ? <span className="text-muted-foreground">None yet</span>
          : recognitions.map((r, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded text-xs"
                style={{ background: r.color, color: "#fff" }}
              >{r.label}</span>
            ))
        }
      </div>
    </div>
    <details className="mb-3 bg-muted p-2 rounded">
      <summary className="cursor-pointer text-sm font-medium">{t("summary.sessionData")}</summary>
      <pre className="text-xs mt-2 whitespace-pre-wrap leading-5">{JSON.stringify(sessionData, null, 2)}</pre>
    </details>
    <Button className="w-full mt-2 bg-orange-500 hover:bg-orange-600" onClick={onReset}>
      {t("summary.newSession")}
    </Button>
  </div>
);

export default SessionSummary;
