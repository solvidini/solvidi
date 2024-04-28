'use client';

import { getLocaleExtension } from '@/_utils';
import { fetchDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import defaultDictionary from '../dictionaries/empty.json';

export type Dictionary = typeof defaultDictionary;

interface LocaleContextProps {
  isLoading: boolean;
  locale: Locale;
  locales: typeof i18n.locales;
  dictionary: Dictionary;
  localeExtension: string;
  getLocaleLanguage(locale: Locale): string;
  getLocaleUrl(url: string): string;
}

export const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
};

export const LocaleProvider: FC<{ children: ReactNode; locale: Locale }> = ({ children, locale }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dictionary, setDictionary] = useState<Dictionary>(defaultDictionary);

  useEffect(() => {
    const loadDictionary = async () => {
      setIsLoading(true);
      const d = await fetchDictionary(locale);
      setDictionary(d);
    };
    loadDictionary();
  }, [locale]);

  const getLocaleUrl = (url: string) => (url === '/' ? `/${locale}` : `/${locale}${url}`);

  const getLocaleLanguage = (locale: Locale) => {
    switch (locale) {
      case 'pl':
        return '🇵🇱 Polski';
      case 'gb':
        return '🇬🇧 English';
      case 'es':
        return '🇪🇸 Español';
      case 'us':
      default:
        return '🇺🇸 English';
    }
  };

  const contextValue: LocaleContextProps = {
    isLoading,
    locale,
    locales: i18n.locales,
    dictionary,
    getLocaleUrl,
    getLocaleLanguage,
    localeExtension: getLocaleExtension(locale),
  };

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};
