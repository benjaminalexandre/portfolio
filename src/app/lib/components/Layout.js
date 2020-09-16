import styled from 'styled-components'
import { Layout } from 'antd'

const AntLayoutStyled = styled(Layout)``

AntLayoutStyled.Header = styled(Layout.Header)`
  height: 100%;
  padding 0 50px;
  background: #176f16
`

AntLayoutStyled.SubHeader = styled(Layout.Header)`
  height: 100%;
  padding 0 50px;
  background: transparent;
  color: #000;
`

export default AntLayoutStyled
