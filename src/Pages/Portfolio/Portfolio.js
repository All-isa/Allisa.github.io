import React, { Component } from 'react';
import "./portfolio.css";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project6 from "../../images/project6.png";
import project7 from "../../images/project7.png";


class Portfolio extends Component {
	render() {
		return (
<div className="container justify-content-center">
    <div className="card-deck">
  <div className="card justify-content-center">
    <a href="https://all-isa.github.io/clicky-game/">
    <img className="card-img-top img-fluid justify-content-center" src={project1} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">Animal Clicky Game<br></br>
      <a href="https://github.com/All-isa/clicky-game.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
  <div className="card justify-content-center">
    <a href="https://pure-shelf-25877.herokuapp.com/">
    <img className="card-img-top img-fluid justify-content-center" src={project4} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">Local Ink <br></br>
      <a href="https://github.com/All-isa/p2g2.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
  <div className="card justify-content-center">
    <a href="https://all-isa.github.io/WAAG/">
    <img className="card-img-top img-fluid justify-content-center" src={project6} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">Take-A-Hike <br></br>
      <a href="https://github.com/All-isa/WAAG.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
</div>
<div className="card-deck">
  <div className="card">
  <a href="https://all-isa.github.io/beachstylehangman/">
    <img className="card-img-top img-fluid justify-content-center" src={project2} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">Hangman Beach Theme<br></br>
      <a href="https://github.com/All-isa/beachstylehangman.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
  <div className="card">
  <a href="https://all-isa.github.io/week-4-game/">
    <img className="card-img-top img-fluid justify-content-center" src={project3} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">Crystal Collector Game<br></br>
      <a href="https://github.com/All-isa/week-4-game.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
  <div className="card">
  <a href="https://all-isa.github.io/triviagame/">
    <img className="card-img-top img-fluid justify-content-center" src={project7} alt="portfolio piece" /></a>
    <div className="card-body">
      <p className="card-text">USA Geography Quiz<br></br>
      <a href="https://github.com/All-isa/triviagame.git" ><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
  </div>
</div>
          </div>
    )}
}

export default Portfolio;