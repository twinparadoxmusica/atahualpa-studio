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
      emoji: '☀️',
      q: 'Comment s’inscrire au stage d’été ?',
      a: (
        <p>
          Pour le <strong>stage d’été multi-instrumental</strong>, écrivez-nous
          sur <strong>WhatsApp</strong> ou via le formulaire de contact pour
          connaître les <strong>disponibilités</strong>. Les groupes sont
          organisés selon l’âge, le niveau et les semaines disponibles.
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
          bientôt disponible. Pour les <strong>formules régulières</strong>, nous
          mettons en place le créneau hebdomadaire ensemble après un premier
          échange.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Comment se passent les paiements pour les cours réguliers ?',
      a: (
        <p>
          À partir de la rentrée scolaire, les cours réguliers fonctionnent
          principalement avec un <strong>paiement mensuel automatique</strong>{' '}
          ou un <strong>paiement annuel en une seule fois</strong>. Cela permet
          de garantir la place de l’élève, de simplifier l’organisation et
          d’assurer un suivi régulier tout au long de l’année. Une{' '}
          <strong>formule mensuelle sans engagement</strong> reste disponible,
          avec un tarif par cours plus élevé.
        </p>
      ),
    },
    {
      emoji: '🎤',
      q: 'En quoi votre approche est-elle différente ?',
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
      emoji: '☀️',
      q: 'How do I sign up for the summer camp?',
      a: (
        <p>
          For the <strong>multi-instrument summer camp</strong>, message us on{' '}
          <strong>WhatsApp</strong> or use the contact form to ask about{' '}
          <strong>availability</strong>. Groups are organised by age, level and
          available weeks.
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
          From the start of the school year, regular lessons mainly run on{' '}
          <strong>automatic monthly billing</strong> or a{' '}
          <strong>one-time annual payment</strong>. This guarantees the
          student’s spot, simplifies organisation and ensures consistent
          follow-up throughout the year. A{' '}
          <strong>flexible month-to-month plan</strong> remains available, at a
          slightly higher per-lesson price.
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
      emoji: '☀️',
      q: '¿Cómo se inscribe al campamento de verano?',
      a: (
        <p>
          Para el <strong>campamento de verano multi-instrumental</strong>,
          escríbanos por <strong>WhatsApp</strong> o a través del formulario de
          contacto para consultar la <strong>disponibilidad</strong>. Los
          grupos se organizan según la edad, el nivel y las semanas disponibles.
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
          Desde el inicio del curso escolar, las clases regulares funcionan
          principalmente con un <strong>pago mensual automático</strong> o un{' '}
          <strong>pago anual en una sola vez</strong>. Esto garantiza la plaza
          del alumno, simplifica la organización y asegura un seguimiento
          constante durante todo el año. Una{' '}
          <strong>fórmula mensual sin compromiso</strong> sigue estando
          disponible, con un precio por clase algo más alto.
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
          <strong>francese, inglese, spagnolo o italiano</strong>, in base
          alle esigenze.
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
      emoji: '☀️',
      q: 'Come ci si iscrive al campo estivo?',
      a: (
        <p>
          Per il <strong>campo estivo multi-strumentale</strong>, ci scriva su{' '}
          <strong>WhatsApp</strong> o usi il modulo di contatto per conoscere
          la <strong>disponibilità</strong>. I gruppi sono organizzati in base
          all’età, al livello e alle settimane disponibili.
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
          online sarà presto disponibile. Per i{' '}
          <strong>piani regolari</strong>, organizziamo insieme l’orario
          settimanale dopo un primo contatto.
        </p>
      ),
    },
    {
      emoji: '💳',
      q: 'Come funzionano i pagamenti per le lezioni regolari?',
      a: (
        <p>
          Dall’inizio dell’anno scolastico, le lezioni regolari funzionano
          principalmente con un <strong>addebito mensile automatico</strong> o
          un <strong>pagamento annuale in un’unica soluzione</strong>. Questo
          garantisce il posto dell’allievo, semplifica l’organizzazione e
          assicura un seguito costante durante tutto l’anno. Una{' '}
          <strong>formula mensile senza impegno</strong> resta disponibile, con
          un prezzo a lezione leggermente più alto.
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
