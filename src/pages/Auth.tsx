
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

type AuthMode = "login" | "signup";

const Auth: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Gère la redirection si déjà connecté
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "signup") {
      // Inscription
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
          emailRedirectTo: redirectUrl,
        },
      });
      setLoading(false);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({
          title: "Inscription réussie",
          description:
            "Un lien de confirmation a été envoyé à votre adresse mail. Vérifiez votre boîte de réception.",
        });
      }
    } else {
      // Connexion
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Connexion réussie" });
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-blue-50">
      <div className="bg-white/90 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          {mode === "login" ? "Connexion" : "Inscription"}
        </h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <Input
                type="text"
                required
                placeholder="Prénom"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                required
                placeholder="Nom"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </>
          )}
          <Input
            type="email"
            required
            placeholder="Adresse email"
            value={email}
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            required
            placeholder="Mot de passe"
            value={password}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? "Chargement..."
              : mode === "login"
                ? "Se connecter"
                : "Créer mon compte"}
          </Button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <button
            className="text-blue-700 hover:underline"
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login"
              ? "Pas encore de compte ? Inscrivez-vous"
              : "Déjà inscrit ? Connectez-vous"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
