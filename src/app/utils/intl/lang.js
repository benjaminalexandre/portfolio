import antLocaleFrFr from 'antd/lib/locale-provider/fr_FR'
import antLocaleEnGb from 'antd/lib/locale-provider/en_GB'

import 'moment/locale/fr'
import 'moment/locale/de'

import { translationMessages } from 'app/i18n'

const lang = {
  FR: {
    id: 'fr_FR',
    locale: 'fr',
    antLocale: antLocaleFrFr,
    messages: translationMessages.fr.default
  },
  GB: {
    id: 'en_GB',
    locale: 'en',
    antLocale: antLocaleEnGb,
    messages: translationMessages.en.default
  }
}

export default lang
