import styled from 'styled-components'
import { Anchor } from 'antd'
import { colors, font } from 'app/assets/themes'

const AntAnchorStyled = styled(Anchor)`
  .ant-anchor {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${colors.grey};
    height: 60px;
    .ant-anchor-ink {
      display: none;
    }
    .ant-anchor-link {
      padding: 0;
      text-align: center;
      .ant-anchor-link-title {
        letter-spacing: 5px;
        color: white;
        font-family: futuristic;
        font-size: ${font.size.lgsm};
        &:hover {
          color: ${colors.blue};
          border-bottom: 5px solid ${colors.blue};
        }
      }
      .ant-anchor-link-title-active {
        color: ${colors.blue};
        border-bottom: 5px solid ${colors.blue};
      }
    }
  }
`
export default AntAnchorStyled
