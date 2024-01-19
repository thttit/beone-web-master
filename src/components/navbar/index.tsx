import {
  Box,
  Container,
  IconButton,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Assets from "../../assets";
import "./navbar.scss";
import MenuItems from "./menuItem";

export let PageList = [
  {
    link: (
      <Link className="link" href="/">
        <Typography variant="h6" className="link_text">
          Home
        </Typography>
      </Link>
    ),
  },
  {
    link: (
      <Link className="link" href="#about">
        <Typography variant="h6" className="link_text">
          About Us
        </Typography>
      </Link>
    ),
  },
  {
    link: (
      <Link className="link" href="#our-services">
        <Typography variant="h6" className="link_text">
          Our Services
        </Typography>
      </Link>
    ),
  },
  {
    link: (
      <Link className="link" href="#why-choose-us">
        <Typography variant="h6" className="link_text">
          Why Choose Us
        </Typography>
      </Link>
    ),
  },
];
const Navbar = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <nav className="menu-top-logo" data-menu-anima="fade-in">
        <Container maxWidth="xl">
          <Box className="menu-wrapper">
            <Box className="logo">
              <Link href="/">
                <img src={Assets.BO_Logo} alt="BOLogo" className="logo-media" />
              </Link>
            </Box>
            {fullScreen ? (
              <Box className="navbar-mob">
                <MenuItems />
              </Box>
            ) : (
              <>
                <Box className="menu-cnt" display={"flex"} gap={5}>
                  {PageList.map((item: any, index: any) => (
                    <Box key={index}>{item.link}</Box>
                  ))}
                </Box>
                <Box
                  component={"div"}
                  className="nav-phone-icon"
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer" }}
                >
                  <IconButton
                    className="phone-icon"
                    sx={{ fontSize: "18px", marginRight: "4px" }}
                  >
                    <FontAwesomeIcon color="#f7663b" icon={faPhoneVolume} />
                  </IconButton>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="#f7663b"
                    className="phone-number"
                  >
                    090 200 0153
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
