import React from "react";
import "./home.scss";
import Header from "../../components/header";
import AboutUs from "../../components/aboutUs";
import OurServices from "../../components/ourServices";
import WhyChooseUs from "../../components/whyChooseUs";
import { Container, Box } from "@mui/material";

const Home = () => {
  return (
    <Box component={"div"} className="home">
      <Box mb={4} className="header-wrapper">
        <Box className="header-background">
          <Container maxWidth="xl">
            <Header />
          </Container>
        </Box>
      </Box>
      <Box
        component={"section"}
        pt={10}
        pb={10}
        id="about"
        className="about-us"
      >
        <Container maxWidth="lg">
          <AboutUs />
        </Container>
      </Box>
      <Box
        component={"section"}
        pb={10}
        pt={10}
        sx={{ backgroundColor: "#f8f9fa" }}
        id="our-services"
        className="our-services"
      >
        <Container maxWidth="lg">
          <OurServices />
        </Container>
      </Box>
      <Box
        component={"section"}
        pb={14}
        pt={12}
        id="why-choose-us"
        className="why-choose-us"
      >
        <Container maxWidth="lg">
          <WhyChooseUs />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
