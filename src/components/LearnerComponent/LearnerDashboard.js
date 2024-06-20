import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCoursesRequest } from '../../actions/LearnerAction/LearnerGetCourseAction';
import { enrollRequest } from '../../actions/LearnerAction/LearnerPostEnrollAction';
import '../../Styles/Learner/LearnerCourse.css';
import { FetchuserDataRequest } from '../../actions/LearnerAction/FetchRegisterAction';
import '../../Styles/Learner/LearnerDashboard.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import { indigo } from '@mui/material/colors';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { TopicScoreApi } from '../../middleware/LearnerMiddleware/TopicScoreApi';
import LinearProgress from '@mui/material/LinearProgress';
import { FetchDashboardRequest } from '../../actions/LearnerAction/LearnerdashboardAction';
import { LineChart } from '@mui/x-charts';
import { getUserProfileRequest } from '../../actions/LearnerAction/GetUpdateUserProfileAction';
import { FetchLearnerProgressRequest } from '../../actions/LearnerAction/FetchLearnerProgressAction';
import LearnerProgressApi from '../../middleware/LearnerMiddleware/LearnerProgressApi';
import LearnerScoreProgressBarGraph from './LearnerScoreProgressBarGraph';


const LearnerDashboard = ({ enrolledCourses, loading, error, search }) => {
  const courses = useSelector((state) => state.fetchcourse.courses);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const selectedStream = useSelector((state) => state.fetchlearner.userData.stream);
  const [profilePic, setProfilePic] = useState("https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg");
  const [progress, setProgress] = useState(60);
  const [scoreData, setScoreData] = useState([]);
  const learnerId = sessionStorage.getItem('UserSessionID'); // Retrieve learner ID from session storage
  const selectedcount = useSelector((state) => state.learnerdashboard.dashboard);
  console.log("selectedcount", selectedcount);
  // const selectedenrollcount = useSelector((state) => state.learnerdashboard.dashboard.enrolledCourseCount);
  // console.log("selectedenrollcount",selectedenrollcount);
  const selectedenrollcount = selectedcount.enrolledCourseCount || 0;
  const selectedinprogresscount = selectedcount.inProgressCount || 0;
  const selectcompletecount = selectedcount.completedCount || 0;
  const [TopicId] = useState("2df47ffa-3fc0-44c7-b869-c403f5542150");
  // const [LearnerId] = useState("6bdbab27-c637-48ff-850e-2cf9eb700a40");

  const selectedprogress = useSelector((state) => state);
  console.log("selectedprogress", selectedprogress);

  const profilePhoto = sessionStorage.getItem("userData");
  console.log("userData", profilePhoto)

  const enrollmentId = sessionStorage.getItem("enrolled");
  console.log("enrolled", enrollmentId);

  useEffect(() => {
    fetchData((learnerId));

  }, [dispatch]);

  useEffect(() => {
    fetchCourseScores(learnerId, TopicId);
  }, [learnerId, TopicId]);

  useEffect(() => {
    fetchprogress(learnerId, enrollmentId);
  }, [learnerId, enrollmentId]);

  useEffect(() => {
    if (selectedStream) {
      const streams = selectedStream.split(', ');
      setFilteredCourses(courses.filter(course => streams.map(stream => stream.toLowerCase()).includes(course.title.toLowerCase())));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedStream, courses]);


  const [open, setOpen] = useState(false);

  const handleOpen = (course) => {
    setOpen(true);
    setSelectedCourse(course);
  };
  const fetchCourseScores = async (learnerId) => {
    const scores = await TopicScoreApi(learnerId);
    setScoreData(scores);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchData = async (learnerId) => {
    try {
      dispatch(fetchCoursesRequest(learnerId));
      await
        dispatch(FetchDashboardRequest(learnerId));
      await
        dispatch(FetchuserDataRequest(learnerId));
      await
        dispatch(getUserProfileRequest(learnerId));


    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const fetchprogress = async (learnerId, enrollmentId) => {
    try {
      console.log("enrole success", learnerId, enrollmentId);
      const data = await LearnerProgressApi(learnerId, enrollmentId);
      setProgress(data);

    }
    catch (error) {
      console.error("Error fetching data", error);
    }
  }



  const handleEnrollCourse = (courseId) => {
    const maxCourses = 3;
    const learnerCourses = enrolledCourses.filter(course => course.learnerId === learnerId);

    if (learnerCourses.length >= maxCourses) {
      alert('You have reached the course enrollment limit!');
      return;
    }

    const alreadyEnrolled = enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);

    if (alreadyEnrolled) {
      alert('You have already enrolled in this course!');
      return;
    }

    try {
      dispatch(enrollRequest(courseId, learnerId));
    }
    catch (error) {
      console.error("Enrollment error:", error);
      alert('Failed to enroll in the course.Please try again later.');
    }

  };

  const isEnrolled = (courseId) => {
    if (!Array.isArray(enrolledCourses)) {
      console.error("enrolledCourses is not an array", enrolledCourses);
      return false;
    }
    return enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };



  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      <LearnerNavbar />
      < container fluid style={{ marginLeft: 2 }}>
        <div className='background-container_learner'>
          <div className="container-fluid ">
            <div className=" d-flex allcont">
              <div className=" justify-content-center ">
                <div className=" profile-card"  >
                  {/* <div className="position-relative"> */}
                  <img src={profilePhoto} className="card-img-top rounded-circle mt-3 mx-auto" alt="Profile" style={{ width: '150px', height: '150px' }} />
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-pic-upload"
                    style={{ display: 'none' }}
                    onChange={handleProfilePicChange}
                  />
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className="position-absolute camera"
                    style={{ top: '50%', left: '55%' }}
                    onClick={() => document.getElementById('profile-pic-upload').click()}
                  >
                    <CameraAltIcon />
                  </IconButton>

                </div>


                {/* </div> */}
              </div>
              <div className='all-card'>
                <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
                  <Typography component="div" variant="h6" className='count-name' >
                    Enrolled Course
                  </Typography>

                  {/* <CardMedia className='count-card'> */}
                  <Box className='count-inside ' display="flex" flexDirection="column" alignItems="center">
                    <IconButton className='count-icons' >
                      <SchoolRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >
                        {/* <Typography component="div" variant="h6" >
                    {selectedenrollcount}
                    </Typography> */}
                      </SchoolRoundedIcon>
                    </IconButton>
                    <div className='count-number'>
                      {selectedenrollcount}
                    </div>
                    {/* <Typography component="div" variant="h2" className='count-number' >
                    {selectedenrollcount}
                    </Typography> */}


                  </Box>
                </Card>
              </div>
              <div className=' '>
                <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
                  <Typography component="div" variant="h6" className='count-name' >
                    InProgress Course
                  </Typography>

                  {/* <CardMedia className='count-card'> */}
                  <Box className='count-inside' display="flex" flexDirection="column" alignItems="center">
                    <IconButton className='count-icons' >
                      <DownloadingRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >
                        {/* <Typography component="div" variant="h6" >
                    {selectedcount.inProgressCount}
                    </Typography> */}
                      </DownloadingRoundedIcon>
                    </IconButton>
                    <div className='count-number'>
                      {selectedinprogresscount}
                    </div>

                  </Box>
                </Card>
              </div>
              <div className='d-block '>
                <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
                  <Typography component="div" variant="h6" className='count-name' >
                    Completed Course
                  </Typography>

                  {/* <CardMedia className='count-card'> */}
                  <Box className='count-inside ' display="flex" flexDirection="column" alignItems="center">

                    <IconButton className='count-icons' >
                      <MilitaryTechRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >
                        <Typography component="div" variant="h6" >
                          {selectedcount.completedCount}
                        </Typography>
                      </MilitaryTechRoundedIcon>
                    </IconButton>
                    <div className='count-number '>
                      {selectcompletecount}
                    </div>


                  </Box>
                </Card>
              </div>
              <div className='chart-container'>
                <b className='count-scoreprogress' style={{ marginLeft: "30%", fontSize: "20px" }}> Score Progress </b>
                <LearnerScoreProgressBarGraph />


              </div>
            </div>
            <div className=''>
              <h3 className='count-recommend'>Recommended Courses</h3>


            </div>

            <div className='d-flex rec-course'>
              {filteredCourses.map((course, index) => (
                <div className="rec-course" key={index}>

                  <Card className='course-card'>
                    <CardMedia
                      className='course-inside'
                      component="img"
                      sx={{ width: 150 }}
                      image={course.thumbnailimage}
                      alt={course.title}
                    />
                    <CardContent className='course-content' sx={{ backgroundColor: '#f0f0f0' }}>
                      <div className='course-typo'>
                        <Typography component="div" variant="h5" className='course-name'>
                          Course: {course.title}
                        </Typography>
                        <Typography variant="h6" component="div" className='course-name'>
                          Level: {course.level}
                        </Typography>
                        <Typography variant="subtitle1" component="div" className='course-name'>
                          Category: {course.catagory}
                        </Typography>
                        <Button onClick={() => handleOpen(course)}>View More</Button>
                        <LinearProgress
                          variant='determinate'
                          value={"55"}
                          sx={{ height: 10, borderRadius: 5, marginTop: 1, Width: '100%', flexGrow: 1 }}
                        >
                          <Typography variant='body2' component="div" sx={{ marginLeft: 1 }}>
                            {`${progress}%`}
                          </Typography>
                        </LinearProgress><p>55%</p>
                      </div>
                    </CardContent>

                  </Card>
                  <Modal
                    open={open && selectedCourse && selectedCourse.courseId === course.courseId}
                    onClose={handleClose}
                    aria-labelledby="course-modal-title"
                    aria-describedby="course-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="course-modal-title" variant="h6" component="h2">{course.title}</Typography>
                      <Typography id="course-modal-description" variant="body1" color="text.secondary">
                        {course.description}
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button onClick={handleClose}>Close</Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEnrollCourse(course.courseId)}
                          disabled={isEnrolled(course.courseId)}
                        >
                          {isEnrolled(course.courseId) ? 'Enrolled' : 'Enroll'}
                        </Button>
                      </Stack>
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>

        </div>
      </container>
    </div>

  );
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses.enrolledCourses || [], // Ensure it's an array
  loading: state.enrolledCourses.loading,
  error: state.enrolledCourses.error,
});

export default connect(mapStateToProps)(LearnerDashboard);