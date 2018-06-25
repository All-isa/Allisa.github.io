import React, { Component } from 'react';
import "./MyContact.css";

class MyContact extends Component {
    render() {
		return (
        <div className="container">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Contact Me:</h5>
                    <p class="card-text">
                    Email: allisaliberto@gmail.com | Phone: (760) 585-5358
                    </p><br></br>
                    <a href="https://www.linkedin.com/in/allisa-liberto" class="card-link"><i class="fab fa-linkedin fa-3x"></i></a> 
                    <a href="https://github.com/All-isa" class="card-link"><i class="fab fa-github-square fa-3x"></i></a>
                </div>
                </div>
        </div>
    )}
}

export default MyContact;