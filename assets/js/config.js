/* ==========================================================
   RÉGLAGES DU SITE : c'est le seul fichier à modifier
   pour brancher la réservation et le formulaire du test.
   Remplace ce qui est entre les guillemets "", rien d'autre.
   ========================================================== */
window.SITE_CONFIG = {
  /* 1. RÉSERVATION CAL.COM
     Dans Cal.com, ouvre ton type de rendez-vous et copie la fin du lien.
     Exemple : si ton lien est https://cal.com/quentin-fauchereau/balade-declic
     écris  "quentin-fauchereau/balade-declic"
     Tant que c'est vide, le site affiche un emplacement « à compléter ». */
  calBalade: "",    // [LIEN DE RÉSERVATION : Balade Déclic]
  calParcours: "",  // [LIEN DE RÉSERVATION : Parcours Premier Pas] (laisse vide si on réserve le parcours autrement)

  /* 2. FORMULAIRE DU TEST (prénom, e-mail, résultat)
     Colle ici l'adresse d'envoi fournie par ton service de formulaire.
     Exemple Formspree : "https://formspree.io/f/abcdwxyz"
     Tant que c'est vide, le résultat détaillé s'affiche quand même,
     mais rien n'est envoyé. */
  formulaireTest: "" // [SERVICE DE FORMULAIRE : Tally, Formspree ou Brevo]
};
