import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import "./theme/theme.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Modal, CircularProgress } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Box className="App">
      {isLoading && (
        <Modal open={isLoading} onClose={() => setIsLoading(false)}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        </Modal>
      )}
      <RouterProvider router={Router} />
      <ToastContainer />;
    </Box>
  );
}

export default App;
