'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useTranslations } from '@/lib/hooks/useTranslations';
import { StatisticsClient } from './statistics-client';

export default function StatisticsPage() {
  const { t } = useTranslations('STATISTIC');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">{t('statistic:statistic.title')}</h1>
          <StatisticsClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
