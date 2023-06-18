import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";
import BoxRow from "../components/BoxRow";
import "../App.css";
import UpdateUser from "../components/UpdateUSer";

export default function Update() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="text">Update Student Details</h1>
          <UpdateUser />
        </Box>
      </Box>
    </>
  );
}
