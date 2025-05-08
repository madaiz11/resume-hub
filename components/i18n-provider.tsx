"use client";

import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";

const i18n = i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../public/locales/${language}/${namespace}.json`)
    )
  );

i18n.init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "th"],
  defaultNS: "common",
  fallbackNS: "common",
  ns: ["common"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      try {
        // Load initial translations
        await i18n.loadNamespaces("common");

        // Set up language change listener
        i18n.on("languageChanged", (lng) => {
          document.documentElement.lang = lng;
          router.refresh();
        });

        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to initialize i18n:", error);
      }
    };

    initializeI18n();

    return () => {
      i18n.off("languageChanged");
    };
  }, [router]);

  if (!isInitialized) {
    return null;
  }

  return children;
}
