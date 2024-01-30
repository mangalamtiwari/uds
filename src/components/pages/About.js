import React, { useState, useEffect } from 'react';
import '../../styles/About.css';
import sgn from '../../assets/SGN.jpg'
import vk1 from '../../assets/vk1.jpg';
import vk2 from '../../assets/vk2.jpg';
const About = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    const words = "Weelcome To Universal Digital Studio";

    let index = 0;
    const intervalId = setInterval(() => {
      setWelcomeMessage((prevMessage) => prevMessage + words.charAt(index));
      index++;

      if (index === words.length) {
        clearInterval(intervalId);
      }
    }, 20);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='about'>
      <img src={sgn} alt="SGN" />
      <h2>{welcomeMessage}</h2>
      <div className="overview">
        <h3>Company Overview</h3>
        <p>
          Welcome to Universal Digital Studio, a pioneer in the world of capturing moments and creating timeless memories.
          With a rich history dating back to 1998, we have been dedicated to providing exceptional photography
          and videography services that bring your special moments to life. At Universal Digital Studio, our mission is to
          encapsulate the essence of every moment, creating visual stories that last a lifetime. We envision becoming the preferred
          choice for those seeking unparalleled creativity and excellence in the realm of digital media.
        </p>
      </div>
      <div className="mission">
        <h3>Our Mission</h3>
        <div className='missionItems'>
          <li>Capturing Timeless Moments</li>
          <li>Customer-Centric Approach</li>
          <li>Empowering Moments through Technology</li>
          <li>Personalized Artistry</li>
          <li>Emotional Connectivity</li>
          <li>Building Life Lasting Relationships</li>
          <li>Tailored Solutions for Every Occasion</li>
          <li>Capturing The Eye-Pleasing Visuals</li>
        </div>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <li>support@universaldigitalstudio.com</li>
        <li>contact.udstudio@gmail.com</li>
        <li>9987351983</li>
        <li>7977886929</li>
        <li>7738680936</li>
      </div>
      <div className="ourTeam">
        <h3>Our Team</h3>
        <div className="teamMember">
          <img src={vk1} alt="vk1" />
          <p>Shiv Sagar Tiwari</p>
          <p>Founder And CEO</p>
        </div>
        <div className="teamMember">
          <img src={vk2} alt="vk2" />
          <p>Member 2</p>
          <p>Founder And CEO</p>
        </div>
        <div className="teamMember">
          <img src={vk1} alt="vk1" />
          <p>Member 3</p>
          <p>Founder And CEO</p>
        </div>
        <div className="teamMember">
          <img src={vk2} alt="vk2" />
          <p>Member 4</p>
          <p>Founder And CEO</p>
        </div>
      </div>

    </div>
  );
};

export default About;

