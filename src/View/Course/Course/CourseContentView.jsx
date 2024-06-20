import React from 'react'
// import { Sidenavbar } from '../../../Component/SideNavbar';
// import { Header } from '../../../Component/Header';
// import Content from '../../../Components/Course/Course/CourseContent';

import Content from '../../../components/Course/Course/CourseContent'
import { Row,Col } from 'react-bootstrap';

export const CourseContent = () => {
  return (
    <>
    <Row>
      {/* <Col md={12}><Header/></Col>
      <Col md={12}><Sidenavbar/> */}
      <Content/>
      
      {/* </Col> */}
    </Row>
    </>
  )
}
