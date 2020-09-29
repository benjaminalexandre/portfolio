import React, { useState } from 'react'

import 'app/assets/themes/index.less'

import lang from 'utils/intl/lang'

import LocaleWrapper from 'modules/shared/containers/LocaleWrapper'
import Home from 'modules/home'
import Header from 'modules/shared/components/Header'
import Presentation from 'modules/presentation'

const App = () => {
  const [currentLang, setCurrentLang] = useState(lang.FR)

  return (
    <LocaleWrapper lang={currentLang}>
      <Home onChangeLang={setCurrentLang} currentLang={currentLang} />
      <Header />
      <Presentation />
    </LocaleWrapper>
  )
}

export default App
