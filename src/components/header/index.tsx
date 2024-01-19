import React from "react";
import Assets from "../../assets";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {fullScreen ? (
        <>
          <Card
            className="card-content-wrapper"
            sx={{
              maxWidth: 320,
              background: "none !important",
              boxShadow: "none !important",
            }}
          >
            <CardContent sx={{ color: "black" }}>
              <Typography
                className="content-wrapper"
                sx={{
                  background:
                    "linear-gradient(45deg, #053220, #D34C26, #3652AD, #ADCCC7)",
                  backgroundSize: "400% 400%",
                  animation: "gradient 10s ease infinite",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  color: "transparent",
                }}
                fontWeight={600}
                fontSize={"24px"}
              >
                BEONE TECHNOLOGY AND SERVICE
              </Typography>
              <Typography pt={1} variant="subtitle1">
                Making People Successful In A Changing World
              </Typography>
              <Box pt={2}>
                <Button
                  href="#why-choose-us"
                  sx={{
                    fontSize: "10px",
                    backgroundColor: "#f86f32",
                    borderRadius: "8px",
                    borderWidth: "4px",
                    padding: "8px",
                    width: "132px",
                    color: "whitesmoke",
                    fontWeight: "600",
                    gap: "8px",
                  }}
                  variant="contained"
                >
                  Contact Us
                  <FontAwesomeIcon fontSize={"16px"} icon={faEnvelope} />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </>
      ) : (
        <Grid container spacing={10} className="background-box">
          <Grid item xs={6} className="background-content">
            <Card
              className="card-content-wrapper"
              sx={{ maxWidth: 600, paddingTop: 14 }}
            >
              <CardContent sx={{ color: "black" }}>
                <Typography
                  className="content-wrapper"
                  sx={{
                    background:
                      "linear-gradient(45deg, #053220, #D34C26, #3652AD, #ADCCC7)",
                    backgroundSize: "400% 400%",
                    animation: "gradient 10s ease infinite",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    MozBackgroundClip: "text",
                    color: "transparent",
                  }}
                  fontWeight={600}
                  variant="h1"
                >
                  BEONE TECHNOLOGY AND SERVICE
                </Typography>
                <Typography pt={2} variant="h5">
                  Making People Successful In A Changing World
                </Typography>
                <Box pt={3}>
                  <Button
                    href="#why-choose-us"
                    sx={{
                      fontSize: "16px",
                      backgroundColor: "#f86f32",
                      borderRadius: "8px",
                      borderWidth: "4px",
                      padding: "8px",
                      width: "176px",
                      color: "whitesmoke",
                      fontWeight: "600",
                      gap: "8px",
                    }}
                    variant="contained"
                  >
                    Contact Us
                    <FontAwesomeIcon fontSize={"20px"} icon={faEnvelope} />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} className="background-media">
            <img src={Assets.Header_Map} alt="header" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Header;
