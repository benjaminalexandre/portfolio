import styled from 'styled-components'
import { Menu } from 'antd'

const AntMenuStyled = styled(Menu)`
  :not(.dropdown-menu) {
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    color: #fff;
  }

  :not(.dropdown-menu):not(.main-menu) {
    color: black;
    font-weight: 500;
  }

  &&& {
    .no-hover {
      cursor: default;
    }
  }
`

AntMenuStyled.Item = styled(Menu.Item)`
  display: flex !important;
  align-items: center !important;
`

export default AntMenuStyled
