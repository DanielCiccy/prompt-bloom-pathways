
import React from "react";

interface SuggestionBoxProps {
  suggestion: string;
  setSuggestion: (v: string) => void;
  submitting: boolean;
  feedbackSubmitting: boolean;
}
const SuggestionBox: React.FC<SuggestionBoxProps> = ({
  suggestion,
  setSuggestion,
  submitting,
  feedbackSubmitting
}) => (
  <div>
    <label htmlFor="suggestion_box" className="block text-sm text-blue-900 font-semibold mb-1">
      <span role="img" aria-label="bulb">💡</span> Vous avez une suggestion pour améliorer cet outil ?<br />
      Partagez votre idée ou retour ci-dessous. Nous écoutons ! <span role="img" aria-label="down-point">👇</span>
    </label>
    <textarea
      id="suggestion_box"
      className="w-full border border-slate-300 rounded px-3 py-2 min-h-[64px] text-sm resize-y"
      placeholder="Expliquez votre idée, problème ou remarque pour l’équipe produit (optionnel)"
      value={suggestion}
      onChange={e => setSuggestion(e.target.value)}
      disabled={submitting || feedbackSubmitting}
      rows={3}
    />
  </div>
);

export default SuggestionBox;
