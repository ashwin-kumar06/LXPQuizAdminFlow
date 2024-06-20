import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
function Adminrouting() {
  const storedValue = sessionStorage.getItem('Role');
  return storedValue == "Admin" ? (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  ) : (
    <Navigate to="/PageNotFound" />
  );
}
export default Adminrouting;
