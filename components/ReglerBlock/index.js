'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

export default function ReglerBlock() {
  const { t } = useLanguage();

  return (
    <section className="regler-block" id="regler">
      <div className="section regler-block__inner">
        <div className="regler-block__content">
          <h2 className="regler-block__title">{t('lecons.regler.title')}</h2>
          <p className="regler-block__body">{t('lecons.regler.body')}</p>
          <Link href="/reserver-classe" className="regler-block__cta">
            {t('lecons.regler.cta')}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="regler-block__note">{t('lecons.regler.note')}</p>
        </div>
      </div>
    </section>
  );
}
