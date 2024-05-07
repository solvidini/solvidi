import { fetchDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { ReactNode } from 'react';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
  const d = await fetchDictionary(lang);

  return {
    title: `Solvidi - ${d.it.title}`,
    description: d.it.description,
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
