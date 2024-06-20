import ProfileCard from "../../../components/Admin/ProfileCard";
import Grid from '@mui/material/Grid';
import ProfileEnrolledCourses from "../../../components/Admin/ProfileEnrolledCourses";
import LastEnrolledCourse from "../../../components/Admin/LastEnrolledCourse";
export function IndividualLearner() {
    return (
        <>
            <Grid container spacing={3} sx={{ mt: 5, }}>
                <ProfileCard />
                <LastEnrolledCourse />
            </Grid>
            <ProfileEnrolledCourses />
        </>
    )
}