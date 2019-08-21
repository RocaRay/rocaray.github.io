import React from 'react';
import HTML5_Icon from './assets/HTML5_Logo.png';
import CSS3_Icon from "./assets/CSS3_Icon.png";
import React_Icon from "./assets/React_Icon.png";
import Redux_Icon from "./assets/Redux_Icon.png";
import JS_Icon from "./assets/JS_Icon.jpeg";
import NodeJS_Icon from "./assets/NodeJS_Icon.png";
import Express_Icon from "./assets/Express_Icon.png";
import gRPC_Icon from "./assets/gRPC_Icon.png";
import VSCode_Icon from "./assets/VSCode_Icon.png";
import Webpack_Icon from "./assets/Webpack_Icon.png";
import SASS_Icon from "./assets/SASS_Icon.png";
import mongoDB_Icon from "./assets/mongoDB_Icon.png";
import PSQL_Icon from "./assets/PSQL_Icon.png";
import TS_Icon from "./assets/TS_Icon.png";
import Jest_Icon from "./assets/Jest_Icon.png";

const techCard = (label, imgSource) => (
  <div className="techCard">
    <img className="techCard-image" src={imgSource} alt={'img load error'}/>
    <p>{label}</p>
  </div>
)

const Tech = () => {
  return (
    <div className="tech" id="tech">
      <h1>Tech Stack</h1>
      <div className="tech-container">
          {techCard('HTML5', HTML5_Icon)}
          {techCard('CSS3', CSS3_Icon)}
          {techCard('React', React_Icon)}
          {techCard('Redux', Redux_Icon)}
          {techCard('JavaScript ES6+', JS_Icon)}
          {techCard('Node.js', NodeJS_Icon)}
          {techCard('Sass CSS', SASS_Icon)}
          {techCard('Express', Express_Icon)}
          {techCard('Jest', Jest_Icon)}
          {techCard('gRPC', gRPC_Icon)}
          {techCard('Virtual Studio Code', VSCode_Icon)}
          {techCard('Webpack', Webpack_Icon)}
          {techCard('mongoDB', mongoDB_Icon)}
          {techCard('PostgreSQL', PSQL_Icon)}
          {techCard('TypeScript', TS_Icon)}
      </div>
    </div>
  )
}

export default Tech;