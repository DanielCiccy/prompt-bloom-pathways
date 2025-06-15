
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Home, Users2, Info, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { t } from "@/i18n/i18n";

const navLinks = [
  { to: "/", labelKey: "navbar.home", icon: <Home className="w-5 h-5" /> },
  { to: "/profile", labelKey: "navbar.profile", icon: <User className="w-5 h-5" /> },
  { to: "/famille", labelKey: "navbar.family", icon: <Users2 className="w-5 h-5" /> },
  { to: "/about", labelKey: "navbar.about", icon: <Info className="w-5 h-5" /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // THEN check for existing session
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
    <nav className="w-full bg-white border-b shadow-sm mb-2">
      <div className="max-w-3xl mx-auto flex items-center justify-center gap-6 py-2">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-50 transition ${
              location.pathname === link.to ? "font-bold text-blue-700" : "text-gray-700"
            }`}
          >
            {link.icon}
            <span>{t(link.labelKey)}</span>
          </Link>
        ))}
        {!session ? (
          <Link
            to="/auth"
            className="ml-3 flex items-center gap-2 px-3 py-1 rounded text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            <User className="w-5 h-5" />
            {t("navbar.login")}
          </Link>
        ) : (
          <button
            className="ml-3 flex items-center gap-2 px-3 py-1 rounded text-red-700 font-semibold hover:bg-red-50 transition"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            {t("navbar.logout")}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
