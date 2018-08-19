import React from 'react';
import AboutMe from './../components/aboutUs/AboutMe';
import Professional from './../components/aboutUs/Professional';
import Experience from './../components/aboutUs/Experience';
import ContactUs from './../components/aboutUs/ContactUs';

class AboutUs extends React.Component {
  render() {
    return (
    <div className="aboutus">
      <div className="aboutme-container" autofocus><AboutMe /></div>
      <div className="professional-container"><Professional /></div>
      <div className="experience-container"><Experience /></div>
     <div className="contactus-container"> <ContactUs /></div>
    </div>  
    )
  }
}

export default AboutUs;