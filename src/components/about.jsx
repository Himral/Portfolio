import React from 'react';
import profile from '../assets/profile-pic.jpeg';
// Import the CSS file

const About = () => {
  return (
    <div className="about">
      <div className="profile-container">
        <img className="profile-img" src={profile} alt="Profile" />
      </div>
      <div className="about-content">
        {/*  */}
        <p className="about-para">
          I am a pre-final year student pursuing Bachelor of Technology in
          Computer Science and Engineering. I've a keen interest in problem
          solving, which is why I love leetcoding.<br></br> I've been creative since
          school and web development is one way to channel my creativity.
          Currently, I'm exploring the MERN Stack. <br></br>Apart from being a techie, I
          really enjoy listening to music and jotting down my thoughts. When
          not working, you'll find me editing videos and scrolling through
          Pinterest. I am interested in writing and believe in team work.
        </p>
        <div className="click-aboutme">
          <h4>
            Check out my{' '}
            <a href="">Resume</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
