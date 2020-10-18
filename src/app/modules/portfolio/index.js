import React, {useState, useCallback} from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Layout, PageTitle, ScrollAnimation } from 'lib'
import { projects } from 'utils/datas'

import ProjectImage from './_components/ProjectImage'
import ProjectModal from './_components/ProjectModal'

const Portfolio = ({ intl }) => {
  const [currentProject, setCurrentProject] = useState({})
  const [isProjectModalShown, showProjectModal] = useState(false)
  const show = useCallback((current) => {
    setCurrentProject(current)
    showProjectModal(true)
  }, [])
  const hide = useCallback(() => { showProjectModal(false) }, [])
  const resetState = useCallback(() => { setCurrentProject({}) }, [])

  return (
      <Layout id="portfolio" modulo={1}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.portfolio'
          })}
          position="end"
        />
        <Row  justify="center" align="middle" style={{ marginBottom: '24px' }}>
          <Col>
            <h5>
              <FormattedMessage id="portfolio.desc" />
            </h5>
          </Col>
        </Row>
        <Row justify="space-between" align="stretch" gutter={[16, 16]}>
          <Col md={10} xs={24}>
            <ScrollAnimation animateIn="fadeInLeft" duration={1.5}>
              <ProjectImage project={projects.GRAINE_BIOLANDE} onClick={show}/>
            </ScrollAnimation>
          </Col>
          <Col md={6} xs={24}>
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col span={24}>
                <ScrollAnimation animateIn="zoomIn" duration={1.5}>
                  <ProjectImage project={projects.PORTFOLIO} onClick={show}/>
                </ScrollAnimation>
              </Col>
              <Col span={24} />
            </Row>
          </Col>
          <Col md={8} />
        </Row>
        <ProjectModal visible={isProjectModalShown} onCancel={hide} project={currentProject} afterClose={resetState}/>
      </Layout>
  )
}

Portfolio.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Portfolio)
