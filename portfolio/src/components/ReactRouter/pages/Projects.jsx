import Header from '../../Header';
import ProjectCard from '../../ProjectCard';
import blog from "../../../assets/images/blog.png"
import Footer from '../../Footer';
import aos from "aos";

aos.init()



const Projects = () => {
  const ProjectsData = [
    {
      title: "Blog Website",
      description: "Front End Technologies Blog Website using HTML,CSS,Bootstrap,Javascript",
      image:blog,
      link: "https://nahasn.github.io/blogscloud/",
      githublink:"https://github.com/NahasN/BlogsCloud"
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1691515488~exp=1691516088~hmac=78ccaeeff8fa30ffac7b7b2de1babf35c72d3e2757cebff73c87c49ea49f3729",
      githublink: "https://example.com/project2"
    },
    {
      title: "Project 3",
      description: "Description for Project 2",
      image: "https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1691515488~exp=1691516088~hmac=78ccaeeff8fa30ffac7b7b2de1babf35c72d3e2757cebff73c87c49ea49f3729",
      githublink: "https://example.com/project2"
    },
    {
      title: "Project 4",
      description: "Description for Project 2",
      image: "https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1691515488~exp=1691516088~hmac=78ccaeeff8fa30ffac7b7b2de1babf35c72d3e2757cebff73c87c49ea49f3729",
      githublink: "https://example.com/project2"
    },
    {
      title: "Project 5",
      description: "Description for Project 2",
      image: "https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1691515488~exp=1691516088~hmac=78ccaeeff8fa30ffac7b7b2de1babf35c72d3e2757cebff73c87c49ea49f3729",
      githublink: "https://example.com/project2"
    },
    {
      title: "Project 6",
      description: "Description for Project 2",
      image: "https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1691515488~exp=1691516088~hmac=78ccaeeff8fa30ffac7b7b2de1babf35c72d3e2757cebff73c87c49ea49f3729",
      githublink: "https://example.com/project2"
    },
    
  ];
  return (
    <div>
        <Header/>

        <div className="container" data-aos="zoom-out"
        data-aos-duration="1500"  style={{marginTop:"50px"}}>
      <div className="row">
        {ProjectsData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Projects;