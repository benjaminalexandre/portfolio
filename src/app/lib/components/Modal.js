import styled from 'styled-components'
import { Modal } from 'antd'
import {font, borderRadius} from 'assets/themes'

const AntModalStyled = styled(Modal)`
  .ant-modal-content {
    border-radius: ${borderRadius.base};
  }
  .ant-modal-header {
    border: none;
    border-radius: ${borderRadius.base};
    .ant-modal-title {
      text-align: center;
      font-family: 'Montserrat';
      font-size: ${font.size.lgsm};
      font-weight: 600; 
    }
  }
  .ant-modal-footer {
    border: none;
    > div {
      display: flex;
      justify-content: center;
    }
  }
`

export default AntModalStyled
