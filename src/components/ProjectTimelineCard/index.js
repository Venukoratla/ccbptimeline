// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="text-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="container">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} rel="noreferrer" target="_blank" className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
