import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../../../Styles/Admin/Admincourse.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { connect } from "react-redux";
import { fetchCoursesRequest } from "../../../actions/Admin/courseAction";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Loading/Spinner";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Admincourse = ({ fetchCourses, courses }) => {
  const [loading, setLoading] = useState(true);
  const rootRef = React.useRef(null);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setLoading(false)
  //     }, 1000);
  //     return () => clearTimeout(timer);

  // }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // if ( loading||courses.length === 0) {
  //     return <div className='spinnerclass'> <Spinner /></div>;
  // }
  return (
    <div id="admin_recentcourse">
      {courses.length > 0 ? (
        <Container fluid className="coursepagebody">
          {/* <Row className='mb-5'>
                        </Row> */}
          <Row className="pt-3 contentbody">
            <Col>
              <Col className="text-end mt-5">
                <Link to="/addcourse">
                  <Button>Add Course</Button>
                </Link>
              </Col>
            </Col>
            <Container>
              <Col xs={12} md={12} className="landingcoursepage  mb-5">
                <Row>
                  <Col className="mt-2">
                    <h4>Recently Added Courses</h4>
                  </Col>
                  <Col className="text-end  mt-2">
                    <Link to="/adminviewallcourse">
                      <Button variant="outline-primary">
                        View All courses
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <div className="scrollable-content">
                  {courses.map((course) => (
                    // <Card key={index} sx={{ maxWidth: 250, maxHeight: 250, mb:5,borderRadius:1}}>

                    <Card
                      component={Link}
                      to={'/coursecontent/' + course.courseId}
                      key={course.courseId}
                      sx={{
                        maxWidth: 250,
                        maxHeight: 300,
                        mb: 5,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textDecoration: "none"
                      }}
                    >
                      <CardActionArea>
                        {/* <CardMedia
                                                    component="img"
                                                    height="140"
                                                    // width="80"
                                                    image={course.thumbnailimage}
                                                    alt={course.title || 'Course image'}
                                                    style={{objectFit:"contain"}}
                                                /> */}
                        <CardMedia
                          component="img"
                          height="200"
                          width="240"
                          image={course.thumbnailimage}
                          alt={course.title || "Course image"}
                          style={{
                            objectFit: "cover",
                            height: "140px",
                            width: "240px",
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {course.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {course.category}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </div>
              </Col>
            </Container>
          </Row>
        </Container>
      ) : (
        <div>
          <Box
            sx={{
              height: 300,
              flexGrow: 1,
              minWidth: 300,
              // transform: 'translateZ(0)',
              // The position fixed scoping doesn't work in IE11.
              // Disable this demo to preserve the others.
              "@media all and (-ms-high-contrast: none)": {
                display: "none",
              },
            }}
            ref={rootRef}
          >
            <Modal
              disablePortal
              disableEnforceFocus
              disableAutoFocus
              open
              aria-labelledby="server-modal-title"
              aria-describedby="server-modal-description"
              sx={{
                display: "flex",
                p: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              container={() => rootRef.current}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: (theme) => theme.shadows[5],
                  p: 4,
                }}
              >
                <Typography id="server-modal-title" variant="h6" component="h2">
                  404 Error
                </Typography>
                <Typography id="server-modal-description" sx={{ pt: 2 }}>
                  Faliled to Load Resource
                </Typography>
              </Box>
            </Modal>
          </Box>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.course.courses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(fetchCoursesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admincourse);