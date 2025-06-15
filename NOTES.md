
# Technical Notes – Prompt Renfort

## Session Flow – OpenAI / Prompt Renfort

```mermaid
flowchart TD
    subgraph Utilisateur
      U((👤))
      U -.-> QR[Scan QR]
      U -.-> Entry[Entrer code]
      U -.-> Explore[Exploration libre]
    end

    U -->|Démarre session| Frontend[Frontend React]
    Frontend -- Affiche modal RGPD/consentement --> Consent[Consentement utilisateur]
    Consent -- Token ou DeviceID/Profil --> Frontend

    Frontend -- Invoque API backend /session/start ---> BackendAPI[API Node/Flask]
    BackendAPI -- Crée sessionID & log metadata --> Storage[(DB locale/sécurisée)]
    BackendAPI -- Gère authentification (optionnel) --> Auth[OAuth / Email / Anonyme]

    BackendAPI -- Demande session IA --> OpenAI[OpenAI API (Assistants ou Chat)]
    OpenAI -- Réponse --> BackendAPI
    BackendAPI -- Réponse enrichie/metadonnée --> Frontend
    Frontend -- Affiche session arbre/progression --> U

    BackendAPI -->|Logs résumés (hash, badges, etc – optionnel)| Blockchain[(Blockchain/IPFS)]

    style Blockchain fill:#eef,stroke:#888,stroke-width:1px
    style OpenAI fill:#ffe,stroke:#666,stroke-width:1px
    style U fill:#dff,stroke:#666,stroke-width:2px
    style Frontend fill:#fff,stroke:#1640a0,stroke-width:2px
    style BackendAPI fill:#fff,stroke:#e37222,stroke-width:2px
```

## Points techniques/réflexions

- L’init “session” côté backend peut stocker sessionID, âge, profil, code d’exercice, timestamp.
- Les utilisateurs anonymes : stockage local (deviceID, localStorage) et consentement RGPD géré côté frontend, option de synchroniser côté cloud.
- Traçabilité/éthique : logs encryptés côté serveur (jamais de données nominatives dans OpenAI).
- Option badges/blockchain: à explorer plus tard — architecture modulaire.
- Imaginer la possibilité d’exports de logs à la demande (preuve d’apprentissage).

---

À compléter selon les évolutions du projet.
