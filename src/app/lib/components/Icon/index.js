import React from 'react'
import PropTypes from 'prop-types'
import Icon, { DownloadOutlined, FacebookFilled, GithubOutlined, LinkedinFilled, CloseOutlined, MenuOutlined } from '@ant-design/icons'
import * as allIcons from '@mdi/js'
import styled from 'styled-components'

export const TYPE = {
  ant: 'ant',
  material: 'material'
}

export const ICONS_LIST = {
  chevronTripleDown: { id: 'ChevronTripleDown', type: TYPE.material },
  close: { id: CloseOutlined, type: TYPE.ant },
  download: { id: DownloadOutlined, type: TYPE.ant },
  facebook: {id: FacebookFilled, type: TYPE.ant },
  github: {id: GithubOutlined, type: TYPE.ant},
  linkedin: {id: LinkedinFilled, type: TYPE.ant},
  mail: {id: 'EmailOutline', type: TYPE.material},
  menu: {id: MenuOutlined, type: TYPE.ant},
  plus: {id: 'Plus', type: TYPE.material}
}

export const SIZE = {
  default: 'default',
  xlarge: 'xlarge',
  large: 'large',
  small: 'small',
  xsmall: 'xsmall',
  block: 'block'
}

export const THEME = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
}

export const MARGIN = {
  default: 'default',
  right: 'right',
  left: 'left',
  leftRight: 'leftRight'
}

const IconStyled = styled(Icon)`
  color: white;

  ${(props) => {
    const { margin } = props

    switch (margin) {
      case MARGIN.right:
        return 'margin-right:8px;'
      case MARGIN.left:
        return 'margin-left:8px;'
      case MARGIN.leftRight:
        return 'margin:0 8px;'
      case MARGIN.default:
      default:
        return null
    }
  }};
`

const getDimensionsSVG = (size) => {
  let dimension

  switch (size) {
    case SIZE.default:
    default:
      dimension = '1.5em'
      break
    case SIZE.xlarge:
      dimension = '3.3em'
      break
    case SIZE.large:
      dimension = '2.3em'
      break
    case SIZE.small:
      dimension = '1.3em'
      break

    case SIZE.xsmall:
      dimension = '1em'
      break

    case SIZE.block:
      dimension = '100%'
      break
  }

  return { width: dimension, height: dimension }
}

const getDimensionsAnt = (size) => {
  let fontSize

  switch (size) {
    case SIZE.default:
    default:
      fontSize = '30px'
      break
    case SIZE.large:
      fontSize = '50px'
      break
    case SIZE.small:
      fontSize = '20px'
      break
    case SIZE.xsmall:
      fontSize = '18px'
      break
  }

  return fontSize
}

const renderMaterial = (props) => {
  const { name, spin, rotate, color, size } = props
  const { id } = name
  const { width, height } = getDimensionsSVG(size)

  const SVG = () => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      style={rotate !== 0 ? { transform: `rotate(${rotate}deg)` } : null}
      className={spin ? 'anticon-spin' : null}
    >
      <path d={allIcons[`mdi${id}`]} />
    </svg>
  )
  return <IconStyled component={SVG} {...props} />
}

const renderAnt = (props) => {
  const { name, spin, rotate, color, size } = props
  const { id } = name
  const fontSize = getDimensionsAnt(size)
  return <IconStyled component={id} rotate={rotate} spin={spin} style={{ color, fontSize }} {...props} />
}

const FinalIcon = (props) => {
  const { name } = props
  const { type } = name

  switch (type) {
    case TYPE.material:
      return renderMaterial(props)
    case TYPE.ant:
      return renderAnt(props)
    default:
      return null
  }
}

const defaultProps = {
  spin: false,
  rotate: 0,
  color: 'currentColor',
  size: SIZE.default,
  themecolor: THEME.default,
  margin: MARGIN.default
}

FinalIcon.defaultProps = defaultProps
renderAnt.defaultProps = defaultProps
renderMaterial.defaultProps = defaultProps

const propTypes = {
  name: PropTypes.shape({
    id: PropTypes.any.isRequired,
    type: PropTypes.oneOf([TYPE.ant, TYPE.material])
  }).isRequired,
  spin: PropTypes.bool,
  rotate: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.oneOf([SIZE.default, SIZE.xlarge, SIZE.large, SIZE.small, SIZE.block, SIZE.xsmall]),
  themecolor: PropTypes.oneOf([THEME.default, THEME.primary, THEME.secondary, THEME.small]),
  margin: PropTypes.oneOf([MARGIN.right, MARGIN.left, MARGIN.leftRight, MARGIN.default]),
}

FinalIcon.propTypes = propTypes
renderAnt.propTypes = propTypes
renderMaterial.propTypes = propTypes

export default FinalIcon
