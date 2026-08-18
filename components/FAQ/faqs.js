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
          L’atelier multi-instrumental accueille les enfants{' '}
          <strong>dès 5 ans</strong>, avec des activités adaptées à leur âge,
          leur niveau et leur énergie.
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
          <strong>3 à 4 enfants maximum</strong>.
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
      emoji: '🎁',
      q: 'Comment réserver un cours d’essai gratuit pour l’atelier en groupe ?',
      a: (
        <p>
          La réservation se fait directement <strong>via WhatsApp</strong>. Nous
          vous proposons le créneau le plus adapté selon l’âge de votre enfant,
          son niveau et les groupes disponibles — vous ne choisissez pas un
          horaire au hasard dans un calendrier.
        </p>
      ),
    },
    {
      emoji: '🎯',
      q: 'Et pour les cours individuels ?',
      a: (
        <p>
          La <strong>séance découverte individuelle (55 CHF)</strong> se réserve
          actuellement par <strong>WhatsApp</strong>. Le paiement en ligne sera
          bientôt disponible. Pour les <strong>formules régulières</strong>,
          nous mettons en place le créneau hebdomadaire ensemble après un
          premier échange.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Comment se passent les paiements pour les cours réguliers ?',
      a: (
        <p>
          La <strong>formule mensuelle flexible</strong> est facturée selon les
          séances prévues et confirmées : 70 CHF par séance pour l’atelier et 95
          CHF pour un cours individuel. Avec une{' '}
          <strong>inscription régulière sur l’année scolaire</strong>, le tarif
          est de 60 CHF par séance pour l’atelier et de 85 CHF en individuel. Le
          paiement peut être automatique selon l’échéancier convenu, ou effectué
          pour l’année en une fois sur demande.
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'En quoi votre approche est-elle différente ?',
      a: (
        <p>
          La pratique commence dès les premières séances, avec des objectifs
          clairs et un parcours adapté à chaque élève. L’écoute, le rythme, la
          technique, la création et le jeu collectif avancent ensemble ; la
          théorie et le solfège sont intégrés progressivement lorsqu’ils
          deviennent utiles.
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
          The multi-instrument workshop welcomes children{' '}
          <strong>from age 5</strong>, with activities adapted to their age,
          level and energy.
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
          <strong>3 to 4 children maximum</strong>.
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
      emoji: '🎁',
      q: 'How do I book a free trial lesson for the group workshop?',
      a: (
        <p>
          Bookings are made <strong>via WhatsApp</strong>. We propose the slot
          that best matches your child’s age, level and the available groups —
          rather than picking a random time in a calendar.
        </p>
      ),
    },
    {
      emoji: '🎯',
      q: 'And for private lessons?',
      a: (
        <p>
          The <strong>private discovery session (55 CHF)</strong> is currently
          booked via <strong>WhatsApp</strong>. Online payment will be available
          soon. For <strong>regular plans</strong>, we set up the weekly slot
          together after a first chat.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'How do payments work for regular lessons?',
      a: (
        <p>
          The <strong>flexible monthly plan</strong> is billed according to the
          sessions scheduled and confirmed: 70 CHF per workshop session and 95
          CHF per private lesson. With{' '}
          <strong>regular school-year enrolment</strong>, the rate is 60 CHF per
          workshop session and 85 CHF per private lesson. Payment can be made
          automatically on the agreed schedule, or for the full year in one
          instalment on request.
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'What makes your approach different?',
      a: (
        <p>
          Playing begins in the first sessions, with clear goals and a path
          shaped around each student. Listening, rhythm, technique, creativity
          and ensemble playing develop together; theory and notation are
          introduced gradually when they become useful.
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
          El taller multi-instrumental recibe a niños y niñas{' '}
          <strong>a partir de los 5 años</strong>, con actividades adaptadas a
          su edad, nivel y energía.
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
          formados por <strong>3 a 4 niños máximo</strong>.
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
      emoji: '🎁',
      q: '¿Cómo se reserva una clase de prueba gratuita del taller en grupo?',
      a: (
        <p>
          La reserva se realiza <strong>por WhatsApp</strong>. Le proponemos el
          horario más adecuado según la edad de su hijo/a, su nivel y los grupos
          disponibles — no se trata de elegir un horario al azar en un
          calendario.
        </p>
      ),
    },
    {
      emoji: '🎯',
      q: '¿Y para las clases individuales?',
      a: (
        <p>
          La <strong>sesión de descubrimiento individual (55 CHF)</strong> se
          reserva actualmente por <strong>WhatsApp</strong>. El pago en línea
          estará disponible próximamente. Para los{' '}
          <strong>planes regulares</strong>, organizamos juntos el horario
          semanal tras un primer contacto.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: '¿Cómo funcionan los pagos para las clases regulares?',
      a: (
        <p>
          El <strong>plan mensual flexible</strong> se factura según las
          sesiones previstas y confirmadas: 70 CHF por sesión de taller y 95 CHF
          por clase individual. Con una{' '}
          <strong>inscripción regular durante el año escolar</strong>, la tarifa
          es de 60 CHF por sesión de taller y 85 CHF por clase individual. El
          pago puede ser automático según el calendario acordado, o realizarse
          para todo el año en una sola vez, previa solicitud.
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: '¿En qué se diferencia vuestro enfoque?',
      a: (
        <p>
          La práctica empieza desde las primeras sesiones, con objetivos claros
          y un recorrido adaptado a cada alumno. La escucha, el ritmo, la
          técnica, la creación y el trabajo en grupo avanzan juntos; la teoría y
          el solfeo se incorporan progresivamente cuando resultan útiles.
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
          Il laboratorio multi-strumentale accoglie bambini e ragazzi{' '}
          <strong>a partire dai 5 anni</strong>, con attività adatte all’età, al
          livello e all’energia di ciascuno.
        </p>
      ),
    },
    {
      emoji: '🥁',
      q: 'Bisogna già saper suonare uno strumento?',
      a: (
        <p>
          Per nulla! I laboratori sono <strong>aperti a tutti i livelli</strong>
          , dai principianti ai musicisti più esperti.
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
          <strong>3 a 4 bambini al massimo</strong>.
        </p>
      ),
    },
    {
      emoji: '🌍',
      q: 'In quali lingue si tengono le lezioni?',
      a: (
        <p>
          I laboratori possono svolgersi in{' '}
          <strong>francese, inglese, spagnolo o italiano</strong>, in base alle
          esigenze.
        </p>
      ),
    },
    {
      emoji: '🎁',
      q: 'Come si prenota una lezione di prova gratuita del laboratorio di gruppo?',
      a: (
        <p>
          La prenotazione si effettua <strong>tramite WhatsApp</strong>. Le
          proponiamo l’orario più adatto in base all’età di suo figlio/a, al
          livello e ai gruppi disponibili — non si tratta di scegliere un orario
          a caso da un calendario.
        </p>
      ),
    },
    {
      emoji: '🎯',
      q: 'E per le lezioni individuali?',
      a: (
        <p>
          La <strong>sessione di scoperta individuale (55 CHF)</strong> si
          prenota attualmente tramite <strong>WhatsApp</strong>. Il pagamento
          online sarà presto disponibile. Per i <strong>piani regolari</strong>,
          organizziamo insieme l’orario settimanale dopo un primo contatto.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Come funzionano i pagamenti per le lezioni regolari?',
      a: (
        <p>
          Il <strong>piano mensile flessibile</strong> viene fatturato in base
          alle sessioni previste e confermate: 70 CHF per il laboratorio e 95
          CHF per una lezione individuale. Con un’
          <strong>iscrizione regolare per l’anno scolastico</strong>, la tariffa
          è di 60 CHF per sessione di laboratorio e 85 CHF per una lezione
          individuale. Il pagamento può avvenire tramite addebito automatico
          secondo il calendario concordato, oppure per l’intero anno in un’unica
          soluzione su richiesta.
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'Cosa rende diverso il vostro approccio?',
      a: (
        <p>
          Si comincia a suonare fin dalle prime sessioni, con obiettivi chiari e
          un percorso adatto a ogni allievo. Ascolto, ritmo, tecnica, creatività
          e musica d’insieme crescono insieme; teoria e solfeggio vengono
          introdotti progressivamente quando diventano utili.
        </p>
      ),
    },
  ],
};

export default faqsByLocale;
