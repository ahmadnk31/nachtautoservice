import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.nl;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from localStorage, or detect from browser, or default to nl
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "nl" || saved === "en" || saved === "fr")) {
      return saved;
    }
    // Detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "en") return "en";
    if (browserLang === "fr") return "fr";
    return "nl";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

