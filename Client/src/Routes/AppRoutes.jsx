import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import UsersList from "../Pages/UsersList";
import EditUser from "../Pages/EditUser";

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
