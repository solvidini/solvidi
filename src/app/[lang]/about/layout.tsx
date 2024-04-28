import { ReactNode } from 'react';
import { fetchDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
  const d = await fetchDictionary(lang);

  return {
    title: `Seishin Dreams - ${d.about.title}`,
    description: d.about.description[0],
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
