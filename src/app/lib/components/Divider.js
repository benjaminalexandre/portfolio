import styled from 'styled-components'
import { Divider } from 'antd'

const AntDividerStyled = styled(Divider)`
  background: ${(props) => props.colors || 'white'};
  height: 2px;
  margin: ${(props) => props.margin || '24'}px 0;
`

export default AntDividerStyled
