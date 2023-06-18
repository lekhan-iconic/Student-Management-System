import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageComponent from "../components/ImageComponent";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import ImageComponentOne from "../components/ImageComponentOne";
import ImageComponentTwo from "../components/ImageComponentTwo";
import ImageComponentThree from "../components/ImageComponentThree";
// import BasicTextFields from "../components/BasicTextField";
// import OfficialDetails from "../components/OfficialDetails";
// import PersonalDetails from "../components/PersonalDetails";
// import Gender from "../components/Gender";
// import age from "@mui/material";
import { useState } from "react";
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack spacing={6}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 6, md: 12 }}
          >
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ImageComponent />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>985</h1>
                    <h4 style={marginH1}>Students</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ImageComponentOne />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>165</h1>
                    <h4 style={marginH1}>Faculty</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                >
                  <ImageComponentTwo />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>95</h1>
                    <h4 style={marginH1}>Subjects</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                >
                  <ImageComponentThree />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>25</h1>
                    <h4 style={marginH1}>Holidays</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
