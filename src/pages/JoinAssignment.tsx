
import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Clock, Eye, BrainCircuit, CheckCircle } from "lucide-react";

const JoinAssignment: React.FC = () => {
  const [assignmentCode, setAssignmentCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate backend validation (replace with real endpoint)
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (!assignmentCode || assignmentCode.length < 6) {
        throw new Error();
      }
-     navigate("/assignment-session");
+     navigate(`/assignment-session?code=${encodeURIComponent(assignmentCode)}`);
    } catch {
      toast({
        title: "Invalid code or expired assignment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <main className="w-full max-w-lg flex flex-col items-center mt-8 px-4">
        <section className="w-full bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col gap-3 items-center border border-blue-100 mb-4">
          <h1 className="text-2xl font-bold text-orange-700 mb-2 text-center">
            Join an Assignment
          </h1>
          <div className="text-base text-gray-700 text-center mb-4">
            <span className="font-semibold">
              Scan your QR code or enter the assignment code below to begin your session with Prompt Renfort.
            </span>
            <br />
            <span>
              Your progress, insights, and learning journey will be securely recorded and made available to your teacher.
            </span>
          </div>
          <form onSubmit={handleValidate} className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-stretch">
              <label
                htmlFor="assignmentCode"
                className="text-sm font-medium text-blue-800 mb-2"
              >
                Assignment Code
              </label>
              <Input
                id="assignmentCode"
                value={assignmentCode}
                onChange={(e) => setAssignmentCode(e.target.value)}
                placeholder="e.g. A9X5-TY4D"
                required
                maxLength={16}
                autoFocus
                className="mb-4"
                autoComplete="off"
              />
            </div>
            <Button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-2 rounded-xl transition"
              type="submit"
              disabled={loading}
            >
              {loading ? "Validating…" : "Validate and Start"}
            </Button>
          </form>
        </section>
        <div className="w-full flex flex-col gap-2 mb-2">
          <div className="border-t border-gray-200 my-4" />
          <InfoBlock
            icon={<Clock className="text-blue-700 w-7 h-7" />}
            title="Time Tracker"
            description="Once started, the time is limited. A countdown will track your remaining time and automatically save your progress."
          />
          <InfoBlock
            icon={<Eye className="text-orange-600 w-7 h-7" />}
            title="Optional Presence Verification"
            description="To certify the fairness of your effort, we may ask you to briefly show your presence via camera (with your consent). No video is recorded—only anonymous presence checkpoints."
          />
          <InfoBlock
            icon={<BrainCircuit className="text-blue-700 w-7 h-7" />}
            title="Cognitive Feedback"
            description="Prompt Renfort will analyze your conversation and highlight your cognitive progression—what you explored, how deeply you reasoned, what was original or insightful."
          />
          <InfoBlock
            icon={<CheckCircle className="text-green-700 w-7 h-7" />}
            title="Blockchain Certification (Coming soon)"
            description="At the end, your effort can be sealed on the blockchain as proof of engagement and learning—paving the way for future recognition, tokens, or incentives."
          />
          <div className="border-t border-gray-200 my-4" />
        </div>
        <div className="w-full text-sm text-center text-gray-600 px-1 mb-6">
          If this is your first assignment, make sure you understand your school's guidelines on AI assistance.<br />
          Always ask your teacher if you're unsure.
        </div>
      </main>
    </div>
  );
};

interface InfoBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoBlock({ icon, title, description }: InfoBlockProps) {
  return (
    <div className="flex items-start gap-3 bg-white/80 rounded-lg border border-gray-100 px-4 py-3 mb-1">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="font-semibold text-base text-blue-900">{title}</div>
        <div className="text-gray-700 text-sm">{description}</div>
      </div>
    </div>
  );
}

export default JoinAssignment;
