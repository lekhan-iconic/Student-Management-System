import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import React, { useState } from "react";
import Sidenav from "../Sidenav";
import { Box } from "@mui/material";
import BasicTable from "../components/BasicTable";
import Navbar from "./Navbar";

export default function Admin() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8083/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8083/user/${id}`);
    loadUsers();
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Navbar />
          <BasicTable />
        </Box>
      </Box>
    </>
  );
}
