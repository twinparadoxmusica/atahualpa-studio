import React from 'react';

/**
 * Locale-aware FAQ entries. Pass the active locale
 * (`'fr' | 'en' | 'es' | 'it'`) and receive the corresponding list of
 * `{ q, a }` items.
 */
const faqsByLocale = {
  fr: [
    {
      q: 'Où ont lieu les cours ?',
      a: (
        <p>
          Les cours ont lieu à <strong>Atahualpa Music Studio</strong>, à
          Cologny / Genève, dans un studio équipé, chaleureux et adapté à
          la pratique musicale.
        </p>
      ),
    },
    {
      q: 'À partir de quel âge peut-on s’inscrire ?',
      a: (
        <p>
          L’atelier multi-instrumental en groupe est{' '}
          <strong>ouvert aux enfants dès 5 ans</strong>. Les cours
          individuels peuvent être adaptés aux enfants, adolescents et
          adultes selon le niveau, les objectifs et l’instrument choisi.
        </p>
      ),
    },
    {
      q: 'Faut-il déjà savoir jouer d’un instrument ?',
      a: (
        <p>
          Non. Les cours sont <strong>ouverts à tous les niveaux</strong>,
          du débutant complet à l’élève plus expérimenté. L’approche est
          adaptée au rythme, aux goûts musicaux et aux objectifs de
          chaque élève.
        </p>
      ),
    },
    {
      q: 'Quels instruments peut-on découvrir ?',
      a: (
        <p>
          Dans l’atelier multi-instrumental, les enfants peuvent
          découvrir plusieurs instruments :{' '}
          <strong>guitare, basse, piano, batterie, synthétiseur</strong>{' '}
          et outils de création musicale. Selon les morceaux, ils peuvent
          aussi changer d’instrument et explorer différents rôles au sein
          du groupe.
        </p>
      ),
    },
    {
      q: 'Combien y a-t-il d’élèves par groupe ?',
      a: (
        <p>
          Les ateliers se déroulent en{' '}
          <strong>petits groupes de 3 à 4 enfants maximum</strong>, afin
          de garantir un suivi personnalisé, une bonne dynamique
          collective et une ambiance bienveillante.
        </p>
      ),
    },
    {
      q: 'En quelles langues se font les cours ?',
      a: (
        <p>
          Les cours peuvent se dérouler en{' '}
          <strong>français, anglais, espagnol ou italien</strong>, selon
          les besoins de l’élève ou du groupe.
        </p>
      ),
    },
    {
      q: 'Peut-on essayer avant de s’engager ?',
      a: (
        <p>
          Oui. Pour l’<strong>atelier multi-instrumental en groupe</strong>
          , il est possible de demander un cours d’essai gratuit sur
          réservation. Pour les <strong>cours individuels</strong>, une
          séance découverte individuelle de 60 minutes est proposée au
          tarif réduit de 55 CHF.
        </p>
      ),
    },
    {
      q: 'Comment fonctionnent les paiements ?',
      a: (
        <p>
          À partir de la rentrée scolaire, les cours réguliers
          fonctionnent principalement avec un{' '}
          <strong>paiement mensuel automatique</strong> ou un{' '}
          <strong>paiement annuel en une seule fois</strong>. Cela
          permet de garantir la place de l’élève, de simplifier
          l’organisation et d’assurer un suivi régulier tout au long de
          l’année. Une formule mensuelle sans engagement reste
          disponible, avec un tarif par cours plus élevé.
        </p>
      ),
    },
    {
      q: 'Comment réserver ou mettre en place une formule ?',
      a: (
        <p>
          Pour une <strong>séance découverte individuelle</strong>, la
          réservation se fait en ligne via notre{' '}
          <strong>calendrier de réservation</strong>, avec paiement au
          moment de la réservation. Pour l’
          <strong>atelier multi-instrumental</strong>, le cours d’essai
          gratuit se fait sur demande afin de proposer le groupe le plus
          adapté. Les <strong>formules régulières</strong> sont mises en
          place après confirmation du créneau avec le studio.
        </p>
      ),
    },
    {
      q: 'En quoi votre approche est différente ?',
      a: (
        <p>
          Notre approche est <strong>pratique, personnalisée</strong> et
          centrée sur le plaisir de jouer. Les élèves apprennent à
          travers des morceaux concrets, développent leur écoute, leur
          rythme, leur technique et leur créativité, avec la possibilité
          de découvrir l’expérience du studio : enregistrer, écouter et
          partager leur musique.
        </p>
      ),
    },
  ],
  en: [
    {
      q: 'Where do the lessons take place?',
      a: (
        <p>
          Lessons take place at <strong>Atahualpa Music Studio</strong>,
          in Cologny / Geneva, in a warm, fully equipped studio designed
          for music practice.
        </p>
      ),
    },
    {
      q: 'What is the minimum age to sign up?',
      a: (
        <p>
          The group multi-instrument workshop is{' '}
          <strong>open to children from age 5</strong>. Private lessons
          can be tailored for children, teenagers and adults, depending
          on level, goals and the chosen instrument.
        </p>
      ),
    },
    {
      q: 'Do I need to already play an instrument?',
      a: (
        <p>
          No. Lessons are <strong>open to all levels</strong>, from
          complete beginners to more experienced students. The approach
          is tailored to each student’s pace, tastes and goals.
        </p>
      ),
    },
    {
      q: 'Which instruments can children discover?',
      a: (
        <p>
          In the multi-instrument workshop, children can explore several
          instruments:{' '}
          <strong>guitar, bass, piano, drums, synth</strong> and
          music-creation tools. Depending on the songs, they also rotate
          instruments and try different roles within the group.
        </p>
      ),
    },
    {
      q: 'How many students per group?',
      a: (
        <p>
          Workshops run in{' '}
          <strong>small groups of 3 to 4 children maximum</strong>, to
          guarantee personal attention, a positive group dynamic and a
          welcoming atmosphere.
        </p>
      ),
    },
    {
      q: 'What languages are the lessons in?',
      a: (
        <p>
          Lessons can be held in{' '}
          <strong>French, English, Spanish or Italian</strong>, depending
          on the student or group.
        </p>
      ),
    },
    {
      q: 'Can I try before committing?',
      a: (
        <p>
          Yes. For the{' '}
          <strong>multi-instrument group workshop</strong>, you can
          request a free trial lesson. For{' '}
          <strong>private lessons</strong>, a 60-minute private discovery
          session is offered at the reduced rate of 55 CHF.
        </p>
      ),
    },
    {
      q: 'How does payment work?',
      a: (
        <p>
          From the start of the school year, regular lessons are run
          mainly with an{' '}
          <strong>automatic monthly payment</strong> or a{' '}
          <strong>single annual payment</strong>. This secures the
          student’s spot, simplifies organization and supports
          consistent progress throughout the year. A monthly plan with
          no commitment is still available, at a slightly higher
          per-lesson rate.
        </p>
      ),
    },
    {
      q: 'How do I book or set up a plan?',
      a: (
        <p>
          For a <strong>private discovery session</strong>, booking is
          done online via our{' '}
          <strong>online booking calendar</strong>, with payment at the
          time of booking. For the{' '}
          <strong>multi-instrument workshop</strong>, the free trial is
          requested directly so we can suggest the best group.{' '}
          <strong>Regular plans</strong> are set up after the weekly time
          slot has been confirmed with the studio.
        </p>
      ),
    },
    {
      q: 'What makes your approach different?',
      a: (
        <p>
          Our approach is <strong>hands-on, personalized</strong> and
          centred on the joy of playing. Students learn through real
          songs, developing their listening, rhythm, technique and
          creativity — with the chance to experience the studio first
          hand: recording, listening and sharing their music.
        </p>
      ),
    },
  ],
  es: [
    {
      q: '¿Dónde se imparten las clases?',
      a: (
        <p>
          Las clases se imparten en{' '}
          <strong>Atahualpa Music Studio</strong>, en Cologny / Ginebra,
          en un estudio equipado, acogedor y pensado para la práctica
          musical.
        </p>
      ),
    },
    {
      q: '¿A partir de qué edad se pueden inscribir?',
      a: (
        <p>
          El taller multi-instrumental en grupo está{' '}
          <strong>abierto a niños a partir de 5 años</strong>. Las clases
          individuales pueden adaptarse a niños, adolescentes y adultos
          según el nivel, los objetivos y el instrumento elegido.
        </p>
      ),
    },
    {
      q: '¿Hay que saber tocar ya un instrumento?',
      a: (
        <p>
          No. Las clases están{' '}
          <strong>abiertas a todos los niveles</strong>, desde
          principiantes hasta alumnos con experiencia. El enfoque se
          adapta al ritmo, a los gustos y a los objetivos de cada
          alumno.
        </p>
      ),
    },
    {
      q: '¿Qué instrumentos se pueden descubrir?',
      a: (
        <p>
          En el taller multi-instrumental, los niños pueden descubrir
          varios instrumentos:{' '}
          <strong>guitarra, bajo, piano, batería, sintetizador</strong>{' '}
          y herramientas de creación musical. Según los temas, también
          cambian de instrumento y exploran distintos roles dentro del
          grupo.
        </p>
      ),
    },
    {
      q: '¿Cuántos alumnos hay por grupo?',
      a: (
        <p>
          Los talleres se desarrollan en{' '}
          <strong>grupos reducidos de 3 a 4 niños máximo</strong>, para
          garantizar un seguimiento personalizado, una buena dinámica de
          grupo y un ambiente cálido.
        </p>
      ),
    },
    {
      q: '¿En qué idiomas se dan las clases?',
      a: (
        <p>
          Las clases pueden impartirse en{' '}
          <strong>francés, inglés, español o italiano</strong>, según
          las necesidades del alumno o del grupo.
        </p>
      ),
    },
    {
      q: '¿Se puede probar antes de comprometerse?',
      a: (
        <p>
          Sí. Para el{' '}
          <strong>taller multi-instrumental en grupo</strong>, se puede
          solicitar una clase de prueba gratuita. Para las{' '}
          <strong>clases individuales</strong>, se ofrece una sesión de
          descubrimiento individual de 60 minutos a tarifa reducida de
          55 CHF.
        </p>
      ),
    },
    {
      q: '¿Cómo funcionan los pagos?',
      a: (
        <p>
          A partir del inicio del año escolar, las clases regulares
          funcionan principalmente con{' '}
          <strong>pago mensual automático</strong> o{' '}
          <strong>pago anual en un solo plazo</strong>. Así se garantiza
          la plaza del alumno, se simplifica la organización y se
          asegura un seguimiento regular durante todo el año. También
          existe un plan mensual sin compromiso, con una tarifa por
          clase algo más alta.
        </p>
      ),
    },
    {
      q: '¿Cómo reservar o activar un plan?',
      a: (
        <p>
          Para una <strong>sesión de descubrimiento individual</strong>,
          la reserva se realiza en línea a través de nuestro{' '}
          <strong>calendario de reservas</strong>, con pago en el momento
          de la reserva. Para el{' '}
          <strong>taller multi-instrumental</strong>, la clase de prueba
          gratuita se solicita directamente para poder proponer el grupo
          más adecuado. Los <strong>planes regulares</strong> se activan
          una vez confirmado el horario con el estudio.
        </p>
      ),
    },
    {
      q: '¿En qué se diferencia vuestro enfoque?',
      a: (
        <p>
          Nuestro enfoque es{' '}
          <strong>práctico, personalizado</strong> y centrado en el
          placer de tocar. Los alumnos aprenden con temas reales,
          desarrollan la escucha, el ritmo, la técnica y la creatividad,
          con la posibilidad de descubrir la experiencia del estudio:
          grabar, escuchar y compartir su música.
        </p>
      ),
    },
  ],
  it: [
    {
      q: 'Dove si svolgono le lezioni?',
      a: (
        <p>
          Le lezioni si tengono ad{' '}
          <strong>Atahualpa Music Studio</strong>, a Cologny / Ginevra,
          in uno studio attrezzato, accogliente e pensato per la pratica
          musicale.
        </p>
      ),
    },
    {
      q: 'A partire da quale età ci si può iscrivere?',
      a: (
        <p>
          Il laboratorio multi-strumentale di gruppo è{' '}
          <strong>aperto ai bambini dai 5 anni</strong>. Le lezioni
          individuali possono essere adattate a bambini, ragazzi e
          adulti in base al livello, agli obiettivi e allo strumento
          scelto.
        </p>
      ),
    },
    {
      q: 'Bisogna già saper suonare uno strumento?',
      a: (
        <p>
          No. Le lezioni sono{' '}
          <strong>aperte a tutti i livelli</strong>, dal principiante
          all’allievo più esperto. L’approccio è adattato al ritmo, ai
          gusti musicali e agli obiettivi di ciascuno.
        </p>
      ),
    },
    {
      q: 'Quali strumenti si possono scoprire?',
      a: (
        <p>
          Nel laboratorio multi-strumentale, i bambini possono scoprire
          diversi strumenti:{' '}
          <strong>chitarra, basso, pianoforte, batteria,
          sintetizzatore</strong>{' '}
          e strumenti per la creazione musicale. In base ai brani,
          possono anche cambiare strumento e provare ruoli diversi
          all’interno del gruppo.
        </p>
      ),
    },
    {
      q: 'Quanti allievi ci sono per gruppo?',
      a: (
        <p>
          I laboratori si tengono in{' '}
          <strong>piccoli gruppi di 3-4 bambini al massimo</strong>, per
          garantire un seguito personalizzato, una buona dinamica di
          gruppo e un’atmosfera accogliente.
        </p>
      ),
    },
    {
      q: 'In quali lingue si tengono le lezioni?',
      a: (
        <p>
          Le lezioni possono svolgersi in{' '}
          <strong>francese, inglese, spagnolo o italiano</strong>, in
          base alle esigenze dell’allievo o del gruppo.
        </p>
      ),
    },
    {
      q: 'Si può provare prima di impegnarsi?',
      a: (
        <p>
          Sì. Per il{' '}
          <strong>laboratorio multi-strumentale di gruppo</strong>, è
          possibile richiedere una lezione di prova gratuita. Per le{' '}
          <strong>lezioni individuali</strong>, viene proposta una
          sessione di scoperta individuale di 60 minuti alla tariffa
          ridotta di 55 CHF.
        </p>
      ),
    },
    {
      q: 'Come funzionano i pagamenti?',
      a: (
        <p>
          Dall’inizio dell’anno scolastico, le lezioni regolari
          funzionano principalmente con{' '}
          <strong>pagamento mensile automatico</strong> o{' '}
          <strong>pagamento annuale in un’unica soluzione</strong>. Così
          si garantisce il posto dell’allievo, si semplifica
          l’organizzazione e si assicura un seguito regolare durante
          tutto l’anno. Resta disponibile una formula mensile senza
          impegno, con una tariffa per lezione leggermente più alta.
        </p>
      ),
    },
    {
      q: 'Come prenotare o attivare una formula?',
      a: (
        <p>
          Per una <strong>sessione di scoperta individuale</strong>, la
          prenotazione si effettua online tramite il nostro{' '}
          <strong>calendario di prenotazione</strong>, con pagamento al
          momento della prenotazione. Per il{' '}
          <strong>laboratorio multi-strumentale</strong>, la lezione di
          prova gratuita si richiede direttamente per poter proporre il
          gruppo più adatto. Le <strong>formule regolari</strong>{' '}
          vengono attivate dopo la conferma dell’orario con lo studio.
        </p>
      ),
    },
    {
      q: 'In cosa è diverso il vostro approccio?',
      a: (
        <p>
          Il nostro approccio è{' '}
          <strong>pratico, personalizzato</strong> e centrato sul
          piacere di suonare. Gli allievi imparano con brani concreti,
          sviluppano ascolto, ritmo, tecnica e creatività, con la
          possibilità di vivere l’esperienza dello studio: registrare,
          ascoltare e condividere la propria musica.
        </p>
      ),
    },
  ],
};

export default faqsByLocale;
