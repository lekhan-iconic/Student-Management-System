import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Lekhan from "./components/Lekhan";
import "./styles.css";

import Update from "./pages/Update";

// import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lekhan />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Student" element={<Student />}></Route>
          <Route path="/Update/:id" element={<Update />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
