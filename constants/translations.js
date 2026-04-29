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

export const SUPPORTED_LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';

export const translations = {
  fr: {
    // Navigation
    'nav.lecons': 'LEÇONS DE MUSIQUE',
    'nav.prise': 'PRISE DE SON ET VIDÉO',
    'nav.apropos': 'À PROPOS',
    'nav.contact': 'CONTACT',
    'nav.toggleMenu': 'Ouvrir le menu',
    'nav.languageLabel': 'Langue',
    'nav.switchToEn': 'Passer en anglais',
    'nav.switchToFr': 'Passer en français',

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
    'nav.switchToEn': 'Switch to English',
    'nav.switchToFr': 'Switch to French',

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
};
