import React from 'react'
// import { Sidenavbar } from '../../../Component/SideNavbar';
// import { Header } from '../../../Component/Header';
// import AddCourse from '../../../Component/Course/Course/AddCourseComponenet';
import AddCourse from  '../../../components/Course/Course/AddCourseComponenet';
import { Row,Col } from 'react-bootstrap';


export const AddCourseView = () => {
  return (
    <>
    <Row>
      {/* <Col md={12}><Header/></Col>
      <Col md={12}><Sidenavbar/> */}
      <AddCourse/>
      
      {/* </Col> */}
    </Row>
    </>
  )
}