// import React, { useState, useContext } from 'react'
// // import Relevantz from '../../../assets/Quiz And Feedback Module/images/Relevantz.png';
// import Relevantz from '../../../../assets/Quiz And Feedback Module/images/Relevantz.png'
// import { Image } from 'react-bootstrap';
// import { FaBars } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { BiSolidCoinStack } from "react-icons/bi";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { IoMdAddCircle } from "react-icons/io";
// import { Link, useNavigate } from 'react-router-dom';
// import '../../../../Styles/Quiz And Feedback Module/Navbar.css';



// function AdminNavbar() {
//     const navigate = useNavigate();
//     const [showSideNav, setShowSideNav] = useState(false);

//     const handlePageChange = () => {
//         if (!showSideNav) {
//             setShowSideNav(true);
//         }

//     };

//     const handleNavigate = () =>{
//         navigate('/');
//     }

//     const toggleSideNav = () => {
//         setShowSideNav(!showSideNav);
//     };
//     return (
//         <div className="dashboard">
//             <div className='top-nav'>
//                 <button className="menu-btn" onClick={toggleSideNav}>
//                     <FaBars fontSize="23" />
//                 </button>
//                 <div className='nav-img'>
//                     <Image src={Relevantz} fluid />
//                 </div>

//                 <div className="user-info">
//                     <FaSearch className='search-icon' />


//                 </div>

//             </div>
//             <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
//                 <ul>
//                     <li onClick={() => handlePageChange()}>
//                         <BiSolidCoinStack className='icon' fontSize="30" /> {/* Icon for Home */}
//                         {showSideNav && <Link to='/' style={{ color: "white", textDecoration: "none" }}><span>QuizBank</span></Link>}
//                     </li>

//                     <li onClick={() => handlePageChange()}>
//                         <FaCloudUploadAlt className='icon' fontSize="30" /> {/* Icon for Home */}
//                         {showSideNav && <Link to='./bulkquiz' style={{ color: "white", textDecoration: "none" }}><span>Bulk Upload</span></Link>}
//                     </li>

//                     <li onClick={() => handlePageChange()}>
//                         <IoMdAddCircle className='icon' fontSize="30" /> {/* Icon for Home */}
//                         {showSideNav && <Link to='./quizeditor' style={{ color: "white", textDecoration: "none" }}><span>Adding New Question</span></Link>}
//                     </li>

//                 </ul>
//             </div>

//         </div>
//     )
// }

// export default AdminNavbar