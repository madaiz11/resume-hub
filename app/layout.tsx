import { I18nProvider } from '@/components/I18nProvider';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume Hub - Marut Maluleem',
  description:
    'Resume Hub is a platform for creating and managing resumes. It is a platform for creating and managing resumes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>
          <div className="fixed top-4 right-4 z-50">
            <LanguageToggle />
          </div>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
