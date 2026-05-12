/**
 * Locale dictionaries for Atahualpa Studio.
 * Components consume these via the `useLanguage()` hook (`t(key)`).
 * French is the default fallback.
 *
 * Convention: keys are namespaced by feature (`nav.*`, `home.*`,
 * `lecons.*`, etc.). Rich-markup paragraphs (those with <b>, <br>,
 * embedded JSX) live inside components as locale-conditional JSX
 * rather than HTML-in-strings, so we keep XSS safety and React
 * reconciliation. Plain text — titles, labels, ledes, CTAs — lives
 * here.
 */

export const SUPPORTED_LOCALES = ['fr', 'en', 'es', 'it'];
export const DEFAULT_LOCALE = 'fr';

export const LOCALE_LABELS = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
};

export const WHATSAPP_NUMBER = '41772792514';

/**
 * Online booking link for the individual discovery lesson (60 min, 55 CHF).
 * The flow is: Google Calendar Appointment Schedule + Stripe — visible
 * calendar, payment required at booking, confirmed only after payment.
 *
 * This is a placeholder until the booking schedule is configured. Swap
 * the string below for the final URL when ready.
 */
export const INDIVIDUAL_DISCOVERY_BOOKING_URL =
  'INDIVIDUAL_DISCOVERY_BOOKING_URL';

export const WHATSAPP_MESSAGES = {
  trial: {
    fr: 'Bonjour, je souhaite demander un cours d’essai gratuit pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
    en: 'Hello, I would like to request a free trial lesson for the multi-instrument workshop. My child is _ years old. We are mostly available on the following days: _. Thank you!',
    es: 'Hola, me gustaría solicitar una clase de prueba gratuita para el taller multi-instrumental. Mi hijo/a tiene _ años. Solemos estar disponibles los siguientes días: _. ¡Gracias!',
    it: 'Salve, vorrei richiedere una lezione di prova gratuita per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili soprattutto i seguenti giorni: _. Grazie!',
  },
  regler: {
    fr: 'Bonjour, je souhaite mettre en place le paiement pour les cours réguliers. Pouvez-vous m’envoyer les informations pour le débit automatique ou le paiement annuel ?',
    en: 'Hello, I would like to set up payment for the regular lessons. Could you send me the details for automatic debit or annual payment?',
    es: 'Hola, me gustaría establecer el pago para las clases regulares. ¿Podrían enviarme la información para el débito automático o el pago anual?',
    it: 'Salve, vorrei attivare il pagamento per le lezioni regolari. Potete inviarmi le informazioni per l’addebito automatico o per il pagamento annuale?',
  },
};

