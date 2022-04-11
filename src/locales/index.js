import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

I18n.fallbacks = true
I18n.translations = {
  'en-US': en,
  'pt-BR': pt,
}
I18n.defaultLocale = 'pt-BR'

const userLocale = sessionStorage.getItem('locale')
if (userLocale != null) {
  I18n.defaultLocale = userLocale
} else {
  const userLang = navigator.language || navigator.userLanguage
  // Validação para quando o idioma do navegador é pt-br ou en-us;
  if (userLang === 'en-US' || userLang === 'pt-BR') {
    I18n.defaultLocale = userLang
  }
}

export const translate = key => I18n.t(key)
