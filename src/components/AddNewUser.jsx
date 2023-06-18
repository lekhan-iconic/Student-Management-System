import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const { name, userName, email } = userData;

  const handleInputChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8083/user", userData);
    navigate("/");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 10 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              variant="outlined"
              label="Name"
              size="small"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="User Name"
              size="small"
              name="userName"
              value={userName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <Box>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddNewUser;
