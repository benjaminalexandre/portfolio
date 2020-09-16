import styled, { keyframes } from 'styled-components'

import img from 'app/assets/images'
import { colors } from 'app/assets/themes'
import { Row, Icon } from 'lib/index'

export const BkgImg = styled.div`
  height: 101.3vh;
  background-image: url(${img.homeBackground});
  background-size: cover;
`

export const Wrapper = styled(Row)`
  top: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const translationIcon = keyframes`
  0% { top: 45vh; }
  50% { top: 43vh; }
  100% { top: 45vh; }
`

export const IconWrapper = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${translationIcon} 1.5s linear infinite;
  top: 45vh;
`

export const StyledIcon = styled(Icon)`
  color: ${colors.grey};
`
