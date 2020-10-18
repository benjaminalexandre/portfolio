import styled from 'styled-components'
import { Button } from 'antd'
import { colors } from 'assets/themes'

const AntButtonStyled = styled(Button)`
  :hover {
    color: ${colors.blue};
    border: 1px ${colors.blue} solid;
  }
`

export default AntButtonStyled
