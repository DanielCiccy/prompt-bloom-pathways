
// Définition du type de données pour l'initialisation de session IA

export type SessionInitMode = "scanQR" | "enterCode" | "explore";
export type SessionProfileType = "student" | "parent" | "teacher" | "guest";
export type SessionAgeBracket = "primaire" | "college" | "lycee" | "superieur" | "unknown";

export interface SessionUser {
  id: string | null;                // UUID, deviceID, ou null (anonyme)
  profile_type: SessionProfileType;
  age_bracket: SessionAgeBracket;
}

export interface SessionAssignment {
  code: string | null;
  mode: SessionInitMode;
  title?: string;
}

export interface SessionConsent {
  gdpr_accepted: boolean;
  timestamp: string;
}

export interface SessionInit {
  session_id: string;               // UUID/identifiant unique (côté backend)
  user: SessionUser;
  assignment: SessionAssignment;
  consent: SessionConsent;
  started_at: string;               // ISO-8601 timestamp
  metadata?: {
    ip?: string;
    user_agent?: string;
  };
}
