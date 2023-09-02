
import ProjectCard from './ProjectCard';

const ProjectData = () => {
   

  return (
    <div>
         <div className="container">
      <div className="row">
        {ProjectData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ProjectData
  