import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
     
    <div className="aboutSectionContainer">
        <h1>HELP</h1>
        <span>

          <h1>If you have any problem contact here </h1>
        </span>
    
        <a className="mailBtn" href="mailto:rohit.2@iitj.ac.in"><Button> rohit.2@iitj.ac.in</Button></a>

        <a className="mailBtn" href="mailto: kumawat.2@iitj.ac.in">
          <Button>kumawat.2@iitj.ac.in</Button>
        </a>
        
       
      </div>

      
    </div>
  );
};

export default Contact;
