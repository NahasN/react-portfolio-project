import Header from "../../Header";
import profile from "../../../assets/images/mypic-removebg-preview.png";
import "../../../styles/About.css";
import Footer from "../../Footer";
import AOS from "aos";

AOS.init();

const About = () => {
  return (
    <div>
      <Header />

      <div
        className="details-container"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="profile-pic">
          <img src={profile} alt="" />
        </div>
        <div className="profile-text">
          <p>
            MERN stack developer with a strong passion for web development and a
            focus on creating dynamic and user-friendly applications. Recent
            graduate with hands-on experience in JavaScript, React.js, Node.js,
            and MongoDB, eager to leverage skills in building scalable and
            responsive web applications. A quick learner and team player,
            committed to staying abreast of the latest web technologies and
            applying them to deliver innovative solutions. Detail-oriented
            problem solver, adept at translating design mockups into functional
            and visually appealing interfaces using HTML, CSS, and React.js.
            Dedicated to writing clean, maintainable code and implementing best
            practices to ensure high-performance applications. Strong
            communication skills, both verbal and written, facilitating
            effective collaboration with cross-functional teams. Proactive in
            seeking opportunities to expand knowledge and proficiency in the
            MERN stack through personal projects and continuous learning. Adept
            at utilizing Git for version control and experienced in working with
            Agile methodologies to deliver timely and efficient software
            solutions. Passionate about creating seamless user experiences and
            contributing to projects that make a positive impact on end-users.
            Aspiring to work in a supportive and innovative environment that
            fosters professional growth and encourages creativity in
            problem-solving
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
