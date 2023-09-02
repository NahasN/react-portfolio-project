import { useState } from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import "../../../styles/Contact.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import aos from "aos";

aos.init()



const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server or process it
    console.log(formData);
    // Clear the form after submission
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div>
       <Header/>


       <div className='contact-container' data-aos="zoom-out" data-aos-duration="1500">


          <div className='form-section'>
          <div className="contact-form">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button  type="submit">Submit</button>
      </form>
    </div>

          </div>

         
      

       <div className='details-section'>
        <h3>Contact Details</h3>
         <p><EmailOutlinedIcon/>  nahaskmr123@gmail.com</p>
         <p><CallOutlinedIcon/> +919048957267</p>
         <a  style={{textDecoration:"none",color:"#fff"}} href="http://www.linkedin.com/in/nahas-n">
         <p ><LinkedInIcon/> nahas-n</p>
         </a>
         
       </div>
    </div>

    <Footer/>
    </div>



  )
}

export default Contact