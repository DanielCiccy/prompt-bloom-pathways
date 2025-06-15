
import React, { useState } from "react";
import { SessionInitMode, SessionProfileType, SessionAgeBracket } from "@/types/SessionTypes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CONSENT_TEXT = (
  <>
    <span className="font-bold">Consentement RGPD :</span><br/>
    Vos données ne seront utilisées que pour initier et encadrer la session. Aucune donnée personnelle nominative n’est transmise à des tiers (OpenAI ou blockchain). <br/>
    En poursuivant, vous acceptez la politique de confidentialité et la conservation des traces uniquement pour preuve d’effort cognitif.
  </>
);

type EntryStep = "MODE" | "PROFILE" | "AGE" | "ASSIGNMENT" | "CONSENT" | "READY";

const ageRanges: { value: SessionAgeBracket; label: string }[] = [
  { value: "primaire", label: "École primaire (6-11 ans)" },
  { value: "college", label: "Collège (11-15 ans)" },
  { value: "lycee", label: "Lycée (15-18 ans)" },
  { value: "superieur", label: "Supérieur (>18 ans)" },
  { value: "unknown", label: "Non précisé" },
];

const profiles: { value: SessionProfileType; label: string }[] = [
  { value: "student", label: "Élève" },
  { value: "parent", label: "Parent" },
  { value: "teacher", label: "Enseignant·e" },
  { value: "guest", label: "Visiteur" },
];

const modes: { value: SessionInitMode; label: string }[] = [
  { value: "scanQR", label: "Scanner un QR code" },
  { value: "enterCode", label: "Entrer un code" },
  { value: "explore", label: "Exploration libre" },
];

const mockSessionId = () => crypto.randomUUID();

export default function SessionEntry() {
  const [step, setStep] = useState<EntryStep>("MODE");
  const [mode, setMode] = useState<SessionInitMode | null>(null);
  const [profile, setProfile] = useState<SessionProfileType | null>(null);
  const [age, setAge] = useState<SessionAgeBracket>("unknown");
  const [code, setCode] = useState("");
  const [consent, setConsent] = useState(false);

  // Simuler début de session (pas de stockage)
  const [sessionData, setSessionData] = useState<any>(null);

  function handleNext() {
    if (step === "MODE" && mode) setStep("PROFILE");
    else if (step === "PROFILE" && profile) {
      if (profile === "student") setStep("AGE");
      else setStep("ASSIGNMENT");
    }
    else if (step === "AGE") setStep("ASSIGNMENT");
    else if (step === "ASSIGNMENT") setStep("CONSENT");
    else if (step === "CONSENT" && consent) setStep("READY");
  }

  function handleStartSession() {
    // Préparer la data selon la structure (sans stockage)
    const fakeSession = {
      session_id: mockSessionId(),
      user: {
        id: null,
        profile_type: profile,
        age_bracket: age
      },
      assignment: {
        code: mode === "enterCode" ? code : null,
        mode: mode,
        ...(mode === "scanQR" && { code: "[QR-code]" }),
      },
      consent: {
        gdpr_accepted: consent,
        timestamp: new Date().toISOString(),
      },
      started_at: new Date().toISOString(),
      metadata: {
        user_agent: navigator.userAgent
      }
    };
    setSessionData(fakeSession);
    setStep("READY");
    // Ici : callback pour router ou appeler un backend plus tard
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-50 via-white to-blue-50 px-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full mt-8 mb-8 p-6 flex flex-col gap-6 items-center">
        <h2 className="text-xl font-bold text-blue-900">Démarrer une session d’accompagnement IA</h2>
        
        {step === "MODE" && (
          <div className="flex flex-col gap-3 w-full">
            <div className="font-medium text-blue-900 mb-2">Choisissez votre mode d’entrée :</div>
            {modes.map(opt => (
              <Button 
                key={opt.value} 
                className={`w-full text-left ${mode === opt.value ? "bg-blue-700 text-white" : ""}`}
                variant={mode === opt.value ? "default" : "outline"}
                onClick={() => setMode(opt.value)}
              >
                {opt.label}
              </Button>
            ))}
            <Button
              disabled={!mode}
              className="mt-4 w-full bg-blue-700 text-white"
              onClick={handleNext}
            >
              Continuer
            </Button>
          </div>
        )}
        {step === "PROFILE" && (
          <div className="flex flex-col gap-3 w-full">
            <div className="font-medium text-blue-900 mb-2">Votre profil :</div>
            {profiles.map(p => (
              <Button
                key={p.value}
                className={`w-full text-left ${profile === p.value ? "bg-orange-500 text-white" : ""}`}
                variant={profile === p.value ? "default" : "outline"}
                onClick={() => setProfile(p.value)}
              >
                {p.label}
              </Button>
            ))}
            <Button
              disabled={!profile}
              className="mt-4 w-full bg-blue-700 text-white"
              onClick={handleNext}
            >
              Continuer
            </Button>
          </div>
        )}
        {step === "AGE" && (
          <div className="flex flex-col gap-2 w-full">
            <div className="font-medium text-blue-900 mb-2">Niveau ou âge (élève) :</div>
            {ageRanges.map(a => (
              <label key={a.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="age"
                  value={a.value}
                  checked={age === a.value}
                  onChange={() => setAge(a.value)}
                  className="accent-blue-600"
                />
                {a.label}
              </label>
            ))}
            <Button
              className="mt-3 w-full bg-blue-700 text-white"
              onClick={handleNext}
            >
              Continuer
            </Button>
          </div>
        )}
        {step === "ASSIGNMENT" && (
          <div className="flex flex-col gap-3 w-full">
            {mode === "enterCode" && (
              <>
                <div className="font-medium text-blue-900 mb-2">Saisissez le code d’exercice :</div>
                <Input
                  autoFocus
                  type="text"
                  placeholder="ex : MATH2024"
                  value={code}
                  className="text-lg w-full"
                  onChange={e => setCode(e.target.value)}
                />
              </>
            )}
            <Button
              className="mt-3 w-full bg-blue-700 text-white"
              onClick={handleNext}
              disabled={mode === "enterCode" && !code.trim()}
            >
              Continuer
            </Button>
          </div>
        )}
        {step === "CONSENT" && (
          <Dialog open>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Consentement et vie privée</DialogTitle>
                <DialogDescription>
                  {CONSENT_TEXT}
                </DialogDescription>
              </DialogHeader>
              <label className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                J’accepte le traitement de mes données selon cette politique.
              </label>
              <Button
                className="mt-4 w-full bg-blue-700 text-white"
                onClick={handleNext}
                disabled={!consent}
              >
                Accepter et continuer
              </Button>
            </DialogContent>
          </Dialog>
        )}
        {step === "READY" && sessionData && (
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="text-green-700 font-semibold text-lg">Session prête à démarrer !</div>
            <pre className="bg-blue-50 rounded p-3 w-full text-xs overflow-x-auto">
              {JSON.stringify(sessionData, null, 2)}
            </pre>
            <Button className="w-full bg-green-700 text-white" onClick={() => alert("Démarrage de la session à venir")}>
              Commencer l’accompagnement IA
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
