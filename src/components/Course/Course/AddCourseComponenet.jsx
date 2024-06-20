import React, { useState, useEffect } from "react";
// import "../../../style/Course/Course/AddCourse.css";
import '../../../Styles/Course/Course/AddCourse.css'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Modal,

  Image,
  CloseButton,
  CardHeader,
} from "react-bootstrap";
import { useDispatch, connect, useSelector } from "react-redux";
// import {
//   createCoursesRequest,
//   createCoursesSuccess,
//   fetchLevelRequest,
// } from "../../../action/Course/Course/AddCourseAction"; // Assuming this is your action creator


import {
  createCoursesRequest,
  createCoursesSuccess,
  fetchLevelRequest
} from '../../../actions/Course/Course/AddCourseAction'
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../../utils/Course/Course/AddCourseValidation";
// import { createCategoryrequest } from "../../../action/Course/Category/AddCategoryAction";
import { createCategoryrequest } from '../../../actions/Course/Category/AddCategoryAction';
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Dialog, TextField, DialogContent, DialogTitle, DialogActions, Button, Alert, Stack, Box, MenuItem, FormControl, FormHelperText, CardContent } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { validateCategory } from "../../../utils/Course/Course/AddCourseValidation";
// import { fetchCategoryRequest } from "../../../action/Course/Category/FetchCategoryAction";
import { fetchCategoryRequest } from '../../../actions/Course/Category/FetchCategoryAction';

