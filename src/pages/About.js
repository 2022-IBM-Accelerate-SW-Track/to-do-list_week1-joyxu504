import React, { Component } from 'react';
import "./About.css";
import joyxuheadshot from "./assets/joyxuheadshot.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image"
            src = {joyxuheadshot}
            alt="Profile Pic"></img>
          </div>
        </div>
      
        <div className="split right">
          <div className="centered">
            <div className="name_title">Joy Xu</div>
            <div className="brief_description">
              <p>"Hi, I'm Joy! I am a freshman at Cornell University studying Hotel Administration!"
              <br> "I enjoy making boba at my local tea shop, playing violin, and making meals/cakes for the people I love!"</br>
              <br>"In the past, I have made 5 course meals on New Years Eve and tiered cakes for birthdays. :))"</br>
              </p>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}