import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function BoxRow() {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    phoneNo: "",
    fatherName: "",
    aadharNo: "",
  });

  const { name, userName, email, phoneNo, fatherName, aadharNo } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8083/user", userData);
    setUserData({
      name: "",
      userName: "",
      email: "",
      phoneNo: "",
      fatherName: "",
      aadharNo: "",
    });
    navigate("/Admin");
  };

  return (
    <>
      <Grid item xs={2} sm={3} md={3}>
        <Item>
          <h1>Student Details</h1>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 6, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <form onSubmit={submitData}>
                  <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
                    <TextField
                      variant="outlined"
                      label="User Name"
                      name="userName"
                      value={userName}
                      onChange={handleData}
                    />
                    <TextField
                      variant="outlined"
                      label="Name"
                      name="name"
                      value={name}
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
                      name="phoneNo"
                      type="number"
                      label="Phone no"
                      variant="outlined"
                      value={phoneNo}
                      onChange={handleData}
                    />
                    <TextField
                      label="Father Name"
                      name="fatherName"
                      value={fatherName}
                      variant="outlined"
                      onChange={handleData}
                    />
                    <TextField
                      label="Aadhar No"
                      name="aadharNo"
                      value={aadharNo}
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
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </>
  );
}
