
import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";

const AppHeader: React.FC = () => (
  <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
    <div className="w-full flex justify-end mb-2">
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
  </header>
);

export default AppHeader;
