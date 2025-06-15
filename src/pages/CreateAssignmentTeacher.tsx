
import React from "react";
import AppHeader from "@/components/AppHeader";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { t } from "@/i18n/i18n";

const CreateAssignmentTeacher: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <div className="w-full max-w-lg mt-6">
        <button
          className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 text-sm mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          {t("common.backHome")}
        </button>
        <div className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col gap-3 items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            {t("createAssignment.title")}
          </h2>
          <div className="text-base text-gray-700 text-center mb-2">
            {t("createAssignment.subtitle")}
          </div>
          <div className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded px-3 py-2 mb-2">
            <strong>{t("common.comingSoon")} </strong>
            {t("createAssignment.soonBlock")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentTeacher;
