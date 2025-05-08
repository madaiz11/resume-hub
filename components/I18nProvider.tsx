'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { PropsWithChildren, useEffect, useState } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

// Define all namespaces used in the application
export const NAMESPACES = {
  COMMON: 'common',
  NAVIGATION: 'navigation',
  HOME: 'home',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
  STATISTIC: 'statistic',
} as const;

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'th'],
    defaultNS: NAMESPACES.COMMON,
    ns: Object.values(NAMESPACES),
    detection: {
      order: ['navigator', 'path'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure translations are loaded
    const loadTranslations = async () => {
      try {
        // Load all namespaces
        await Promise.all(Object.values(NAMESPACES).map(ns => i18next.loadNamespaces(ns)));
        setMounted(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };
    loadTranslations();
  }, []);

  if (!mounted) {
    return null;
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