const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [coursecategory, setCategory] = useState([]);
  const [courselevel, setLevel] = useState([]);
  const [categoryErrors, setCategoryErrors] = useState({});
  const [category, setAddCategory] = useState({
    category: "",
    createdBy: "Asha",
  });
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    title: "",
    level: "",
    category: "",
    description: "",
    createdby: "Asha",
    duration: "",
    thumbnailimage: null,
  });
  //If course is created then navigate to course creation  page\
  const courseid = useSelector((state) => state.addcourse.course_id);

  //  const isSubmits = useSelector((state) => state.addcourse);
  const isSubmit = useSelector((state) => state.addcourse.isSubmitted);
  //  const CourseId= useSelector((state)=>state.AddCourse.course_id)
  //  console.log("checkcoursecontent",isSubmits);
  useEffect(() => {
    if (isSubmit) {
      // console.log("oppp",courseid);
  // const courseid = useSelector((state) => state.addcourse.course_id);
      navigate(`/coursecontent/${courseid}`); // Navigate to the next page on success
    }
  }, [isSubmit, navigate]);
  //success message for adding category
  const addCategorySuccessState = useSelector((state) => state.addCategory.isSuccess);
  const addCategoryFailureState = useSelector((state) => state.addCategory.isFailure);
  //   const categorySuccessMsg=useSelector((state)=>state.addCategory.message)
  const [successMsg, setSuccessMsg] = useState('')
  useEffect(() => {
    if (addCategorySuccessState) {
      handleClose();
      setSuccessMsg('Category added successfully');
      fetchData();
      const timer = setTimeout(() => {
        setSuccessMsg('');
      }, 7000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);



    }
  }, [addCategorySuccessState])
  const [failurMsg, setFailureMsg] = useState('');
  useEffect(() => {
    if (addCategoryFailureState) {
      handleClose();
      setFailureMsg('Category already exists');

    }
  }, [addCategoryFailureState])

  const [servererror, setserverrError] = useState('');
  const InternalError = useSelector((state) => state.addCategory.isError);
  useEffect(() => {
    if (InternalError) {
      handleClose();
      setserverrError('Internal Server error occured');

    }
  }, [InternalError])

  //If course is already exists
  const isExist = useSelector((state) => state.course.isExists);
  const [existMsg, setExistMsg] = useState('');
  useEffect(() => {
    if (isExist) {
      setExistMsg('Course already exists');

    }
  }, [isExist])

  //if internal message occurs for creating course
  const [failure, setFailure] = useState('');
  const isFailure = useSelector((state) => state.course.isError);
  useEffect(() => {
    if (isFailure) {
      setFailure('Internal Server error occured');

    }
  }, [isFailure])

  const fetchCategory = useSelector((state) => state.category.courses);

  const fetchLevel = useSelector((state) => state.level.courses);


  const fetchData = async () => {
    // try {
    //   const categoryResponse = await axios.get(
    //     "http://localhost:5199/lxp/course/category"
    //   );
    //   setCategory(categoryResponse.data.data);
    //   const levelResponse = await axios.get(
    //     "http://localhost:5199/lxp/course/courselevel/ash"
    //   );
    //   setLevel(levelResponse.data.data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    dispatch(fetchCategoryRequest());
  };
  useEffect(() => {

    fetchData();
    dispatch(fetchLevelRequest());

  }, []);


  const handleClickOpen = async () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    setAddCategory('');

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = validateForm(course, setErrors);

    if (isFormValid) {
      try {
        console.log("form", course);
        dispatch(createCoursesRequest(course));
      } catch (error) {
        console.error("Error creating course:", error);
      }
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
    //  setCourse({ ...course, [e.target.name]: e.target.value });
    if (name === "category" && value === "Add category") {
      // Show modal for adding a new category
      handleClickOpen();
    }
  };
  const handleInputCategory = (e) => {
    setAddCategory({ ...category, [e.target.name]: e.target.value });
  };
  // const handleCategory = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("category add", category);
  //     dispatch(createCategoryrequest(category));

  //   } catch (error) {
  //     window.alert("Error occured in adding category", error);
  //   }
  // };
  const handleCategory = async (e) => {
    e.preventDefault();
    const isCategoryValid = validateCategory(category, setCategoryErrors);

    if (isCategoryValid) {
      try {
        console.log("category add", category);
        dispatch(createCategoryrequest(category));
      } catch (error) {
        window.alert("Error occurred in adding category", error);
      }
    }
  };

  const handleThumbnailChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCourse((prevCourse) => ({
        ...prevCourse,
        thumbnailimage: event.target.files[0],
      }));
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const removeThumbnail = () => {

    setSelectedImage(null);
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle the files
    const file = acceptedFiles[0];
    // Create a URL for the file
    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);
    handleThumbnailChange({ target: { files: [file] } });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={0} sm={1} md={2}></Col>
          <Col xs={12} sm={10} md={8}>
            <Box className="Course-AddcourseAlert">
              <Col xs={12} sm={10} md={8} lg={12}>
                {!open && successMsg && (
                  <Alert severity="success" className="mt-5">
                    {successMsg}
                  </Alert>
                )}

                {!open && failurMsg && (
                  <Alert severity="error" className="mt-5">
                    {failurMsg}
                  </Alert>
                )}

                {!open && servererror && (
                  <Alert severity="error" className="mt-5">
                    {servererror}
                  </Alert>
                )}

                {!open && failure && (
                  <Alert severity="error" className="mt-5">
                    {failure}
                  </Alert>
                )}

                {!open && existMsg && (
                  <Alert severity="warning" className="mt-5">
                    {existMsg}
                  </Alert>
                )}

              </Col>
            </Box>

          </Col>
          <Col xs={0} sm={1} md={2}></Col>
        </Row>

        <Row>
          <Col xs={2} sm={3} md={4} ></Col>
          <Col xs={12} sm={12} md={9} lg={6}>
            <Card className="mt-5" id="Course-custom-card" >
              <Card.Header style={{ backgroundColor: '#23275C', color: 'white' }} className="Course-header">
                Create Course
              </Card.Header>
              <CardContent className="Course-scrollable-body">
                <Form onSubmit={handleSubmit}>
                  <FormControl className="mb-3" fullWidth>
                    {/* <Form.Label>Course Title</Form.Label> */}
                    <TextField
                      type="text"
                      name="title"
                      placeholder="Course title"
                      label="Course title"
                      fullWidth
                      autoFocus
                      error={Boolean(errors.title)}
                      helperText={errors.title}
                      value={course.title}
                      onChange={handleInputChange}
                    />
                    {/* {errors.title && <p className="error">{errors.title}</p>} */}
                  </FormControl>

                  <FormControl className="mb-3" fullWidth>
                    {/* <Form.Label required>Course Category</Form.Label> */}

                    <TextField select name="category" onChange={handleInputChange} fullWidth label="Course Catagory" placeholder="Select Catagory" error={Boolean(errors.category)} helperText={errors.category}>
                      <b>Select Category</b>
                      {fetchCategory.map((category) => (
                        <MenuItem
                          key={category.categoryId}
                          value={category.categoryId}
                        >
                          {category.category}
                        </MenuItem>
                      ))}
                      <MenuItem value="Add category" style={{ color: "#050C9C" }}>+ Add Category</MenuItem>
                    </TextField>
                    {/* {errors.category && (
                      <p className="error">{errors.category}</p>
                    )} */}

                  </FormControl>
                  <FormControl className="mb-3" fullWidth>
                    {/* <Form.Label>Course Level</Form.Label> */}
                    <TextField name="level" select onChange={handleInputChange} label="Course Level" fullWidth error={Boolean(errors.level)} helperText={errors.level} placeholder="Select Level">
                      <MenuItem>Select Level</MenuItem>
                      {fetchLevel.map((level) => (
                        <MenuItem key={level.levelId} value={level.levelId}>
                          {level.level}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* {errors.level && <p className="error">{errors.level}</p>} */}
                  </FormControl>

                  <FormControl className="mb-3" fullWidth>

                    <TextField
                      margin="dense"
                      id="name"
                      label="Course Duration (in hrs)"
                      fullWidth
                      type="time"
                      helperText={errors.duration}
                      error={Boolean(errors.duration)}
                      // step="0.1"
                      // min="0"
                      placeholder="CourseDuration (in hrs)"
                      name="duration"
                      value={course.duration}
                      onChange={handleInputChange}
                    />
                    {/* {errors.duration && (
                      <p className="error">{errors.duration}</p>
                    )} */}

                  </FormControl>

                  <FormControl className="mb-3" fullWidth >
                    <TextField
                      type="text"
                      label="Description"
                      multiline
                      rows={3}
                      placeholder="Enter your description"
                      name="description"
                      value={course.description}
                      error={(errors.description)}
                      helperText={(errors.description)}
                      onChange={handleInputChange}
                    />
                    {/* {errors.description && (
                      <p className="error">{errors.description}</p>
                    )} */}
                  </FormControl>

                  <FormControl controlId="formFile" className="mb-3" fullWidth>
                    <Form.Label>Course Thumbnail</Form.Label>

                    <Box {...getRootProps()} className="course-thumbnail">
                      <Card.Body className="text-center">
                        <input {...getInputProps()} type="file" />
                        {selectedImage ? (

                          <Card >
                            {/* <Card.Header> */}
                            <CloseButton
                              className="position-absolute top-0 end-0"
                              style={{ color: 'red' }}
                              onClick={removeThumbnail}
                              aria-label="Remove image"
                            />
                            {/* </Card.Header> */}

                            <img
                              className="thumbnail-image"
                              src={selectedImage}
                              alt="Course thumbnail"                               // modified lines
                            />
                          </Card>
                        ) : (
                          <p >
                            {isDragActive
                              ? "Drag the course thumbnail here ..."
                              : <span>Click to select thumbnail image or <span className="upload-link">Click to upload</span></span>
                            }
                          </p>
                        )}
                      </Card.Body>
                    </Box>
                    {errors.thumbnailimage && (
                      <p className="error">{errors.thumbnailimage}</p>
                    )}
                  </FormControl>


                  {/* {selectedImage && (
          <Row>
            <Col></Col>
            <Col xs={4} md={4}>
              <Image src={selectedImage} thumbnail />
            </Col>
            <Col></Col>
          </Row>
        )} */}
                  <Row className="mt-3">
                    <Col md={4} ></Col>
                    <Col md={8}>
                      <Button type="submit" value="CREATE COURSE" style={{ backgroundColor: '#23275C', color: 'white' }} className="align-items-center justify-content-center">
                        CREATE COURSE
                      </Button></Col>
                    <Col md={2}></Col>

                  </Row>
                </Form>
              </CardContent>

            </Card>
          </Col>
          <Col xs={0} sm={1} md={2}></Col>
        </Row>
      </Container>
      {/* <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleCategory,
          sx: {
            width: '100%', // Full width
            maxWidth: '500px', // Custom max-width
          }
        //   style: { maxWidth: 'none' } 
      }}
    
      >
        <DialogTitle className='dialog-clr'>Add Category</DialogTitle>
        <DialogContent className='dialog-content'>
 
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="category"
            label="Enter new category"
            type="longtext"
            value={category.category}
            onChange={handleInputCategory}
                         
            fullWidth
            
            variant="standard"
            // style={{margin:'10px'}}
          />
         
 
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment> */}

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: handleCategory,
            sx: {
              width: '100%', // Full width
              maxWidth: '500px', // Custom max-width
            }
          }}
        >
          <DialogTitle className='dialog-clr'>Add Category</DialogTitle>
          <DialogContent className='dialog-content'>
            <TextField
              autoFocus

              margin="dense"
              id="name"
              name="category"
              label="Enter new category"
              type="longtext"
              value={category.category}
              onChange={handleInputCategory}
              fullWidth
              variant="standard"
            />
            {categoryErrors.category && <p className="error">{categoryErrors.category}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default AddCourse;