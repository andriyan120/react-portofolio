import React from 'react';


const About = (props) => {
    return ( 
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="image/andri-pict.png" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                {props.about}
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span> {props.name} </span>
                    <br></br>
                    <span>
                      {props.address}
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default About;