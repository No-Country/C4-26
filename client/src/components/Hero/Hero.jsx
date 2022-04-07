import React from 'react'

const Hero = () => {
  return (
    <main>
      <div className="hero-container">
        <div className="text">
          <h6 
          className="h1Gradient">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </h6>
        </div>
        <div className="img-div">
          <img src={require("../../assets/img/young-man.png")} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;