
import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";

const AppHeader: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 shadow-none border-b-0 mb-2">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-end py-2">
          <LanguageSelector />
        </div>
        <PromptRenfortLogo />
        <BrandingBar />
        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold text-center">
          {t("landing.motto_bold")}
        </div>
        <div className="text-base md:text-lg font-light text-orange-800 mb-2 text-center">
          {t("landing.motto_light")}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

