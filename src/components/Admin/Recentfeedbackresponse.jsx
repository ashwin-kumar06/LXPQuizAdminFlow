import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { connect } from "react-redux";
import { fetchRecentFeedbackResponseRequest } from "../../actions/Admin/AdminDashboardAction";
import FeedbackIcon from "@mui/icons-material/Feedback";

const RecentFeedbackCarousel = ({
  fetchRecentFeedbackResponseRequest,
  recentFeedback,
}) => {
  useEffect(() => {
    fetchRecentFeedbackResponseRequest();
  }, [fetchRecentFeedbackResponseRequest]);

  return (
    <div style={{ width: "100%", height: "300%" }}>
      <Carousel>
        {recentFeedback.map((feedback, index) => (
          <Paper key={index} style={{ padding: "20px",marginLeft:"15px",borderRadius:"15px" }}>
            <ListItem alignItems="flex-start" style={{marginLeft:"30%"}}>
              <ListItemAvatar>
              <Link to={`/individuallearner/${feedback.learnerid}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                <Avatar alt="Learner profile" src={feedback.profilephoto} />
                </Link>
              </ListItemAvatar>
              
              <ListItemText
                primary={
                  <Link to={`/individuallearner/${feedback.learnerid}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography variant="h5">{feedback.learnerName}</Typography>
                  </Link>
                }

                secondary={
                  <>
                    <Typography variant="body1" sx={{ color: "#23275c",fontWeight:"bold",fontStyle:"italic" }}>
                      "{feedback.feedbackresponse}"
                    </Typography>
                    
                    <Typography variant="body3" sx={{ color: "GrayText",fontWeight:"bold",fontStyle:"italic" }}>
                   
                      {/* {new Date(feedback.dateoftheResponse).toLocaleString()} */}
                    
                      {feedback.dateoftheResponse.split('T')[0].split('-').reverse().join('-') + ' ' + feedback.dateoftheResponse.split('T')[1]}
                    </Typography>
                    <br></br>
                    <Typography variant="body2"  sx={{ color: "GrayText",fontWeight:"bold",fontStyle:"italic" }}>
                      <b>Course:</b> {feedback.coursename} | <b>Topic:</b>{" "}
                      {feedback.topicName} 
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recentFeedback: state.recentfeedbackresponse.recentfeedbackresponse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentFeedbackResponseRequest: () =>
    dispatch(fetchRecentFeedbackResponseRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentFeedbackCarousel);
