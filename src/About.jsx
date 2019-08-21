import React from 'react';
import Headshot from './assets/Headshot.png';
import LI_Logo from "./assets/LI_Logo.png";
import GH_Logo from "./assets/GH_Logo.png";
import GD_Icon from "./assets/GD_Icon.png";
import Gmail_Icon from "./assets/Gmail_Icon.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>Ray Yao</h1>
      </div>
      <div className="description">
        <img src={Headshot} alt="A pic of me is supposed to be here. If it's not here, I done goofed."></img>
        <p>
          Hey. I'm Ray Yao. I'm a Full Stack Software Engineer with a specialty in <span>Front End Web Development. </span>
          I mainly work in React-Redux observer design patterns. I've always been very technical-minded and in love with technology, computers,
          video games, and the like. I enjoy working in highly-collaborative environments with a great work/life culture.
          <br/>
          <br/>
          I graduated from UCLA in 2012 with a Bachelor's in Mathematics/Economics. I worked in Statistics for about 3.5 years.
          But I quickly realized that I wasn't passionate about it at all, and dreaded going to work every day.
          So I went back to my roots - working with computers. I started self-learning how to code, and attended a Software Engineering residency to help me switch careers,
          as well as to accelerate my full stack capabilities.
          <br/>
          <br/>
          Outside of coding, I'm very passionate about Kung Fu and other martial arts, and have been practicing for over 10 years.
          I used to bartend also, so I love cocktails. Japanese whiskey is my go-to, especially Suntory Hibiki.
          I'm a huge gamer, and am most likely on World of Warcraft right now (ex-gladiator). 
          Oh, and I'm ALWAYS down to play Smash Ultimate.
        </p>
      </div>
      <div className="contact">
        <div className="contact-card">
          <img src={LI_Logo} alt="LinkedIn logo"></img>
          <a href="https://www.linkedin.com/in/raymondyao51">LinkedIn</a>
        </div>
        <div className="contact-card">
          <img src={GH_Logo} alt="GitHub logo"></img>
          <a href="https://www.github.com/rocaray">GitHub</a>
        </div>
        <div className="contact-card">
          <img src={GD_Icon} alt="Resume icon"></img>
          <a href="https://docs.google.com/document/d/1slrNkB904khVDI6Lx4st8A8NPX8xPPDzAxNZlWcLOLQ/edit?usp=sharing">Resume</a>
        </div>
        <div className="contact-card">
          <img src={Gmail_Icon} alt="Email icon"></img>
          <a href="mailto:rocaray51@gmail.com">rocaray51@gmail.com</a>
        </div>
      </div>

    </div>
  )
}

export default About;