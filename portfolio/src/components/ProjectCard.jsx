/* eslint-disable react/prop-types */

const ProjectCard = ({ project }) => {

  
  
  return (
    <div style={{backgroundColor:"#1e3851",color:"white", width:"300px",height:"400px"
  }} className="card mt-3">
      <img style={{height:"200px"}} src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <a href={project.link} className="btn btn-primary" style={{padding:"10px",width:"80px",marginTop:"50px"}}>Live</a>
        <a style={{marginTop:"50px"}} href={project.githublink} className="btn btn-primary">Source</a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
