
import React from "react";
import { t } from "@/i18n/i18n";
import QrCode from "@/components/QrCode";

type Props = {
  code: string;
  qr_url: string;
};

const CreatedAssignmentDisplay: React.FC<Props> = ({ code, qr_url }) => (
  <div className="mt-6 text-center w-full">
    <div className="font-semibold text-blue-800 mb-2">
      {t("createAssignment.codeLabel")} <span className="bg-slate-200 rounded px-2 py-1 font-mono">{code}</span>
    </div>
    <div className="mb-2 text-xs text-slate-500">{t("createAssignment.qrInstruction")}</div>
    <QrCode text={code} className="mx-auto" />
    {/* Un lien de partage peut être ajouté ici si besoin */}
  </div>
);

export default CreatedAssignmentDisplay;
