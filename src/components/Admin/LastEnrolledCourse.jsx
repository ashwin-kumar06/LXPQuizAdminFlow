import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchLastEnrolledCourseRequest } from "../../actions/Admin/LearnersViewAction";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const LastEnrolledCourse = ({ fetchLastEnrolledCourse, enrolledcourse }) => {
    const learnerid = useParams();
    useEffect(() => {
        fetchLastEnrolledCourse(learnerid);
    }, [fetchLastEnrolledCourse]);
    if (enrolledcourse.lastenrolledCourse === undefined) {
        return (
            <>
                <Grid item xs>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: 200 ,padding:'25px'}}>
                            <Typography component="div" variant="h5" sx={{color:'#23275c' ,fontWeight:'bold'}}>
                                Last Enrolled course
                            </Typography>
                            <Typography sx={{ display: 'flex', flexDirection: 'row' ,fontStyle:'italic' }} component="div" variant="h6">
                                No Courses Enrolled
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </>
        )
    }
    else {
        return (
            <>
                <Grid item xs>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',  height: 200 ,padding:'25px' }}>
                            <Typography component="div" variant="h5" sx={{color:'#23275c' ,fontWeight:'bold'}}>
                                Last Enrolled course
                            </Typography>
                            <Typography sx={{ display: 'flex', flexDirection: 'row',fontStyle:'italic' }} component="div" variant="h5">
                    
                             <CardMedia
                            component="img"
                            sx={{ width: 230, }}
                            image={enrolledcourse.lastenrolledCourse.courseImage}
                            alt="Profile"
                        />
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </>
        )
    }
};
const mapStoreToProps = (state) => ({
    enrolledcourse: state.enrolledcourse,
});

const mapDispatchToProps = (dispatch) => ({
    fetchLastEnrolledCourse: (learnerid) => dispatch(fetchLastEnrolledCourseRequest(learnerid))
})

export default connect(mapStoreToProps, mapDispatchToProps)(LastEnrolledCourse);