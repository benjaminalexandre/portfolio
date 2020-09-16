import antLocaleFrFr from 'antd/lib/locale-provider/fr_FR'
import { translationMessages } from 'app/i18n'
import { GET_LANG_BEGIN, GET_LANG_SUCCESS, GET_LANG_ERROR } from './actions'

const dataLang = {
  intlId: 'fr_FR',
  locale: 'fr',
  antLocale: antLocaleFrFr,
  messages: translationMessages.fr.default
}

const initialState = {
  dataLang,
  isLoadingLang: false,
  errorLang: null
}

const intl = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANG_BEGIN:
      return {
        ...state,
        isLoadingLang: true,
        errorLang: null
      }

    case GET_LANG_SUCCESS:
      return {
        ...state,
        isLoadingLang: false,
        dataLang: action.dataLang
      }

    case GET_LANG_ERROR:
      return {
        ...state,
        isLoadingLang: false,
        errorLang: action.error,
        dataLang: []
      }

    default:
      return state
  }
}

export default intl
