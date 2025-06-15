
import React from "react";
import AppHeader from "@/components/AppHeader";
import ChatSession from "@/components/ChatSession";
import { useNavigate } from "react-router-dom";

const DEFAULT_ASSIGNMENT_CODE = "PROMPT-2024"; // Remplacer par une vraie logique si nécessaire

const AssignmentSession: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50">
      <AppHeader />
      <main className="w-full flex flex-col items-center px-2 mb-8">
        <ChatSession 
          assignmentCode={DEFAULT_ASSIGNMENT_CODE}
          onEnd={() => navigate("/")}
        />
      </main>
    </div>
  );
};

export default AssignmentSession;
