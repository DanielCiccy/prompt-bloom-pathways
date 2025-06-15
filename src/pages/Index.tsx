
import React, { useState } from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import AssignmentEntry from "@/components/AssignmentEntry";
import ChatSession from "@/components/ChatSession";
import { t } from "@/i18n/i18n";
import { Lock, Book, Check } from "lucide-react";

const Index = () => {
  const [assignment, setAssignment] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
        <PromptRenfortLogo />
        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold text-center">
          Universal Cognitive Trust Engine
        </div>

        {/* Welcome Block */}
        <div className="bg-white/60 border rounded-xl shadow-sm p-5 mt-5 mb-4 w-full max-w-lg text-center space-y-2">
          <div className="text-2xl font-bold tracking-tight text-blue-900 mb-1">
            Welcome to Prompt Renfort
          </div>
          <div className="text-base text-blue-900">
            A secure and respectful space for guided cognitive learning.
          </div>
          <div className="text-[15px] text-muted-foreground mt-3 mb-2">
            We never store personal data without consent.<br/>
            This experience complies with the EU’s GDPR.<br/>
            We protect your free will, your thinking time, and your right to grow.
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-2 justify-center text-blue-800">
              <Lock className="w-5 h-5" aria-label="Lock icon" />
              <span className="font-medium">Data belongs to you</span>
            </div>
            <div className="flex items-center gap-2 justify-center text-blue-800">
              <Book className="w-5 h-5" aria-label="Book icon" />
              <span className="font-medium">No AI answers are stored</span>
            </div>
            <div className="flex items-center gap-2 justify-center text-green-700">
              <Check className="w-5 h-5" aria-label="Check icon" />
              <span className="font-medium">Your mind is trusted here</span>
            </div>
          </div>
        </div>

        {/* Session Entry Section Description */}
        <div className="text-base text-gray-700 mt-2 mb-3 max-w-md text-center">
          <span className="font-semibold">Prompt Renfort is your AI preceptor.</span><br />
          Scan your assignment’s QR code or enter the code to begin a guided learning session.<br />
          Your effort will be recognized — not just your result.
        </div>
      </header>
      <main className="w-full flex-1 justify-center items-center flex flex-col">
        {!assignment ? (
          <AssignmentEntry onStart={setAssignment} />
        ) : (
          <ChatSession assignmentCode={assignment} onEnd={() => setAssignment(null)} />
        )}
      </main>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        &copy; {new Date().getFullYear()} Prompt Renfort – Cognitive Assistant Prototype.
      </footer>
    </div>
  );
};

export default Index;
