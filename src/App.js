import React, { useState } from 'react'

import 'app/assets/themes/index.less'

import lang from 'utils/intl/lang'

import LocaleWrapper from 'modules/shared/containers/LocaleWrapper'
import Home from 'modules/home'

const App = () => {
  const [currentLang, setCurrentLang] = useState(lang.FR)

  return (
    <LocaleWrapper lang={currentLang}>
      <Home onChangeLang={setCurrentLang} currentLang={currentLang} />
    </LocaleWrapper>
  )
}

export default App
