// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import relevantz from '../assets/Images/relevantz copy.png';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'; // Import Modal
// import '../Styles/Navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import LogoutIcon from '@mui/icons-material/Logout';

// const Navigationbar = () => {
//   const [show, setShow] = useState(false); // State to manage modal visibility

//   const navigate = useNavigate(); // Call useNavigate to get the navigate function
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleLogout = () => {
//     // Perform logout operations here
//     console.log('User logged out');
//    navigate('/')
//     // Redirect to login or home page after logout
//   };

//   return (
//     <div>
//       <Row>
//         <Col sx={12} md={8}>
//           <Navbar className='navigationbar' expand='md' data-bs-theme="dark" fixed='top'>
//             <img className='relevantzimage img-fluid' src={relevantz} alt='Relevantz Logo'></img>
//             <Container>
//               <Navbar.Brand href="#home">Learning Management System</Navbar.Brand>
//               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//               <Navbar.Collapse id='responsive-navbar-nav'>
//                 <Nav className="me-auto">
//                   {/* Navigation Links */}
//                 </Nav>
//                 <Nav.Link as={Link} to='#' onClick={handleShow}>
//                   <Button variant='outline-primary'><LogoutIcon/></Button>
//                 </Nav.Link>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </Col>
//       </Row>

//       {/* Logout Confirmation Modal */}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to log out?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleLogout}>
//             Log Out
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Navigationbar;
