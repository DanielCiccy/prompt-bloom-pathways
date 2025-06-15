

import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, User, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", labelKey: "Accueil", icon: <Home className="w-5 h-5" /> },
  { to: "/about", labelKey: "À propos", icon: <User className="w-5 h-5" /> },
];

const AppHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    navigate("/");
  };

  return (
    <header className="w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 shadow-none border-b-0 mb-2">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-between py-2">
          <div className="flex gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-50 transition ${
                  location.pathname === link.to ? "font-bold text-blue-700" : "text-gray-700"
                }`}
              >
                {link.icon}
                <span>{link.labelKey}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {!session ? (
              <Link
                to="/auth"
                className="flex items-center gap-2 px-3 py-1 rounded text-blue-700 font-semibold hover:bg-blue-50 transition"
              >
                {t("navbar.login")}
              </Link>
            ) : (
              <button
                className="flex items-center gap-2 px-3 py-1 rounded text-red-700 font-semibold hover:bg-red-50 transition"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                {t("navbar.logout")}
              </button>
            )}
          </div>
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
