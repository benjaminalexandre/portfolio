import React from 'react'
import PropTypes from 'prop-types'
import Col from './Col'
import Row from './Row'

const PageTitle = (props) => {
  const { title, position } = props

  return (
    <div className="page-title">
      <Row type="flex" justify={position} gutter={20}>
        <Col>
          <h1>{title}</h1>
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
  position: PropTypes.string
}

export default PageTitle
