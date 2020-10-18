import React from 'react'
import PropTypes from 'prop-types'

import { Icon, ICONS_LIST, ICONS_SIZE } from 'lib'

const ProjectImage = ({project, onClick}) => {
  const handleClick = () => {
    onClick(project)
  }

  return (
    <div className="project-container" onClick={handleClick} aria-hidden="true">
      <img src={project.img.url} alt={project.img.alt} className="project-image"/>
      
      <div className="project-overlay">
        <div className="project-text">
          <p>{project.title}</p>
          <Icon name={ICONS_LIST.plus} size={ICONS_SIZE.default}/>
        </div>
      </div>
    </div>
  )
}

ProjectImage.propTypes = {
  project: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired
}

export default ProjectImage
