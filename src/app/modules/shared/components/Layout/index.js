import React from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'

import { Layout } from 'lib/index'
import { colors } from 'app/assets/themes'

const { Content } = Layout

const ContentLayout = ({ children, id, modulo }) => {
  return (
    <Layout style={{ flex: '1', borderBottom: `15px solid ${colors.blue}` }}>
      <Content>
        <Element name={id}>
          <div className="container">
            <div className={`page-content page-content-${modulo}`}>{children}</div>
          </div>
        </Element>
      </Content>
    </Layout>
  )
}

ContentLayout.propTypes = {
  id: PropTypes.string.isRequired,
  modulo: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default ContentLayout
