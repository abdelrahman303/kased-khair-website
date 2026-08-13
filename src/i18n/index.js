import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import ar from './ar.json'

const saved = typeof window !== 'undefined' ? localStorage.getItem('kk-lang') : null
const lng = saved === 'ar' || saved === 'en' ? saved : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export function applyDocumentLang(language) {
  const html = document.documentElement
  html.lang = language
  html.dir = language === 'ar' ? 'rtl' : 'ltr'
  localStorage.setItem('kk-lang', language)
}

applyDocumentLang(lng)

export default i18n
