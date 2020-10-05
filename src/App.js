import React, { useState } from 'react'

import 'app/assets/themes/index.less'

import lang from 'utils/intl/lang'

import { LocaleWrapper, Menu } from 'modules/shared/components'
import Home from 'modules/home'
import Presentation from 'modules/presentation'
import Skills from 'modules/skills'
import Experiences from 'modules/experiences'
import Formation from 'modules/formation'
import Portfolio from 'modules/portfolio'
import Contact from 'modules/contact'

const App = () => {
  const [currentLang, setCurrentLang] = useState(lang.FR)

  return (
    <LocaleWrapper lang={currentLang}>
      <Home onChangeLang={setCurrentLang} currentLang={currentLang} />
      <Menu />
      <Presentation />
      <Skills />
      <Experiences />
      <Formation />
      <Portfolio />
      <Contact />
    </LocaleWrapper>
  )
}

export default App
