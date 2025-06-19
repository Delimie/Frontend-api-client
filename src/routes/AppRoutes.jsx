import { Route, Routes } from "react-router";
import Home from "../pages/home";
import Register from "../pages/auth/Register";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Dashbord from "../pages/admin/Dashbord";
import Manage from "../pages/admin/Manage";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";

function AppRoutes() {
  return (
    <Routes>
      {/* {Public} */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* {Private} */}
      <Route path="admin" element={<LayoutAdmin/>}>
        <Route path="dashboard" element={<Dashbord />} />
        <Route index element={<Manage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
