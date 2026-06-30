import React, { createContext, useContext, useState } from 'react';
import pt from './locales/pt';
import en from './locales/en';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('pt');
  const t = lang === 'pt' ? pt : en;
  const toggle = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}