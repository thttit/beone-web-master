import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import React from "react";
import Assets from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmog,
  faChartSimple,
  faTrophy,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

interface ICardList {
  name: string;
  icon: any;
}

const AboutUs = () => {
  let cardList: Array<ICardList> = [
    {
      name: "Innovative Solutions",
      icon: <FontAwesomeIcon icon={faSmog} />,
    },
    {
      name: "Results Orientation",
      icon: <FontAwesomeIcon icon={faChartSimple} />,
    },
    {
      name: "Integrity",
      icon: <FontAwesomeIcon icon={faTrophy} />,
    },
    {
      name: "Expertise",
      icon: <FontAwesomeIcon icon={faUserCheck} />,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box pb={4} className="mission-wrapper">
        <Box className="about-mission" textAlign={"center"} pb={4}>
          <Typography
            className="about-mission-title"
            mb={1}
            fontWeight={600}
            variant="h1"
          >
            About Us
          </Typography>
          <Typography
            className="about-mission-content"
            color={"#f86f32"}
            fontWeight={600}
            variant="h4"
          >
            Mission
          </Typography>
        </Box>
        <Grid
          container
          className="mission-items"
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cardList.map((item: any, index: any) => (
            <Grid key={item.name} item xs={3} sm={3} md={3}>
              <CardActionArea className="card-action-about">
                <Card
                  sx={{ padding: 3 }}
                  className="card-about"
                  variant="outlined"
                >
                  <CardMedia sx={{ fontSize: "40px" }}> {item.icon}</CardMedia>
                  <CardContent>
                    <Typography
                      className="mission-text"
                      fontWeight={600}
                      fontSize={"18px"}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="about-wrapper">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img
              className="about-media"
              src={Assets.Header_Business}
              alt="about"
            ></img>
          </Grid>
          <Grid item xs={6}>
            <Typography className="about-content" variant="h6">
              We won’t bring you down in the middle of the day because it is
              “Making people successful in a changing world”. We work around
              your business. We strive to make technology integrate seamlessly
              with your business so your business can grow. As your technology
              partner, when your business grows ours will grow with you,
              therefore, we will work hand in hand with you to support your
              growth.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
