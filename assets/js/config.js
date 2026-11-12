/* ==========================================================
   RÉGLAGES DU SITE : c'est le seul fichier à modifier
   pour brancher la réservation et le formulaire du test.
   Remplace ce qui est entre les guillemets "", rien d'autre.
   ========================================================== */
window.SITE_CONFIG = {
  /* 1. RÉSERVATION CAL.COM
     Dans Cal.com, ouvre ton type de rendez-vous et copie son lien.
     Exemple : https://cal.com/quentin-fauchereau/balade-declic
     Tu peux coller le lien entier ou seulement la fin.
     Tant que c'est vide, le site affiche un emplacement « à compléter ». */
  calBalade: "",      // [LIEN CAL.COM : Balade Déclic, 1h30, 140 €]
  calParcours: "",    // [LIEN CAL.COM : Parcours Premier Pas, 4 × 1h30, 490 €]
  calDecouverte: "",  // [LIEN CAL.COM : Appel découverte, 15 min]
                      // Tant que c'est vide, le bouton « appel découverte » ouvre WhatsApp.

  /* 2. WHATSAPP (indicatif pays sans le +, sans espaces) */
  whatsapp: "33631794479",

  /* 3. FORMULAIRE DU TEST (prénom, e-mail, résultat)
     Colle ici l'adresse d'envoi fournie par ton service de formulaire.
     Exemple Formspree : "https://formspree.io/f/abcdwxyz"
     Tant que c'est vide, le résultat détaillé s'affiche quand même,
     mais rien n'est envoyé. */
  formulaireTest: "" // [SERVICE DE FORMULAIRE : Tally, Formspree ou Brevo]
};
