
# TODO — Prochaines étapes & raffinements

## 🖥️ Interface & UX

- [ ] Affichage dynamique du chronomètre + gestion précise de la fin du temps
- [ ] Modal ou composant dédié pour la vérification photo (confirmation visuelle, UX claire)
- [ ] Améliorer le feedback graphique de l’impression (toast, confirmation)
- [ ] FAQ/assistance en ligne intégrée (pour élèves et enseignants)
- [ ] Notifications toast RGPD/recharge
- [ ] Accessibilité : cohérence des couleurs, contrastes, navigation clavier

## 🔐 RGPD & Consentement

- [ ] Historisation des consentements en BDD locale (avec timestamp)
- [ ] Page dédiée « Mention d’information »/consentement RGPD

## 🧰 Backend & logs

- [ ] Loguer toutes les sessions (entrée/sortie/fin)
- [ ] Option d’extraction/export anonymisé (CSV, blockchain à terme)

## 🤖 IA & pédagogie

- [ ] Améliorer l’adaptabilité socratique de l’assistant
- [ ] Système de reconnaissance étendu (plus de badges, feedback positif/constructif)

---

## ✨ ROADMAP / Fonctionnalités à venir

### 🎓 Espace pédagogique double-zone (Dual-Zone Pedagogical Workspace)

Proposition : création d’une interface à double fenêtre dédiée aux élèves lors de la rédaction d’un devoir :

- **Zone de rédaction**  
  Espace sans distraction où l’élève produit son texte.  
  L’IA observe passivement : elle enregistre les révisions, les phases d’hésitation, l’évolution de la structure, etc.  
  Aucun feedback automatique n’est délivré dans cet espace.  
  Tous les brouillons/intermédiaires sont sauvegardés avec horodatage (traçabilité cognitive).

- **Fenêtre d’assistance Prompt Renfort**  
  Zone parallèle où l’élève peut :  
  – Poser ses questions à l’IA,  
  – Demander clarification, exemples ou guidage,  
  – Recevoir les réponses.  
  Toute interaction est stockée et reliée temporellement à l’activité de rédaction.

**Objectif pédagogique** :  
Permettre aux enseignants de distinguer raisonnement autonome et réflexion guidée par l’IA, valider l’investissement cognitif, encourager une utilisation transparente et responsable de l’assistant.

**Note développement**:  
En cas de ressources limitées, prévoir en V2 (post-MVP) mais bien communiquer cette ambition comme jalon majeur de l’architecture.

---

## 📱 Mobile

- [ ] Optimisation responsive sur mobile/tablette, notamment chat session, header et modaux

## 🌍 Internationalisation

- [ ] Finaliser la traduction multi-langues (chat, toasts, onboarding)

---

## Fonctionnalités en place (vérifiées)

- [x] Impression du devoir depuis le header du chat
- [x] Historique de chat socratique, progression visuelle (“arbre”)
- [x] Consentement RGPD affiché lors de l’onboarding
- [x] Compatible desktop/mobile

---

## Suggestion : 🛎️
Ajoutez ici à chaque pull request les tâches réalisées !
