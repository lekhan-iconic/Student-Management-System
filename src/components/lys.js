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
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <Stack spacing={2} minWidth={300}>
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
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </>
  );
}
