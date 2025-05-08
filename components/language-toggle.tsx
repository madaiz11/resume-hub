'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from '@/lib/hooks/useTranslations';
import { cn } from '@/lib/utils';
import i18next from 'i18next';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { NAMESPACES } from './I18nProvider';

interface ILanguageOption {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: ILanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'th',
    name: 'ไทย',
    flag: '🇹🇭',
  },
];

export function LanguageToggle() {
  const { t, currentLanguage, changeLanguage } = useTranslations('COMMON');
  const router = useRouter();

  const handleLanguageChange = async (langCode: string) => {
    try {
      // Change language
      await changeLanguage(langCode);

      // Reload all namespaces for the new language
      await Promise.all(Object.values(NAMESPACES).map(ns => i18next.loadNamespaces(ns)));

      // Refresh the page to ensure all components update
      router.refresh();
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full"
          aria-label={t('language.label')}
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t('language.label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {LANGUAGES.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            className={cn(
              'flex items-center gap-2 px-3 py-2 cursor-pointer',
              currentLanguage === lang.code && 'bg-accent'
            )}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="flex-1">{t(`language.${lang.code}`)}</span>
            {currentLanguage === lang.code && <span className="h-2 w-2 rounded-full bg-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
