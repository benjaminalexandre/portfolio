import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import frLocaleData from 'react-intl/locale-data/fr'

import enTranslationMessages from './languages/en_GB'
import frTranslationMessages from './languages/fr_FR'

const DEFAULT_LANGUAGE = 'en'

// Run detect for default language translation base on browser language
// Defaults are: commas on numbers depends on nationalisation
addLocaleData(enLocaleData)
addLocaleData(frLocaleData)

export const appLocales = ['en', 'fr']
export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LANGUAGE ? formatTranslationMessages(DEFAULT_LANGUAGE, enTranslationMessages) : {}
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LANGUAGE ? defaultFormattedMessages[key] : messages[key]

    return { ...formattedMessages, [key]: formattedMessage }
  }, {})
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages)
}
