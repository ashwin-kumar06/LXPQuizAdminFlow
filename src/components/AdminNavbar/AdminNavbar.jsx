import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import logo from "../../assets/Admin/logo.png";
import "../../Styles/Admin/AdminNavbar.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button,Modal } from "react-bootstrap";
// import { AppBar, CssBaseline, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
// import { FaBookOpenReader, FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import Toast from 'react-bootstrap/Toast';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminNavbar() {
  const [activePage, setActivePage] = useState("home");

  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const handlePageChange = (page) => {
    setActivePage(page);

    if (page === "reports" && showSideNav) {
      setShowReportDropdown(!showReportDropdown);
    }
    // if (showReportDropdown) {
    //     setShowReportDropdown(!showReportDropdown);
    // }
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const [showSideNav, setShowSideNav] = React.useState(false);

  const handleDrawerOpen = () => {
    setShowSideNav(true);
  };

  const handleDrawerClose = () => {
    setShowSideNav(false);
    if (showReportDropdown) {
      setShowReportDropdown(!showReportDropdown);
    }
  };

  // Logout 
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const confirmLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogout = () => {
    // Clear session ID from storage
    sessionStorage.removeItem("AdmminSessionId"); // Replace "sessionId" with your actual session ID key
    sessionStorage.removeItem("Role");
    // Navigate to login page or home page
    navigate("/"); // Replace "/login" with the path to your login page
    setShowLogoutConfirmation(false); // Hide the confirmation toast
  };


  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      <CssBaseline />
      {/* <AppBar position="fixed" open={showSideNav}>
        <Toolbar className="top-nav">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(showSideNav && { display: "none" }),
            }}
          >
          <MenuIcon />
          </IconButton>
          <Box component="div">
            <img src={logo} alt="logo"/> 
            <KeyboardBackspaceIcon style={{position:"absolute",marginLeft:'70%',marginTop:'10px',cursor:"pointer"}} onClick={() => navigate(-1)} />
            <Link style={{textDecoration:'none'}} to='/'>   <Button style={{position:'absolute',marginLeft:'72%',marginTop:'10px'}}>Logout</Button></Link>
          </Box>
        </Toolbar>
      </AppBar> */}
      <AppBar position="fixed" open={showSideNav}>
        <Toolbar className="top-nav">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(showSideNav && { display: "none" }),
            }}
          >
          <MenuIcon />
          </IconButton>
          <Box component="div">
            <img src={logo} alt="logo" />
            <Button style={{ position: 'absolute', marginLeft: '72%', marginTop: '10px' }} onClick={handleLogoutClick}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* ... Drawer and other components */}

      {/* Logout Confirmation Modal */}
      <Modal  className="mt-5" show={showLogoutModal} onHide={() => setShowLogoutModal(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      <Drawer variant="permanent" open={showSideNav} >
        <DrawerHeader className="drawerheader">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="iconDrawer" />
            ) : (
              <ChevronLeftIcon className="iconDrawer" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="ssss">
          <div className={`side-nav ${showSideNav ? "open" : ""}`}>
            <ul>
              <Link to="/admindashboard" style={{ textDecoration: "none" }}>
                <li
                  className={activePage === "home" ? "active" : ""}
                  onClick={() => handlePageChange("home")}
                >
                  <FaHome className="icon" />
                  {showSideNav && <span>Home</span>}
                </li>
              </Link>
              <Link to="/admincourse" style={{ textDecoration: "none" }}>
                <li
                  className={activePage === "course" ? "active" : ""}
                  onClick={() => handlePageChange("course")}
                >
                  <FaBookOpenReader className="icon" />
                  {showSideNav && <span>Course</span>}
                </li>
              </Link>
              <Link to="/learnerviewall" style={{ textDecoration: "none" }}>
                <li
                  className={activePage === "learner" ? "active" : ""}
                  onClick={() => handlePageChange("learner")}
                >
                  <FaUserGraduate className="icon" />
                  {showSideNav && <span>Learner</span>}
                </li>
              </Link>
              <li className="reports" onClick={() => handlePageChange("reports")}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/report'> <FaChartBar className="icon" /></Link>
                {showSideNav && <span>Reports</span>}
              </li>
            </ul>
            <ul className={`submenu ${showReportDropdown ? "open" : ""}`}>
              <Link style={{ textDecoration: "none" }} to='/learnerreport'><li onClick={() => setActivePage("learnerreport")}>
                {" "}
                Learner Report
              </li></Link>
              <Link style={{ textDecoration: "none" }} to='/coursereport'><li onClick={() => setActivePage("coursereport")}>Course Report</li></Link>
              <Link style={{ textDecoration: "none" }} to='/enrollreport'> <li onClick={() => setActivePage("enroll")}>Enrollment Report</li></Link>
              <Link style={{ textDecoration: "none" }} to='/quizreport'><li onClick={() => setActivePage("quiz")}>Quiz Report</li></Link>
            </ul>
          </div>
        </div>
        <Divider />
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Home />
            </Box> */}
    </>
    // </Box>
  );
}
