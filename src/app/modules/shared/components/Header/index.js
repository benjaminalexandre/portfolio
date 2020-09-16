import React from 'react'
import styled from 'styled-components'

//import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Dropdown, Menu, Select, Icon, ICONS_LIST, ICONS_SIZE } from 'lib'
import PROJECTS from 'utils/enums/projects'

const { Option } = Select

const User = styled.span`
  font-weight: 700;
`

const Title = styled(Menu.Item)`
  font-size: 20px;
  font-weight: 700;
  color: #fff !important;
`

const Header = () => {
  return (
    <Menu className="main-menu" mode="horizontal">
      <Title disabled className="no-hover">
        Admin Panel
      </Title>
      <Menu.Item disabled>
        <Select disabled defaultValue={PROJECTS.RC3} style={{ width: '250px' }}>
          {Object.values(PROJECTS).map((x) => (
            <Option value={x} key={x}>
              <FormattedMessage id={`projects.project_${x}`} />
            </Option>
          ))}
        </Select>
      </Menu.Item>
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        overlay={
          <Menu className="dropdown-menu" style={{ display: 'block', background: '#FFF', width: '272px' }}>
            <Menu.Item disabled key="1" className="no-hover">
              <User>admin</User>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="6">
              <Icon name={ICONS_LIST.logout} />
              Logout
            </Menu.Item>
          </Menu>
        }
      >
        <Icon name={ICONS_LIST.account} size={ICONS_SIZE.large} />
      </Dropdown>
    </Menu>
  )
}

Header.propTypes = {}

export default injectIntl(Header)
