import React, { Component } from 'react';
import "./contact.css";
// import ReactForm from "../../components/ContactForm"
import MyContact from "../../components/MyContact";


class Contact extends Component {
    render() {
		return (
            <div className="container justify-content-center">
            <MyContact />
            <div className="title">
                <h1> Allisa Liberto </h1>
                <h4> Resume Coming Soon... </h4>
            </div>
          </div>
    )}
}

export default Contact;