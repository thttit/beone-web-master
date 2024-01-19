import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Assets from "../../assets";

interface ICardSerViceList {
  name: string;
  image: any;
}

const OurServices = () => {
  let cardServiceList: Array<ICardSerViceList> = [
    {
      name: "IT Consultant & Solutions",
      image: Assets.Card_ITSolution,
    },
    {
      name: "E-Commerce Website",
      image: Assets.Card_ECommerce,
    },
    {
      name: "ERP / CRM / WMS",
      image: Assets.Card_ERPCRM,
    },
    {
      name: "Mobile Application",
      image: Assets.Card_MobileApp,
    },
    {
      name: "Head-hunter Service",
      image: Assets.Card_HeadHunter,
    },
    {
      name: "HRM Solutions",
      image: Assets.Card_HRM,
    },
  ];
  return (
    <Box className="our-services-wrapper">
      <Box className="our-services-title" textAlign={"center"} pb={4}>
        <Typography fontWeight={600} fontSize={"24px"}>
          Our Services
        </Typography>
        <Typography color={"#f86f32"} fontWeight={600} variant="h2">
          Make technology an asset for your business
        </Typography>
        <Typography variant="h6">
          Our solutions are economical, efficient, durable, flexible and allow
          the organisations to respond rapidly to both market and customer
          needs.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {cardServiceList.map((item: any, index: any) => (
          <Grid key={item.name} item xs={4}>
            <CardActionArea className="card-action-service">
              <img
                className="card-action-media"
                src={item.image}
                alt="Our Services"
              ></img>
              <CardContent>
                <Typography fontWeight={600} fontSize={"20px"}>
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
