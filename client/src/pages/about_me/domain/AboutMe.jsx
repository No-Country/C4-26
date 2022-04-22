import React from "react";
import "./about.scss";

import imgAboutMe from "../../../assets/img/about/aboutoffice.jpg";
import aboutPres from "../../../assets/img/help/womanProfileWeb.png";

import CardComponent from "../../../components/card/CardComponent";

const AboutMe = () => {
  return (
    <div>
      <section className="container-img-about">
        <img className="about-img" src={imgAboutMe} alt="Img-about" />
        <div className="title-aboutme">
          <div className="title-h1">About Me</div>
          <div className="title-h2">You'll love it! our simplicity!</div>
        </div>
      </section>

      <div className="about-big-wrapper">
        <div className="about-showcase-area">
          <div className="about-container">
            <div className="about-left">
              <div className="about-big-title">
                <h1>We Provide Quality Services & Quality People</h1>
              </div>
              <p className="about-text">
                JobsMarket is an ecommerce that focuses on providing our
                customers with services from the best professionals at their
                disposal.
              </p>
            </div>

            <div className="about-images">
              <img src={aboutPres} alt="img-about-me" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-3">
        <p className="title-values">OUR CORE VALUES</p>
        <p className="sub-title-values">
          Get an excellent service with our professionals
        </p>
        <hr className="line-divisor" />
      </div>
      <div className="container-core-values">
        <CardComponent subTitle="Responsability" />
        <CardComponent subTitle="Confidence" />
        <CardComponent subTitle="Security" />
      </div>
    </div>
  );
};

export default AboutMe;
