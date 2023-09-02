import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footer-heading">
          <h2>Follow Me</h2>
        </div>

        <div className="footer-icons">
        <a href="http://www.linkedin.com/in/nahas-n">
          <div>
            <LinkedInIcon/>
          </div>
          </a>
          <a href="https://github.com/NahasN">
          <div>
            <GitHubIcon />
          </div>
          </a>
          <a href="https://twitter.com/NahasNissar">
          <div>
            <TwitterIcon />
          </div>
          </a>
          <a href="https://www.instagram.com/mr.n_a_h_a_s/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
          <div>
            <InstagramIcon />
          </div>
          </a>
        </div>

        <h6 className="footer-text">
          © 2023 Designed & Developed by Nahas Nissar
        </h6>
      </div>
    </>
  );
}

export default Footer;
