import React from 'react';

/**
 * Locale-aware FAQ entries. Pass the active locale (`'fr' | 'en'`) and
 * receive the corresponding list of `{ emoji, q, a }` items.
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
};

export default faqsByLocale;
