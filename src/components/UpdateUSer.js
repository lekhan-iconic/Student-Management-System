import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    phoneNo: "",
  });

  const { name, userName, email, phoneNo } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8083/update/${id}`, userData);
    navigate("/Admin");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8083/finduser/${id}`);
    setUserData(result.data);
  };

  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="User Name"
              name="userName"
              value={userName}
              onChange={handleData}
            />
            <TextField
              label="Email Address"
              name="email"
              value={email}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="Phone No"
              name="phoneNo"
              value={phoneNo}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add User
              </Button>
              <Button href="/Admin" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateUser;
