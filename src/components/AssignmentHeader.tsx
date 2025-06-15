
import React from "react";
import { Camera, Printer } from "lucide-react";

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
  // Fonction d’impression du devoir (titre et description)
  const printAssignment = () => {
    // On imprime uniquement la section assignment-printable
    const printContent = document.getElementById("assignment-printable");
    if (!printContent) {
      window.print(); // fallback
      return;
    }
    const win = window.open("", "", "width=800,height=600");
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>${assignment?.title || "Devoir"}</title>
            <style>
              body { font-family: sans-serif; padding: 2rem; color: #003366; background: white;}
              h2 { font-size: 2rem; font-weight: bold; color: #0d1537; margin-bottom: 1rem;}
              .desc-block { font-size: 1.15rem; background: #e6f0fa; border-radius: .75rem; padding: 1rem 1.5rem; margin-bottom: 2rem; color: #113366;border: 1px solid #c2ddfa;}
              .infos { font-size: 1rem; color: #222; margin: .5rem 0;}
              .infos strong { color: #a66400; }
            </style>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      win.document.close();
      win.focus();
      win.print();
      win.close();
    } else {
      window.print();
    }
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-900">{assignment?.title || "Devoir"}</h2>
        <button
          type="button"
          onClick={printAssignment}
          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 border border-blue-100 rounded px-3 py-1 bg-white shadow-sm transition-all print:hidden"
          aria-label="Imprimer le devoir"
        >
          <Printer className="w-5 h-5" />
          <span className="hidden sm:inline">Imprimer</span>
        </button>
      </div>
      <div id="assignment-printable">
        {/* Description du devoir, en bloc stylé */}
        {assignment?.description && (
          <div className="mt-2 mb-2 text-base bg-blue-50 border border-blue-100 rounded p-3 text-blue-900 whitespace-pre-line desc-block">
            {assignment.description}
          </div>
        )}
        <div className="flex flex-col md:flex-row md:gap-8 gap-1 text-sm text-gray-700 mt-1 infos">
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
      </div>
      {/* Compte à rebours */}
      {countdown !== null && (
        <div className="mt-3 flex items-center gap-2 text-lg font-bold text-green-700 print:hidden">
          <span className="rounded-full bg-green-100 px-3 py-1">
            ⏰ {formatTime(countdown)}
          </span>
          <span className="text-xs text-gray-500 font-normal">Temps restant</span>
        </div>
      )}
      {/* Vérification caméra si demandée */}
      {photoRequested && (
        <div className="mt-2 flex items-center gap-2 animate-pulse text-orange-600 print:hidden">
          <Camera className="w-6 h-6" />
          <span>Vérification… Merci de montrer votre visage à l'écran !</span>
        </div>
      )}
    </div>
  );
};

export default AssignmentHeader;

