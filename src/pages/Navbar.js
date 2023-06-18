import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";

export default function Navbar() {
  return (
    <div>
      <Box sx={{ display: " flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <h1 className="text">Add Students</h1> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Admin
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link type="button" className="btn btn-primary" to="/Student">
                Add Student
              </Link>
            </div>
          </nav>
        </Box>
      </Box>
          
    </div>
  );
}
