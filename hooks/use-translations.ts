import { NAMESPACES } from '@/components/I18nProvider';
import { useTranslation } from 'react-i18next';

type Namespace = keyof typeof NAMESPACES;

export function useTranslations(namespace: Namespace = 'COMMON') {
  const { t, i18n } = useTranslation(NAMESPACES[namespace]);

  return {
    t,
    currentLanguage: i18n.language,
    isThai: i18n.language === 'th',
    changeLanguage: async (language: string) => {
      try {
        await i18n.changeLanguage(language);
      } catch (error) {
        console.error('Failed to change language:', error);
      }
    },
    // Helper function to translate with specific namespace
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tWithNS: (ns: Namespace, key: string, options?: any) => {
      return i18n.t(key, { ns: NAMESPACES[ns], ...options });
    },
    // Get all translations for a specific namespace
    getTranslations: (ns: Namespace) => {
      return i18n.getResourceBundle(i18n.language, NAMESPACES[ns]);
    },
  };
} 