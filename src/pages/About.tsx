
import React from "react";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";
import { t } from "@/i18n/i18n";

const About = () => (
  <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
    <AppHeader />
    <Navbar />
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {t("about.title")}
      </h1>
      <div className="text-lg whitespace-pre-line leading-relaxed bg-white rounded-lg shadow p-6">
        <div dangerouslySetInnerHTML={{ __html: t("about.intro") as string }} />
        <ul className="list-disc ml-6 mt-2">
          {(t("about.values") as string[]).map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
        <div className="mt-4 whitespace-pre-line">
          {t("about.conclusion")}
        </div>
      </div>
    </div>
  </div>
);

export default About;
