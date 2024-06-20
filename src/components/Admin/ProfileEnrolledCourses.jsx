import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchProfileCoursesRequest } from "../../actions/Admin/LearnersViewAction";
const ProfileEnrolledCourses = ({ fetchProfileCourses, profilecourses }) => {
    const learnerid = useParams();
    useEffect(() => {
        fetchProfileCourses(learnerid);
    }, [fetchProfileCourses]);
    const rows = profilecourses.profileCourses;
    return (
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "#23275c" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                S.No
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Enrolled Course
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Category
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Levels
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Enrollment date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.enrolledcourse}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left" scope="row">
                  {row.enrolledcourse}
                </TableCell>
                <TableCell align="right">
                  {row.enrolledCourseCategory}
                </TableCell>
                <TableCell align="right">{row.enrolledCourselevels}</TableCell>
                <TableCell align="center">
                  {row.enrollmentdate.replace("T", " ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

const mapStoreToProps = (state) => ({
    profilecourses: state.profilecourses,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProfileCourses: (learnerid) => dispatch(fetchProfileCoursesRequest(learnerid))
})
export default connect(mapStoreToProps, mapDispatchToProps)(ProfileEnrolledCourses);
