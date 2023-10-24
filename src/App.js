import React from "react";
import "./App.css";
import image1 from "./images/a.jpg";
import image2 from "./images/b.jpg";
import image3 from "./images/c.jpg";
import image4 from "./images/d.jpg";
import image5 from "./images/e.jpg";
import image6 from "./images/f.jpg";
import profile1 from "./images/profile.jpg";
import profile2 from "./images/Profile2.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Hii Dhiraj! </h1>
        <img src={profile2} alt="Image 1" className="profile rotate" />
      </header>
      <div className="content-container">
        <div className="image-container">
          <h3>GB Road code : 121</h3>
          <a href="https://xvideos57.com/" target="_blank">
            <img src={image1} alt="Image 1" />
          </a>
        </div>

        <div className="image-container">
          <h3>Joeys Pizza code : 122</h3>
          <img src={image2} alt="Image 2" />
        </div>

        <div className="image-container">
          <h3>R-City Mall code : 123</h3>
          <img src={image3} alt="Image 3" />
        </div>

        <div className="image-container">
          <h3>Sion Fort code : 124</h3>
          <img src={image4} alt="Image 4" />
        </div>

        <div className="image-container">
          <h3>Iskcon code : 125</h3>
          <img src={image5} alt="Image 4" />
        </div>

        <div className="image-container">
          <h3>Juhu Beach code : 126</h3>
          <img src={image6} alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

export default App;
