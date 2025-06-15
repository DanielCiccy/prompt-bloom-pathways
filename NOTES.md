
# Prompt Renfort — Notes techniques

## 👉 État de l’architecture

- **Frontend** : React, TypeScript, Shadcn/ui, Tailwind CSS (design responsive, modulaire)
- **Backend** : Supabase (authentification, DB, API REST)
- **IA** : Intégration OpenAI (API ou Assistants), logique d’init et de traçabilité via le backend.
- **Session utilisateur** :  
  - **Accès** par code ou scan QR  
  - **Consentement RGPD** systématique
  - **Anonymat** possible (deviceID, localStorage)
  - **Progression** visualisée via arbre ou badges

## 🔗 Flux de session (élève)

1. **Accueil/Entrée**
    - Saisie d’un code ou scan d’un QR
    - Sélection du profil (élève/parent/enseignant)
    - Affichage RGPD/consentement obligatoire

2. **Démarrage session**
    - Création et log d’un `sessionID` (via backend/Supabase)
    - Prise en compte profil, âge, contexte

3. **Ouverture du chat précepteur**
    - Message de bienvenue adapté au devoir
    - Historique des messages et progression
    - Chronomètre visible dès début du devoir

4. **Accompagnement & suivi**
    - Réponses IA pédagogiques inspirées de la méthode socratique
    - Encouragement, guidance active
    - Contrôle visuel (photo simple, sans stockage)
    - Affichage des reconnaissances (“Curiosity”, “Persistence”, etc.)

5. **Fin et Résumé de session**
    - Résumé visualisé
    - Possibilité d’impression
    - Logs anonymisés (option)

## 🏷️ Éthique & Confidentialité

- Jamais de données nominatives envoyées à OpenAI
- Logs sécurisés/anonymes (RLS Supabase)
- Affichage explicite du consentement, RGPD
- Possibilité de badges/blockchain (à venir)

## 🛠️ Suivi des évolutions

Voir `TODO.md` pour la liste détaillée des fonctionnalités restant à affiner ou implémenter.

---

