import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function BasicTable() {
  function change() {
    console.log("first");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);

    // Navigate to the desired route
    navigate("/Student"); // Example: Navigate to the Admin page after login
  };
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8083/users");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8083/delete/${id}`);
    loadUsers();
  };
  function change() {
    console.log("first");
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Father Name</TableCell>
              <TableCell align="left">Email ID</TableCell>
              <TableCell align="left">Phone No</TableCell>
              <TableCell align="left">Aadhar No</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.fatherName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNo}</TableCell>
                <TableCell>{user.aadharNo}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <a href={`/Update/${user.id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    {/* <a href={`/DeleteUser/${user.id}`}> */}
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteUsers(user.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button onClick={change()} href="/Student">
        AddUser
      </Button> */}
    </Container>
  );
}