export const buildWhatsAppUrl = (locale, key) => {
  const msg =
    (WHATSAPP_MESSAGES[key] && WHATSAPP_MESSAGES[key][locale]) ||
    (WHATSAPP_MESSAGES[key] && WHATSAPP_MESSAGES[key].fr) ||
    '';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const translations = {
  fr: {
    // Navigation
    'nav.cours': 'COURS DE MUSIQUE',
    'nav.cours.atelier.title': 'Atelier multi-instrumental',
    'nav.cours.atelier.desc': 'Cours en groupe pour enfants · essai gratuit',
    'nav.cours.individuels.title': 'Cours individuels',
    'nav.cours.individuels.desc':
      'Guitare, basse, DJing & production · séance découverte 55 CHF',
    'nav.cours.regler.title': 'Régler ma formule',
    'nav.cours.regler.desc': 'Pour les élèves déjà inscrits',
    'nav.cours.openLabel': 'Ouvrir le menu Cours de musique',
    'nav.prise': 'PRISE DE SON ET VIDÉO',
    'nav.apropos': 'À PROPOS',
    'nav.contact': 'CONTACT',
    'nav.toggleMenu': 'Ouvrir le menu',
    'nav.languageLabel': 'Langue',
    'nav.changeLanguage': 'Changer de langue',
    'nav.switchToFr': 'Passer en français',
    'nav.switchToEn': 'Passer en anglais',
    'nav.switchToEs': 'Passer en espagnol',
    'nav.switchToIt': 'Passer en italien',

    // Common chips / labels
    'common.specialties': 'Spécialités',
    'common.readMore': 'Lire plus',
    'common.readLess': 'Lire moins',
    'common.learnMore': 'En savoir plus',
    'common.discoverProgram': 'Découvrir les cours de musique',
    'common.moreInfo': 'Découvrir les services audio/vidéo',
    'common.chooseOffer': 'Choisir cette offre',
    'common.bookNow': 'Réserver une séance découverte',
    'common.pageSections': 'Sections de la page',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Cologny / Genève',
    'home.hero.title': 'Un studio pour apprendre, créer et capturer la musique',
    'home.hero.subtitle': '',
    'home.hero.ctaLecons': 'Découvrir les cours de musique',
    'home.hero.ctaPrise': 'Prise de son & vidéo',
    'home.hero.chip.atelier': 'Atelier multi-instrumental',
    'home.hero.chip.individual': 'Cours individuels',
    'home.hero.chip.recording': 'Enregistrement',
    'home.hero.chip.video': 'Captation vidéo',

    // Home / Intro
    'home.intro.eyebrow': 'À propos',
    'home.intro.title': 'Un lieu pensé pour la musique',
    'home.intro.lede':
      'Atahualpa Music Studio, à Cologny / Genève, aux portes des Eaux-Vives et face au lac Léman.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Notre univers',
    'home.stage.title':
      'Découvrez notre univers musical et audiovisuel',
    'home.stage.lede':
      'Deux activités complémentaires sous le même toit, pour apprendre, créer, enregistrer et partager la musique.',
    'home.stage.lecons.title': 'Cours de musique & ateliers créatifs',
    'home.stage.lecons.cta': 'Découvrir les cours de musique',
    'home.stage.prise.title': 'Prise de son & vidéo professionnelles',
    'home.stage.prise.cta': 'Découvrir les services audio/vidéo',

    // Home / History
    'home.history.eyebrow': 'Notre histoire',
    'home.history.title': 'Une histoire dédiée à la musique',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Atelier de musique · Cologny / Genève',
    'lecons.hero.title': 'Cours de musique à Cologny / Genève',
    'lecons.hero.lede':
      'Des cours pratiques et personnalisés pour enfants, adolescents et adultes, dans un studio équipé situé à Cologny, aux portes des Eaux-Vives et du centre de Genève.',
    'lecons.hero.card.group.title':
      'Atelier multi-instrumental en petit groupe',
    'lecons.hero.card.group.cta': 'Découvrir l’atelier',
    'lecons.hero.card.individual.title':
      'Cours individuels de guitare, basse & création musicale',
    'lecons.hero.card.individual.cta':
      'Découvrir les cours individuels',

    // Group class
    'group.eyebrow': 'Cours en groupe · enfants',
    'group.title': 'Atelier multi-instrumental pour enfants',
    'group.schedule':
      'Créneaux disponibles du lundi au vendredi, entre 15 h et 20 h. Cours d’essai gratuit sur réservation.',
    'group.benefit1.title': 'Groupes réduits',
    'group.benefit1.body':
      'Maximum 4 enfants par groupe pour garantir un suivi personnalisé.',
    'group.benefit2.title': 'Plusieurs instruments',
    'group.benefit2.body':
      'Les enfants changent régulièrement d’instrument et développent une vision globale de la musique.',
    'group.benefit3.title': 'Apprentissage par la pratique',
    'group.benefit3.body':
      'Pas de théorie inutile : les enfants apprennent en jouant des morceaux concrets.',
    'group.cta': 'Demander un cours d’essai gratuit',
    'group.cta.helper':
      'Nous vous proposerons le créneau le plus adapté selon l’âge de l’enfant, son niveau et les groupes disponibles.',
    'group.pricing.title': 'Nos formules — atelier en groupe',
    'group.pricing.lede':
      'Choisissez la formule qui correspond le mieux à vos besoins. Le cours d’essai reste gratuit, sur réservation.',
    'group.offer.trial.title': 'Cours d’essai gratuit',
    'group.offer.trial.price': '0 CHF',
    'group.offer.trial.cta': 'Demander un cours d’essai',
    'group.offer.monthly.title': 'Formule mensuelle',
    'group.offer.monthly.price': '65 CHF / cours',
    'group.offer.monthly.subPrice': '',
    'group.offer.monthly.cta': 'Choisir la formule mensuelle',
    'group.offer.annual.title': 'Abonnement annuel',
    'group.offer.annual.price': '55 CHF / cours',
    'group.offer.annual.subPrice': '',
    'group.offer.annual.cta': 'Choisir l’abonnement annuel',

    // Individual class
    'individual.eyebrow': 'Cours individuels',
    'individual.title':
      'Guitare, basse, DJing & production musicale',
    'individual.pricing.title': 'Nos formules — cours individuels',
    'individual.pricing.lede':
      'Des cours personnalisés pour progresser à votre rythme : jouer vos morceaux préférés, développer votre technique, composer, improviser ou créer votre propre musique.',
    'individual.offer.discovery.tag': 'Tarif réduit',
    'individual.offer.discovery.title': 'Séance découverte',
    'individual.offer.discovery.price': '55 CHF',
    'individual.offer.discovery.subPrice': '',
    'individual.offer.discovery.cta': 'Réserver une séance découverte',
    'individual.offer.monthly.tag': 'Flexible',
    'individual.offer.monthly.title': 'Formule mensuelle',
    'individual.offer.monthly.price': '89 CHF / cours',
    'individual.offer.monthly.subPrice': '356 CHF / mois',
    'individual.offer.monthly.cta': 'Choisir la formule mensuelle',
    'individual.offer.annual.tag': 'Progression sur l’année',
    'individual.offer.annual.title': 'Abonnement annuel',
    'individual.offer.annual.price': '79 CHF / cours',
    'individual.offer.annual.subPrice': '316 CHF / mois',
    'individual.offer.annual.cta': 'Choisir l’abonnement annuel',

    // Régler ma formule
    'regler.eyebrow': 'Élèves déjà inscrits',
    'regler.title': 'Déjà inscrit ? Régler votre formule',
    'regler.lede':
      'Si votre créneau hebdomadaire a déjà été confirmé avec le studio, vous pouvez régler votre formule mensuelle, mettre en place un paiement automatique ou choisir un paiement annuel.',
    'regler.primaryCta': 'Régler ma formule',
    'regler.secondaryCta': 'Demander les informations par WhatsApp',
    'regler.note':
      'Les formules régulières sont mises en place après confirmation du créneau avec le studio.',

    // Videos eleves
    'videos.eyebrow': 'Élèves en studio',
    'videos.title': 'Vidéos des élèves',
    'videos.lede':
      'Au-delà des cours, les élèves découvrent aussi l’expérience du studio : enregistrer, écouter, améliorer et partager leur musique dans un cadre professionnel. Une manière concrète de valoriser leur progression et de gagner en confiance.',
    'videos.itemTitle': 'Élève en studio — vidéo',

    // FAQ
    'faq.eyebrow': 'Questions fréquentes',
    'faq.title': 'FAQ — Questions fréquentes',
    'faq.lede':
      'Toutes les réponses pour bien préparer votre venue chez Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': 'Écrire sur WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Cologny / Genève',
    'prise.hero.title': 'Prise de son, vidéo & streaming',
    'prise.hero.lede':
      'Deux salles dédiées à la production audio et vidéo, à Cologny / Genève, face au lac Léman. Une équipe spécialisée dans l’enregistrement, la captation multicam, le mixage et la diffusion en direct — au service des artistes, orchestres et musiciens.',
    'prise.hero.ctaProjects': 'Voir nos projets',
    'prise.hero.ctaWhatsapp': 'Parlez-nous de votre projet',
    'prise.hero.chip.studio': 'Studio',
    'prise.hero.chip.multicam': 'Multicam',
    'prise.hero.chip.live': 'Live YouTube',
    'prise.hero.chip.mixing': 'Mixage & mastering',

    // Prise / PageNav
    'prise.nav.services': 'Services',
    'prise.nav.approche': 'Notre approche',
    'prise.nav.projets': 'Projets',
    'prise.nav.contact': 'Contact',

    // Prise / Services
    'prise.services.eyebrow': 'Nos prestations',
    'prise.services.title': 'Un studio, quatre métiers',
    'prise.services.lede':
      'De la captation à la diffusion, nous accompagnons chaque projet avec un soin artisanal et un matériel professionnel.',
    'prise.services.recording.title': 'Enregistrement orchestral & live',
    'prise.services.recording.desc':
      'Captation d’orchestres, ensembles et musiciens avec une qualité studio, en salle ou sur site.',
    'prise.services.video.title': 'Captation vidéo',
    'prise.services.video.desc':
      'Réalisation multicam pour concerts, sessions live et contenus artistiques, avec étalonnage soigné.',
    'prise.services.streaming.title': 'Streaming YouTube',
    'prise.services.streaming.desc':
      'Gestion complète de la diffusion en direct avec audio synchronisé et image professionnelle.',
    'prise.services.mixing.title': 'Mixage & Mastering',
    'prise.services.mixing.desc':
      'Finalisation sonore pour un rendu clair, équilibré et puissant sur toutes les plateformes.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Notre méthode',
    'prise.approach.title':
      'Une équipe, quatre étapes — du brief à la diffusion.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body':
      'On échange sur votre projet, vos contraintes et le rendu souhaité.',
    'prise.approach.step2.title': 'Captation',
    'prise.approach.step2.body':
      'Installation studio ou sur site, son et image synchronisés au cordeau.',
    'prise.approach.step3.title': 'Post-production',
    'prise.approach.step3.body':
      'Montage, mixage et mastering pour un rendu prêt à diffuser.',
    'prise.approach.step4.title': 'Diffusion',
    'prise.approach.step4.body':
      'Livraison des fichiers ou stream YouTube en direct, prêt pour le public.',

    // Prise / Showcase (gallery)
    'prise.showcase.eyebrow': 'En images',
    'prise.showcase.title': 'Quelques captations récentes',
    'prise.showcase.lede':
      'Un aperçu de nos installations sur scène — au Victoria Hall et lors du Festival International Genève Musicale.',
    'prise.showcase.img.stage.alt':
      'Scène d’orchestre prête pour la captation au Victoria Hall',
    'prise.showcase.img.stage.caption': 'Victoria Hall — Scène',
    'prise.showcase.img.microphones.alt':
      'Microphones de prise de son installés devant l’orchestre',
    'prise.showcase.img.microphones.caption': 'Victoria Hall — Prise de son',
    'prise.showcase.img.micros.alt':
      'Couples de microphones pour captation orchestrale',
    'prise.showcase.img.micros.caption': 'Victoria Hall — Couples micros',
    'prise.showcase.img.setup.alt':
      'Installation technique du studio mobile',
    'prise.showcase.img.setup.caption': 'Victoria Hall — Installation',
    'prise.showcase.img.festival.alt':
      'Captation au Festival International Genève Musicale',
    'prise.showcase.img.festival.caption':
      'Festival International Genève Musicale',

    'prise.projects.eyebrow': 'Réalisations',
    'prise.projects.title': 'Projets réalisés',
    'prise.projects.lede':
      'Captations live, enregistrements d’orchestres et streaming YouTube réalisés par notre équipe.',
    'prise.projects.gm2026.title':
      'Festival International Genève Musicale 2026 – Concert d’ouverture',
    'prise.projects.gm2026.date': '26 avril 2026',
    'prise.projects.gm2026.location':
      'Grande Salle de l’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1':
      'Dimanche 26 avril 2026 à 18h30 — Concert à deux pianos avec les Maîtres du Festival et les musiciens invités.',
    'prise.projects.gm2026.p2':
      'Au programme : Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodine, Piazzolla et Michel Runtz.',
    'prise.projects.gm2026.p3':
      'Le Festival International Genève Musicale réunit jeunes lauréats, maîtres du piano et artistes invités autour de concerts, master classes et moments de transmission musicale.',
    'prise.projects.gm2025.title':
      'Concours International "Genève Musicale"',
    'prise.projects.gm2025.date': 'Juin 2025',
    'prise.projects.gm2025.location': 'Association "Genève Musicale"',
    'prise.projects.gm2025.p1':
      '2e Concours International pour Jeunes Pianistes "Genève Musicale".',
    'prise.projects.gm2025.p2':
      'Programme de l’épreuve demi-finale — une compétition internationale où de jeunes pianistes talentueux venus du monde entier se produisent devant un jury international.',
    'prise.projects.victoria.title':
      'Victoria Hall – Orchestre CMGO Musimax',
    'prise.projects.victoria.date': '23 juin 2024',
    'prise.projects.victoria.location':
      'Conservatoire de Genève – Victoria Hall',
    'prise.projects.victoria.p1':
      'Pieter-Jelle de BOER, direction. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2':
      'Atahualpa Music Studio — Ezequiel Cappellano & Mirko Hrubik : recording, mixing and mastering. Louis Hans-Moevi & Nelson Iso : cameraman and video editing.',
    'prise.projects.victoria.p3':
      'Ludwig van Beethoven – Piano Concerto op.19 N°2 in B flat Major.',

    // Prise / CTA
    'prise.cta.eyebrow': 'On en discute ?',
    'prise.cta.title':
      'Un concert, un album, un live à diffuser ?',
    'prise.cta.lede':
      'Parlez-nous de votre projet. On revient vers vous rapidement avec une proposition adaptée.',
    'prise.cta.whatsapp': 'Écrire sur WhatsApp',
    'prise.cta.email': 'Envoyer un email',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Une petite équipe, un grand studio',
    'about.lede':
      'Atahualpa Music Studio, c’est avant tout une équipe de musiciens passionnés qui travaillent ensemble, à Cologny / Genève, face au lac Léman.',
    'about.image.alt': 'L’équipe d’Atahualpa Music Studio',

    // Bio
    'bio.title': 'Fondateur d’Atahualpa Music Studio & chef d’équipe',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Localisation – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Cologny / Genève',
    'contact.hero.title': 'Parlons musique',
    'contact.hero.lede':
      'Une question sur les cours, un projet de captation ou simplement envie de visiter le studio ? Écrivez-nous — nous vous répondons rapidement, en français, anglais, espagnol ou italien.',
    'contact.hero.whatsappAria': 'Nous contacter sur WhatsApp',
    'contact.hero.whatsapp': 'Discuter sur WhatsApp',
    'contact.hero.email': 'Envoyer un e-mail',
    'contact.hero.metaLabel': 'Informations',
    'contact.hero.meta.location': 'Cologny / Genève',
    'contact.hero.meta.response': 'Réponse sous 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Formulaire',
    'contact.form.title': 'Écrivez-nous un message',
    'contact.form.lede':
      'Plus pratique pour un projet détaillé ou un devis.',
    'contact.form.success':
      'Votre message a été envoyé avec succès — nous revenons vers vous rapidement.',
    'contact.form.subject': 'Nouveau message — atahualpa.studio',
    'contact.form.name': 'Nom',
    'contact.form.namePlaceholder': 'Votre nom',
    'contact.form.email': 'E-mail',
    'contact.form.emailPlaceholder': 'votre@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder':
      'Dites-nous ce qui vous amène — niveau, instrument, projet, dates…',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours…',
    'contact.form.errorSend':
      'Échec de l’envoi du message. Merci de réessayer.',
    'contact.form.errorFormData':
      'FormData n’est pas pris en charge dans cet environnement.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio':
      'Cours de musique, enregistrement et captation audio/vidéo à Cologny / Genève. Un studio équipé pour apprendre, créer, enregistrer et partager la musique dans un cadre professionnel et bienveillant.',
    'footer.nav.title': 'Navigation',
    'footer.nav.home': 'Accueil',
    'footer.nav.cours': 'Cours de musique',
    'footer.nav.regler': 'Régler ma formule',
    'footer.nav.prise': 'Prise de son et vidéo',
    'footer.nav.about': 'À propos',
    'footer.nav.contact': 'Contact',
    'footer.students.title': 'Élèves déjà inscrits',
    'footer.students.body':
      'Votre créneau est déjà confirmé ? Réglez votre formule mensuelle, annuelle ou mettez en place le paiement automatique.',
    'footer.students.cta': 'Régler ma formule',
    'footer.contact.title': 'Contactez-nous',
    'footer.contact.phoneLabel': 'Téléphone / WhatsApp',
    'footer.contact.phone': '+41 77 279 25 14',
    'footer.contact.email': 'atahualpa.music.studio@gmail.com',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny / Genève',
    'footer.contact.whatsappCta': 'Écrire sur WhatsApp',
    'footer.copyright': '© 2025',
    'footer.rights': 'Tous droits réservés',
    'footer.logo.alt': 'Logo Atahualpa Music Studio',

    // ContactLinks (PressKit)
    'press.title': 'Télécharger le Press Kit',
    'press.en': 'Press Kit (English)',
    'press.fr': 'Press Kit (Français)',
  },
  en: {
    // Navigation
    'nav.cours': 'MUSIC LESSONS',
    'nav.cours.atelier.title': 'Multi-instrument workshop',
    'nav.cours.atelier.desc': 'Group lessons for kids · free trial',
    'nav.cours.individuels.title': 'Private lessons',
    'nav.cours.individuels.desc':
      'Guitar, bass, DJing & production · discovery session 55 CHF',
    'nav.cours.regler.title': 'Pay my plan',
    'nav.cours.regler.desc': 'For students already enrolled',
    'nav.cours.openLabel': 'Open the Music lessons menu',
    'nav.prise': 'AUDIO & VIDEO',
    'nav.apropos': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.toggleMenu': 'Open menu',
    'nav.languageLabel': 'Language',
    'nav.changeLanguage': 'Change language',
    'nav.switchToFr': 'Switch to French',
    'nav.switchToEn': 'Switch to English',
    'nav.switchToEs': 'Switch to Spanish',
    'nav.switchToIt': 'Switch to Italian',

    // Common chips / labels
    'common.specialties': 'Specialties',
    'common.readMore': 'Read more',
    'common.readLess': 'Read less',
    'common.learnMore': 'Learn more',
    'common.discoverProgram': 'Discover the music lessons',
    'common.moreInfo': 'Discover the audio/video services',
    'common.chooseOffer': 'Choose this plan',
    'common.bookNow': 'Book a discovery session',
    'common.pageSections': 'Page sections',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Cologny / Geneva',
    'home.hero.title':
      'A studio to learn, create and capture music',
    'home.hero.subtitle': '',
    'home.hero.ctaLecons': 'Discover the music lessons',
    'home.hero.ctaPrise': 'Audio & video production',
    'home.hero.chip.atelier': 'Multi-instrument workshop',
    'home.hero.chip.individual': 'Private lessons',
    'home.hero.chip.recording': 'Recording',
    'home.hero.chip.video': 'Video capture',

    // Home / Intro
    'home.intro.eyebrow': 'About',
    'home.intro.title': 'A space designed for music',
    'home.intro.lede':
      'Atahualpa Music Studio, in Cologny / Geneva, on the edge of Eaux-Vives and overlooking Lake Geneva.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Our world',
    'home.stage.title':
      'Discover our musical and audiovisual universe',
    'home.stage.lede':
      'Two complementary activities under one roof — to learn, create, record and share music.',
    'home.stage.lecons.title': 'Music lessons & creative workshops',
    'home.stage.lecons.cta': 'Discover the music lessons',
    'home.stage.prise.title': 'Professional audio & video production',
    'home.stage.prise.cta': 'Discover the audio/video services',

    // Home / History
    'home.history.eyebrow': 'Our story',
    'home.history.title': 'A story devoted to music',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Music workshop · Cologny / Geneva',
    'lecons.hero.title': 'Music lessons in Cologny / Geneva',
    'lecons.hero.lede':
      'Hands-on, personalized lessons for children, teenagers and adults, in a fully equipped studio in Cologny — at the gateway to Eaux-Vives and the centre of Geneva.',
    'lecons.hero.card.group.title':
      'Multi-instrument workshop in small groups',
    'lecons.hero.card.group.cta': 'Discover the workshop',
    'lecons.hero.card.individual.title':
      'Private lessons in guitar, bass & music creation',
    'lecons.hero.card.individual.cta':
      'Discover the private lessons',

    // Group class
    'group.eyebrow': 'Group lessons · kids',
    'group.title': 'Multi-instrument workshop for children',
    'group.schedule':
      'Slots available Monday to Friday, between 3 pm and 8 pm. Free trial lesson on request.',
    'group.benefit1.title': 'Small groups',
    'group.benefit1.body':
      'Up to 4 children per group, so every student gets personal attention.',
    'group.benefit2.title': 'Several instruments',
    'group.benefit2.body':
      'Children rotate instruments regularly and develop a well-rounded understanding of music.',
    'group.benefit3.title': 'Learning by playing',
    'group.benefit3.body':
      'No unnecessary theory: kids learn by playing real songs.',
    'group.cta': 'Request a free trial lesson',
    'group.cta.helper':
      'We’ll suggest the time slot best suited to your child’s age, level and the groups currently available.',
    'group.pricing.title': 'Plans — group workshop',
    'group.pricing.lede':
      'Choose the plan that fits you best. The group trial lesson is free, on request.',
    'group.offer.trial.title': 'Free trial lesson',
    'group.offer.trial.price': '0 CHF',
    'group.offer.trial.cta': 'Request a trial lesson',
    'group.offer.monthly.title': 'Monthly plan',
    'group.offer.monthly.price': '65 CHF / lesson',
    'group.offer.monthly.subPrice': '',
    'group.offer.monthly.cta': 'Choose the monthly plan',
    'group.offer.annual.title': 'Annual plan',
    'group.offer.annual.price': '55 CHF / lesson',
    'group.offer.annual.subPrice': '',
    'group.offer.annual.cta': 'Choose the annual plan',

    // Individual class
    'individual.eyebrow': 'Private lessons',
    'individual.title': 'Guitar, bass, DJing & music production',
    'individual.pricing.title': 'Plans — private lessons',
    'individual.pricing.lede':
      'Personalized lessons to progress at your own pace: play your favourite tracks, sharpen your technique, compose, improvise or create your own music.',
    'individual.offer.discovery.tag': 'Reduced rate',
    'individual.offer.discovery.title': 'Discovery session',
    'individual.offer.discovery.price': '55 CHF',
    'individual.offer.discovery.subPrice': '',
    'individual.offer.discovery.cta': 'Book a discovery session',
    'individual.offer.monthly.tag': 'Flexible',
    'individual.offer.monthly.title': 'Monthly plan',
    'individual.offer.monthly.price': '89 CHF / lesson',
    'individual.offer.monthly.subPrice': '356 CHF / month',
    'individual.offer.monthly.cta': 'Choose the monthly plan',
    'individual.offer.annual.tag': 'Long-term progress',
    'individual.offer.annual.title': 'Annual plan',
    'individual.offer.annual.price': '79 CHF / lesson',
    'individual.offer.annual.subPrice': '316 CHF / month',
    'individual.offer.annual.cta': 'Choose the annual plan',

    // Régler ma formule
    'regler.eyebrow': 'Students already enrolled',
    'regler.title': 'Already enrolled? Pay your plan',
    'regler.lede':
      'Once your weekly time slot has been confirmed with the studio, you can pay your monthly plan, set up an automatic debit, or choose annual payment.',
    'regler.primaryCta': 'Pay my plan',
    'regler.secondaryCta': 'Request the details on WhatsApp',
    'regler.note':
      'Regular plans are set up after the weekly time slot has been confirmed with the studio.',

    // Videos eleves
    'videos.eyebrow': 'Students in studio',
    'videos.title': 'Student videos',
    'videos.lede':
      'Beyond the lessons, students also experience the studio: recording, listening, refining and sharing their music in a professional setting. A concrete way to celebrate their progress and grow in confidence.',
    'videos.itemTitle': 'Student in studio — video',

    // FAQ
    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'FAQ — Frequently asked questions',
    'faq.lede':
      'Everything you need to know to get ready for your visit to Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': 'Message us on WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Cologny / Geneva',
    'prise.hero.title': 'Audio recording, video & streaming',
    'prise.hero.lede':
      'Two rooms dedicated to audio and video production, in Cologny / Geneva, overlooking Lake Geneva. A team specialized in recording, multicam capture, mixing and live streaming — for artists, orchestras and musicians.',
    'prise.hero.ctaProjects': 'See our projects',
    'prise.hero.ctaWhatsapp': 'Tell us about your project',
    'prise.hero.chip.studio': 'Studio',
    'prise.hero.chip.multicam': 'Multicam',
    'prise.hero.chip.live': 'Live YouTube',
    'prise.hero.chip.mixing': 'Mixing & mastering',

    // Prise / PageNav
    'prise.nav.services': 'Services',
    'prise.nav.approche': 'Our approach',
    'prise.nav.projets': 'Projects',
    'prise.nav.contact': 'Contact',

    // Prise / Services
    'prise.services.eyebrow': 'What we do',
    'prise.services.title': 'One studio, four crafts',
    'prise.services.lede':
      'From capture to delivery, we treat every project with craft and professional gear.',
    'prise.services.recording.title': 'Orchestral & live recording',
    'prise.services.recording.desc':
      'Recording orchestras, ensembles and solo musicians with studio quality, on-site or in our rooms.',
    'prise.services.video.title': 'Video capture',
    'prise.services.video.desc':
      'Multicam production for concerts, live sessions and artistic content, with carefully graded picture.',
    'prise.services.streaming.title': 'YouTube streaming',
    'prise.services.streaming.desc':
      'Full management of live broadcast with synced audio and broadcast-grade picture.',
    'prise.services.mixing.title': 'Mixing & mastering',
    'prise.services.mixing.desc':
      'Final polish for clear, balanced and powerful playback across every platform.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Our method',
    'prise.approach.title':
      'One team, four steps — from brief to broadcast.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body':
      'We talk through your project, your constraints and the result you want.',
    'prise.approach.step2.title': 'Capture',
    'prise.approach.step2.body':
      'Studio or on-site setup, with sound and picture synced down to the millisecond.',
    'prise.approach.step3.title': 'Post-production',
    'prise.approach.step3.body':
      'Editing, mixing and mastering for a result that’s ready to publish.',
    'prise.approach.step4.title': 'Delivery',
    'prise.approach.step4.body':
      'File delivery or live YouTube stream, ready for your audience.',

    // Prise / Showcase
    'prise.showcase.eyebrow': 'In pictures',
    'prise.showcase.title': 'Recent captures',
    'prise.showcase.lede':
      'A look at our on-stage setups — at Victoria Hall and during the Geneva Musicale International Festival.',
    'prise.showcase.img.stage.alt':
      'Orchestra stage ready for recording at Victoria Hall',
    'prise.showcase.img.stage.caption': 'Victoria Hall — Stage',
    'prise.showcase.img.microphones.alt':
      'Recording microphones placed in front of the orchestra',
    'prise.showcase.img.microphones.caption':
      'Victoria Hall — Recording',
    'prise.showcase.img.micros.alt':
      'Microphone pairs for orchestral capture',
    'prise.showcase.img.micros.caption': 'Victoria Hall — Microphone pairs',
    'prise.showcase.img.setup.alt': 'Mobile studio technical setup',
    'prise.showcase.img.setup.caption': 'Victoria Hall — Setup',
    'prise.showcase.img.festival.alt':
      'Capture at the Geneva Musicale International Festival',
    'prise.showcase.img.festival.caption':
      'Geneva Musicale International Festival',

    'prise.projects.eyebrow': 'Selected work',
    'prise.projects.title': 'Past projects',
    'prise.projects.lede':
      'Live captures, orchestral recordings and YouTube streams produced by our team.',
    'prise.projects.gm2026.title':
      'Geneva Musicale International Festival 2026 – Opening concert',
    'prise.projects.gm2026.date': 'April 26, 2026',
    'prise.projects.gm2026.location':
      'Grande Salle de l’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1':
      'Sunday April 26, 2026 at 6:30pm — Two-piano concert with the Festival Masters and guest musicians.',
    'prise.projects.gm2026.p2':
      'Programme: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla and Michel Runtz.',
    'prise.projects.gm2026.p3':
      'The Geneva Musicale International Festival brings together young laureates, master pianists and guest artists for concerts, master classes and moments of musical transmission.',
    'prise.projects.gm2025.title':
      'International Competition "Geneva Musicale"',
    'prise.projects.gm2025.date': 'June 2025',
    'prise.projects.gm2025.location': '"Geneva Musicale" Association',
    'prise.projects.gm2025.p1':
      '2nd International Competition for Young Pianists "Geneva Musicale".',
    'prise.projects.gm2025.p2':
      'Semi-final program — an international competition where talented young pianists from around the world perform before an international jury.',
    'prise.projects.victoria.title':
      'Victoria Hall – CMGO Musimax Orchestra',
    'prise.projects.victoria.date': 'June 23, 2024',
    'prise.projects.victoria.location':
      'Geneva Conservatory – Victoria Hall',
    'prise.projects.victoria.p1':
      'Pieter-Jelle de BOER, conductor. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2':
      'Atahualpa Music Studio — Ezequiel Cappellano & Mirko Hrubik: recording, mixing and mastering. Louis Hans-Moevi & Nelson Iso: cameraman and video editing.',
    'prise.projects.victoria.p3':
      'Ludwig van Beethoven – Piano Concerto op.19 No.2 in B flat Major.',

    // Prise / CTA
    'prise.cta.eyebrow': 'Want to chat?',
    'prise.cta.title':
      'A concert, an album, a live show to broadcast?',
    'prise.cta.lede':
      'Tell us about your project. We’ll come back to you quickly with a tailored proposal.',
    'prise.cta.whatsapp': 'Message on WhatsApp',
    'prise.cta.email': 'Send an email',

    // About
    'about.eyebrow': 'About',
    'about.title': 'A small team, a great studio',
    'about.lede':
      'Atahualpa Music Studio is, above all, a team of passionate musicians working together in Cologny / Geneva, overlooking Lake Geneva.',
    'about.image.alt': 'The Atahualpa Music Studio team',

    // Bio
    'bio.title': 'Founder of Atahualpa Music Studio & team lead',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Location – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Cologny / Geneva',
    'contact.hero.title': 'Let’s talk music',
    'contact.hero.lede':
      'A question about lessons, a recording project, or simply want to visit the studio? Drop us a line — we reply quickly, in English, French, Spanish or Italian.',
    'contact.hero.whatsappAria': 'Contact us on WhatsApp',
    'contact.hero.whatsapp': 'Chat on WhatsApp',
    'contact.hero.email': 'Send an email',
    'contact.hero.metaLabel': 'Information',
    'contact.hero.meta.location': 'Cologny / Geneva',
    'contact.hero.meta.response': 'Reply within 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Form',
    'contact.form.title': 'Send us a message',
    'contact.form.lede':
      'Better suited for a detailed project or a quote.',
    'contact.form.success':
      'Your message has been sent — we’ll get back to you shortly.',
    'contact.form.subject': 'New message — atahualpa.studio',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'you@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder':
      'Tell us what brings you here — level, instrument, project, dates…',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending…',
    'contact.form.errorSend':
      'Failed to send message. Please try again.',
    'contact.form.errorFormData':
      'FormData is not supported in this environment.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio':
      'Music lessons, recording and audio/video capture in Cologny / Geneva. A studio equipped to learn, create, record and share music in a professional and welcoming setting.',
    'footer.nav.title': 'Navigation',
    'footer.nav.home': 'Home',
    'footer.nav.cours': 'Music lessons',
    'footer.nav.regler': 'Pay my plan',
    'footer.nav.prise': 'Audio & video',
    'footer.nav.about': 'About',
    'footer.nav.contact': 'Contact',
    'footer.students.title': 'Students already enrolled',
    'footer.students.body':
      'Your time slot has been confirmed? Pay your monthly or annual plan, or set up automatic payment.',
    'footer.students.cta': 'Pay my plan',
    'footer.contact.title': 'Contact us',
    'footer.contact.phoneLabel': 'Phone / WhatsApp',
    'footer.contact.phone': '+41 77 279 25 14',
    'footer.contact.email': 'atahualpa.music.studio@gmail.com',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny / Geneva',
    'footer.contact.whatsappCta': 'Message us on WhatsApp',
    'footer.copyright': '© 2025',
    'footer.rights': 'All rights reserved',
    'footer.logo.alt': 'Atahualpa Music Studio Logo',

    // ContactLinks (PressKit)
    'press.title': 'Download Press Kit',
    'press.en': 'Press Kit (English)',
    'press.fr': 'Press Kit (French)',
  },
  es: {
    // Navigation
    'nav.cours': 'CLASES DE MÚSICA',
    'nav.cours.atelier.title': 'Taller multi-instrumental',
    'nav.cours.atelier.desc':
      'Clases en grupo para niños · prueba gratuita',
    'nav.cours.individuels.title': 'Clases individuales',
    'nav.cours.individuels.desc':
      'Guitarra, bajo, DJ y producción · sesión de descubrimiento 55 CHF',
    'nav.cours.regler.title': 'Pagar mi plan',
    'nav.cours.regler.desc': 'Para los alumnos ya inscritos',
    'nav.cours.openLabel': 'Abrir el menú Clases de música',
    'nav.prise': 'AUDIO Y VIDEO',
    'nav.apropos': 'NOSOTROS',
    'nav.contact': 'CONTACTO',
    'nav.toggleMenu': 'Abrir el menú',
    'nav.languageLabel': 'Idioma',
    'nav.changeLanguage': 'Cambiar idioma',
    'nav.switchToFr': 'Cambiar a francés',
    'nav.switchToEn': 'Cambiar a inglés',
    'nav.switchToEs': 'Cambiar a español',
    'nav.switchToIt': 'Cambiar a italiano',

    // Common chips / labels
    'common.specialties': 'Especialidades',
    'common.readMore': 'Leer más',
    'common.readLess': 'Leer menos',
    'common.learnMore': 'Saber más',
    'common.discoverProgram': 'Descubre las clases de música',
    'common.moreInfo': 'Descubre los servicios audio/video',
    'common.chooseOffer': 'Elegir este plan',
    'common.bookNow': 'Reservar una sesión de descubrimiento',
    'common.pageSections': 'Secciones de la página',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Cologny / Ginebra',
    'home.hero.title':
      'Un estudio para aprender, crear y capturar la música',
    'home.hero.subtitle': '',
    'home.hero.ctaLecons': 'Descubre las clases de música',
    'home.hero.ctaPrise': 'Audio y video',
    'home.hero.chip.atelier': 'Taller multi-instrumental',
    'home.hero.chip.individual': 'Clases individuales',
    'home.hero.chip.recording': 'Grabación',
    'home.hero.chip.video': 'Captura de video',

    // Home / Intro
    'home.intro.eyebrow': 'Sobre nosotros',
    'home.intro.title': 'Un lugar pensado para la música',
    'home.intro.lede':
      'Atahualpa Music Studio, en Cologny / Ginebra, a las puertas de Eaux-Vives y frente al lago Lemán.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Nuestro mundo',
    'home.stage.title':
      'Descubre nuestro universo musical y audiovisual',
    'home.stage.lede':
      'Dos actividades complementarias bajo el mismo techo, para aprender, crear, grabar y compartir la música.',
    'home.stage.lecons.title':
      'Clases de música y talleres creativos',
    'home.stage.lecons.cta': 'Descubre las clases de música',
    'home.stage.prise.title':
      'Grabación de audio y video profesionales',
    'home.stage.prise.cta': 'Descubre los servicios audio/video',

    // Home / History
    'home.history.eyebrow': 'Nuestra historia',
    'home.history.title': 'Una historia dedicada a la música',

    // Lecons / Hero
    'lecons.hero.eyebrow':
      'Taller de música · Cologny / Ginebra',
    'lecons.hero.title':
      'Clases de música en Cologny / Ginebra',
    'lecons.hero.lede':
      'Clases prácticas y personalizadas para niños, adolescentes y adultos, en un estudio equipado en Cologny, a las puertas de Eaux-Vives y del centro de Ginebra.',
    'lecons.hero.card.group.title':
      'Taller multi-instrumental en grupo reducido',
    'lecons.hero.card.group.cta': 'Descubre el taller',
    'lecons.hero.card.individual.title':
      'Clases individuales de guitarra, bajo y creación musical',
    'lecons.hero.card.individual.cta':
      'Descubre las clases individuales',

    // Group class
    'group.eyebrow': 'Clases en grupo · niños',
    'group.title': 'Taller multi-instrumental para niños',
    'group.schedule':
      'Horarios disponibles de lunes a viernes, entre las 15 h y las 20 h. Clase de prueba gratuita previa reserva.',
    'group.benefit1.title': 'Grupos reducidos',
    'group.benefit1.body':
      'Máximo 4 niños por grupo para garantizar un seguimiento personalizado.',
    'group.benefit2.title': 'Varios instrumentos',
    'group.benefit2.body':
      'Los niños cambian regularmente de instrumento y desarrollan una visión global de la música.',
    'group.benefit3.title': 'Aprender tocando',
    'group.benefit3.body':
      'Sin teoría innecesaria: los niños aprenden tocando canciones reales.',
    'group.cta': 'Solicitar una clase de prueba gratuita',
    'group.cta.helper':
      'Te propondremos el horario más adecuado según la edad del niño, su nivel y los grupos disponibles.',
    'group.pricing.title': 'Planes — taller en grupo',
    'group.pricing.lede':
      'Elige el plan que mejor se adapte a ti. La clase de prueba en grupo sigue siendo gratuita, previa reserva.',
    'group.offer.trial.title': 'Clase de prueba gratuita',
    'group.offer.trial.price': '0 CHF',
    'group.offer.trial.cta': 'Solicitar una clase de prueba',
    'group.offer.monthly.title': 'Plan mensual',
    'group.offer.monthly.price': '65 CHF / clase',
    'group.offer.monthly.subPrice': '',
    'group.offer.monthly.cta': 'Elegir el plan mensual',
    'group.offer.annual.title': 'Plan anual',
    'group.offer.annual.price': '55 CHF / clase',
    'group.offer.annual.subPrice': '',
    'group.offer.annual.cta': 'Elegir el plan anual',

    // Individual class
    'individual.eyebrow': 'Clases individuales',
    'individual.title':
      'Guitarra, bajo, DJ y producción musical',
    'individual.pricing.title':
      'Planes — clases individuales',
    'individual.pricing.lede':
      'Clases personalizadas para avanzar a tu ritmo: tocar tus temas favoritos, perfeccionar tu técnica, componer, improvisar o crear tu propia música.',
    'individual.offer.discovery.tag': 'Tarifa reducida',
    'individual.offer.discovery.title': 'Sesión de descubrimiento',
    'individual.offer.discovery.price': '55 CHF',
    'individual.offer.discovery.subPrice': '',
    'individual.offer.discovery.cta':
      'Reservar una sesión de descubrimiento',
    'individual.offer.monthly.tag': 'Flexible',
    'individual.offer.monthly.title': 'Plan mensual',
    'individual.offer.monthly.price': '89 CHF / clase',
    'individual.offer.monthly.subPrice': '356 CHF / mes',
    'individual.offer.monthly.cta': 'Elegir el plan mensual',
    'individual.offer.annual.tag': 'Avance durante el año',
    'individual.offer.annual.title': 'Plan anual',
    'individual.offer.annual.price': '79 CHF / clase',
    'individual.offer.annual.subPrice': '316 CHF / mes',
    'individual.offer.annual.cta': 'Elegir el plan anual',

    // Régler ma formule
    'regler.eyebrow': 'Alumnos ya inscritos',
    'regler.title': '¿Ya inscrito? Paga tu plan',
    'regler.lede':
      'Si tu horario semanal ya ha sido confirmado con el estudio, puedes pagar tu plan mensual, establecer un débito automático o elegir el pago anual.',
    'regler.primaryCta': 'Pagar mi plan',
    'regler.secondaryCta': 'Pedir la información por WhatsApp',
    'regler.note':
      'Los planes regulares se activan una vez confirmado el horario semanal con el estudio.',

    // Videos eleves
    'videos.eyebrow': 'Alumnos en estudio',
    'videos.title': 'Videos de los alumnos',
    'videos.lede':
      'Más allá de las clases, los alumnos viven la experiencia del estudio: grabar, escuchar, mejorar y compartir su música en un entorno profesional. Una forma concreta de valorar su progreso y ganar confianza.',
    'videos.itemTitle': 'Alumno en estudio — video',

    // FAQ
    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title': 'FAQ — Preguntas frecuentes',
    'faq.lede':
      'Todas las respuestas para preparar bien tu visita a Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': 'Escríbenos por WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow':
      'Atahualpa Studio · Cologny / Ginebra',
    'prise.hero.title':
      'Grabación de audio, video y streaming',
    'prise.hero.lede':
      'Dos salas dedicadas a la producción de audio y video, en Cologny / Ginebra, frente al lago Lemán. Un equipo especializado en grabación, captura multicámara, mezcla y transmisión en vivo — al servicio de artistas, orquestas y músicos.',
    'prise.hero.ctaProjects': 'Ver nuestros proyectos',
    'prise.hero.ctaWhatsapp': 'Cuéntanos tu proyecto',
    'prise.hero.chip.studio': 'Estudio',
    'prise.hero.chip.multicam': 'Multicámara',
    'prise.hero.chip.live': 'Live YouTube',
    'prise.hero.chip.mixing': 'Mezcla y masterización',

    // Prise / PageNav
    'prise.nav.services': 'Servicios',
    'prise.nav.approche': 'Nuestro enfoque',
    'prise.nav.projets': 'Proyectos',
    'prise.nav.contact': 'Contacto',

    // Prise / Services
    'prise.services.eyebrow': 'Nuestros servicios',
    'prise.services.title': 'Un estudio, cuatro oficios',
    'prise.services.lede':
      'De la captura a la entrega, acompañamos cada proyecto con cuidado artesanal y equipo profesional.',
    'prise.services.recording.title': 'Grabación orquestal y en vivo',
    'prise.services.recording.desc':
      'Grabación de orquestas, conjuntos y músicos solistas con calidad de estudio, en sala o en tu locación.',
    'prise.services.video.title': 'Captura de video',
    'prise.services.video.desc':
      'Producción multicámara para conciertos, sesiones en vivo y contenido artístico, con corrección de color cuidada.',
    'prise.services.streaming.title': 'Streaming de YouTube',
    'prise.services.streaming.desc':
      'Gestión completa de la transmisión en vivo con audio sincronizado e imagen profesional.',
    'prise.services.mixing.title': 'Mezcla y masterización',
    'prise.services.mixing.desc':
      'Acabado sonoro para una reproducción clara, equilibrada y potente en todas las plataformas.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Nuestro método',
    'prise.approach.title':
      'Un equipo, cuatro pasos — del brief a la emisión.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body':
      'Hablamos de tu proyecto, tus condicionantes y el resultado que buscas.',
    'prise.approach.step2.title': 'Captura',
    'prise.approach.step2.body':
      'Montaje en estudio o en locación, con audio y video sincronizados al milímetro.',
    'prise.approach.step3.title': 'Postproducción',
    'prise.approach.step3.body':
      'Edición, mezcla y masterización para un resultado listo para publicar.',
    'prise.approach.step4.title': 'Entrega',
    'prise.approach.step4.body':
      'Entrega de archivos o stream en vivo en YouTube, listo para tu público.',

    // Prise / Showcase
    'prise.showcase.eyebrow': 'En imágenes',
    'prise.showcase.title': 'Capturas recientes',
    'prise.showcase.lede':
      'Un vistazo a nuestras instalaciones en el escenario — en el Victoria Hall y durante el Festival Internacional Genève Musicale.',
    'prise.showcase.img.stage.alt':
      'Escenario de orquesta listo para la grabación en el Victoria Hall',
    'prise.showcase.img.stage.caption': 'Victoria Hall — Escenario',
    'prise.showcase.img.microphones.alt':
      'Micrófonos de grabación instalados frente a la orquesta',
    'prise.showcase.img.microphones.caption':
      'Victoria Hall — Grabación',
    'prise.showcase.img.micros.alt':
      'Parejas de micrófonos para captura orquestal',
    'prise.showcase.img.micros.caption':
      'Victoria Hall — Parejas de micrófonos',
    'prise.showcase.img.setup.alt':
      'Montaje técnico del estudio móvil',
    'prise.showcase.img.setup.caption': 'Victoria Hall — Montaje',
    'prise.showcase.img.festival.alt':
      'Captura en el Festival Internacional Genève Musicale',
    'prise.showcase.img.festival.caption':
      'Festival Internacional Genève Musicale',

    'prise.projects.eyebrow': 'Trabajos seleccionados',
    'prise.projects.title': 'Proyectos realizados',
    'prise.projects.lede':
      'Capturas en vivo, grabaciones de orquesta y streams en YouTube producidos por nuestro equipo.',
    'prise.projects.gm2026.title':
      'Festival Internacional Genève Musicale 2026 – Concierto inaugural',
    'prise.projects.gm2026.date': '26 de abril de 2026',
    'prise.projects.gm2026.location':
      'Grande Salle del Espace Culturel de Genthod',
    'prise.projects.gm2026.p1':
      'Domingo 26 de abril de 2026 a las 18:30 — Concierto a dos pianos con los Maestros del Festival y los músicos invitados.',
    'prise.projects.gm2026.p2':
      'En el programa: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla y Michel Runtz.',
    'prise.projects.gm2026.p3':
      'El Festival Internacional Genève Musicale reúne a jóvenes laureados, maestros del piano y artistas invitados en torno a conciertos, clases magistrales y momentos de transmisión musical.',
    'prise.projects.gm2025.title':
      'Concurso Internacional "Genève Musicale"',
    'prise.projects.gm2025.date': 'Junio de 2025',
    'prise.projects.gm2025.location': 'Asociación "Genève Musicale"',
    'prise.projects.gm2025.p1':
      '2.º Concurso Internacional para Jóvenes Pianistas "Genève Musicale".',
    'prise.projects.gm2025.p2':
      'Programa de la semifinal — una competencia internacional donde jóvenes pianistas de todo el mundo se presentan ante un jurado internacional.',
    'prise.projects.victoria.title':
      'Victoria Hall – Orquesta CMGO Musimax',
    'prise.projects.victoria.date': '23 de junio de 2024',
    'prise.projects.victoria.location':
      'Conservatorio de Ginebra – Victoria Hall',
    'prise.projects.victoria.p1':
      'Pieter-Jelle de BOER, dirección. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2':
      'Atahualpa Music Studio — Ezequiel Cappellano y Mirko Hrubik: grabación, mezcla y masterización. Louis Hans-Moevi y Nelson Iso: cámara y edición de video.',
    'prise.projects.victoria.p3':
      'Ludwig van Beethoven – Concierto para piano op.19 N.º 2 en si bemol mayor.',

    // Prise / CTA
    'prise.cta.eyebrow': '¿Hablamos?',
    'prise.cta.title':
      '¿Un concierto, un álbum, un directo para emitir?',
    'prise.cta.lede':
      'Cuéntanos tu proyecto. Volveremos a ti rápidamente con una propuesta a medida.',
    'prise.cta.whatsapp': 'Escribir por WhatsApp',
    'prise.cta.email': 'Enviar un email',

    // About
    'about.eyebrow': 'Nosotros',
    'about.title': 'Un equipo pequeño, un gran estudio',
    'about.lede':
      'Atahualpa Music Studio es, ante todo, un equipo de músicos apasionados que trabajan juntos en Cologny / Ginebra, frente al lago Lemán.',
    'about.image.alt': 'El equipo de Atahualpa Music Studio',

    // Bio
    'bio.title':
      'Fundador de Atahualpa Music Studio y líder del equipo',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Ubicación – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow':
      'Atahualpa Studio · Cologny / Ginebra',
    'contact.hero.title': 'Hablemos de música',
    'contact.hero.lede':
      '¿Una pregunta sobre las clases, un proyecto de grabación o simplemente quieres visitar el estudio? Escríbenos — te respondemos rápido en español, francés, inglés o italiano.',
    'contact.hero.whatsappAria': 'Contáctanos por WhatsApp',
    'contact.hero.whatsapp': 'Chatear por WhatsApp',
    'contact.hero.email': 'Enviar un correo',
    'contact.hero.metaLabel': 'Información',
    'contact.hero.meta.location': 'Cologny / Ginebra',
    'contact.hero.meta.response': 'Respuesta en 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Formulario',
    'contact.form.title': 'Escríbenos un mensaje',
    'contact.form.lede':
      'Más práctico para un proyecto detallado o un presupuesto.',
    'contact.form.success':
      'Tu mensaje ha sido enviado — te responderemos pronto.',
    'contact.form.subject': 'Nuevo mensaje — atahualpa.studio',
    'contact.form.name': 'Nombre',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder':
      'Cuéntanos qué te trae — nivel, instrumento, proyecto, fechas…',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando…',
    'contact.form.errorSend':
      'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.form.errorFormData':
      'FormData no es compatible con este entorno.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio':
      'Clases de música, grabación y captura audio/video en Cologny / Ginebra. Un estudio equipado para aprender, crear, grabar y compartir la música en un entorno profesional y acogedor.',
    'footer.nav.title': 'Navegación',
    'footer.nav.home': 'Inicio',
    'footer.nav.cours': 'Clases de música',
    'footer.nav.regler': 'Pagar mi plan',
    'footer.nav.prise': 'Audio y video',
    'footer.nav.about': 'Nosotros',
    'footer.nav.contact': 'Contacto',
    'footer.students.title': 'Alumnos ya inscritos',
    'footer.students.body':
      '¿Tu horario ya está confirmado? Paga tu plan mensual, anual o configura el pago automático.',
    'footer.students.cta': 'Pagar mi plan',
    'footer.contact.title': 'Contáctanos',
    'footer.contact.phoneLabel': 'Teléfono / WhatsApp',
    'footer.contact.phone': '+41 77 279 25 14',
    'footer.contact.email': 'atahualpa.music.studio@gmail.com',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny / Ginebra',
    'footer.contact.whatsappCta': 'Escríbenos por WhatsApp',
    'footer.copyright': '© 2025',
    'footer.rights': 'Todos los derechos reservados',
    'footer.logo.alt': 'Logo Atahualpa Music Studio',

    // ContactLinks (PressKit)
    'press.title': 'Descargar Press Kit',
    'press.en': 'Press Kit (English)',
    'press.fr': 'Press Kit (Francés)',
  },
  it: {
    // Navigation
    'nav.cours': 'LEZIONI DI MUSICA',
    'nav.cours.atelier.title': 'Laboratorio multi-strumentale',
    'nav.cours.atelier.desc':
      'Lezioni di gruppo per bambini · prova gratuita',
    'nav.cours.individuels.title': 'Lezioni individuali',
    'nav.cours.individuels.desc':
      'Chitarra, basso, DJ e produzione · sessione di scoperta 55 CHF',
    'nav.cours.regler.title': 'Paga la mia formula',
    'nav.cours.regler.desc': 'Per gli allievi già iscritti',
    'nav.cours.openLabel': 'Apri il menu Lezioni di musica',
    'nav.prise': 'AUDIO E VIDEO',
    'nav.apropos': 'CHI SIAMO',
    'nav.contact': 'CONTATTI',
    'nav.toggleMenu': 'Apri il menu',
    'nav.languageLabel': 'Lingua',
    'nav.changeLanguage': 'Cambia lingua',
    'nav.switchToFr': 'Passa al francese',
    'nav.switchToEn': 'Passa all’inglese',
    'nav.switchToEs': 'Passa allo spagnolo',
    'nav.switchToIt': 'Passa all’italiano',

    // Common chips / labels
    'common.specialties': 'Specialità',
    'common.readMore': 'Leggi di più',
    'common.readLess': 'Leggi meno',
    'common.learnMore': 'Scopri di più',
    'common.discoverProgram': 'Scopri le lezioni di musica',
    'common.moreInfo': 'Scopri i servizi audio/video',
    'common.chooseOffer': 'Scegli questa formula',
    'common.bookNow': 'Prenota una sessione di scoperta',
    'common.pageSections': 'Sezioni della pagina',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Cologny / Ginevra',
    'home.hero.title':
      'Uno studio per imparare, creare e catturare la musica',
    'home.hero.subtitle': '',
    'home.hero.ctaLecons': 'Scopri le lezioni di musica',
    'home.hero.ctaPrise': 'Audio e video',
    'home.hero.chip.atelier': 'Laboratorio multi-strumentale',
    'home.hero.chip.individual': 'Lezioni individuali',
    'home.hero.chip.recording': 'Registrazione',
    'home.hero.chip.video': 'Riprese video',

    // Home / Intro
    'home.intro.eyebrow': 'Chi siamo',
    'home.intro.title': 'Un luogo pensato per la musica',
    'home.intro.lede':
      'Atahualpa Music Studio, a Cologny / Ginevra, alle porte di Eaux-Vives e affacciato sul lago Lemano.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Il nostro mondo',
    'home.stage.title':
      'Scopri il nostro universo musicale e audiovisivo',
    'home.stage.lede':
      'Due attività complementari sotto lo stesso tetto, per imparare, creare, registrare e condividere la musica.',
    'home.stage.lecons.title':
      'Lezioni di musica e laboratori creativi',
    'home.stage.lecons.cta': 'Scopri le lezioni di musica',
    'home.stage.prise.title':
      'Riprese audio e video professionali',
    'home.stage.prise.cta': 'Scopri i servizi audio/video',

    // Home / History
    'home.history.eyebrow': 'La nostra storia',
    'home.history.title': 'Una storia dedicata alla musica',

    // Lecons / Hero
    'lecons.hero.eyebrow':
      'Laboratorio di musica · Cologny / Ginevra',
    'lecons.hero.title':
      'Lezioni di musica a Cologny / Ginevra',
    'lecons.hero.lede':
      'Lezioni pratiche e personalizzate per bambini, ragazzi e adulti, in uno studio attrezzato a Cologny, alle porte di Eaux-Vives e del centro di Ginevra.',
    'lecons.hero.card.group.title':
      'Laboratorio multi-strumentale in piccolo gruppo',
    'lecons.hero.card.group.cta': 'Scopri il laboratorio',
    'lecons.hero.card.individual.title':
      'Lezioni individuali di chitarra, basso e creazione musicale',
    'lecons.hero.card.individual.cta':
      'Scopri le lezioni individuali',

    // Group class
    'group.eyebrow': 'Lezioni di gruppo · bambini',
    'group.title':
      'Laboratorio multi-strumentale per bambini',
    'group.schedule':
      'Orari disponibili dal lunedì al venerdì, tra le 15 e le 20. Lezione di prova gratuita su prenotazione.',
    'group.benefit1.title': 'Gruppi ridotti',
    'group.benefit1.body':
      'Massimo 4 bambini per gruppo per garantire un seguito personalizzato.',
    'group.benefit2.title': 'Più strumenti',
    'group.benefit2.body':
      'I bambini cambiano regolarmente strumento e sviluppano una visione completa della musica.',
    'group.benefit3.title': 'Imparare suonando',
    'group.benefit3.body':
      'Niente teoria inutile: i bambini imparano suonando brani concreti.',
    'group.cta': 'Richiedere una lezione di prova gratuita',
    'group.cta.helper':
      'Ti proporremo l’orario più adatto in base all’età del bambino, al suo livello e ai gruppi disponibili.',
    'group.pricing.title': 'Formule — laboratorio in gruppo',
    'group.pricing.lede':
      'Scegli la formula più adatta a te. La lezione di prova in gruppo resta gratuita, su prenotazione.',
    'group.offer.trial.title': 'Lezione di prova gratuita',
    'group.offer.trial.price': '0 CHF',
    'group.offer.trial.cta': 'Richiedere una lezione di prova',
    'group.offer.monthly.title': 'Formula mensile',
    'group.offer.monthly.price': '65 CHF / lezione',
    'group.offer.monthly.subPrice': '',
    'group.offer.monthly.cta': 'Scegli la formula mensile',
    'group.offer.annual.title': 'Abbonamento annuale',
    'group.offer.annual.price': '55 CHF / lezione',
    'group.offer.annual.subPrice': '',
    'group.offer.annual.cta': 'Scegli l’abbonamento annuale',

    // Individual class
    'individual.eyebrow': 'Lezioni individuali',
    'individual.title':
      'Chitarra, basso, DJ e produzione musicale',
    'individual.pricing.title':
      'Formule — lezioni individuali',
    'individual.pricing.lede':
      'Lezioni personalizzate per progredire al tuo ritmo: suonare i tuoi brani preferiti, perfezionare la tecnica, comporre, improvvisare o creare la tua musica.',
    'individual.offer.discovery.tag': 'Tariffa ridotta',
    'individual.offer.discovery.title':
      'Sessione di scoperta',
    'individual.offer.discovery.price': '55 CHF',
    'individual.offer.discovery.subPrice': '',
    'individual.offer.discovery.cta':
      'Prenotare una sessione di scoperta',
    'individual.offer.monthly.tag': 'Flessibile',
    'individual.offer.monthly.title': 'Formula mensile',
    'individual.offer.monthly.price': '89 CHF / lezione',
    'individual.offer.monthly.subPrice': '356 CHF / mese',
    'individual.offer.monthly.cta': 'Scegli la formula mensile',
    'individual.offer.annual.tag': 'Progresso nell’anno',
    'individual.offer.annual.title': 'Abbonamento annuale',
    'individual.offer.annual.price': '79 CHF / lezione',
    'individual.offer.annual.subPrice': '316 CHF / mese',
    'individual.offer.annual.cta':
      'Scegli l’abbonamento annuale',

    // Régler ma formule
    'regler.eyebrow': 'Allievi già iscritti',
    'regler.title': 'Già iscritto? Paga la tua formula',
    'regler.lede':
      'Quando il tuo orario settimanale è già stato confermato con lo studio, puoi pagare la formula mensile, attivare l’addebito automatico o scegliere il pagamento annuale.',
    'regler.primaryCta': 'Paga la mia formula',
    'regler.secondaryCta':
      'Richiedere le informazioni su WhatsApp',
    'regler.note':
      'Le formule regolari vengono attivate dopo la conferma dell’orario settimanale con lo studio.',

    // Videos eleves
    'videos.eyebrow': 'Allievi in studio',
    'videos.title': 'Video degli allievi',
    'videos.lede':
      'Oltre alle lezioni, gli allievi vivono anche l’esperienza dello studio: registrare, ascoltare, migliorare e condividere la propria musica in un contesto professionale. Un modo concreto per valorizzare i loro progressi e prendere fiducia.',
    'videos.itemTitle': 'Allievo in studio — video',

    // FAQ
    'faq.eyebrow': 'Domande frequenti',
    'faq.title': 'FAQ — Domande frequenti',
    'faq.lede':
      'Tutte le risposte per prepararti al meglio alla tua visita ad Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': 'Scrivici su WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow':
      'Atahualpa Studio · Cologny / Ginevra',
    'prise.hero.title':
      'Registrazione audio, video e streaming',
    'prise.hero.lede':
      'Due sale dedicate alla produzione audio e video, a Cologny / Ginevra, affacciate sul lago Lemano. Un team specializzato in registrazione, riprese multicamera, missaggio e diretta streaming — al servizio di artisti, orchestre e musicisti.',
    'prise.hero.ctaProjects': 'Vedi i nostri progetti',
    'prise.hero.ctaWhatsapp': 'Raccontaci il tuo progetto',
    'prise.hero.chip.studio': 'Studio',
    'prise.hero.chip.multicam': 'Multicamera',
    'prise.hero.chip.live': 'Live YouTube',
    'prise.hero.chip.mixing': 'Mix & mastering',

    // Prise / PageNav
    'prise.nav.services': 'Servizi',
    'prise.nav.approche': 'Il nostro approccio',
    'prise.nav.projets': 'Progetti',
    'prise.nav.contact': 'Contatti',

    // Prise / Services
    'prise.services.eyebrow': 'I nostri servizi',
    'prise.services.title': 'Uno studio, quattro mestieri',
    'prise.services.lede':
      'Dalla cattura alla consegna, accompagniamo ogni progetto con cura artigianale e attrezzatura professionale.',
    'prise.services.recording.title':
      'Registrazione orchestrale e live',
    'prise.services.recording.desc':
      'Registrazione di orchestre, ensemble e musicisti solisti con qualità da studio, in sala o in loco.',
    'prise.services.video.title': 'Riprese video',
    'prise.services.video.desc':
      'Produzione multicamera per concerti, sessioni live e contenuti artistici, con color grading curato.',
    'prise.services.streaming.title': 'Streaming YouTube',
    'prise.services.streaming.desc':
      'Gestione completa della diretta con audio sincronizzato e immagine professionale.',
    'prise.services.mixing.title': 'Mix & mastering',
    'prise.services.mixing.desc':
      'Rifinitura sonora per un risultato chiaro, equilibrato e potente su tutte le piattaforme.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Il nostro metodo',
    'prise.approach.title':
      'Un team, quattro tappe — dal brief alla messa in onda.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body':
      'Parliamo del tuo progetto, dei tuoi vincoli e del risultato che desideri.',
    'prise.approach.step2.title': 'Cattura',
    'prise.approach.step2.body':
      'Setup in studio o in loco, con audio e video sincronizzati al millimetro.',
    'prise.approach.step3.title': 'Postproduzione',
    'prise.approach.step3.body':
      'Editing, missaggio e mastering per un risultato pronto da pubblicare.',
    'prise.approach.step4.title': 'Consegna',
    'prise.approach.step4.body':
      'Consegna dei file o stream live su YouTube, pronto per il tuo pubblico.',

    // Prise / Showcase
    'prise.showcase.eyebrow': 'In immagini',
    'prise.showcase.title': 'Riprese recenti',
    'prise.showcase.lede':
      'Uno sguardo ai nostri allestimenti sul palco — al Victoria Hall e durante il Festival Internazionale Genève Musicale.',
    'prise.showcase.img.stage.alt':
      'Palco dell’orchestra pronto per la registrazione al Victoria Hall',
    'prise.showcase.img.stage.caption': 'Victoria Hall — Palco',
    'prise.showcase.img.microphones.alt':
      'Microfoni di registrazione posti davanti all’orchestra',
    'prise.showcase.img.microphones.caption':
      'Victoria Hall — Registrazione',
    'prise.showcase.img.micros.alt':
      'Coppie di microfoni per la ripresa orchestrale',
    'prise.showcase.img.micros.caption':
      'Victoria Hall — Coppie di microfoni',
    'prise.showcase.img.setup.alt':
      'Allestimento tecnico dello studio mobile',
    'prise.showcase.img.setup.caption':
      'Victoria Hall — Allestimento',
    'prise.showcase.img.festival.alt':
      'Ripresa al Festival Internazionale Genève Musicale',
    'prise.showcase.img.festival.caption':
      'Festival Internazionale Genève Musicale',

    'prise.projects.eyebrow': 'Lavori selezionati',
    'prise.projects.title': 'Progetti realizzati',
    'prise.projects.lede':
      'Riprese live, registrazioni orchestrali e streaming YouTube prodotti dal nostro team.',
    'prise.projects.gm2026.title':
      'Festival Internazionale Genève Musicale 2026 – Concerto inaugurale',
    'prise.projects.gm2026.date': '26 aprile 2026',
    'prise.projects.gm2026.location':
      'Grande Salle dell’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1':
      'Domenica 26 aprile 2026 alle 18:30 — Concerto a due pianoforti con i Maestri del Festival e i musicisti ospiti.',
    'prise.projects.gm2026.p2':
      'In programma: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla e Michel Runtz.',
    'prise.projects.gm2026.p3':
      'Il Festival Internazionale Genève Musicale riunisce giovani vincitori, maestri del pianoforte e artisti ospiti attorno a concerti, master class e momenti di trasmissione musicale.',
    'prise.projects.gm2025.title':
      'Concorso Internazionale "Genève Musicale"',
    'prise.projects.gm2025.date': 'Giugno 2025',
    'prise.projects.gm2025.location':
      'Associazione "Genève Musicale"',
    'prise.projects.gm2025.p1':
      '2° Concorso Internazionale per Giovani Pianisti "Genève Musicale".',
    'prise.projects.gm2025.p2':
      'Programma della semifinale — una competizione internazionale in cui giovani pianisti di talento da tutto il mondo si esibiscono davanti a una giuria internazionale.',
    'prise.projects.victoria.title':
      'Victoria Hall – Orchestra CMGO Musimax',
    'prise.projects.victoria.date': '23 giugno 2024',
    'prise.projects.victoria.location':
      'Conservatorio di Ginevra – Victoria Hall',
    'prise.projects.victoria.p1':
      'Pieter-Jelle de BOER, direzione. Lucas CHICHE, pianoforte (III mvt).',
    'prise.projects.victoria.p2':
      'Atahualpa Music Studio — Ezequiel Cappellano e Mirko Hrubik: registrazione, missaggio e mastering. Louis Hans-Moevi e Nelson Iso: ripresa video ed editing.',
    'prise.projects.victoria.p3':
      'Ludwig van Beethoven – Concerto per pianoforte op.19 N°2 in si bemolle maggiore.',

    // Prise / CTA
    'prise.cta.eyebrow': 'Ne parliamo?',
    'prise.cta.title':
      'Un concerto, un album, un live da trasmettere?',
    'prise.cta.lede':
      'Raccontaci il tuo progetto. Torneremo da te in fretta con una proposta su misura.',
    'prise.cta.whatsapp': 'Scrivici su WhatsApp',
    'prise.cta.email': 'Invia un’email',

    // About
    'about.eyebrow': 'Chi siamo',
    'about.title':
      'Una piccola squadra, un grande studio',
    'about.lede':
      'Atahualpa Music Studio è prima di tutto una squadra di musicisti appassionati che lavorano insieme a Cologny / Ginevra, affacciati sul lago Lemano.',
    'about.image.alt': 'Il team di Atahualpa Music Studio',

    // Bio
    'bio.title':
      'Fondatore di Atahualpa Music Studio e capo-team',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Posizione – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow':
      'Atahualpa Studio · Cologny / Ginevra',
    'contact.hero.title': 'Parliamo di musica',
    'contact.hero.lede':
      'Una domanda sulle lezioni, un progetto di registrazione o semplicemente vuoi visitare lo studio? Scrivici — ti rispondiamo velocemente in italiano, francese, inglese o spagnolo.',
    'contact.hero.whatsappAria': 'Contattaci su WhatsApp',
    'contact.hero.whatsapp': 'Chatta su WhatsApp',
    'contact.hero.email': 'Invia un’email',
    'contact.hero.metaLabel': 'Informazioni',
    'contact.hero.meta.location': 'Cologny / Ginevra',
    'contact.hero.meta.response': 'Risposta entro 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Modulo',
    'contact.form.title': 'Scrivici un messaggio',
    'contact.form.lede':
      'Più pratico per un progetto dettagliato o un preventivo.',
    'contact.form.success':
      'Il tuo messaggio è stato inviato — torneremo presto da te.',
    'contact.form.subject': 'Nuovo messaggio — atahualpa.studio',
    'contact.form.name': 'Nome',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message': 'Messaggio',
    'contact.form.messagePlaceholder':
      'Raccontaci cosa ti porta qui — livello, strumento, progetto, date…',
    'contact.form.submit': 'Invia messaggio',
    'contact.form.sending': 'Invio in corso…',
    'contact.form.errorSend':
      'Impossibile inviare il messaggio. Per favore riprova.',
    'contact.form.errorFormData':
      'FormData non è supportato in questo ambiente.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio':
      'Lezioni di musica, registrazione e riprese audio/video a Cologny / Ginevra. Uno studio attrezzato per imparare, creare, registrare e condividere la musica in un contesto professionale e accogliente.',
    'footer.nav.title': 'Navigazione',
    'footer.nav.home': 'Home',
    'footer.nav.cours': 'Lezioni di musica',
    'footer.nav.regler': 'Paga la mia formula',
    'footer.nav.prise': 'Audio e video',
    'footer.nav.about': 'Chi siamo',
    'footer.nav.contact': 'Contatti',
    'footer.students.title': 'Allievi già iscritti',
    'footer.students.body':
      'Orario già confermato? Paga la tua formula mensile, annuale o attiva il pagamento automatico.',
    'footer.students.cta': 'Paga la mia formula',
    'footer.contact.title': 'Contattaci',
    'footer.contact.phoneLabel': 'Telefono / WhatsApp',
    'footer.contact.phone': '+41 77 279 25 14',
    'footer.contact.email': 'atahualpa.music.studio@gmail.com',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny / Ginevra',
    'footer.contact.whatsappCta': 'Scrivici su WhatsApp',
    'footer.copyright': '© 2025',
    'footer.rights': 'Tutti i diritti riservati',
    'footer.logo.alt': 'Logo Atahualpa Music Studio',

    // ContactLinks (PressKit)
    'press.title': 'Scarica il Press Kit',
    'press.en': 'Press Kit (English)',
    'press.fr': 'Press Kit (Francese)',
  },
};
