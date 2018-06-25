import React, { Component } from 'react';
import "./about.css";
import profilePic from "../../images/allisa.jpg";


class About extends Component {
	render() {
		return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <img src={profilePic} className="rounded-circle img-fluid" alt="profile pic" />
            <p className="text-left text-sm-center"><strong>Hi I'm Allisa!</strong> I have a passion for web development, anything creative, the outdoors, and reading. I am a full stack web developer who strives to create clean and elegant code. I believe its important to bridge the gap between the beauty of design and the organization of development. I am constantly pushing to learn more and build better everyday that I can. I am also a photographer with a background working with families and businesses. </p>
        </div>
      </div>
    )}
}

export default About;