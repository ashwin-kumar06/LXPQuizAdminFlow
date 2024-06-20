import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { connect } from "react-redux";
import { fetchToplearnersRequest } from "../../actions/Admin/AdminDashboardAction";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../Styles/Admin/AdminDashboard.css";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
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

const Toplearners = ({fetchToplearnersRequest, toplearners }) => {
  useEffect(() => {
    fetchToplearnersRequest();
  }, [fetchToplearnersRequest]);
  
  const rows = Object.values(toplearners.toplearners);
  console.log("top",rows);
  return (
    <>
      <Grid item xs={12} md={3}>
        <Item style={{borderRadius:"15px"}} >
          <Card variant="">
            <CardContent sx={{ height: "360px" }}>
            <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#524F7D" }}
                color="text.secondary"
                gutterBottom
              >
                Top Learners
                &nbsp; 
                <MilitaryTechIcon/>
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontSize: 15 }} style={{marginTop:"30px"}}>
                <TransitionGroup>
                  {rows.map((toplearner,index) => (
                    <CSSTransition
                      key={index}
                      timeout={1000}
                      classNames="fade"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          to={`/individuallearner/${toplearner.learnerid}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <React.Fragment>
                            <img
                              src={toplearner.profilePhoto}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                marginRight: "15px",
                              }}
                            />
                            <span className="name-animation">
                              {<b>{toplearner.learnerName}</b>}
                            </span>
                            <hr
                              style={{
                                width: "100%",
                                borderTop: "0px solid #ccc",
                              }}
                            />
                          </React.Fragment>
                        </Link>
                      </div>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </Typography>
            </CardContent> 
          </Card>
        </Item>
      </Grid>
    </>
  );
};

const mapStoreToProps = (state) => ({
  toplearners: state.toplearners,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToplearnersRequest: () => dispatch(fetchToplearnersRequest()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Toplearners);
