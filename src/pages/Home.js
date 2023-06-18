import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";
import BoxRowOne from "../components/BoxRowOne";
import BasicTable from "../components/BasicTable";

export default function Home() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <BoxRowOne />
          <BasicTable />
        </Box>
      </Box>
    </>
  );
}
