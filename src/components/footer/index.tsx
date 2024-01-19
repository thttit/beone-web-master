import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import "./footer.scss";
import Assets from "../../assets";
//Icon
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body1">
      {"Copyright © "}
      <Link className="link_copyright" href="https://www.ssi.com.vn/">
        BEONE TECHNOLOGY AND SERVICE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        py: 8,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container p={1} className="footer_content">
          <Grid item xs={5}>
            <Box className="logo" mb={2}>
              <img src={Assets.BO_Logo} alt="BOLogo" className="logo-media" />
            </Box>
          </Grid>
          <Grid item xs={7} className="item-content" pb={10}>
            <Stack spacing={{ xs: 1, sm: 1 }} alignItems={"flex-start"}>
              <Typography variant="h6">
                <LocationOnIcon className="icon" />
                Address: No. 11A, Hong Ha Street, Ward 2, Tan Binh District, Ho
                Chi Minh, VietNam
              </Typography>
              <Typography variant="h6">
                <EmailIcon className="icon" />
                Email: sale@beonetech.vn
              </Typography>
              <Typography variant="h6">
                <LocalPhoneIcon className="icon" />
                Phone: (+84) 90 2000153
              </Typography>
              <Typography variant="h6">
                <FaxIcon className="icon" />
                Opening hours: 8am-5pm Mon - Fri
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            pt={3}
            xs={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ borderTop: "1px solid darkgray" }}
          >
            <Copyright />
            <Stack className="footer-icon" gap={2}>
              <Typography fontSize={"14px"}>Connect With Us:</Typography>
              <Box>
                <Link className="link-icon" href="https://beonetech.vn/">
                  <LanguageIcon sx={{ fontSize: "20px" }} />
                </Link>
                <Link
                  className="link-icon"
                  href="https://www.facebook.com/beonetechnology"
                >
                  <FacebookIcon sx={{ fontSize: "20px" }} />
                </Link>
                <Link
                  className="link-icon"
                  href="https://www.facebook.com/beonetechnology"
                >
                  <LinkedInIcon sx={{ fontSize: "20px" }} />
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
