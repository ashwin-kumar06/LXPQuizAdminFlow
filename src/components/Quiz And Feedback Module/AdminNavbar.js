import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FaBars, FaSearch, FaCloudUploadAlt } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
// import "../../Styles/Quiz And Feedback Module/AdminNavbar.css";
import Relevantz from "../../assets/Quiz And Feedback Module/images/Relevantz.png";

function AdminNavbar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = () => {
    if (!showSideNav) {
      setShowSideNav(true);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="dashboard">
      <div className="top-nav">
        <button className="menu-btn" onClick={toggleSideNav}>
          <FaBars fontSize="23" />
        </button>
        <div className="nav-img">
          <Image src={Relevantz} fluid />
        </div>

        <div className="user-info">
          <FaSearch className="search-icon" />
          <input
            onChange={handleChange}
            type="search"
            placeholder="Search..."
            value={searchTerm}
            className="search-box"
          />
        </div>
      </div>
      <div className={`side-nav ${showSideNav ? "open" : ""}`}>
        <ul>
          <li onClick={() => handlePageChange()}>
            <BiSolidCoinStack className="icon" fontSize="30" />
            {showSideNav && (
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <span>QuizBank</span>
              </Link>
            )}
          </li>
          <li onClick={() => handlePageChange()}>
            <FaCloudUploadAlt className="icon" fontSize="30" />
            {showSideNav && (
              <Link
                to="./bulkquiz"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span>Bulk Upload</span>
              </Link>
            )}
          </li>
          <li onClick={() => handlePageChange()}>
            <IoMdAddCircle className="icon" fontSize="30" />
            {showSideNav && (
              <Link
                to="./bulkquiz"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span>Adding New Question</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;
