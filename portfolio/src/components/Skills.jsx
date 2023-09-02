
import mernstack from "../assets/images/mern1-removebg-preview.png"
import developer from '../assets/images/developer mern.png'
import Aos from "aos"

Aos.init();

function Skills() {
  return (

    <div>
    
    <div>

        <h1 style={{marginTop:"80px", textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}>What I Do</h1>

    </div>

    <div className="wrapper"  >

        <div style={{float:"right"}} data-aos="fade-left" data-aos-duration="2000">
            <h2 style={{marginRight:"100px",marginTop:"30px"}}>Fullstack Development</h2>

            <img style={{}} src={mernstack} alt="mernstack-img" width={250}/>
            
            <p>⚡Building responsive website front end using React-Redux</p>
            <p>⚡Creating application backend in Node & Express </p>
        </div>

        <div style={{float:"left"}}data-aos="fade-right" data-aos-duration="10000">
        <img style={{marginTop:"30px"}} src={developer} alt="" width={500} height={300}/>

          
        </div>
    </div>
    
    </div>
  )
}

export default Skills;