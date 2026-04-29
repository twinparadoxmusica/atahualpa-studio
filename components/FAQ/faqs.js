import React from 'react';

/**
 * Locale-aware FAQ entries. Pass the active locale
 * (`'fr' | 'en' | 'es' | 'it'`) and receive the corresponding list of
 * `{ emoji, q, a }` items.
 */
const faqsByLocale = {
  fr: [
    {
      emoji: '📍',
      q: 'Où ont lieu les ateliers ?',
      a: (
        <p>
          Les ateliers se déroulent à <strong>Atahualpa Music Studio</strong>, à
          Cologny (Genève), dans un cadre professionnel, chaleureux et équipé de
          vrais instruments.
        </p>
      ),
    },
    {
      emoji: '🎂',
      q: 'À partir de quel âge peut-on s’inscrire ?',
      a: (
        <p>
          Les ateliers sont{' '}
          <strong>ouverts aux enfants et jeunes de tout âge</strong>, avec des
          activités adaptées au niveau et à l’énergie de chacun.
        </p>
      ),
    },
    {
      emoji: '🥁',
      q: 'Faut-il déjà savoir jouer d’un instrument ?',
      a: (
        <p>
          Pas du tout ! Les ateliers sont{' '}
          <strong>ouverts à tous les niveaux</strong>, du débutant au musicien
          déjà expérimenté.
        </p>
      ),
    },
    {
      emoji: '🎸',
      q: 'Quels instruments peut-on découvrir ?',
      a: (
        <p>
          Guitare, basse, piano, batterie, synthétiseur… parfois même plusieurs
          dans un même morceau !
        </p>
      ),
    },
    {
      emoji: '👥',
      q: 'Combien de participants par groupe ?',
      a: (
        <p>
          Pour garantir un suivi personnalisé, les groupes sont composés de{' '}
          <strong>3 à 6 enfants maximum</strong>.
        </p>
      ),
    },
    {
      emoji: '🌍',
      q: 'En quelles langues se font les cours ?',
      a: (
        <p>
          Les ateliers peuvent se dérouler en{' '}
          <strong>français, anglais, espagnol ou italien</strong>, selon les
          besoins.
        </p>
      ),
    },
    {
      emoji: '📅',
      q: 'Peut-on tester avant de s’engager ?',
      a: (
        <p>
          Oui, il est possible de réserver{' '}
          <strong>un cours d’essai gratuit</strong>. Il suffit de remplir le
          formulaire en ligne.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Comment réserver et payer ?',
      a: (
        <p>
          La réservation se fait directement via notre page en ligne (par
          exemple Acuity Scheduling). Tu peux choisir ton créneau et
          <strong> payer par différents moyens</strong> (carte, virement, etc.).
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'En quoi votre approche est différente ?',
      a: (
        <p>
          Ici, la musique se vit dans le plaisir et la créativité. Pas de
          solfège imposé ni de pression : juste du jeu collectif, du rythme et
          de l’expression libre.
        </p>
      ),
    },
  ],
  en: [
    {
      emoji: '📍',
      q: 'Where do the workshops take place?',
      a: (
        <p>
          Workshops are held at <strong>Atahualpa Music Studio</strong>, in
          Cologny (Geneva), in a professional, welcoming setting equipped with
          real instruments.
        </p>
      ),
    },
    {
      emoji: '🎂',
      q: 'What is the minimum age to sign up?',
      a: (
        <p>
          Workshops are <strong>open to children and young people of any age</strong>,
          with activities tailored to each student’s level and energy.
        </p>
      ),
    },
    {
      emoji: '🥁',
      q: 'Do I need to already play an instrument?',
      a: (
        <p>
          Not at all! Workshops are <strong>open to all levels</strong>, from
          absolute beginners to experienced musicians.
        </p>
      ),
    },
    {
      emoji: '🎸',
      q: 'Which instruments can we discover?',
      a: (
        <p>
          Guitar, bass, piano, drums, synth… sometimes even several in the same
          song!
        </p>
      ),
    },
    {
      emoji: '👥',
      q: 'How many students per group?',
      a: (
        <p>
          To guarantee personal follow-up, groups are made up of{' '}
          <strong>3 to 6 children maximum</strong>.
        </p>
      ),
    },
    {
      emoji: '🌍',
      q: 'What languages are the lessons in?',
      a: (
        <p>
          Workshops can be held in{' '}
          <strong>French, English, Spanish or Italian</strong>, depending on
          your needs.
        </p>
      ),
    },
    {
      emoji: '📅',
      q: 'Can I try before signing up?',
      a: (
        <p>
          Yes, you can book a <strong>free trial lesson</strong>. Just fill in
          the online form.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'How do I book and pay?',
      a: (
        <p>
          Booking is done through our online page (for example Acuity
          Scheduling). You can pick your slot and{' '}
          <strong>pay by different methods</strong> (card, transfer, etc.).
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'What makes your approach different?',
      a: (
        <p>
          Here, music is lived through fun and creativity. No forced theory and
          no pressure: just collective playing, rhythm and free expression.
        </p>
      ),
    },
  ],
  es: [
    {
      emoji: '📍',
      q: '¿Dónde se realizan los talleres?',
      a: (
        <p>
          Los talleres se imparten en <strong>Atahualpa Music Studio</strong>,
          en Cologny (Ginebra), en un entorno profesional, acogedor y equipado
          con instrumentos reales.
        </p>
      ),
    },
    {
      emoji: '🎂',
      q: '¿A partir de qué edad se pueden inscribir?',
      a: (
        <p>
          Los talleres están{' '}
          <strong>abiertos a niños y jóvenes de cualquier edad</strong>, con
          actividades adaptadas al nivel y a la energía de cada uno.
        </p>
      ),
    },
    {
      emoji: '🥁',
      q: '¿Hay que saber tocar ya un instrumento?',
      a: (
        <p>
          ¡Para nada! Los talleres están{' '}
          <strong>abiertos a todos los niveles</strong>, desde principiantes
          hasta músicos con experiencia.
        </p>
      ),
    },
    {
      emoji: '🎸',
      q: '¿Qué instrumentos se pueden descubrir?',
      a: (
        <p>
          Guitarra, bajo, piano, batería, sintetizador… ¡a veces incluso varios
          en una misma canción!
        </p>
      ),
    },
    {
      emoji: '👥',
      q: '¿Cuántos participantes por grupo?',
      a: (
        <p>
          Para garantizar un seguimiento personalizado, los grupos están
          formados por <strong>3 a 6 niños máximo</strong>.
        </p>
      ),
    },
    {
      emoji: '🌍',
      q: '¿En qué idiomas se imparten las clases?',
      a: (
        <p>
          Los talleres pueden realizarse en{' '}
          <strong>francés, inglés, español o italiano</strong>, según las
          necesidades.
        </p>
      ),
    },
    {
      emoji: '📅',
      q: '¿Se puede probar antes de comprometerse?',
      a: (
        <p>
          Sí, es posible reservar una <strong>clase de prueba gratuita</strong>.
          Solo hay que rellenar el formulario en línea.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: '¿Cómo se reserva y se paga?',
      a: (
        <p>
          La reserva se hace directamente desde nuestra página en línea (por
          ejemplo Acuity Scheduling). Puedes elegir tu horario y{' '}
          <strong>pagar por diferentes medios</strong> (tarjeta, transferencia,
          etc.).
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: '¿En qué se diferencia vuestro enfoque?',
      a: (
        <p>
          Aquí, la música se vive desde el placer y la creatividad. Sin solfeo
          impuesto ni presión: solo juego colectivo, ritmo y expresión libre.
        </p>
      ),
    },
  ],
  it: [
    {
      emoji: '📍',
      q: 'Dove si svolgono i laboratori?',
      a: (
        <p>
          I laboratori si tengono ad <strong>Atahualpa Music Studio</strong>, a
          Cologny (Ginevra), in un contesto professionale, accogliente e
          attrezzato con strumenti veri.
        </p>
      ),
    },
    {
      emoji: '🎂',
      q: 'A partire da quale età ci si può iscrivere?',
      a: (
        <p>
          I laboratori sono{' '}
          <strong>aperti a bambini e ragazzi di ogni età</strong>, con
          attività adattate al livello e all’energia di ciascuno.
        </p>
      ),
    },
    {
      emoji: '🥁',
      q: 'Bisogna già saper suonare uno strumento?',
      a: (
        <p>
          Per nulla! I laboratori sono{' '}
          <strong>aperti a tutti i livelli</strong>, dai principianti ai
          musicisti più esperti.
        </p>
      ),
    },
    {
      emoji: '🎸',
      q: 'Quali strumenti si possono scoprire?',
      a: (
        <p>
          Chitarra, basso, pianoforte, batteria, sintetizzatore… a volte anche
          più strumenti nello stesso brano!
        </p>
      ),
    },
    {
      emoji: '👥',
      q: 'Quanti partecipanti per gruppo?',
      a: (
        <p>
          Per garantire un seguito personalizzato, i gruppi sono composti da{' '}
          <strong>3 a 6 bambini al massimo</strong>.
        </p>
      ),
    },
    {
      emoji: '🌍',
      q: 'In quali lingue si tengono le lezioni?',
      a: (
        <p>
          I laboratori possono svolgersi in{' '}
          <strong>francese, inglese, spagnolo o italiano</strong>, in base
          alle esigenze.
        </p>
      ),
    },
    {
      emoji: '📅',
      q: 'Si può provare prima di impegnarsi?',
      a: (
        <p>
          Sì, è possibile prenotare una{' '}
          <strong>lezione di prova gratuita</strong>. Basta compilare il
          modulo online.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Come si prenota e si paga?',
      a: (
        <p>
          La prenotazione si effettua direttamente dalla nostra pagina online
          (per esempio Acuity Scheduling). Puoi scegliere lo slot e{' '}
          <strong>pagare con diversi metodi</strong> (carta, bonifico, ecc.).
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'Cosa rende diverso il vostro approccio?',
      a: (
        <p>
          Qui la musica si vive nel piacere e nella creatività. Niente
          solfeggio imposto né pressione: solo gioco collettivo, ritmo ed
          espressione libera.
        </p>
      ),
    },
  ],
};

export default faqsByLocale;
