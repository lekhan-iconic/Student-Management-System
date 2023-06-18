import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";
import BoxRow from "../components/BoxRow";
import "../App.css";

export default function Student() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="text">Add Students</h1>
          <BoxRow />
        </Box>
      </Box>
    </>
  );
}
