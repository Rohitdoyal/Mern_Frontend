import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";


const About = () => {
  const visitLinkedinR = () => {
    window.location = "https://www.linkedin.com/in/rohit-doyal-407b33197";
  };

  const visitLinkedinY = () => {
    window.location = "https://www.linkedin.com/in/yash-kumawat-180855154";
  };

  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFfdmRZPyACHw/profile-displayphoto-shrink_800_800/0/1653711329461?e=1664409600&v=beta&t=2hz2z5xesKCRcu-j_c37t09sTFwdSBWowyuTWpxEA98"
              alt="Founder"
            />
            <Typography>Rohit Doyal</Typography>
            <Button onClick={visitLinkedinR} color="primary">
              Visit Linkedin Profile 
            </Button>
            <span>
            Final Year @IIT JODHPUR || Fullstack developer|| Game developer || AR-VR || Machine -learning. 
            </span>
            <span>
            <b>Contact</b>  :  6377965980  
            <a  href="mailto:rohit.2@iitj.ac.in">
              <Button>rohit.2@iitj.ac.in</Button>
            </a>
            </span>

            

          </div>
          <div className="aboutSectionContainer2">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQG2DQQoZVXdew/profile-displayphoto-shrink_800_800/0/1625047446275?e=1664409600&v=beta&t=o9wdCKf7MGFoQHguDyjH6BAGm3mWlOOt2e10t8KfbAc"
              alt="Founder"
            />
            <Typography>Yash kumawat</Typography>
            <Button onClick={visitLinkedinY} color="primary">
              Visit Linkedin Profile 
            </Button>
            <span>
             Final Year @IIT JODHPUR || Fullstack developer || Sport Programmer .
            </span>
            <span>
             <b>Contact</b> : 7610949149  
             <a  href="mailto:rohit.2@iitj.ac.in">
              <Button>kumawat.2@iitj.ac.in</Button>
            </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
