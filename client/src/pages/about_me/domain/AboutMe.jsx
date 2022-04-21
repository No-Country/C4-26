import React from "react";
import "./about.scss";

import imgAboutMe from "../../../assets/img/about/aboutoffice.jpg";
import aboutPres from "../../../assets/img/help/womanProfileWeb.png";
import orange from "../../../assets/img/naranja1.png";

import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
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
        <Card className="card" sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <img className="img-card" src={orange} alt="img-orang" />
            <CardContent>
              <Typography
                className="title-card"
                gutterBottom
                variant="h5"
                component="div"
              >
                Responsability
              </Typography>
              <Typography
                className="paragraph"
                variant="body2"
                color="text.secondary"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nesciunt aliquam amet possimus, voluptas quasi debitis quod
                vitae natus? Voluptates, nihil!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <CardComponent subTitle="Confidence" />
        <CardComponent subTitle="Security" />
      </div>
    </div>
  );
};

export default AboutMe;
