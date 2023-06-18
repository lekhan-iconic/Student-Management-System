import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

// Create a custom theme with the desired primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#AC82E6", // Replace with your desired primary color
    },
  },
});

const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} minWidth={300} direction="column">
        <div>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            autoFocus
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </div>
      </Stack>
    </ThemeProvider>
  );
};

export default MyComponent;
