import React from "react";
import "../../pages/about_me/domain/about.scss";

import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import orange from "../../assets/img/naranja1.png";

const CardComponent = ({ subTitle }) => {
  return (
    <div>
      <Card className="card" sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <img className="img-card" src={orange} alt="img-orang" />
          <CardContent>
            <Typography className="title-card" variant="h5">
              {subTitle}
            </Typography>
            <Typography
              className="paragraph"
              variant="body2"
              color="text.secondary"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              nesciunt aliquam amet possimus, voluptas quasi debitis quod vitae
              natus? Voluptates, nihil!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComponent;
