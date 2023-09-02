
import Typewriter from "typewriter-effect";
import { ReactComponent as Image } from '../assets/images/developer.svg';
import "../styles/Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

AOS.init();


function Home() {
  


  return (
    <div className='main' data-aos="zoom-in" data-aos-duration="1500">
      <div className='text-section'>
        <h2>HI, I AM NAHAS NISSAR</h2>
        <h3>
        <Typewriter
 
 onInit={(typewriter) => {
     typewriter
     
         .typeString("<>Front End Developer</>")
         .pauseFor(1000)
         .deleteAll()
         .typeString("<>Backend Developer</>")
         .deleteAll()
         .typeString("<>Fullstack Developer</>")
         .start();
         
 }}
/></h3>

<div>
   <button className="dwnld-btn"><DownloadForOfflineRoundedIcon /> Download CV</button>
   </div>
      </div>
    

      <div className='image-section'  >
        <Image width="550" height="500" />
      </div>         
    </div>
    

    );
}


export default Home;