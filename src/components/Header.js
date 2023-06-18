import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HomeIcon from "@mui/icons-material/Home";
import DrawerComp from "../DrawerComp";
const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <HomeIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* <Tabs value={activeTab} onChange={handleTabChange}> */}
                <Tab label="Home">
                  <p>lekhan kumar</p>
                </Tab>
                <Tab label="Admin" />
                <Tab label="Student" />
                <Tab label="Courses" />
                <Tab label="Contact Us" />
              </Tabs>
              {/* </Tabs> */}

              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Login
              </Button>
              {activeTab === 0 && <p>Content for Facility Management</p>}
              {activeTab === 1 && <p>Content for Login Credentials</p>}
              {/* <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
