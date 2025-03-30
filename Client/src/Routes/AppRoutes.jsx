import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import UsersList from "../pages/UsersList";
import EditUser from "../pages/EditUser";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
