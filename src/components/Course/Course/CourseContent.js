import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaVideo,
  FaMusic,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
// import '../../../style/Course/Material/CourseContent.css';
import '../../../Styles/Course/Material/CourseContent.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { fetchCategoryRequest, fetchLevelRequest } from "../../../action/Course/Course/AddCourseAction";
// import {fetchCourseTopic} from '../../../actions/Course/Topic/AddTopicAction'
import { Modal } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Row, Col, Container } from "react-bootstrap";
// import { fetchCourseRequest } from "../../../action/Course/Course/FetchCouseDetailsAction";
import { fetchCourseRequest } from '../../../actions/Course/Course/FetchCouseDetailsAction';
import { LogoDev } from "@mui/icons-material";

// import CourseCreationForm from "./Content_Page";
const Content = () => {
          {/* mano changes */}

  const {id} = useParams();
          {/* stop mano changes */}

  //const [content,setContent]=useState([]);
  const dispatch = useDispatch();
  // const courseid = useSelector((state) => state.addcourse.course_id);
  const course = useSelector((state) => state.fetchindividualCourse.courses);
  console.log("Course", course);
  // console.log("content", courseid);
          {/* mano changes */}
  
  useEffect(() => {
    if (id) {
      dispatch(fetchCourseRequest(id));
    }
    // console.log("asdfgh", courseid);
  }
    , [id]);

          {/* stop mano changes */}

  //id=courseid;
  const navigate = useNavigate();
  const iscourse = useSelector((state) => state.fetchindividualCourse.isNavigate)
          {/* mano changes */}


  const handleAddTopic = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (iscourse) {
      navigate(`/addtopic/${id}`)
    }


  }
          {/* stop mano changes */}

  const divStyle = {
    boxShadow: '0px 4px 8px #23275c', // Replace #yourShadowColor with your color
  };
  return (
    <>
      <Container style={divStyle} className="mt-5">
        <Row className="mt-1">
          <Col md={3} xs={3}></Col>
          <Col md={6} xs={6}>
            <Card sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: 'fill' }}
                  component="img"
                  height="300"
                  image={course.thumbnail}
                  alt="Course-Thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {/* mano changes */}
                    Category : {course.category}
                    {/* stop mano changes */}

                  </Typography>
                  <Typography variant="caption" display="block">
                    Level : {course.level}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Duration : {course.duration} hrs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleAddTopic}>
                  Add Topic
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col md={3} xs={3}></Col>
        </Row>
      </Container>

    </>
  );
};
export default Content;