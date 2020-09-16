import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import img from 'app/assets/images'
import lang from 'utils/intl/lang'

import { Button } from 'lib/index'

const SwitchLanguage = ({ currentLang, onChangeLang }) => {
  const renderFlag = () => {
    switch (currentLang.id) {
      case lang.GB.id:
        return (
          <>
            <div className="flag-wrapper">
              <img src={img.frenchFlag} alt="French Flag" />
            </div>
            <div className="text-wrapper">
              <FormattedMessage id="languages.french" />
            </div>
          </>
        )
      case lang.FR.id:
      default:
        return (
          <>
            <div className="flag-wrapper">
              <img src={img.englishFlag} alt="English Flag" />
            </div>
            <div className="text-wrapper">
              <FormattedMessage id="languages.english" />
            </div>
          </>
        )
    }
  }

  const handleChangeLang = () => {
    switch (currentLang.id) {
      case lang.GB.id:
        onChangeLang(lang.FR)
        break
      case lang.FR.id:
      default:
        onChangeLang(lang.GB)
        break
    }
  }

  return (
    <Button className="switcher" onClick={handleChangeLang}>
      {renderFlag()}
    </Button>
  )
}

SwitchLanguage.propTypes = {
  currentLang: PropTypes.shape().isRequired,
  onChangeLang: PropTypes.func.isRequired
}

export default injectIntl(SwitchLanguage)
