
import React from "react";
import { Camera } from "lucide-react";

interface AssignmentHeaderProps {
  assignment: any;
  assignmentCode: string;
  countdown: number | null;
  photoRequested: boolean;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const AssignmentHeader: React.FC<AssignmentHeaderProps> = ({
  assignment,
  assignmentCode,
  countdown,
  photoRequested,
}) => {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-blue-900">{assignment?.title || "Devoir"}</h2>
      {/* Description du devoir, en bloc stylé */}
      {assignment?.description && (
        <div className="mt-2 mb-2 text-base bg-blue-50 border border-blue-100 rounded p-3 text-blue-900 whitespace-pre-line">
          {assignment.description}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:gap-8 gap-1 text-sm text-gray-700 mt-1">
        <div>
          <span className="font-semibold text-orange-700">Code : </span>
          <span className="font-mono">{assignmentCode}</span>
        </div>
        {assignment?.deadline_time && (
          <div>
            <span className="font-semibold text-orange-700">Temps imparti : </span>
            {assignment.deadline_time.slice(0, 5)}
          </div>
        )}
        {assignment?.deadline_date && (
          <div>
            <span className="font-semibold text-blue-800">Date butoir : </span>
            {assignment.deadline_date}
          </div>
        )}
        {assignment?.school_name && (
          <div>
            <span className="font-semibold text-blue-800">Établissement : </span>
            {assignment.school_name}
          </div>
        )}
      </div>
      {/* Compte à rebours */}
      {countdown !== null && (
        <div className="mt-3 flex items-center gap-2 text-lg font-bold text-green-700">
          <span className="rounded-full bg-green-100 px-3 py-1">
            ⏰ {formatTime(countdown)}
          </span>
          <span className="text-xs text-gray-500 font-normal">Temps restant</span>
        </div>
      )}
      {/* Vérification caméra si demandée */}
      {photoRequested && (
        <div className="mt-2 flex items-center gap-2 animate-pulse text-orange-600">
          <Camera className="w-6 h-6" />
          <span>Vérification… Merci de montrer votre visage à l'écran !</span>
        </div>
      )}
    </div>
  );
};

export default AssignmentHeader;
