import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Modal, Row, Col, Descriptions, Divider, ImageCarousel } from 'lib'

const ProjectModal = ({ intl, visible, project, onCancel, afterClose }) => {
  return (
    <Modal
      destroyOnClose
      afterClose={afterClose}
      onCancel={onCancel}
      footer={null}
      visible={visible}
      className="image-modal"
      width={1450}
    >
      <Row>
        <Col md={16} xs={24}>
          {project.img && (
            <ImageCarousel
              showPlayButton={false}
              items={[
                {
                  fullscreen: `${project.img.url}`,
                  original: `${project.img.url}?width=600`,
                  thumbnail: `${project.img.url}?width=100`
                }
              ]}
              showThumbnails={false}
              showFullscreenButton={false}
            />
          )}
        </Col>
        <Col md={8} xs={24} className="description-wrapper">
          <div className="time-wrapper">
            <h3>{project.title}</h3>
          </div>
          <Divider margin="8" />
          <Row style={{ flexDirection: 'column' }} gutter={[0, 48]}>
            <Col>
              <Descriptions column={1} layout="vertical">
                {project.client && (
                  <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.customer' })}>
                    {project.client}
                  </Descriptions.Item>
                )}

                <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.year' })}>
                  {project.year}
                </Descriptions.Item>

                <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.techno' })}>
                  {project.techno}
                </Descriptions.Item>

                {project.descId && (
                  <Descriptions.Item label={intl.formatMessage({ id: 'portfolio.item.desc' })}>
                    <FormattedMessage id={project.descId} />
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Col>
            <Col style={{ alignSelf: 'center' }}>
              <a
                rel="noreferrer"
                href={project.url}
                target="_blank"
                className="button-link button-link-primary"
              >
                <FormattedMessage id="portfolio.see_project" />
              </a>
            </Col>
          </Row>
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
