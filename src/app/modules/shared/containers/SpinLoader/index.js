import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Spin } from 'lib'

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(275, 275, 275, 0.7);
  z-index: 10;

  animation: fadeIn 0.5s ease-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const SpinWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const SpinLoader = ({ isLoading }) => (
  <>
    {isLoading && (
      <Layout>
        <SpinWrapper>
          <Spin size="large" />
        </SpinWrapper>
      </Layout>
    )}
  </>
)

SpinLoader.propTypes = {
  isLoading: PropTypes.bool
}

export default SpinLoader
