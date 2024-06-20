import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { connect } from "react-redux";
import { FaChartLine } from "react-icons/fa6";
import { fetchHighestenrolledRequest } from "../../actions/Admin/AdminDashboardAction";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../Styles/Admin/AdminDashboard.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}));

const HighestEnrolledCourse = ({
  fetchHighestenrolledRequest,
  highestenrolledcourse,
}) => {
  useEffect(() => {
    fetchHighestenrolledRequest();
  }, [fetchHighestenrolledRequest]);

  const rows = highestenrolledcourse.highestenrolledcourse;
  return (
    <>
      <Grid item xs={12} md={3}>
        <Item  style={{borderRadius:"15px"}} >
          <Card variant="">
            <CardContent sx={{ height: "360px" }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#97247e" }}
                color="text.secondary"
                gutterBottom
              >
                Highest Enrolled Courses
                &nbsp; 
                <FaChartLine />
              </Typography>
              { <Typography variant="h6" gutterBottom sx={{ fontSize: 15 }}>
                <TransitionGroup>
                  {rows.map((enrolledcourse,index) => (
                    <CSSTransition
                       key={index}
                      timeout={500}
                      classNames="fade"
                    >
                        <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Learner profile"
                            src={enrolledcourse.thumbnailimage}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary= {<b>{enrolledcourse.courseName}</b>}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                               Learners Enrolled:{<b>{enrolledcourse.learnerscount}</b>}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </Typography> }
            </CardContent>
          </Card>
        </Item>
      </Grid>
    </>
  );
};
const mapStoreToProps = (state) => ({
  highestenrolledcourse: state.highestenrolledcourse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHighestenrolledRequest: () => dispatch(fetchHighestenrolledRequest()),
});

export default connect( mapStoreToProps,mapDispatchToProps)(HighestEnrolledCourse);
