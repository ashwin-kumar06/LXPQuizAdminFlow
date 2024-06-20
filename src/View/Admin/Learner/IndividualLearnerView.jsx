import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

function createData(enrollmentid, enrolledcourse, enrolledCourseCategory, enrolledCourselevels, enrollmentdate) {
    return { enrollmentid, enrolledcourse, enrolledCourseCategory, enrolledCourselevels, enrollmentdate };
}

const rows = [
    createData(1, 'python', 'Technical', "Intermediate", "2024-05-16",),
    createData(1, 'python', 'Technical', "Intermediate", "2024-05-16",),
    createData(1, 'python', 'Technical', "Intermediate", "2024-05-16",),
];

export default function IndividualLearnerView() {
    const theme = useTheme();
    const count = 1;
    return (
        <>
            <h1 className='mt-5'>User,</h1>
            <Box sx={{ flexGrow: 1, height: "auto" }}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, borderRadius: "25%" }}
                                image="http://localhost:5199/wwwroot/CourseThumbnailImages/6c6ffd86-9c3b-455e-b5f2-e00f032fc02d_js.png"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Personal Details
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary" component="div">
                                        Name
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Email
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography component="div" variant="h5">
                                    Last Enrolled course
                                </Typography>
                                <Typography component="div" variant="h3">
                                    CSS
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell align="left">Enrolled Course</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Levels</TableCell>
                            <TableCell align="right">Enrollment date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {count}
                                </TableCell>
                                <TableCell align='left' scope="row">
                                    {row.enrolledcourse}
                                </TableCell>
                                <TableCell align="right">{row.enrolledCourseCategory}</TableCell>
                                <TableCell align="right">{row.enrolledCourselevels}</TableCell>
                                <TableCell align="right">{row.enrollmentdate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

        </>
    );
}