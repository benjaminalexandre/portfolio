import React, { useEffect, useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'

import history from 'app/history'

import { Menu, Icon, ICONS_LIST } from 'lib'

const Header = () => {
  const [selectedKey, setSelectedKey] = useState('home')

  useEffect(() => {
    const key = history.location.pathname.split('/')[1]

    switch (key) {
      case 'settings':
        setSelectedKey('settings')
        break
      default:
        setSelectedKey('home')
        break
    }
  }, [history.location.pathname])

  return (
    <Menu mode="horizontal" selectedKeys={[selectedKey]}>
      <Menu.Item key="home">
        <Icon name={ICONS_LIST.rugby} />
        <FormattedMessage id="menu.home" />
      </Menu.Item>
      <Menu.Item key="championships" disabled>
        <Icon name={ICONS_LIST.championship} />
        <FormattedMessage id="menu.championships" />
      </Menu.Item>
      <Menu.Item key="teams" disabled>
        <Icon name={ICONS_LIST.team} />
        <FormattedMessage id="menu.teams" />
      </Menu.Item>
      <Menu.Item key="players" disabled>
        <Icon name={ICONS_LIST.player} />
        <FormattedMessage id="menu.players" />
      </Menu.Item>
      <Menu.Item key="settings">
        <Icon name={ICONS_LIST.settings} />
        <FormattedMessage id="menu.settings" />
      </Menu.Item>
    </Menu>
  )
}

Header.propTypes = {}

export default injectIntl(Header)
