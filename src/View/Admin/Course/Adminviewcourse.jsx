import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer, Switch } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchallCoursesRequest } from "../../../actions/Admin/Adnimviewcourse";
import { deleteCoursesRequest } from "../../../actions/Admin/DeletecourseAction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import "../../../Styles/Admin/Adminviewcourse.css";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import { enableDisableCourseRequest } from "../../../actions/Admin/EnableDisableAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { updateCoursesRequest } from "../../../actions/Admin/Updatecourse";
import ClearIcon from "@mui/icons-material/Clear";

const Adminviewcourse = ({
  fetchCourses,
  deleteCourse,
  courses,
  enableordisable,
}) => {
  console.log("Checking the courses", courses);

  // State for update course dialog
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedcourse, setSelectedcourse] = useState({
    courseId: "",
    title: "",
    level: "",
    category: "",
    description: "",
    duration: "",
    modifiedby: "Kavin",
    thumbnailimage: "null",
    levelId: "",
    categoryId: "",
  });

  console.log("selected courses", selectedcourse);
  console.log(selectedcourse.category);

  const [thumbnail, setThumbnail] = useState();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setThumbnail(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      setSelectedcourse({
        ...selectedcourse,
        thumbnailimage: acceptedFiles[0],
      });
    },
  });





  console.log("thumbnailimageinuput", thumbnail);

  // Remove image .......

  const [removeImage, setRemoveImage] = useState(false);

  const handleRemoveImage = () => {
    setThumbnail(null);
    setSelectedcourse({ ...selectedcourse, thumbnailimage: null });
    setRemoveImage(true);
  };

  /////

  const handleupdatecourse = (course) => {

    console.log("check and check", course);


    const blob = new Blob([course.thumbnailimage]);

    console.log("caadasd", blob)

    const objecturl = URL.createObjectURL(blob);


    setSelectedcourse({
      courseId: course.courseId,
      title: course.title,
      level: course.levelId, //
      category: course.categoryId, //
      description: course.description,
      duration: course.duration,
      modifiedby: "Kavin",
      thumbnailimage: course.thumbnailimage,
    });

    setThumbnail({ preview: objecturl });
    setOpenDialog(true);
  };

  const closedialog = () => {
    setOpenDialog(false);
    setSelectedcourse({
      courseId: "",
      title: "",
      level: "",
      category: "",
      description: "",
      duration: "",
      modifiedby: "Kavin",
      thumbnailimage: "",
    });
    setThumbnail("");
  };
  const [coursecategory, setCategory] = useState([]);
  const [courselevel, setLevel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(
          "http://localhost:5199/lxp/course/category"
        );
        setCategory(categoryResponse.data.data);

        const levelResponse = await axios.get(
          "http://localhost:5199/lxp/course/courselevel/kavin"
        );
        setLevel(levelResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedcourse({ ...selectedcourse, [name]: value });
  };

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Form Validation
  // const validationform = () => {
  //   const { title, level, category, description, duration } = selectedcourse;
  //   return (
  //     title.trim() !== "" &&
  //     level.trim() !== "" &&
  //     category.trim() !== "" &&
  //     description.trim() !== "" &&
  //     duration > 0
  //   );
  // };

  // check the the values in the dialog box container when its open

  useEffect(() => {
    if (openDialog) {
      console.log("Current selected value", selectedcourse);
    }
  }, [openDialog, selectedcourse]);

  //Form Submission for the Update course
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const checkcoursevalidform = validationform();

    // if (!checkcoursevalidform) {
    //   setDialogMessage("All the fields are required for validation");
    //   setOpen(true);
    //   return;
    // }

    const formData = new FormData();

    formData.append("CourseId", selectedcourse.courseId);
    // console.log("checking the courseID", selectedcourse.courseId);

    formData.append("Title", selectedcourse.title);
    formData.append("LevelId", selectedcourse.level);
    formData.append("CategoryId", selectedcourse.category);
    formData.append("Description", selectedcourse.description);
    formData.append("Duration", selectedcourse.duration);
    formData.append("ModifiedBy", selectedcourse.modifiedby);

    // console.log(
    //   "Selected course thumbnail image:",
    //   selectedcourse.thumbnailimage
    // );


    if (thumbnail && thumbnail.preview) {

      formData.append("Thumbnailimage", selectedcourse.thumbnailimage);
    } else {

      formData.append("Thumbnailimage", selectedcourse.thumbnailimage);
    }

    try {
      console.log("updatecourse", formData);



      // Debugging: Log the formData contents

      for (let [key, value] of formData.entries()) {
        console.log("kkakakakaakakaa", `${key}: ${value}`)
      };


      console.log("Action payload:", {
        courseId: selectedcourse.courseId,
        formData,
      });

      dispatch(
        updateCoursesRequest({ courseId: selectedcourse.courseId, formData })
      );
      closedialog();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  console.log("filtered courses:", filteredCourses);

  const [showModal, setShowModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  // State to control the open status of the dialog
  const [open, setOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const istrue = useSelector((state) => state.deletecourse.isdeleted);
  const mes = useSelector((state) => state.deletecourse.message);

  const isfalse = useSelector((state) => state.deletecourse.isnotdelete);
  const failuremessage = useSelector((state) => state.deletecourse.message);

  // Update successfull Message-----//

  const isUpdated = useSelector((state) => state.updatecourse.isUpdated);
  console.log("check the updatestatues", isUpdated);
  const courseupdatesuccessfullmessage = useSelector(
    (state) => state.updatecourse.message
  );
  console.log("message", courseupdatesuccessfullmessage);

  const updatefailuremessage = "Updated was not successfull";

  useEffect(() => {
    if (isUpdated) {
      setOpen(true);
      setDialogMessage(courseupdatesuccessfullmessage);
      fetchCourses();
      // window.location.reload();
    }
    // setOpen(false);
  }, [isUpdated, courseupdatesuccessfullmessage]);

  ////

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (istrue) {
      setOpen(true);
      setDialogMessage(mes);
      setOpen(true);
      fetchCourses();
    } else if (isfalse) {
      setOpen(true);
      setDialogMessage(failuremessage);
    }
  }, [istrue, mes, isfalse, failuremessage, fetchCourses]);

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) =>
        Object.values(course).some((value) =>
          value !== null && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [courses, searchTerm]);


  const dispatch = useDispatch();

  const handleDeleteClick = (courseId) => {
    setSelectedCourseId(courseId);
    setShowModal(true);
  };

  const confirmDeletion = () => {
    deleteCourse(selectedCourseId);
    setShowModal(false);
  };

  //const for Enable & Disable Pop up
  const [showEnableModal, setShowEnableModal] = useState(false);
  const handleToggle = (title, courseId, status) => {
    console.log(courseId, status);
    setCourseTitle(title);
    setenabledisablecourseId(courseId);
    setCourseStatus(status);
    setShowEnableModal(true);
  };

  const [enabledisablecourseId, setenabledisablecourseId] = useState("");
  const [coursetitle, setCourseTitle] = useState("");
  const [coursestatus, setCourseStatus] = useState();

  //Event for Enable And Disable

  const Enablesuccessage = useSelector((state) => state.enabledisablecourse.successfullmessage);


  const EnableOrDisable = () => {
    enableordisable(enabledisablecourseId, !coursestatus);
    setShowEnableModal(false);
    setTimeout(() => {
      document.location.reload();
    }, 500);

  };

  //Style for Disable And Enable Modal

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#23275C",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#23275C",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      {/* Modal for Enable & Disable */}
      <Modal
        show={showEnableModal}
        onHide={() => setShowEnableModal(false)}
        centered
      >
        {coursestatus !== true ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Enable Course - {coursetitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to Enable the course {coursetitle}?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEnableModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={EnableOrDisable}>
                Enable
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Disable Course - {coursetitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to Disable the course {coursetitle}?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEnableModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={EnableOrDisable}>
                Disable
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      <Container fluid>
        <Row className="mt-5">
          <Col xs={12} md={12} className="mt-2">
            <Row>
              <Col xs={12} md={6}>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </Col>
            </Row>
            <Row>
              <Paper style={{ width: "100%" }}>
                <TableContainer style={{ maxHeight: 640 }}>
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    style={{ backgroundColor: "#f3f3f3" }}
                  >
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#23275c" }}>
                        <TableCell>Title</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Created Date</TableCell>
                        <TableCell align="right">View</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                        <TableCell align="right">Enable/Disable</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredCourses.map((course) => (
                        <TableRow key={course.courseId}>
                          <TableCell component="th" scope="row">
                            {course.title}
                          </TableCell>
                          <TableCell>{course.category}</TableCell>
                          <TableCell>{course.duration}</TableCell>
                          <TableCell>{course.level}</TableCell>
                          <TableCell>{course.createdAt}</TableCell>
                          <TableCell align="right">
                            <Link to={'/coursecontent/' + course.courseId}>
                              <Button>
                                <GridViewIcon />
                              </Button>
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              onClick={() => handleupdatecourse(course)}
                              variant="outlined"
                              color="primary"
                            >
                              <EditIcon />
                            </Button>
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="danger"
                              color="error"
                              onClick={() => handleDeleteClick(course.courseId)}
                            >
                              <DeleteForeverOutlinedIcon />
                            </Button>
                          </TableCell>
                          <TableCell align="right">
                            <FormControlLabel
                              control={
                                <IOSSwitch
                                  sx={{ m: 1 }}
                                  checked={course.status}
                                  onClick={() =>
                                    handleToggle(
                                      course.title,
                                      course.courseId,
                                      course.status
                                    )
                                  }
                                />
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Row>
          </Col>
        </Row >
      </Container >
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeletion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please read the below message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDialog}
        onClose={(event, reason) => {
          if (reason && reason === "backdropClick") {
            return; // Prevent Dialog from closing on backdrop click
          }
          closedialog();
        }}
        disableEscapeKeyDown
      >
        <DialogTitle>Update Course</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Course Title"
              type="text"
              fullWidth
              value={selectedcourse.title}
              onChange={handleInputChange}
              error={selectedcourse.title.trim() === ""}
              helperText={
                selectedcourse.title.trim() === ""
                  ? "Course Title cannot be empty"
                  : " "
              }
            />
            <FormControl fullWidth style={{ marginTop: "15px" }}>
              <InputLabel id="course-level-id">Course Level</InputLabel>
              <Select
                labelId="course-level-id"
                name="level"
                // id='levelId'
                label="Course Level"
                value={selectedcourse.level}
                onChange={handleInputChange}
                error={selectedcourse.level.trim() === ""}
                helperText={
                  selectedcourse.level.trim() === ""
                    ? "Course Level cannot be empty"
                    : ""
                }
              >
                {courselevel.map((level) => (
                  <MenuItem key={level.levelId} value={level.levelId}>
                    {level.level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginTop: "15px" }}>
              <InputLabel id="course-category-id">Course Category</InputLabel>
              <Select
                labelId="course-category-id"
                name="category"
                label="Course Category"
                value={selectedcourse.category}
                onChange={handleInputChange}
              >
                {coursecategory.map((category) => (
                  <MenuItem
                    key={category.categoryId}
                    value={category.categoryId}
                  >
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              name="description"
              label="Description"
              type="text"
              multiline
              rows={4}
              fullWidth
              value={selectedcourse.description}
              onChange={handleInputChange}
              error={selectedcourse.description.trim() === ""}
              helperText={
                selectedcourse.description.trim() === " "
                  ? "Description cannot be empty"
                  : ""
              }
            />
            <TextField
              autoFocus
              margin="dense"
              name="duration"
              label="Duration"
              type="time"
              fullWidth
              value={selectedcourse.duration}
              onChange={handleInputChange}
              error={!selectedcourse.duration || selectedcourse.duration <= 1}
              helperText={
                !selectedcourse.duration || selectedcourse.duration <= 1
                  ? "Duration cannot be empty"
                  : ""
              }
            />
            <div
              {...getRootProps()}
              style={{
                border: "2px dashed #eeeeee",
                padding: "20px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              <input {...getInputProps()} />
              {thumbnail ? (
                // <img src={thumbnail.preview} alt="Preview" style={{ width: '200px', height: '150px' }} />
                <div>
                  <img
                    src={thumbnail.preview}
                    alt="Preview"
                    style={{ width: "200px", height: "150px" }}
                  />
                  <Button
                    onClick={handleRemoveImage}
                    variant="danger"
                    style={{ top: "0", right: "0", margin: "10px" }}
                  >
                    <ClearIcon />
                  </Button>
                </div>
              ) : (
                <p>
                  Drag 'n' drop the thumbnail image here, or click to select
                  files
                </p>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={closedialog}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  courses: state.allcourse.courses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(fetchallCoursesRequest()),
  deleteCourse: (courseId) => dispatch(deleteCoursesRequest(courseId)),
  enableordisable: (enabledisablecourseId, coursestatus) =>
    dispatch(enableDisableCourseRequest(enabledisablecourseId, coursestatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Adminviewcourse);