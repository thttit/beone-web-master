import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";

interface FormData {
  email: string;
  name: string;
  message: string;
}
const WhyChooseUs = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });

  return (
    <Box className="why-choose-us-wrapper">
      <Grid className="why-choose-us-grid" container spacing={4}>
        <Grid className="why-choose-us-left" item xs={6}>
          <Box className="why-choose-us-title">
            <Typography
              className="title-text"
              variant="h1"
              mb={3}
              fontWeight={600}
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
            >
              Why Choose Us
            </Typography>

            <Typography variant="h6">
              Our solutions are economical, efficient, durable, flexible and
              allow the organisations to respond rapidly to both market and
              customer needs.
            </Typography>
          </Box>
        </Grid>
        <Grid className="why-choose-us-right" item xs={6}>
          <Box
            component={"form"}
            id="contact-form"
            className="why-choose-us-form"
          >
            <Box
              className="form-top"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box className="name-form">
                <Typography variant="subtitle2">Your Name:</Typography>
                <TextField
                  fullWidth
                  name="name"
                  multiline
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faUser} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className="email-form">
                <Typography variant="subtitle2">Email:</Typography>
                <TextField
                  fullWidth
                  name="email"
                  multiline
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box mb={4} className="message-form" mt={3}>
              <Typography variant="subtitle2">Message</Typography>
              <TextField
                fullWidth
                name="message"
                multiline
                rows={10}
                required
              />
            </Box>
            <Box display={"flex"} justifyContent={"end"}>
              <Button
                type="submit"
                sx={{
                  fontSize: "14px",
                  backgroundColor: "#023f6d",
                  borderRadius: "8px",
                  borderWidth: "4px",
                  padding: "8px",
                  width: "184px",
                  color: "whitesmoke",
                  gap: "8px",
                }}
                variant="contained"
              >
                Send Message
                <FontAwesomeIcon fontSize={"18px"} icon={faRightLong} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
