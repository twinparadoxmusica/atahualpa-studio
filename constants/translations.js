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

export const translations = {
  fr: {
    // Navigation
    'nav.lecons': 'LEÇONS DE MUSIQUE',
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
    'common.discoverProgram': 'Découvrir le programme',
    'common.moreInfo': 'Plus d’informations',
    'common.chooseOffer': 'Choisir cette offre',
    'common.bookNow': 'Réserve ta séance maintenant',
    'common.pageSections': 'Sections de la page',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Genève',
    'home.hero.title': 'Un studio, deux passions',
    'home.hero.subtitle': 'Enseigner et capturer la musique',
    'home.hero.ctaLecons': 'Découvrir les cours',
    'home.hero.ctaPrise': 'Prise de son & vidéo',
    'home.hero.chip.individual': 'Cours individuels',
    'home.hero.chip.workshops': 'Ateliers',
    'home.hero.chip.studio': 'Studio',
    'home.hero.chip.live': 'Captation live',

    // Home / Intro
    'home.intro.eyebrow': 'À propos',
    'home.intro.title': 'Un lieu pensé pour la musique',
    'home.intro.lede': 'Atahualpa Music Studio, à Genève en Suisse, face au lac Léman.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Notre univers',
    'home.stage.title': 'Découvrez notre univers musical et audiovisuel',
    'home.stage.lede': 'Deux activités complémentaires sous le même toit, pour apprendre, créer et capturer la musique.',
    'home.stage.lecons.title': 'Cours de musique innovants & ateliers créatifs',
    'home.stage.prise.title': 'Prises de son & vidéo professionnelles',

    // Home / History
    'home.history.eyebrow': 'Notre histoire',
    'home.history.title': 'Cinq ans à faire vivre la musique',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Atelier de musique · Genève',
    'lecons.hero.title': 'Leçons de musique',
    'lecons.hero.lede': 'Apprends la musique autrement. Pas de méthode figée : chaque cours est pensé pour toi, selon tes envies, tes goûts et tes objectifs.',
    'lecons.hero.card.group.title': 'Cours en groupe',
    'lecons.hero.card.individual.title': 'Cours individuels',

    // Group class
    'group.eyebrow': 'Cours en groupe',
    'group.title': 'L’atelier multi-instrumental',
    'group.note.title': 'Groupes réduits',
    'group.note.body': 'Maximum 4 enfants par groupe pour garantir un suivi personnalisé et une ambiance bienveillante.',
    'group.cta': 'Réserve ton cours d’essai gratuit',
    'group.pricing.title': 'Nos abonnements - cours en groupe',
    'group.pricing.lede': 'Choisissez la formule qui correspond le mieux à vos besoins.',
    'group.offer.trial.tag': '🎶✨',
    'group.offer.trial.title': 'Cours d’essai gratuit',
    'group.offer.trial.price': '0 CHF',
    'group.offer.monthly.tag': '👧👦',
    'group.offer.monthly.title': 'Cours Mensuel',
    'group.offer.monthly.price': '60 CHF / cours',
    'group.offer.monthly.subPrice': '240 CHF par mois',
    'group.offer.annual.tag': '🎸',
    'group.offer.annual.title': 'Abonnement Annuel',
    'group.offer.annual.price': '55 CHF / cours',
    'group.offer.annual.subPrice': '220 CHF par mois',

    // Individual class
    'individual.eyebrow': 'Coaching individuel',
    'individual.lede': 'Tu voudrais t’initier ou t’améliorer à la guitare, à la basse, au DJing ou à la production musicale ? Chaque session est pensée pour toi dans une ambiance créative et motivante.',
    'individual.pricing.title': 'Nos abonnements - coaching individuel',
    'individual.offer.discovery.tag': '🎸 Découverte',
    'individual.offer.discovery.title': 'Séance Découverte (–50%)',
    'individual.offer.discovery.price': '1 cours à 55,00 CHF',
    'individual.offer.monthly.tag': '⚡ Flexible',
    'individual.offer.monthly.title': 'Cours Mensuel',
    'individual.offer.monthly.price': '95 CHF / cours',
    'individual.offer.monthly.subPrice': '380 CHF par mois',
    'individual.offer.annual.tag': '🏆 Progression garantie',
    'individual.offer.annual.title': 'Abonnement Annuel',
    'individual.offer.annual.price': '75 CHF / cours',
    'individual.offer.annual.subPrice': '300 CHF par mois',

    // Videos eleves
    'videos.eyebrow': 'Élèves en studio',
    'videos.title': 'Vidéos des élèves',
    'videos.lede': 'Les élèves enregistrent une chanson en studio à la fin de l’année pour mettre en valeur leur progression.',
    'videos.itemTitle': 'Élève en studio — vidéo',

    // FAQ
    'faq.eyebrow': '❓ Questions fréquentes',
    'faq.title': 'FAQ — Questions fréquentes',
    'faq.lede': 'Toutes les réponses pour bien préparer l’atelier d’Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': '💬 Écrire sur WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Genève',
    'prise.hero.title': 'Prise de son, vidéo & streaming',
    'prise.hero.lede': 'Deux salles dédiées à la production audio et vidéo, face au lac Léman. Une équipe spécialisée dans l’enregistrement, la captation multicam, le mixage et la diffusion en direct — au service des artistes, orchestres et musiciens.',
    'prise.hero.ctaProjects': 'Voir nos projets',
    'prise.hero.ctaWhatsapp': 'Discuter de votre projet',
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
    'prise.services.lede': 'De la captation à la diffusion, nous accompagnons chaque projet avec un soin artisanal et un matériel professionnel.',
    'prise.services.recording.title': 'Enregistrement orchestral & live',
    'prise.services.recording.desc': 'Captation d’orchestres, ensembles et musiciens avec une qualité studio, en salle ou sur site.',
    'prise.services.video.title': 'Captation vidéo',
    'prise.services.video.desc': 'Réalisation multicam pour concerts, sessions live et contenus artistiques, avec étalonnage soigné.',
    'prise.services.streaming.title': 'Streaming YouTube',
    'prise.services.streaming.desc': 'Gestion complète de la diffusion en direct avec audio synchronisé et image professionnelle.',
    'prise.services.mixing.title': 'Mixage & Mastering',
    'prise.services.mixing.desc': 'Finalisation sonore pour un rendu clair, équilibré et puissant sur toutes les plateformes.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Notre méthode',
    'prise.approach.title': 'Une équipe, quatre étapes — du brief à la diffusion.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body': 'On échange sur votre projet, vos contraintes et le rendu souhaité.',
    'prise.approach.step2.title': 'Captation',
    'prise.approach.step2.body': 'Installation studio ou sur site, son et image synchronisés au cordeau.',
    'prise.approach.step3.title': 'Post-production',
    'prise.approach.step3.body': 'Montage, mixage et mastering pour un rendu prêt à diffuser.',
    'prise.approach.step4.title': 'Diffusion',
    'prise.approach.step4.body': 'Livraison des fichiers ou stream YouTube en direct, prêt pour le public.',

    // Prise / Projects
    'prise.projects.eyebrow': 'Réalisations',
    'prise.projects.title': 'Projets réalisés',
    'prise.projects.lede': 'Captations live, enregistrements d’orchestres et streaming YouTube réalisés par notre équipe.',
    'prise.projects.gm2026.title': 'Festival International Genève Musicale 2026 – Concert d’ouverture',
    'prise.projects.gm2026.date': '26 avril 2026',
    'prise.projects.gm2026.location': 'Grande Salle de l’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1': 'Dimanche 26 avril 2026 à 18h30 — Concert à deux pianos avec les Maîtres du Festival et les musiciens invités.',
    'prise.projects.gm2026.p2': 'Au programme : Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodine, Piazzolla et Michel Runtz.',
    'prise.projects.gm2026.p3': 'Le Festival International Genève Musicale réunit jeunes lauréats, maîtres du piano et artistes invités autour de concerts, master classes et moments de transmission musicale.',
    'prise.projects.gm2025.title': 'Concours International "Genève Musicale"',
    'prise.projects.gm2025.date': 'Juin 2025',
    'prise.projects.gm2025.location': 'Association "Genève Musicale"',
    'prise.projects.gm2025.p1': '🎹 2e Concours International pour Jeunes Pianistes "Genève Musicale".',
    'prise.projects.gm2025.p2': '📺 Programme de l’épreuve demi-finale — une compétition internationale où de jeunes pianistes talentueux venus du monde entier se produisent devant un jury international.',
    'prise.projects.victoria.title': 'Victoria Hall – Orchestre CMGO Musimax',
    'prise.projects.victoria.date': '23 juin 2024',
    'prise.projects.victoria.location': 'Conservatoire de Genève – Victoria Hall',
    'prise.projects.victoria.p1': 'Pieter-Jelle de BOER, direction. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2': 'Atahualpa Music Studio — Ezequiel Cappellano & Mirko Hrubik : recording, mixing and mastering. Louis Hans-Moevi & Nelson Iso : cameraman and video editing.',
    'prise.projects.victoria.p3': 'Ludwig van Beethoven – Piano Concerto op.19 N°2 in B flat Major.',

    // Prise / CTA
    'prise.cta.eyebrow': 'On en discute ?',
    'prise.cta.title': 'Un concert, un album, un live à diffuser ?',
    'prise.cta.lede': 'Parlez-nous de votre projet. On revient vers vous rapidement avec une proposition adaptée.',
    'prise.cta.whatsapp': 'Écrire sur WhatsApp',
    'prise.cta.email': 'Envoyer un email',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Une petite équipe, un grand studio',
    'about.lede': 'Atahualpa Music Studio, c’est avant tout une équipe de musiciens passionnés qui travaillent ensemble, face au lac Léman.',
    'about.image.alt': 'L’équipe d’Atahualpa Music Studio',

    // Bio
    'bio.title': 'Fondateur d’Atahualpa Music Studio & chef d’équipe',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Localisation – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Genève',
    'contact.hero.title': 'Parlons musique',
    'contact.hero.lede': 'Une question sur les cours, un projet de captation ou simplement envie de visiter le studio ? Écris-nous — on te répond rapidement, en français, anglais, espagnol ou italien.',
    'contact.hero.whatsappAria': 'Nous contacter sur WhatsApp',
    'contact.hero.whatsapp': 'Discuter sur WhatsApp',
    'contact.hero.email': 'Envoyer un e-mail',
    'contact.hero.metaLabel': 'Informations',
    'contact.hero.meta.location': 'Cologny, Genève',
    'contact.hero.meta.response': 'Réponse sous 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Formulaire',
    'contact.form.title': 'Écris-nous un message',
    'contact.form.lede': 'Plus pratique pour un projet détaillé ou un devis.',
    'contact.form.success': '✅ Ton message a été envoyé avec succès — on revient vers toi rapidement.',
    'contact.form.subject': 'Nouveau message — atahualpa.studio',
    'contact.form.name': 'Nom',
    'contact.form.namePlaceholder': 'Ton nom',
    'contact.form.email': 'E-mail',
    'contact.form.emailPlaceholder': 'ton@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Dis-nous ce qui t’amène — niveau, instrument, projet, dates…',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours…',
    'contact.form.errorSend': 'Échec de l’envoi du message. Merci de réessayer.',
    'contact.form.errorFormData': 'FormData n’est pas pris en charge dans cet environnement.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio': 'Un espace musical dédié à l’apprentissage, la création et le partage. Des cours personnalisés et un studio équipé pour vivre la musique à fond.',
    'footer.nav.title': 'Navigation',
    'footer.nav.home': 'Accueil',
    'footer.nav.lecons': 'Leçons',
    'footer.nav.prise': 'Studio d’enregistrement',
    'footer.nav.about': 'À propos',
    'footer.nav.contact': 'Contact',
    'footer.contact.title': 'Contactez-nous',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny, Genève',
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
    'nav.lecons': 'MUSIC LESSONS',
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
    'common.discoverProgram': 'Discover the program',
    'common.moreInfo': 'More information',
    'common.chooseOffer': 'Choose this offer',
    'common.bookNow': 'Book your session now',
    'common.pageSections': 'Page sections',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Geneva',
    'home.hero.title': 'One studio, two passions',
    'home.hero.subtitle': 'Teaching and capturing music',
    'home.hero.ctaLecons': 'Discover the lessons',
    'home.hero.ctaPrise': 'Audio & video production',
    'home.hero.chip.individual': 'Private lessons',
    'home.hero.chip.workshops': 'Workshops',
    'home.hero.chip.studio': 'Studio',
    'home.hero.chip.live': 'Live recording',

    // Home / Intro
    'home.intro.eyebrow': 'About',
    'home.intro.title': 'A space designed for music',
    'home.intro.lede': 'Atahualpa Music Studio, in Geneva, Switzerland, overlooking Lake Geneva.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Our world',
    'home.stage.title': 'Discover our musical and audiovisual universe',
    'home.stage.lede': 'Two complementary activities under one roof — to learn, create and capture music.',
    'home.stage.lecons.title': 'Innovative music lessons & creative workshops',
    'home.stage.prise.title': 'Professional audio & video production',

    // Home / History
    'home.history.eyebrow': 'Our story',
    'home.history.title': 'Five years bringing music to life',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Music workshop · Geneva',
    'lecons.hero.title': 'Music lessons',
    'lecons.hero.lede': 'Learn music differently. No fixed method — every lesson is built around you, your tastes, your goals.',
    'lecons.hero.card.group.title': 'Group lessons',
    'lecons.hero.card.individual.title': 'Private lessons',

    // Group class
    'group.eyebrow': 'Group lessons',
    'group.title': 'The multi-instrument workshop',
    'group.note.title': 'Small groups',
    'group.note.body': 'Maximum 4 children per group, so every student gets personal attention in a friendly atmosphere.',
    'group.cta': 'Book your free trial lesson',
    'group.pricing.title': 'Our group lesson plans',
    'group.pricing.lede': 'Pick the plan that fits your needs.',
    'group.offer.trial.tag': '🎶✨',
    'group.offer.trial.title': 'Free trial lesson',
    'group.offer.trial.price': '0 CHF',
    'group.offer.monthly.tag': '👧👦',
    'group.offer.monthly.title': 'Monthly plan',
    'group.offer.monthly.price': '60 CHF / lesson',
    'group.offer.monthly.subPrice': '240 CHF per month',
    'group.offer.annual.tag': '🎸',
    'group.offer.annual.title': 'Annual plan',
    'group.offer.annual.price': '55 CHF / lesson',
    'group.offer.annual.subPrice': '220 CHF per month',

    // Individual class
    'individual.eyebrow': 'Private coaching',
    'individual.lede': 'Want to start out — or level up — on guitar, bass, DJing or music production? Every session is built around you, in a creative and motivating atmosphere.',
    'individual.pricing.title': 'Our private coaching plans',
    'individual.offer.discovery.tag': '🎸 Discovery',
    'individual.offer.discovery.title': 'Discovery session (–50%)',
    'individual.offer.discovery.price': '1 lesson at 55.00 CHF',
    'individual.offer.monthly.tag': '⚡ Flexible',
    'individual.offer.monthly.title': 'Monthly plan',
    'individual.offer.monthly.price': '95 CHF / lesson',
    'individual.offer.monthly.subPrice': '380 CHF per month',
    'individual.offer.annual.tag': '🏆 Guaranteed progress',
    'individual.offer.annual.title': 'Annual plan',
    'individual.offer.annual.price': '75 CHF / lesson',
    'individual.offer.annual.subPrice': '300 CHF per month',

    // Videos eleves
    'videos.eyebrow': 'Students in studio',
    'videos.title': 'Student videos',
    'videos.lede': 'At the end of the year, students record a song in the studio to celebrate their progress.',
    'videos.itemTitle': 'Student in studio — video',

    // FAQ
    'faq.eyebrow': '❓ Frequently asked questions',
    'faq.title': 'FAQ — Frequently asked questions',
    'faq.lede': 'Everything you need to know to get ready for the workshop at Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': '💬 Message us on WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Geneva',
    'prise.hero.title': 'Audio recording, video & streaming',
    'prise.hero.lede': 'Two rooms dedicated to audio and video production, overlooking Lake Geneva. A team specialized in recording, multicam capture, mixing and live streaming — for artists, orchestras and musicians.',
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
    'prise.services.lede': 'From capture to delivery, we treat every project with craft and professional gear.',
    'prise.services.recording.title': 'Orchestral & live recording',
    'prise.services.recording.desc': 'Recording orchestras, ensembles and solo musicians with studio quality, on-site or in our rooms.',
    'prise.services.video.title': 'Video capture',
    'prise.services.video.desc': 'Multicam production for concerts, live sessions and artistic content, with carefully graded picture.',
    'prise.services.streaming.title': 'YouTube streaming',
    'prise.services.streaming.desc': 'Full management of live broadcast with synced audio and broadcast-grade picture.',
    'prise.services.mixing.title': 'Mixing & mastering',
    'prise.services.mixing.desc': 'Final polish for clear, balanced and powerful playback across every platform.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Our method',
    'prise.approach.title': 'One team, four steps — from brief to broadcast.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body': 'We talk through your project, your constraints and the result you want.',
    'prise.approach.step2.title': 'Capture',
    'prise.approach.step2.body': 'Studio or on-site setup, with sound and picture synced down to the millisecond.',
    'prise.approach.step3.title': 'Post-production',
    'prise.approach.step3.body': 'Editing, mixing and mastering for a result that’s ready to publish.',
    'prise.approach.step4.title': 'Delivery',
    'prise.approach.step4.body': 'File delivery or live YouTube stream, ready for your audience.',

    // Prise / Projects
    'prise.projects.eyebrow': 'Selected work',
    'prise.projects.title': 'Past projects',
    'prise.projects.lede': 'Live captures, orchestral recordings and YouTube streams produced by our team.',
    'prise.projects.gm2026.title': 'Geneva Musicale International Festival 2026 – Opening concert',
    'prise.projects.gm2026.date': 'April 26, 2026',
    'prise.projects.gm2026.location': 'Grande Salle de l’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1': 'Sunday April 26, 2026 at 6:30pm — Two-piano concert with the Festival Masters and guest musicians.',
    'prise.projects.gm2026.p2': 'Programme: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla and Michel Runtz.',
    'prise.projects.gm2026.p3': 'The Geneva Musicale International Festival brings together young laureates, master pianists and guest artists for concerts, master classes and moments of musical transmission.',
    'prise.projects.gm2025.title': 'International Competition "Geneva Musicale"',
    'prise.projects.gm2025.date': 'June 2025',
    'prise.projects.gm2025.location': '"Geneva Musicale" Association',
    'prise.projects.gm2025.p1': '🎹 2nd International Competition for Young Pianists "Geneva Musicale".',
    'prise.projects.gm2025.p2': '📺 Semi-final program — an international competition where talented young pianists from around the world perform before an international jury.',
    'prise.projects.victoria.title': 'Victoria Hall – CMGO Musimax Orchestra',
    'prise.projects.victoria.date': 'June 23, 2024',
    'prise.projects.victoria.location': 'Geneva Conservatory – Victoria Hall',
    'prise.projects.victoria.p1': 'Pieter-Jelle de BOER, conductor. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2': 'Atahualpa Music Studio — Ezequiel Cappellano & Mirko Hrubik: recording, mixing and mastering. Louis Hans-Moevi & Nelson Iso: cameraman and video editing.',
    'prise.projects.victoria.p3': 'Ludwig van Beethoven – Piano Concerto op.19 No.2 in B flat Major.',

    // Prise / CTA
    'prise.cta.eyebrow': 'Want to chat?',
    'prise.cta.title': 'A concert, an album, a live show to broadcast?',
    'prise.cta.lede': 'Tell us about your project. We’ll come back to you quickly with a tailored proposal.',
    'prise.cta.whatsapp': 'Message on WhatsApp',
    'prise.cta.email': 'Send an email',

    // About
    'about.eyebrow': 'About',
    'about.title': 'A small team, a great studio',
    'about.lede': 'Atahualpa Music Studio is, above all, a team of passionate musicians working together, overlooking Lake Geneva.',
    'about.image.alt': 'The Atahualpa Music Studio team',

    // Bio
    'bio.title': 'Founder of Atahualpa Music Studio & team lead',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Location – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Geneva',
    'contact.hero.title': 'Let’s talk music',
    'contact.hero.lede': 'A question about lessons, a recording project, or simply want to visit the studio? Drop us a line — we reply quickly, in English, French, Spanish or Italian.',
    'contact.hero.whatsappAria': 'Contact us on WhatsApp',
    'contact.hero.whatsapp': 'Chat on WhatsApp',
    'contact.hero.email': 'Send an email',
    'contact.hero.metaLabel': 'Information',
    'contact.hero.meta.location': 'Cologny, Geneva',
    'contact.hero.meta.response': 'Reply within 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Form',
    'contact.form.title': 'Send us a message',
    'contact.form.lede': 'Better suited for a detailed project or a quote.',
    'contact.form.success': '✅ Your message has been sent — we’ll get back to you shortly.',
    'contact.form.subject': 'New message — atahualpa.studio',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'you@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us what brings you here — level, instrument, project, dates…',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending…',
    'contact.form.errorSend': 'Failed to send message. Please try again.',
    'contact.form.errorFormData': 'FormData is not supported in this environment.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio': 'A musical space dedicated to learning, creating and sharing. Personalized lessons and a fully equipped studio to live music to the fullest.',
    'footer.nav.title': 'Navigation',
    'footer.nav.home': 'Home',
    'footer.nav.lecons': 'Lessons',
    'footer.nav.prise': 'Recording studio',
    'footer.nav.about': 'About',
    'footer.nav.contact': 'Contact',
    'footer.contact.title': 'Contact us',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny, Geneva',
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
    'nav.lecons': 'CLASES DE MÚSICA',
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
    'common.discoverProgram': 'Descubre el programa',
    'common.moreInfo': 'Más información',
    'common.chooseOffer': 'Elegir esta oferta',
    'common.bookNow': 'Reserva tu sesión ahora',
    'common.pageSections': 'Secciones de la página',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Ginebra',
    'home.hero.title': 'Un estudio, dos pasiones',
    'home.hero.subtitle': 'Enseñar y capturar la música',
    'home.hero.ctaLecons': 'Descubre las clases',
    'home.hero.ctaPrise': 'Audio y video',
    'home.hero.chip.individual': 'Clases individuales',
    'home.hero.chip.workshops': 'Talleres',
    'home.hero.chip.studio': 'Estudio',
    'home.hero.chip.live': 'Grabación en vivo',

    // Home / Intro
    'home.intro.eyebrow': 'Sobre nosotros',
    'home.intro.title': 'Un lugar pensado para la música',
    'home.intro.lede': 'Atahualpa Music Studio, en Ginebra (Suiza), frente al lago Lemán.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Nuestro mundo',
    'home.stage.title': 'Descubre nuestro universo musical y audiovisual',
    'home.stage.lede': 'Dos actividades complementarias bajo el mismo techo, para aprender, crear y capturar la música.',
    'home.stage.lecons.title': 'Clases de música innovadoras y talleres creativos',
    'home.stage.prise.title': 'Grabaciones de audio y video profesionales',

    // Home / History
    'home.history.eyebrow': 'Nuestra historia',
    'home.history.title': 'Cinco años haciendo vivir la música',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Taller de música · Ginebra',
    'lecons.hero.title': 'Clases de música',
    'lecons.hero.lede': 'Aprende música de otra manera. Sin método rígido: cada clase está pensada para ti, según tus gustos, tus ganas y tus objetivos.',
    'lecons.hero.card.group.title': 'Clases en grupo',
    'lecons.hero.card.individual.title': 'Clases individuales',

    // Group class
    'group.eyebrow': 'Clases en grupo',
    'group.title': 'El taller multi-instrumental',
    'group.note.title': 'Grupos reducidos',
    'group.note.body': 'Máximo 4 niños por grupo para garantizar un seguimiento personalizado y un ambiente cercano.',
    'group.cta': 'Reserva tu clase de prueba gratuita',
    'group.pricing.title': 'Nuestros planes - clases en grupo',
    'group.pricing.lede': 'Elige el plan que mejor se adapte a tus necesidades.',
    'group.offer.trial.tag': '🎶✨',
    'group.offer.trial.title': 'Clase de prueba gratuita',
    'group.offer.trial.price': '0 CHF',
    'group.offer.monthly.tag': '👧👦',
    'group.offer.monthly.title': 'Plan mensual',
    'group.offer.monthly.price': '60 CHF / clase',
    'group.offer.monthly.subPrice': '240 CHF al mes',
    'group.offer.annual.tag': '🎸',
    'group.offer.annual.title': 'Plan anual',
    'group.offer.annual.price': '55 CHF / clase',
    'group.offer.annual.subPrice': '220 CHF al mes',

    // Individual class
    'individual.eyebrow': 'Coaching individual',
    'individual.lede': '¿Quieres iniciarte o avanzar en guitarra, bajo, DJ o producción musical? Cada sesión está pensada para ti, en un ambiente creativo y motivador.',
    'individual.pricing.title': 'Nuestros planes - coaching individual',
    'individual.offer.discovery.tag': '🎸 Descubrimiento',
    'individual.offer.discovery.title': 'Sesión de descubrimiento (–50 %)',
    'individual.offer.discovery.price': '1 clase a 55,00 CHF',
    'individual.offer.monthly.tag': '⚡ Flexible',
    'individual.offer.monthly.title': 'Plan mensual',
    'individual.offer.monthly.price': '95 CHF / clase',
    'individual.offer.monthly.subPrice': '380 CHF al mes',
    'individual.offer.annual.tag': '🏆 Progreso garantizado',
    'individual.offer.annual.title': 'Plan anual',
    'individual.offer.annual.price': '75 CHF / clase',
    'individual.offer.annual.subPrice': '300 CHF al mes',

    // Videos eleves
    'videos.eyebrow': 'Alumnos en estudio',
    'videos.title': 'Videos de los alumnos',
    'videos.lede': 'Al final del año, los alumnos graban una canción en el estudio para celebrar sus progresos.',
    'videos.itemTitle': 'Alumno en estudio — video',

    // FAQ
    'faq.eyebrow': '❓ Preguntas frecuentes',
    'faq.title': 'FAQ — Preguntas frecuentes',
    'faq.lede': 'Todas las respuestas para preparar bien el taller en Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': '💬 Escríbenos por WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Ginebra',
    'prise.hero.title': 'Grabación de audio, video y streaming',
    'prise.hero.lede': 'Dos salas dedicadas a la producción de audio y video, frente al lago Lemán. Un equipo especializado en grabación, captura multicámara, mezcla y transmisión en vivo — al servicio de artistas, orquestas y músicos.',
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
    'prise.services.lede': 'De la captura a la entrega, acompañamos cada proyecto con cuidado artesanal y equipo profesional.',
    'prise.services.recording.title': 'Grabación orquestal y en vivo',
    'prise.services.recording.desc': 'Grabación de orquestas, conjuntos y músicos solistas con calidad de estudio, en sala o en tu locación.',
    'prise.services.video.title': 'Captura de video',
    'prise.services.video.desc': 'Producción multicámara para conciertos, sesiones en vivo y contenido artístico, con corrección de color cuidada.',
    'prise.services.streaming.title': 'Streaming de YouTube',
    'prise.services.streaming.desc': 'Gestión completa de la transmisión en vivo con audio sincronizado e imagen profesional.',
    'prise.services.mixing.title': 'Mezcla y masterización',
    'prise.services.mixing.desc': 'Acabado sonoro para una reproducción clara, equilibrada y potente en todas las plataformas.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Nuestro método',
    'prise.approach.title': 'Un equipo, cuatro pasos — del brief a la emisión.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body': 'Hablamos de tu proyecto, tus condicionantes y el resultado que buscas.',
    'prise.approach.step2.title': 'Captura',
    'prise.approach.step2.body': 'Montaje en estudio o en locación, con audio y video sincronizados al milímetro.',
    'prise.approach.step3.title': 'Postproducción',
    'prise.approach.step3.body': 'Edición, mezcla y masterización para un resultado listo para publicar.',
    'prise.approach.step4.title': 'Entrega',
    'prise.approach.step4.body': 'Entrega de archivos o stream en vivo en YouTube, listo para tu público.',

    // Prise / Projects
    'prise.projects.eyebrow': 'Trabajos seleccionados',
    'prise.projects.title': 'Proyectos realizados',
    'prise.projects.lede': 'Capturas en vivo, grabaciones de orquesta y streams en YouTube producidos por nuestro equipo.',
    'prise.projects.gm2026.title': 'Festival Internacional Genève Musicale 2026 – Concierto inaugural',
    'prise.projects.gm2026.date': '26 de abril de 2026',
    'prise.projects.gm2026.location': 'Grande Salle del Espace Culturel de Genthod',
    'prise.projects.gm2026.p1': 'Domingo 26 de abril de 2026 a las 18:30 — Concierto a dos pianos con los Maestros del Festival y los músicos invitados.',
    'prise.projects.gm2026.p2': 'En el programa: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla y Michel Runtz.',
    'prise.projects.gm2026.p3': 'El Festival Internacional Genève Musicale reúne a jóvenes laureados, maestros del piano y artistas invitados en torno a conciertos, clases magistrales y momentos de transmisión musical.',
    'prise.projects.gm2025.title': 'Concurso Internacional "Genève Musicale"',
    'prise.projects.gm2025.date': 'Junio de 2025',
    'prise.projects.gm2025.location': 'Asociación "Genève Musicale"',
    'prise.projects.gm2025.p1': '🎹 2.º Concurso Internacional para Jóvenes Pianistas "Genève Musicale".',
    'prise.projects.gm2025.p2': '📺 Programa de la semifinal — una competencia internacional donde jóvenes pianistas de todo el mundo se presentan ante un jurado internacional.',
    'prise.projects.victoria.title': 'Victoria Hall – Orquesta CMGO Musimax',
    'prise.projects.victoria.date': '23 de junio de 2024',
    'prise.projects.victoria.location': 'Conservatorio de Ginebra – Victoria Hall',
    'prise.projects.victoria.p1': 'Pieter-Jelle de BOER, dirección. Lucas CHICHE, piano (III mvt).',
    'prise.projects.victoria.p2': 'Atahualpa Music Studio — Ezequiel Cappellano y Mirko Hrubik: grabación, mezcla y masterización. Louis Hans-Moevi y Nelson Iso: cámara y edición de video.',
    'prise.projects.victoria.p3': 'Ludwig van Beethoven – Concierto para piano op.19 N.º 2 en si bemol mayor.',

    // Prise / CTA
    'prise.cta.eyebrow': '¿Hablamos?',
    'prise.cta.title': '¿Un concierto, un álbum, un directo para emitir?',
    'prise.cta.lede': 'Cuéntanos tu proyecto. Volveremos a ti rápidamente con una propuesta a medida.',
    'prise.cta.whatsapp': 'Escribir por WhatsApp',
    'prise.cta.email': 'Enviar un email',

    // About
    'about.eyebrow': 'Nosotros',
    'about.title': 'Un equipo pequeño, un gran estudio',
    'about.lede': 'Atahualpa Music Studio es, ante todo, un equipo de músicos apasionados que trabajan juntos, frente al lago Lemán.',
    'about.image.alt': 'El equipo de Atahualpa Music Studio',

    // Bio
    'bio.title': 'Fundador de Atahualpa Music Studio y líder del equipo',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Ubicación – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Ginebra',
    'contact.hero.title': 'Hablemos de música',
    'contact.hero.lede': '¿Una pregunta sobre las clases, un proyecto de grabación o simplemente quieres visitar el estudio? Escríbenos — te respondemos rápido en español, francés, inglés o italiano.',
    'contact.hero.whatsappAria': 'Contáctanos por WhatsApp',
    'contact.hero.whatsapp': 'Chatear por WhatsApp',
    'contact.hero.email': 'Enviar un correo',
    'contact.hero.metaLabel': 'Información',
    'contact.hero.meta.location': 'Cologny, Ginebra',
    'contact.hero.meta.response': 'Respuesta en 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Formulario',
    'contact.form.title': 'Escríbenos un mensaje',
    'contact.form.lede': 'Más práctico para un proyecto detallado o un presupuesto.',
    'contact.form.success': '✅ Tu mensaje ha sido enviado — te responderemos pronto.',
    'contact.form.subject': 'Nuevo mensaje — atahualpa.studio',
    'contact.form.name': 'Nombre',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntanos qué te trae — nivel, instrumento, proyecto, fechas…',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando…',
    'contact.form.errorSend': 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.form.errorFormData': 'FormData no es compatible con este entorno.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio': 'Un espacio musical dedicado al aprendizaje, la creación y la puesta en común. Clases personalizadas y un estudio equipado para vivir la música a fondo.',
    'footer.nav.title': 'Navegación',
    'footer.nav.home': 'Inicio',
    'footer.nav.lecons': 'Clases',
    'footer.nav.prise': 'Estudio de grabación',
    'footer.nav.about': 'Nosotros',
    'footer.nav.contact': 'Contacto',
    'footer.contact.title': 'Contáctanos',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny, Ginebra',
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
    'nav.lecons': 'LEZIONI DI MUSICA',
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
    'common.discoverProgram': 'Scopri il programma',
    'common.moreInfo': 'Maggiori informazioni',
    'common.chooseOffer': 'Scegli questa offerta',
    'common.bookNow': 'Prenota ora la tua sessione',
    'common.pageSections': 'Sezioni della pagina',

    // Home / Hero
    'home.hero.eyebrow': 'Atahualpa Studio · Ginevra',
    'home.hero.title': 'Uno studio, due passioni',
    'home.hero.subtitle': 'Insegnare e catturare la musica',
    'home.hero.ctaLecons': 'Scopri le lezioni',
    'home.hero.ctaPrise': 'Audio e video',
    'home.hero.chip.individual': 'Lezioni individuali',
    'home.hero.chip.workshops': 'Workshop',
    'home.hero.chip.studio': 'Studio',
    'home.hero.chip.live': 'Riprese live',

    // Home / Intro
    'home.intro.eyebrow': 'Chi siamo',
    'home.intro.title': 'Un luogo pensato per la musica',
    'home.intro.lede': 'Atahualpa Music Studio, a Ginevra (Svizzera), affacciato sul lago Lemano.',

    // Home / StageDetails
    'home.stage.eyebrow': 'Il nostro mondo',
    'home.stage.title': 'Scopri il nostro universo musicale e audiovisivo',
    'home.stage.lede': 'Due attività complementari sotto lo stesso tetto, per imparare, creare e catturare la musica.',
    'home.stage.lecons.title': 'Lezioni di musica innovative e workshop creativi',
    'home.stage.prise.title': 'Riprese audio e video professionali',

    // Home / History
    'home.history.eyebrow': 'La nostra storia',
    'home.history.title': 'Cinque anni a far vivere la musica',

    // Lecons / Hero
    'lecons.hero.eyebrow': 'Workshop di musica · Ginevra',
    'lecons.hero.title': 'Lezioni di musica',
    'lecons.hero.lede': 'Impara la musica in modo diverso. Niente metodi rigidi: ogni lezione è pensata per te, secondo i tuoi gusti, le tue voglie e i tuoi obiettivi.',
    'lecons.hero.card.group.title': 'Lezioni di gruppo',
    'lecons.hero.card.individual.title': 'Lezioni individuali',

    // Group class
    'group.eyebrow': 'Lezioni di gruppo',
    'group.title': 'Il workshop multi-strumentale',
    'group.note.title': 'Gruppi ridotti',
    'group.note.body': 'Massimo 4 bambini per gruppo, per garantire un’attenzione personalizzata e un’atmosfera accogliente.',
    'group.cta': 'Prenota la tua lezione di prova gratuita',
    'group.pricing.title': 'I nostri piani - lezioni di gruppo',
    'group.pricing.lede': 'Scegli il piano più adatto alle tue esigenze.',
    'group.offer.trial.tag': '🎶✨',
    'group.offer.trial.title': 'Lezione di prova gratuita',
    'group.offer.trial.price': '0 CHF',
    'group.offer.monthly.tag': '👧👦',
    'group.offer.monthly.title': 'Piano mensile',
    'group.offer.monthly.price': '60 CHF / lezione',
    'group.offer.monthly.subPrice': '240 CHF al mese',
    'group.offer.annual.tag': '🎸',
    'group.offer.annual.title': 'Piano annuale',
    'group.offer.annual.price': '55 CHF / lezione',
    'group.offer.annual.subPrice': '220 CHF al mese',

    // Individual class
    'individual.eyebrow': 'Coaching individuale',
    'individual.lede': 'Vorresti iniziare o migliorare con chitarra, basso, DJing o produzione musicale? Ogni sessione è pensata per te, in un’atmosfera creativa e motivante.',
    'individual.pricing.title': 'I nostri piani - coaching individuale',
    'individual.offer.discovery.tag': '🎸 Scoperta',
    'individual.offer.discovery.title': 'Sessione scoperta (–50%)',
    'individual.offer.discovery.price': '1 lezione a 55,00 CHF',
    'individual.offer.monthly.tag': '⚡ Flessibile',
    'individual.offer.monthly.title': 'Piano mensile',
    'individual.offer.monthly.price': '95 CHF / lezione',
    'individual.offer.monthly.subPrice': '380 CHF al mese',
    'individual.offer.annual.tag': '🏆 Progresso garantito',
    'individual.offer.annual.title': 'Piano annuale',
    'individual.offer.annual.price': '75 CHF / lezione',
    'individual.offer.annual.subPrice': '300 CHF al mese',

    // Videos eleves
    'videos.eyebrow': 'Allievi in studio',
    'videos.title': 'Video degli allievi',
    'videos.lede': 'A fine anno, gli allievi registrano una canzone in studio per celebrare i loro progressi.',
    'videos.itemTitle': 'Allievo in studio — video',

    // FAQ
    'faq.eyebrow': '❓ Domande frequenti',
    'faq.title': 'FAQ — Domande frequenti',
    'faq.lede': 'Tutte le risposte per prepararti al meglio al workshop di Atahualpa Music Studio.',

    // Sticky button
    'sticky.whatsapp': '💬 Scrivici su WhatsApp',

    // Prise / Hero
    'prise.hero.eyebrow': 'Atahualpa Studio · Ginevra',
    'prise.hero.title': 'Registrazione audio, video e streaming',
    'prise.hero.lede': 'Due sale dedicate alla produzione audio e video, affacciate sul lago Lemano. Un team specializzato in registrazione, riprese multicamera, missaggio e diretta streaming — al servizio di artisti, orchestre e musicisti.',
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
    'prise.services.lede': 'Dalla cattura alla consegna, accompagniamo ogni progetto con cura artigianale e attrezzatura professionale.',
    'prise.services.recording.title': 'Registrazione orchestrale e live',
    'prise.services.recording.desc': 'Registrazione di orchestre, ensemble e musicisti solisti con qualità da studio, in sala o in loco.',
    'prise.services.video.title': 'Riprese video',
    'prise.services.video.desc': 'Produzione multicamera per concerti, sessioni live e contenuti artistici, con color grading curato.',
    'prise.services.streaming.title': 'Streaming YouTube',
    'prise.services.streaming.desc': 'Gestione completa della diretta con audio sincronizzato e immagine professionale.',
    'prise.services.mixing.title': 'Mix & mastering',
    'prise.services.mixing.desc': 'Rifinitura sonora per un risultato chiaro, equilibrato e potente su tutte le piattaforme.',

    // Prise / Approach
    'prise.approach.eyebrow': 'Il nostro metodo',
    'prise.approach.title': 'Un team, quattro tappe — dal brief alla messa in onda.',
    'prise.approach.step1.title': 'Brief',
    'prise.approach.step1.body': 'Parliamo del tuo progetto, dei tuoi vincoli e del risultato che desideri.',
    'prise.approach.step2.title': 'Cattura',
    'prise.approach.step2.body': 'Setup in studio o in loco, con audio e video sincronizzati al millimetro.',
    'prise.approach.step3.title': 'Postproduzione',
    'prise.approach.step3.body': 'Editing, missaggio e mastering per un risultato pronto da pubblicare.',
    'prise.approach.step4.title': 'Consegna',
    'prise.approach.step4.body': 'Consegna dei file o stream live su YouTube, pronto per il tuo pubblico.',

    // Prise / Projects
    'prise.projects.eyebrow': 'Lavori selezionati',
    'prise.projects.title': 'Progetti realizzati',
    'prise.projects.lede': 'Riprese live, registrazioni orchestrali e streaming YouTube prodotti dal nostro team.',
    'prise.projects.gm2026.title': 'Festival Internazionale Genève Musicale 2026 – Concerto inaugurale',
    'prise.projects.gm2026.date': '26 aprile 2026',
    'prise.projects.gm2026.location': 'Grande Salle dell’Espace Culturel de Genthod',
    'prise.projects.gm2026.p1': 'Domenica 26 aprile 2026 alle 18:30 — Concerto a due pianoforti con i Maestri del Festival e i musicisti ospiti.',
    'prise.projects.gm2026.p2': 'In programma: Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodin, Piazzolla e Michel Runtz.',
    'prise.projects.gm2026.p3': 'Il Festival Internazionale Genève Musicale riunisce giovani vincitori, maestri del pianoforte e artisti ospiti attorno a concerti, master class e momenti di trasmissione musicale.',
    'prise.projects.gm2025.title': 'Concorso Internazionale "Genève Musicale"',
    'prise.projects.gm2025.date': 'Giugno 2025',
    'prise.projects.gm2025.location': 'Associazione "Genève Musicale"',
    'prise.projects.gm2025.p1': '🎹 2° Concorso Internazionale per Giovani Pianisti "Genève Musicale".',
    'prise.projects.gm2025.p2': '📺 Programma della semifinale — una competizione internazionale in cui giovani pianisti di talento da tutto il mondo si esibiscono davanti a una giuria internazionale.',
    'prise.projects.victoria.title': 'Victoria Hall – Orchestra CMGO Musimax',
    'prise.projects.victoria.date': '23 giugno 2024',
    'prise.projects.victoria.location': 'Conservatorio di Ginevra – Victoria Hall',
    'prise.projects.victoria.p1': 'Pieter-Jelle de BOER, direzione. Lucas CHICHE, pianoforte (III mvt).',
    'prise.projects.victoria.p2': 'Atahualpa Music Studio — Ezequiel Cappellano e Mirko Hrubik: registrazione, missaggio e mastering. Louis Hans-Moevi e Nelson Iso: ripresa video ed editing.',
    'prise.projects.victoria.p3': 'Ludwig van Beethoven – Concerto per pianoforte op.19 N°2 in si bemolle maggiore.',

    // Prise / CTA
    'prise.cta.eyebrow': 'Ne parliamo?',
    'prise.cta.title': 'Un concerto, un album, un live da trasmettere?',
    'prise.cta.lede': 'Raccontaci il tuo progetto. Torneremo da te in fretta con una proposta su misura.',
    'prise.cta.whatsapp': 'Scrivici su WhatsApp',
    'prise.cta.email': 'Invia un’email',

    // About
    'about.eyebrow': 'Chi siamo',
    'about.title': 'Una piccola squadra, un grande studio',
    'about.lede': 'Atahualpa Music Studio è prima di tutto una squadra di musicisti appassionati che lavorano insieme, affacciati sul lago Lemano.',
    'about.image.alt': 'Il team di Atahualpa Music Studio',

    // Bio
    'bio.title': 'Fondatore di Atahualpa Music Studio e capo-team',
    'bio.image.alt': 'Ezequiel Cappellano',

    // Location
    'location.title': 'Posizione – Atahualpa Music Studio',

    // Contact
    'contact.hero.eyebrow': 'Atahualpa Studio · Ginevra',
    'contact.hero.title': 'Parliamo di musica',
    'contact.hero.lede': 'Una domanda sulle lezioni, un progetto di registrazione o semplicemente vuoi visitare lo studio? Scrivici — ti rispondiamo velocemente in italiano, francese, inglese o spagnolo.',
    'contact.hero.whatsappAria': 'Contattaci su WhatsApp',
    'contact.hero.whatsapp': 'Chatta su WhatsApp',
    'contact.hero.email': 'Invia un’email',
    'contact.hero.metaLabel': 'Informazioni',
    'contact.hero.meta.location': 'Cologny, Ginevra',
    'contact.hero.meta.response': 'Risposta entro 24 h',
    'contact.hero.meta.languages': 'FR · EN · ES · IT',
    'contact.form.eyebrow': 'Modulo',
    'contact.form.title': 'Scrivici un messaggio',
    'contact.form.lede': 'Più pratico per un progetto dettagliato o un preventivo.',
    'contact.form.success': '✅ Il tuo messaggio è stato inviato — torneremo presto da te.',
    'contact.form.subject': 'Nuovo messaggio — atahualpa.studio',
    'contact.form.name': 'Nome',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message': 'Messaggio',
    'contact.form.messagePlaceholder': 'Raccontaci cosa ti porta qui — livello, strumento, progetto, date…',
    'contact.form.submit': 'Invia messaggio',
    'contact.form.sending': 'Invio in corso…',
    'contact.form.errorSend': 'Impossibile inviare il messaggio. Per favore riprova.',
    'contact.form.errorFormData': 'FormData non è supportato in questo ambiente.',

    // Footer
    'footer.brand': 'Atahualpa Music Studio',
    'footer.bio': 'Uno spazio musicale dedicato all’apprendimento, alla creazione e alla condivisione. Lezioni personalizzate e uno studio attrezzato per vivere la musica al massimo.',
    'footer.nav.title': 'Navigazione',
    'footer.nav.home': 'Home',
    'footer.nav.lecons': 'Lezioni',
    'footer.nav.prise': 'Studio di registrazione',
    'footer.nav.about': 'Chi siamo',
    'footer.nav.contact': 'Contatti',
    'footer.contact.title': 'Contattaci',
    'footer.contact.address1': 'Rampe de Cologny 1',
    'footer.contact.address2': '1223 Cologny, Ginevra',
    'footer.copyright': '© 2025',
    'footer.rights': 'Tutti i diritti riservati',
    'footer.logo.alt': 'Logo Atahualpa Music Studio',

    // ContactLinks (PressKit)
    'press.title': 'Scarica il Press Kit',
    'press.en': 'Press Kit (English)',
    'press.fr': 'Press Kit (Francese)',
  },
};
