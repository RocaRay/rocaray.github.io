import React from 'react';
import Munin_gif from './assets/Munin.gif';
import CalSavvy_gif from './assets/CalSavvy.gif';
import CodeSprint_gif from './assets/codes-sprint-demo.gif';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="project-container">

        <div className="projectCard">
          <img src={Munin_gif} alt="img not found"/>
          <h3>Munin RPC</h3>
          <p>A desktop app that allows users to upload .proto files and send/receive gRPC calls. Users simply need to
            specify their endpoint, request, and message (if required), and then click a button. Circumvents the traditional hassle in 
            normally sending a gRPC call and viewing the response. </p>
          <a href="https://github.com/muninrpc/muninrpc">GitHub Repo</a>
        </div>

        <div className="projectCard">
          <img src={CalSavvy_gif} alt="img not found"/>
          <h3>CalSavvy</h3>
          <p>A calorie tracking app with that allows users to log their daily calorie intake, sorted by food item. Includes both pre-built and custom item input, 
            as well as retrieving past days' data. Logs are saved onto a database for persistence.</p>
          <a href="https://github.com/RocaRay/CalSavvy">GitHub Repo</a> 
        </div>

        <div className="projectCard">
          <img src={CodeSprint_gif} alt="img not found"/>
          <h3>CodeSprint</h3>
          <p>A game made for newer coders where players upload code snippets and, during play, are scored based on how quickly and accurately they can 
            re-type their snippets manually. The overall goal of the game is to train muscle memory for writing code.</p>
          <a href="https://github.com/team-asmr/code-sprint">GitHub Repo</a>
        </div>

      </div>
    </div>
  )
}

export default Portfolio;