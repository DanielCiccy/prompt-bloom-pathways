
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Home, Users2 } from "lucide-react";

const navLinks = [
  { to: "/", label: "Accueil", icon: <Home className="w-5 h-5" /> },
  { to: "/profil", label: "Profil", icon: <User className="w-5 h-5" /> },
  { to: "/famille", label: "Famille", icon: <Users2 className="w-5 h-5" /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();

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
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
