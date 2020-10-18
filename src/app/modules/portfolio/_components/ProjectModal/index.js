import React from 'react'
import { injectIntl,FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Modal, Row, Col, Descriptions, Divider } from 'lib'
import { colors } from 'assets/themes'

const ProjectModal = ({ intl, visible, project, onCancel, afterClose }) => {
  return (
    <Modal size="medium" visible={visible} title={project.title} onCancel={onCancel} width={920} footer={null} afterClose={afterClose}>
      {project.img && <img src={project.img.url} alt={project.img.alt}/>}
      <Divider colors={colors.blue} opacity={0.3} />

      <Descriptions column={{md: 2, xs: 1}}>
        {project.client && 
          <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.customer' })}>
            {project.client}
          </Descriptions.Item>
        }

        <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.year' })} span={project.client ? 1 : 2}>
          {project.year}
        </Descriptions.Item>

        <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.techno' })} span={2}>
          {project.techno}
        </Descriptions.Item>

        {project.descId && 
          <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.desc' })} span={2}>
            <FormattedMessage id={project.descId} />
          </Descriptions.Item>
        }
      </Descriptions>
      <Row  justify="center">
        <Col>
          <a rel="noreferrer" href={project.url} target="_blank" className="button-link button-link-primary">
            <FormattedMessage id="portfolio.see_project" />
          </a>
        </Col>
      </Row>
    </Modal>
  )
}

ProjectModal.propTypes = {
  intl: PropTypes.shape().isRequired,
  visible: PropTypes.bool.isRequired,
  project: PropTypes.shape(),
  onCancel: PropTypes.func.isRequired,
  afterClose: PropTypes.func.isRequired
}

export default injectIntl(ProjectModal)
