// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import "../../Styles/Learner/GetEnrollment.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchenrollCourse,selectCourse,} from "../../actions/LearnerAction/EnrolledCourseAction";
// import { Link } from "react-router-dom";
// import { Navbar, Row } from "react-bootstrap";
// import logo from '../../../src/Images/logo.png'
// import LearnerNavbar from '..//../components/LearnerComponent/LearnerNavbar';



// const id = sessionStorage.getItem('UserSessionID')

// // import Navbar1 from "../LearnerComponent/Navbar1";

// const GetEnrollment = () => {
//   const dispatch = useDispatch();
//   //const id = "482a2888-c470-4f1e-b7c0-4bb725d8ff6a"; // The specific learnerId
//   const viewcourse = useSelector((state) => state.enroll.course[0]);


//   useEffect(() => {
//     dispatch(fetchenrollCourse(id));
//   }, [dispatch]);

//   const navigate = useNavigate();

//   const handleNavigation = (course) => (e) => {
//     e.preventDefault();
//     console.log(course.enrolledCourseId);
//     dispatch(selectCourse(course)); // Dispatch the selectCourse action with the selected course
//     navigate(`/ViewTopics`);
//   };

//   return (
//     <div>





//       <LearnerNavbar />


//       {/* <div> <h3>YourEnrolled Courses:</h3></div> */}



//       <div className="box d-block">
//         {viewcourse && viewcourse.map((course, index) => (
//           <Link key={index} id="Card">
//             <Card
//               style={{ height: '300px' }}
//               id="Card"
//               onClick={handleNavigation(course)}
//             >
//               <CardContent id="cardcontent">
//                 <div className="card-hori d-flex">
//                   <div>
//                     <img
//                       id="thumbnail"
//                       src={course.thumbnailimage}
//                       alt="Course Thumbnail"
//                       height={150}
//                       width={100}
//                     />
//                     <Typography variant="h5" component="h2">
//                       {course.enrolledCoursename}
//                     </Typography>
//                   </div>

//                   <div id="coursedetails">

//                     <Typography color="textSecondary"><h3> COURSE DESCRIPTION:</h3>
//                       {course.enrolledcoursedescription}
//                     </Typography>
//                     <div className="level">
//                       <Typography color="textSecondary"><h5>Category: {course.enrolledcoursecategory}</h5>

//                       </Typography>
//                       <Typography color="textSecondary"><h5>Level:  {course.enrolledcourselevels}</h5>

//                       </Typography>
//                     </div>

//                   </div>

//                 </div>

//               </CardContent>
//             </Card>
//           </Link>
//         ))
//         }
//       </div>
//     </div>

//   );
// };

// export default GetEnrollment;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Learner/GetEnrollment.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchenrollCourse, selectCourse, } from "../../actions/LearnerAction/EnrolledCourseAction";
import { Link } from "react-router-dom";
import LearnerNavbar from '..//../components/LearnerComponent/LearnerNavbar';
import { unenrollRequest } from "../../actions/LearnerAction/UnenrollAction";
 
 
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@mui/material/Button'
 
 
 import { Dialog ,DialogActions,DialogContent,DialogTitle} from "@mui/material";
 
 
// import Navbar1 from "../LearnerComponent/Navbar1";
 
const GetEnrollment = () => {
  const dispatch = useDispatch();
  const id = sessionStorage.getItem('UserSessionID')
  const [open, setOpen] = React.useState(false);
  //const id = "482a2888-c470-4f1e-b7c0-4bb725d8ff6a"; // The specific learnerId
  const viewcourse = useSelector((state) => state.enroll.course[0]);
  const [startedCourses, setStartedCourses] = useState(() => {
    const savedCourses = localStorage.getItem('startedCourses');
    return savedCourses ? JSON.parse(savedCourses) : {};
  });
 
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
 
 
 
  useEffect(() => {
    dispatch(fetchenrollCourse(id));
  }, [dispatch]);
 
  const navigate = useNavigate();
 
  const handleNavigation = (course) => (e) => {
    e.preventDefault();
    console.log(course.enrolledCourseId);
    dispatch(selectCourse(course)); // Dispatch the selectCourse action with the selected course
    setStartedCourses(prevState => {
      const updatedCourses = { ...prevState, [course.enrolledCourseId]: true };
      localStorage.setItem('startedCourses', JSON.stringify(updatedCourses));
      return updatedCourses;
    });
 
    navigate(`/ViewTopics`);
  };
   
   
 
 
  const handleUnenroll = (enrollid) => (e) => {
    e.preventDefault();
    dispatch(unenrollRequest(enrollid));
    console.log("eid",enrollid);
    handleClose();
    // window.location.reload();
 
  }
 
  return (
    <div>
 

      <LearnerNavbar />
 
 
      {/* <div> <h3>YourEnrolled Courses:</h3></div> */}
 
 
 
      <div className="box d-block">
        {viewcourse && viewcourse.map((course, index) => (
 
          <Link key={index} id="Card">
            <Card
              style={{ height: '300px' }}
              id="Card"
 
            >
 
              <CardContent id="cardcontent">
                <div className="card-hori d-flex">
                  <div>
                    <img
                      id="thumbnail"
                      src={course.thumbnailimage}
                      alt="Course Thumbnail"
                      height={150}
                      width={100}
                    />
                    <Typography variant="h5" component="h2">
                      {course.enrolledCoursename}
                    </Typography>
                  </div>
 
                  <div id="coursedetails">
 
                    <Typography color="textSecondary"><h3> COURSE DESCRIPTION:</h3>
                      {course.enrolledcoursedescription}
                    </Typography>
                    <div className="level">
                      <Typography color="textSecondary"><h5>Category: {course.enrolledcoursecategory}</h5>
 
                      </Typography>
                      <Typography color="textSecondary"><h5>Level:  {course.enrolledcourselevels}</h5>
 
                      </Typography>
                    </div>
 
                  </div>
 
                </div>
 
              </CardContent>
 
              <Button style={{marginLeft:"5%" , backgroundColor:"midnightblue"}} variant="contained" color="error" onClick={handleClickOpen}>
                Unenroll
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Are you sure want to unenroll the course?"}</DialogTitle>
                <DialogContent>
                  {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                  <Button color="primary" onClick={handleClose}>
                    No
                  </Button>
                  <Button color="primary" onClick={handleUnenroll(course.enrollmentid)} >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
 
              <Button  style={{marginLeft:"2%" , backgroundColor:"midnightblue"}} onClick={handleNavigation(course)} variant="contained" >
                  {/* Change the button text based on whether the course has been started */}
                {startedCourses[course.enrolledCourseId] ? 'Resume Course' : 'Start Course'}
              </Button>
 
            </Card>
          </Link>
 
        ))
        }
      </div>
    </div>
 
  );
};
 
export default GetEnrollment;