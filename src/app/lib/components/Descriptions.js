import styled from 'styled-components'
import { Descriptions } from 'antd'
import { font } from 'app/assets/themes'

const AntDescriptionsStyled = styled(Descriptions)`
  .ant-descriptions-item-label {
    text-transform: uppercase;
    font-weight: ${font.weight.bold};
    font-size: ${font.size.lg};
    width: 80px;
  }

  .ant-descriptions-item-content {
    font-size: ${font.size.lg};
    color: rgba(0, 0, 0, 0.85);
  }
`

export default AntDescriptionsStyled
