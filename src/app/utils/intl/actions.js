import antLocaleFrFr from 'antd/lib/locale-provider/fr_FR'
import antLocaleEnGb from 'antd/lib/locale-provider/en_GB'
import antLocaleDeDe from 'antd/lib/locale-provider/de_DE'

import 'moment/locale/fr'
import 'moment/locale/de'

import { translationMessages } from 'app/i18n'

export const GET_LANG_BEGIN = 'GET_LANG_BEGIN'
export const GET_LANG_SUCCESS = 'GET_LANG_SUCCESS'
export const GET_LANG_ERROR = 'GET_LANG_ERROR'

export const getLangsBegin = () => ({
  type: GET_LANG_BEGIN
})

export const getLangsSuccess = (dataLang) => ({
  type: GET_LANG_SUCCESS,
  dataLang
})

export const getLangsError = (error) => ({
  type: GET_LANG_ERROR,
  error
})

export const getLang = (intlId) => (dispatch) => {
  dispatch(getLangsBegin())

  let messages = null
  let locale = null
  let antLocale = null

  switch (intlId) {
    case 'fr_FR':
      locale = 'fr'
      antLocale = antLocaleFrFr
      messages = translationMessages.fr.default
      break
    case 'de_DE':
      locale = 'de'
      antLocale = antLocaleDeDe
      messages = translationMessages.de.default
      break
    case 'en_GB':
    default:
      locale = 'en'
      antLocale = antLocaleEnGb
      messages = translationMessages.en.default
      break
  }

  const dataLang = {
    intlId,
    locale,
    antLocale,
    messages
  }

  const call = () => {
    dispatch(getLangsSuccess(dataLang))
  }

  setTimeout(call, 500)
}
