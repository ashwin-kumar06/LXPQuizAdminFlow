import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { Container } from "react-bootstrap";
import Divider from "@mui/joy/Divider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizInstructionRequest } from "../../../../actions/Quiz And Feedback Module/Learner/QuizInstructionAction";
import { fetchlearneridRequest } from "../../../../actions/Quiz And Feedback Module/Learner/GetLearnerIDAction";
import { fetchlearnerscoreRequest } from "../../../../actions/Quiz And Feedback Module/Learner/LearnerScorePageAction";
import "../../../../Styles/Quiz And Feedback Module/Learner/LearnerScorePage.css";

export const LearnerScorePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const topicId = sessionStorage.getItem("topicId");
  const quizinstructions = useSelector(
    (state) => state.fetchquizinstruction.quizinstructiondetails
  );

  const learnerId = sessionStorage.getItem("UserSessionID");
  const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
  console.log(getlearners);

  const learnersAttemptId = sessionStorage.getItem("learnerAttemptId");
  const learnerAttempt = useSelector(
    (state) => state.learnerscore.learnerscoredetails
  );
  console.log("hi,", learnerAttempt);

  useEffect(() => {
    dispatch(fetchQuizInstructionRequest(topicId));
    dispatch(fetchlearneridRequest(learnerId));
    debugger;
    dispatch(fetchlearnerscoreRequest(learnersAttemptId));
  }, [dispatch]);

  return (
    <Container style={{ marginTop: "100px", width: "90%", marginLeft: "15%" }}>
      <div id="scorepages">
        <div class="containersco">
          <Container
            fluid
            id="containers"
            style={{
              boxShadow: "0px 4px 8px #23275c",
              marginTop: "100px",
              width: "100%",
            }}
          >
            <Box
              id="instructions"
              sx={{
                width: "80%",
                maxWidth: 400,
                display: "grid",
                marginLeft: "2%",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: 2,
              }}
              style={{}}
            >
              <Card
                id="cards"
                style={{
                  height: "50px",
                  width: "650%",
                  marginLeft: "-8%",
                  marginBottom: "2%",
                  marginTop: "5%",
                }}
                variant="soft"
              >
                <CardContent>
                  <Typography level="title-md">
                    {quizinstructions.nameOfQuiz} Assessment Result
                  </Typography>
                </CardContent>
              </Card>
              <Card
                id="card"
                variant="soft"
                style={{ width: "650%", height: "85%" }}
              >
                <CardContent>
                  <Divider inset="none" id="divider" />
                  <Typography level="title-md">
                    Duration : {quizinstructions.duration}{" "}
                  </Typography>
                  <Typography level="title-md">
                    Pass Mark : {quizinstructions.passMark}{" "}
                  </Typography>
                  <Typography level="title-md">
                    Attempts Allowed : {quizinstructions.attemptsAllowed}
                  </Typography>
                  <Divider inset="none" id="divider" />
                  <Typography>
                    <b>Score Card</b>
                  </Typography>
                  <Typography>
                    <b>
                      Dear {getlearners.learnerFirstName}{" "}
                      {getlearners.learnerLastName},
                    </b>
                  </Typography>
                  <Typography>
                    <br></br>
                  </Typography>
                  <Typography>
                    {learnerAttempt ? (
                      <div className="scorecard">
                        <h1>
                          {learnerAttempt.timeTaken > 60 ? `The time taken : ${Math.round((learnerAttempt.timeTaken / 60) * 100) / 100} minutes` : `The time taken : ${learnerAttempt.timeTaken} seconds`}
                        </h1>
                        {learnerAttempt.isPassed === true ? (
                          <>
                            <h1>
                              Contragulations {getlearners.learnerFirstName}{" "}
                              {getlearners.learnerLastName}
                            </h1>
                            <h1>
                              You Passed the {quizinstructions.nameOfQuiz}
                              Assessment
                            </h1>

                            <h1>Your Score is {learnerAttempt.score} </h1>

                            <div>
                              <div class="emoji emoji--haha">
                                <div class="emoji__face">
                                  <div class="emoji__eyes"></div>
                                  <div class="emoji__mouth">
                                    <div class="emoji__tongue"></div>
                                  </div>
                                </div>
                              </div>

                              <div class="emoji emoji--yay">
                                <div class="emoji__face">
                                  <div class="emoji__eyebrows"></div>
                                  <div class="emoji__mouth"></div>
                                </div>
                              </div>
                              <div class="emoji emoji--wow">
                                <div class="emoji__face">
                                  <div class="emoji__eyebrows"></div>
                                  <div class="emoji__eyes"></div>
                                  <div class="emoji__mouth"></div>
                                </div>
                              </div>
                            </div>
                            <>
                              <div>
                                <Button
                                  variant="default"
                                  style={{
                                    backgroundColor: "#365486",
                                    color: "whitesmoke",
                                    width: "150px",
                                    marginLeft: "50%",
                                  }}
                                  onClick={() => {
                                    navigate("/quizengine");
                                  }}
                                >
                                  Go To Course
                                </Button>
                              </div>
                            </>
                          </>
                        ) : (
                          <>
                            <h3>
                              OOPS You not cleared the{" "}
                              {quizinstructions.nameOfQuiz} Assessment
                            </h3>

                            <h5>Your Score is {learnerAttempt.score} </h5>

                            <div class="emoji emoji--sad">
                              <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__eyes"></div>
                                <div class="emoji__mouth"></div>
                              </div>
                            </div>
                            {quizinstructions.attemptsAllowed -
                              learnerAttempt.currentAttempt ===
                              0 ? (
                              <>
                                <h5>Your Attempt is over...</h5>
                              </>
                            ) : (
                              <>
                                <h5>
                                  You have only{" "}
                                  {quizinstructions.attemptsAllowed -
                                    learnerAttempt.currentAttempt}{" "}
                                  more attempts to finish the quiz...
                                </h5>
                                <h5>
                                  You can retake the quiz now or again revise
                                  the courses
                                </h5>
                                <div
                                  style={{
                                    marginLeft: "-1%",
                                    marginTop: "20%",
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    style={{
                                      backgroundColor: "#365486",
                                      color: "whitesmoke",
                                      width: "150px",
                                      marginLeft: "80%",
                                      marginTop: "-221px",
                                    }}
                                    onClick={() => {
                                      navigate("/instruction");
                                    }}
                                  >
                                    Retake Quiz
                                  </Button>
                                </div>
                                <div
                                  style={{
                                    marginLeft: "-210%",
                                    marginTop: "-6%",
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    style={{
                                      backgroundColor: "#365486",
                                      color: "whitesmoke",
                                      width: "150px",
                                      marginLeft: "70%",
                                      marginTop: "-120px",
                                    }}
                                    onClick={() => {
                                      navigate("/quizengine");
                                    }}
                                  >
                                    Go To Course
                                  </Button>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    ) : (
                      <p>Loading learner data...</p>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default LearnerScorePage;

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import AdminNavbar from "../../AdminNavbar";
// // import "../../../../Styles/Quiz And Feedback Module/Learner/QuizInstruction.css";
// import { Container } from "react-bootstrap";
// import Divider from "@mui/joy/Divider";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizInstructionRequest } from "../../../../actions/Quiz And Feedback Module/Learner/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../../actions/Quiz And Feedback Module/Learner/GetLearnerIDAction";
// import { fetchlearnerscoreRequest } from "../../../../actions/Quiz And Feedback Module/Learner/LearnerScorePageAction";
// // import "../../../../Styles/Quiz And Feedback Module/Learner/LearnerScorePage.css";

// export const LearnerScorePage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const topicId = sessionStorage.getItem("topicId");
//   const quizinstructions = useSelector(
//     (state) => state.fetchquizinstruction.quizinstructiondetails
//   );

//   const learnerId = sessionStorage.getItem("UserSessionID");
//   const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
//   console.log(getlearners);

//   const learnersAttemptId = sessionStorage.getItem("learnerAttemptId");
//   const learnerAttempt = useSelector(
//     (state) => state.learnerscore.learnerscoredetails
//   );
//   console.log("hi,", learnerAttempt);

//   useEffect(() => {
//     dispatch(fetchQuizInstructionRequest(topicId));
//     dispatch(fetchlearneridRequest(learnerId));
//     debugger;
//     dispatch(fetchlearnerscoreRequest(learnersAttemptId));
//   }, [dispatch]);

//   const divStyle = {
//     boxShadow: "0px 4px 8px #23275c",
//   };

//   return (
//     <Container fluid style={{marginTop:"700px"}}>
//     <div>
//       {/* <AdminNavbar /> */}
//       <div class="container">
//         <div>

//           {/* <button
//             class="btn btn-light"
//             style={{
//               marginLeft: "100%",
//               marginTop: "60%",
//               backgroundColor: "#365486",
//               color: "white",
//               width: "50",
//             }}
//           >
//             Back
//           </button> */}

//         </div>
//         {/* <AdminNavbar /> */}
//         <Container fluid id="container" style={divStyle}>
//           <Box
//             id="instruction"
//             sx={{
//               width: "100%",
//               maxWidth: 500,
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//               gap: 2,
//             }}
//           >
//             <Card style={{ height: "50px", marginLeft: "-14%" }} variant="soft">
//               <CardContent>
//                 <Typography level="title-md">
//                   {quizinstructions.nameOfQuiz} Assessment Result
//                 </Typography>
//               </CardContent>
//             </Card>
//             <Card id="card" variant="soft">
//               <CardContent>
//                 <Divider inset="none" id="divider" />
//                 <Typography level="title-md">
//                   Duration : {quizinstructions.duration}{" "}
//                 </Typography>
//                 <Typography level="title-md">
//                   Pass Mark : {quizinstructions.passMark}{" "}
//                 </Typography>
//                 <Typography level="title-md">
//                   Attempts Allowed : {quizinstructions.attemptsAllowed}
//                 </Typography>
//                 <Divider inset="none" id="divider" />
//                 <Typography>
//                   <b>Score Card</b>
//                 </Typography>
//                 <Typography>
//                   <b>
//                     Dear {getlearners.learnerFirstName}{" "}
//                     {getlearners.learnerLastName},
//                   </b>
//                 </Typography>
//                 <Typography>
//                   <br></br>
//                 </Typography>
//                 <Typography>
//                   {learnerAttempt ? (
//                     <div className="scorecard">
//                       <h1>The time taken : {learnerAttempt.timeTaken/60}</h1>
//                       {learnerAttempt.isPassed === true ? (
//                         <>
//                           <h1>
//                             Contragulations {getlearners.learnerFirstName}{" "}
//                             {getlearners.learnerLastName}❗🎉
//                           </h1>
//                           <h1>
//                             You Passed the {quizinstructions.nameOfQuiz}
//                             Assessment
//                           </h1>

//                           <h1>Your Score is {learnerAttempt.score} </h1>

//                           <div>
//                             <div class="emoji emoji--haha">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth">
//                                   <div class="emoji__tongue"></div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div class="emoji emoji--yay">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                             <div class="emoji emoji--wow">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                           </div>
//                           <>
//                             <div>
//                               <Button
//                                 variant="default"
//                                 style={{
//                                   backgroundColor: "#365486",
//                                   color: "whitesmoke",
//                                   width: "150px",
//                                   marginLeft: "50%",

//                                 }}
//                                 onClick={() => {
//                                   navigate("/quizengine");
//                                 }}
//                               >
//                                 Go To Course
//                               </Button>
//                             </div>
//                           </>
//                         </>
//                       ) : (
//                         <>
//                           <h3>
//                             OOPS☹❗ You not cleared the{" "}
//                             {quizinstructions.nameOfQuiz} Assessment
//                           </h3>

//                           <h5>Your Score is {learnerAttempt.score} </h5>

//                           <div class="emoji emoji--sad">
//                             <div class="emoji__face">
//                               <div class="emoji__eyebrows"></div>
//                               <div class="emoji__eyes"></div>
//                               <div class="emoji__mouth"></div>
//                             </div>
//                           </div>
//                           {quizinstructions.attemptsAllowed -
//                             learnerAttempt.currentAttempt ===
//                           0 ? (
//                             <>

//                               <h5>Your Attempt is over...</h5>
//                             </>
//                           ) : (
//                             <>
//                               <h5>
//                                 You have only{" "}
//                                 {quizinstructions.attemptsAllowed -
//                                   learnerAttempt.currentAttempt}{" "}
//                                 more attempts to finish the quiz...
//                               </h5>
//                               <h5>
//                             You can retake the quiz now or again revise the
//                             courses
//                           </h5>
//                               <div
//                                 style={{ marginLeft: "-1%", marginTop: "20%" }}
//                               >
//                                 <Button
//                                   variant="default"
//                                   style={{
//                                     backgroundColor: "#365486",
//                                     color: "whitesmoke",
//                                     width: "150px",
//                                     marginLeft: "60%",
//                                     marginTop: "-150px"
//                                   }}
//                                   onClick={() => {
//                                     navigate("/instruction");
//                                   }}
//                                 >
//                                   Retake Quiz
//                                 </Button>
//                               </div>
//                               <div
//                                 style={{
//                                   marginLeft: "-210%",
//                                   marginTop: "-6%",
//                                 }}
//                               >
//                                 <Button
//                                   variant="default"
//                                   style={{
//                                     backgroundColor: "#365486",
//                                     color: "whitesmoke",
//                                     width: "150px",
//                                     marginLeft: "70%",
//                                     marginTop: "-120px"
//                                   }}
//                                   onClick={() => {
//                                     navigate("/quizengine");
//                                   }}
//                                 >
//                                   Go To Course
//                                 </Button>
//                               </div>
//                             </>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <p>Loading learner data...</p>
//                   )}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         </Container>
//       </div>
//     </div>
//     </Container>
//   );
// };

// export default LearnerScorePage;

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import AdminNavbar from "./AdminNavbar";
// import "../../../Styles/Quiz And Feedback Module/QuizInstruction.css";
// import { Container } from "react-bootstrap";
// import Divider from "@mui/joy/Divider";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizInstructionRequest } from "../../../actions/Quiz And Feedback Module/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../actions/Quiz And Feedback Module/GetLearnerIDAction";
// import { fetchlearnerscoreRequest } from "../../../actions/Quiz And Feedback Module/LearnerScorePageAction";
// // import "../../../Styles/Quiz And Feedback Module/LearnerScorePage.css";

// export const LearnerScorePage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const topicId = sessionStorage.getItem("topicId");
//   const quizinstructions = useSelector(
//     (state) => state.fetchquizinstruction.quizinstructiondetails
//   );

//   const learnerId = sessionStorage.getItem("UserSessionID");
//   const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
//   console.log(getlearners);

//   const learnersAttemptId = sessionStorage.getItem("learnerAttemptId");
//   const learnerAttempt = useSelector(
//     (state) => state.learnerscore.learnerscoredetails
//   );
//   console.log("hi,", learnerAttempt);

//   useEffect(() => {
//     dispatch(fetchQuizInstructionRequest(topicId));
//     dispatch(fetchlearneridRequest(learnerId));
//     debugger;
//     dispatch(fetchlearnerscoreRequest(learnersAttemptId));
//   }, [dispatch]);

//   const divStyle = {
//     boxShadow: "0px 4px 8px #23275c",
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <div class="container">
//         <div>
//           <button
//             class="btn btn-light"
//             style={{
//               marginLeft: "100%",
//               marginTop: "60%",
//               backgroundColor: "#365486",
//               color: "white",
//               width: "50",
//             }}
//           >
//             Back
//           </button>
//         </div>
//         {/* <AdminNavbar /> */}
//         <Container fluid id="container" style={divStyle}>
//           <Box
//             id="instruction"
//             sx={{
//               width: "100%",
//               maxWidth: 500,
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//               gap: 2,
//             }}
//           >
//             <Card style={{ height: "50px", marginLeft: "-14%" }} variant="soft">
//               <CardContent>
//                 <Typography level="title-md">
//                   {quizinstructions.nameOfQuiz} Assessment Result
//                 </Typography>
//               </CardContent>
//             </Card>
//             <Card id="card" variant="soft">
//               <CardContent>
//                 <Divider inset="none" id="divider" />
//                 <Typography level="title-md">
//                   Duration : {quizinstructions.duration}{" "}
//                 </Typography>
//                 <Typography level="title-md">
//                   Pass Mark : {quizinstructions.passMark}{" "}
//                 </Typography>
//                 <Typography level="title-md">
//                   Attempts Allowed : {quizinstructions.attemptsAllowed}
//                 </Typography>
//                 <Divider inset="none" id="divider" />
//                 <Typography>
//                   <b>Score Card</b>
//                 </Typography>
//                 <Typography>
//                   <b>
//                     Dear {getlearners.learnerFirstName}{" "}
//                     {getlearners.learnerLastName},
//                   </b>
//                 </Typography>
//                 <Typography>
//                   <br></br>
//                 </Typography>
//                 <Typography>
//                   {learnerAttempt ? (
//                     <div className="scorecard">
//                       {learnerAttempt.score > quizinstructions.passMark ? (
//                         <>
//                           <h1>
//                             Contragulations {getlearners.learnerFirstName}{" "}
//                             {getlearners.learnerLastName}❗🎉
//                           </h1>
//                           <h1>
//                             You Passed the {quizinstructions.nameOfQuiz}
//                             Assessment
//                           </h1>
//                           <h1>Your Score is {learnerAttempt.score} </h1>
//                           <div>
//                             <div class="emoji emoji--haha">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth">
//                                   <div class="emoji__tongue"></div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div class="emoji emoji--yay">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                             <div class="emoji emoji--wow">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <h3>
//                             OOPS☹❗ You not cleared the{" "}
//                             {quizinstructions.nameOfQuiz} Assessment
//                           </h3>
//                           <h5>
//                             You can retake the quiz now or again revise the
//                             courses
//                           </h5>
//                           <h1>Your Score is {learnerAttempt.score} </h1>
//                           <div class="emoji emoji--sad">
//                             <div class="emoji__face">
//                               <div class="emoji__eyebrows"></div>
//                               <div class="emoji__eyes"></div>
//                               <div class="emoji__mouth"></div>
//                             </div>
//                           </div>
//                           <div style={{ marginLeft: "-1%", marginTop: "20%" }}>
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/instruction");
//                               }}
//                             >
//                               Retake Quiz
//                             </Button>
//                           </div>
//                           <div
//                             style={{ marginLeft: "-210%", marginTop: "-6%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/quizengine");
//                               }}
//                             >
//                               Go To Course
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <p>Loading learner data...</p>
//                   )}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default LearnerScorePage;

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import AdminNavbar from "./AdminNavbar";
// import "../../../Styles/Quiz And Feedback Module/QuizInstruction.css";
// import { Container } from "react-bootstrap";
// import Divider from "@mui/joy/Divider";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizInstructionRequest } from "../../../actions/Quiz And Feedback Module/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../actions/Quiz And Feedback Module/GetLearnerIDAction";
// import { fetchlearnerscoreRequest } from "../../../actions/Quiz And Feedback Module/LearnerScorePageAction";
// // import "../../../Styles/Quiz And Feedback Module/LearnerScorePage.css";

// export const LearnerScorePage = () => {
//  const dispatch = useDispatch();
//  const navigate = useNavigate();

//  const topicId = sessionStorage.getItem("topicId");
//  const quizinstructions = useSelector(
//    (state) => state.fetchquizinstruction.quizinstructiondetails
//  );

//  const learnerId = sessionStorage.getItem("UserSessionID");
//  const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
//  console.log(getlearners);

// //  const learnerAttemptId = sessionStorage.getItem("learnerAttemptId");
// //  const learnersAttemptId = useSelector(
// //    (state) => state.learnerscore.learnerscoredetails
// //  );
// //  console.log("hil,", learnersAttemptId);

//   const learnerattemptid=useSelector(
//     (state)=>state.learnerattempt.attemptId
//   );
//   console.log("learnerattemptid",learnerattemptid)

//  useEffect(() => {
//    dispatch(fetchQuizInstructionRequest(topicId));
//    dispatch(fetchlearneridRequest(learnerId));
//   //  debugger;
//   //  dispatch(fetchlearnerscoreRequest(learnerAttemptId));
//  }, [dispatch]);

//  const divStyle = {
//    boxShadow: "0px 4px 8px #23275c",
//  };

//     return (
//       <div>
//           <AdminNavbar />

//         <div class="container">
//       <div >
//         <button
//           class="btn btn-light"
//           style={{
//             marginLeft: "100%",
//             marginTop: "60%",
//             backgroundColor: "#365486",
//             color: "white",
//             width: "50",
//           }}
//           // onClick={() => {handleNavigate();}}
//         >
//           Back
//         </button>
//       </div>

//       <Container fluid id="container" style={divStyle}>
//         <Box
//           id="instruction"
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: 2,
//           }}
//         >
//           <Card style={{ height: "50px", marginLeft: "-14%" }} variant="soft">
//             <CardContent>
//               <Typography level="title-md">
//                 {quizinstructions.nameOfQuiz} Assessment Result
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card id="card" variant="soft">
//             <CardContent>
//               <Divider inset="none" id="divider" />
//               <Typography level="title-md">
//                 Duration : {quizinstructions.duration}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Pass Mark : {quizinstructions.passMark}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Attempts Allowed : {quizinstructions.attemptsAllowed}
//               </Typography>
//               <Divider inset="none" id="divider" />
//               <Typography>
//                 <b>Score Card</b>
//               </Typography>
//               <Typography>
//                 <b>
//                   Dear {getlearners.learnerFirstName}{" "}
//                   {getlearners.learnerLastName},
//                 </b>
//               </Typography>
//               <Typography>
//                 <br></br>
//               </Typography>
//  <Typography>
//                   {learnerattemptid ? (
//                     <div className="scorecard">
//                       {learnerattemptid.score >= quizinstructions.passMark ? (
//                         <>
//                           <h1>
//                             Contragulations {getlearners.learnerFirstName}{" "}
//                             {getlearners.learnerLastName}❗🎉
//                           </h1>
//                           <h1>
//                             You Passed the {quizinstructions.nameOfQuiz}
//                             Assessment
//                           </h1>
//                           <h1>Your Score is {learnerattemptid.score} </h1>
//                           <div>
//                             <div class="emoji emoji--haha">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth">
//                                   <div class="emoji__tongue"></div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div class="emoji emoji--yay">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                             <div class="emoji emoji--wow">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <>

//                           <h3>
//                             OOPS☹❗ You not cleared the{" "}
//                             {quizinstructions.nameOfQuiz} Assessment
//                           </h3>
//                            <h5>You can retake the quiz now or again revise the courses</h5>
//                           {/* <div class="emoji emoji--sad">
//                             <div class="emoji__face">
//                               <div class="emoji__eyebrows"></div>
//                               <div class="emoji__eyes"></div>
//                               <div class="emoji__mouth"></div>
//                             </div>
//                           </div> */}
//                           <div
//                             style={{ marginLeft: "-1%", marginTop: "20%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/instruction");
//                               }}
//                             >
//                               Retake Quiz
//                             </Button>
//                           </div>
//                           <div
//                             style={{ marginLeft: "-210%", marginTop: "-6%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/quizengine");
//                               }}
//                             >
//                               Go To Course
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <p>Loading learner data...</p>
//                   )}
//                 </Typography>

//             </CardContent>
//           </Card>
//         </Box>
//       </Container>
//     </div>
//     </div>
//   );

// };

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import AdminNavbar from "./AdminNavbar";
// import "../../../Styles/Quiz And Feedback Module/QuizInstruction.css";
// import { Container } from "react-bootstrap";
// import Divider from "@mui/joy/Divider";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizInstructionRequest } from "../../../actions/Quiz And Feedback Module/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../actions/Quiz And Feedback Module/GetLearnerIDAction";
// import { fetchlearnerscoreRequest } from "../../../actions/Quiz And Feedback Module/LearnerScorePageAction";
// import "../../../Styles/Quiz And Feedback Module/LearnerScorePage.css";

// export const LearnerScorePage = () => {
//  const dispatch = useDispatch();
//  const navigate = useNavigate();

//  const topicId = sessionStorage.getItem("topicId");
//  const quizinstructions = useSelector(
//    (state) => state.fetchquizinstruction.quizinstructiondetails
//  );

//  const learnerId = sessionStorage.getItem("UserSessionID");
//  const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
//  console.log(getlearners);

//  const learnerAttemptId = sessionStorage.getItem("learnerAttemptId");
//  const learnersAttemptId = useSelector(
//    (state) => state.learnerscore.learnerscoredetails
//  );
//  console.log("ScorePage Attempt ID :,", learnersAttemptId);

//  useEffect(() => {
//    dispatch(fetchQuizInstructionRequest(topicId));
//    dispatch(fetchlearneridRequest(learnerId));
//    debugger;
//    dispatch(fetchlearnerscoreRequest(learnerAttemptId));
//  }, [dispatch]);

//  const divStyle = {
//    boxShadow: "0px 4px 8px #23275c",
//  };

//     return (
//       <div>
//           <AdminNavbar />

//         <div class="container-score">
//       <div >
//         <button
//           class="btn btn-light"
//           style={{
//             marginLeft: "100%",
//             marginTop: "60%",
//             // backgroundColor: "#365486",
//             color: "white",
//             width: "50",
//           }}
//           // onClick={() => {handleNavigate();}}
//         >
//           {/* Back */}
//         </button>
//       </div>

//       <Container fluid id="container" style={divStyle}>
//         <Box
//           id="instruction"
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: 2,
//           }}
//         >
//           <Card style={{ height: "50px", marginLeft: "-14%" }} variant="soft">
//             <CardContent>
//               <Typography level="title-md">
//                 {quizinstructions.nameOfQuiz} Assessment Result
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card id="card" variant="soft">
//             <CardContent>
//               <Divider inset="none" id="divider" />
//               <Typography level="title-md">
//                 Duration : {quizinstructions.duration}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Pass Mark : {quizinstructions.passMark}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Attempts Allowed : {quizinstructions.attemptsAllowed}
//               </Typography>
//               <Divider inset="none" id="divider" />
//               <Typography>
//                 <b>Score Card</b>
//               </Typography>
//               <Typography>
//                 <b>
//                   Dear {getlearners.learnerFirstName}{" "}
//                   {getlearners.learnerLastName},
//                 </b>
//               </Typography>
//               <Typography>
//                 <br></br>
//               </Typography>
//  <Typography>
//                   {learnersAttemptId ? (
//                     <div className="scorecard">
//                       {learnersAttemptId.score >= quizinstructions.passMark ? (
//                         <>
//                           <h1>
//                             Contragulations {getlearners.learnerFirstName}{" "}
//                             {getlearners.learnerLastName}❗🎉
//                           </h1>
//                           <h1>
//                             You Passed the {quizinstructions.nameOfQuiz}
//                             Assessment
//                           </h1>
//                           <h1>Your Score is {learnersAttemptId.score} </h1>
//                           <div>
//                             <div class="emoji emoji--haha">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth">
//                                   <div class="emoji__tongue"></div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div class="emoji emoji--yay">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                             <div class="emoji emoji--wow">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <>

//                           <h3>
//                             OOPS☹❗ You have not cleared the{" "}
//                             {quizinstructions.nameOfQuiz} Assessment
//                           </h3>
//                            <h5>You can retake the quiz or again revise the course</h5>
//                           {/* <div class="emoji emoji--sad">
//                             <div class="emoji__face">
//                               <div class="emoji__eyebrows"></div>
//                               <div class="emoji__eyes"></div>
//                               <div class="emoji__mouth"></div>
//                             </div>
//                           </div> */}
//                           <div
//                             style={{ marginLeft: "-1%", marginTop: "-3%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                                 marginBottom: "-56%"
//                               }}
//                               onClick={() => {
//                                 navigate("/instruction");
//                               }}
//                             >
//                               Retake Quiz
//                             </Button>
//                           </div>
//                           <div
//                             style={{ marginLeft: "-210%", marginTop: "-6%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                                 marginBottom: "-20%"

//                               }}
//                               onClick={() => {
//                                 navigate("/quizengine");
//                               }}
//                             >
//                               Go To Course
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     // <p>Loading learner data...</p>
//                     <p></p>
//                   )}
//                 </Typography>

//             </CardContent>
//           </Card>
//         </Box>
//       </Container>
//     </div>
//     </div>
//   );

// };

// export default LearnerScorePage;

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import AdminNavbar from "./AdminNavbar";
// import "../../../Styles/Quiz And Feedback Module/QuizInstruction.css";
// import { Container } from "react-bootstrap";
// import Divider from "@mui/joy/Divider";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizInstructionRequest } from "../../../actions/Quiz And Feedback Module/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../actions/Quiz And Feedback Module/GetLearnerIDAction";
// import { fetchlearnerscoreRequest } from "../../../actions/Quiz And Feedback Module/LearnerScorePageAction";
// // import "../../../Styles/Quiz And Feedback Module/LearnerScorePage.css";

// export const LearnerScorePage = () => {
//  const dispatch = useDispatch();
//  const navigate = useNavigate();

//  const topicId = sessionStorage.getItem("topicId");
//  const quizinstructions = useSelector(
//    (state) => state.fetchquizinstruction.quizinstructiondetails
//  );

//  const learnerId = sessionStorage.getItem("UserSessionID");
//  const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
//  console.log(getlearners);

// //  const learnerAttemptId = sessionStorage.getItem("learnerAttemptId");
// //  const learnersAttemptId = useSelector(
// //    (state) => state.learnerscore.learnerscoredetails
// //  );
// //  console.log("hil,", learnersAttemptId);

//   const learnerattemptid=useSelector(
//     (state)=>state.learnerattempt.attemptId
//   );
//   console.log("learnerattemptid",learnerattemptid)

//   const score=useSelector(
//     (state)=>state.learnerscore.learnerscoredetails
//   );
//   console.log("learnerscore",score.score)

//  useEffect(() => {
//    dispatch(fetchQuizInstructionRequest(topicId));
//    dispatch(fetchlearneridRequest(learnerId));
//     // dispatch(fetchlearnerscoreRequest(learnerattemptid));
//   //  debugger;
//   //  dispatch(fetchlearnerscoreRequest(learnerAttemptId));
//  }, [dispatch]);

//  const divStyle = {
//    boxShadow: "0px 4px 8px #23275c",
//  };

//     return (
//       <div>
//           <AdminNavbar />

//         <div class="container">
//       <div >
//         <button
//           class="btn btn-light"
//           style={{
//             marginLeft: "100%",
//             marginTop: "60%",
//             backgroundColor: "#365486",
//             color: "white",
//             width: "50",
//           }}
//           // onClick={() => {handleNavigate();}}
//         >
//           Back
//         </button>
//       </div>

//       <Container fluid id="container" style={divStyle}>
//         <Box
//           id="instruction"
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: 2,
//           }}
//         >
//           <Card style={{ height: "50px", marginLeft: "-14%" }} variant="soft">
//             <CardContent>
//               <Typography level="title-md">
//                 {quizinstructions.nameOfQuiz} Assessment Result
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card id="card" variant="soft">
//             <CardContent>
//               <Divider inset="none" id="divider" />
//               <Typography level="title-md">
//                 Duration : {quizinstructions.duration}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Pass Mark : {quizinstructions.passMark}{" "}
//               </Typography>
//               <Typography level="title-md">
//                 Attempts Allowed : {quizinstructions.attemptsAllowed}
//               </Typography>
//               <Divider inset="none" id="divider" />
//               <Typography>
//                 <b>Score Card</b>
//               </Typography>
//               <Typography>
//                 <b>
//                   Dear {getlearners.learnerFirstName}{" "}
//                   {getlearners.learnerLastName},
//                 </b>
//               </Typography>
//               <Typography>
//                 <br></br>
//               </Typography>
//              <Typography>
//                   {learnerattemptid ? (
//                     <div className="scorecard">
//                       {score.score>= quizinstructions.passMark ? (
//                         <>
//                           <h1>
//                             Contragulations {getlearners.learnerFirstName}{" "}
//                             {getlearners.learnerLastName}❗🎉
//                           </h1>
//                           <h1>
//                             You Passed the {quizinstructions.nameOfQuiz}
//                             Assessment
//                           </h1>
//                           <h1>Your Score is {score.score} </h1>
//                           <div>
//                             <div class="emoji emoji--haha">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth">
//                                   <div class="emoji__tongue"></div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div class="emoji emoji--yay">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                             <div class="emoji emoji--wow">
//                               <div class="emoji__face">
//                                 <div class="emoji__eyebrows"></div>
//                                 <div class="emoji__eyes"></div>
//                                 <div class="emoji__mouth"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <>

//                           <h3>
//                             OOPS☹❗ You not cleared the{" "}
//                             {quizinstructions.nameOfQuiz} Assessment
//                           </h3>
//                            <h5>You can retake the quiz now or again revise the courses</h5>
//                           {/* <div class="emoji emoji--sad">
//                             <div class="emoji__face">
//                               <div class="emoji__eyebrows"></div>
//                               <div class="emoji__eyes"></div>
//                               <div class="emoji__mouth"></div>
//                             </div>
//                           </div> */}
//                           <div
//                             style={{ marginLeft: "-1%", marginTop: "20%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/instruction");
//                               }}
//                             >
//                               Retake Quiz
//                             </Button>
//                           </div>
//                           <div
//                             style={{ marginLeft: "-210%", marginTop: "-6%" }}
//                           >
//                             <Button
//                               variant="default"
//                               style={{
//                                 backgroundColor: "#365486",
//                                 color: "whitesmoke",
//                                 width: "150px",
//                                 marginLeft: "50%",
//                               }}
//                               onClick={() => {
//                                 navigate("/quizengine");
//                               }}
//                             >
//                               Go To Course
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <p>Loading learner data...</p>
//                   )}
//                 </Typography>

//             </CardContent>
//           </Card>
//         </Box>
//       </Container>
//     </div>
//     </div>
//   );

// };

// export default LearnerScorePage;
