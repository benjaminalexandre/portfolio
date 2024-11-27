import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'lib'

const PageTitle = (props) => {
  const { title, position, className } = props

  return (
    <div className="page-title">
      <Row justify={position} gutter={20}>
        <Col>
          <h1 className={className}>{title}</h1>
        </Col>
      </Row>
    </div>
  )
}

PageTitle.defaultProps = {
  title: null,
  position: 'center'
}

PageTitle.propTypes = {
  title: PropTypes.node,
  position: PropTypes.string,
  className: PropTypes.string
}

export default PageTitle
