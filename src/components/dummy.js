import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";

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
  const marginH1 = {
    margin: 0,
  };
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };
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
    <>
      <Grid item xs={2} sm={3} md={3}>
        <Item>
          <h1>Student Details</h1>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 6, md: 12 }}
          >
            <Grid item xs={2} sm={12} md={12}>
              <Item>
                <Stack spacing={12} direction="row">
                  <Stack spacing={2} direction="column" width={300}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      type="text"
                      variant="outlined"
                      required
                      autoFocus
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      type="text"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Father Name"
                      type="text"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Mother Name"
                      type="text"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Date of Birth"
                      type="date"
                      format="dd-mm-yyyy"
                      variant="outlined"
                    />
                  </Stack>
                  <Stack spacing={2} direction="column" width={300}>
                    {/* <h1>Personal Details</h1> */}

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Gender"
                        onChange={handleAgeChange}
                      >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        <MenuItem value={30}>Others</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label-blood-group">
                        Blood Group
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label-blood-group"
                        id="demo-simple-select-blood-group"
                        value={bloodGroup}
                        label="Blood Group"
                        onChange={handleBloodGroupChange}
                      >
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-basic"
                      label="Aadhar No"
                      type="number"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Mobile No"
                      type="number"
                      variant="outlined"
                    />
                  </Stack>
                  <Stack spacing={2} direction="column" width={300}>
                    <h2>Official Details</h2>
                    <TextField
                      id="outlined-basic"
                      label="Admission Number"
                      type="number"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Joining Date"
                      type="date"
                      variant="outlined"
                    />

                    <TextField
                      id="outlined-basic"
                      label="Roll Number"
                      type="number"
                      variant="outlined"
                    />

                    <Button variant="contained" onClick={handleLogin}>
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </>
  );
}
