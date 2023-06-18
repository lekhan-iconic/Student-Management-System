import React from "react";
import "../App.css";
import { Box, Stack } from "@mui/material";
import MyComponent from "../components/MyComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);

    // Navigate to the desired route
    navigate("/Admin"); // Example: Navigate to the Admin page after login
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <div>
        <Stack spacing={2} minWidth={300}>
          <div className="title">
            <h2>Welcome Back</h2>
          </div>
          <div>
            <MyComponent />
          </div>
          <div className="color" onClick={handleLogin}>
            Login
          </div>
        </Stack>
      </div>
    </Box>
  );
}

export default Login;
