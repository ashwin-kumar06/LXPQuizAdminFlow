import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Box from "@mui/joy/Box";
import { Card } from '@mui/joy';
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

// import "../../../../Styles/Quiz And Feedback Module/Learner/QuizInstruction.css";
import { Container } from "react-bootstrap";
import Divider from "@mui/joy/Divider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizInstructionRequest } from "../../../../actions/Quiz And Feedback Module/Learner/QuizInstructionAction";
import { CreateAttemptRequest } from "../../../../actions/Quiz And Feedback Module/Learner/AttemptQuizAction";
import { fetchlearneridRequest } from "../../../../actions/Quiz And Feedback Module/Learner/GetLearnerIDAction";

function QuizInstruction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topicId = sessionStorage.getItem("topicId");
  
  const LearnerId = sessionStorage.getItem("UserSessionID");
  // const AttemptId = sessionStorage.getItem("AttemptId");
  const quizinstructions = useSelector(
    (state) => state.fetchquizinstruction.quizinstructiondetails
  );
  // const quizId = sessionStorage.getItem("quizId");
  const quizId=quizinstructions.quizId;
  console.log(quizinstructions)

  const learnerId = sessionStorage.getItem("UserSessionID");
  const getlearners = useSelector((state) => state.fetchlearnerid.learnerId);
  console.log(getlearners);
  const divStyle = {
    boxShadow: "0px 4px 8px #23275c",
  };
  console.log("quizid", quizId);
  console.log("learnerid", LearnerId);
  const [TakeQuiz, setTakeQuiz] = useState({
    learnerId: LearnerId,
    quizId: quizId,
    // attemptId: AttemptId,
  });

  useEffect(() => {
    dispatch(fetchQuizInstructionRequest(topicId));
    dispatch(fetchlearneridRequest(learnerId));
  }, [dispatch]);

  const handleNavigate = () => {
    sessionStorage.removeItem("topicId");
    navigate("/quizengine");
  };

  const handleTakeQuiz = () => {
    sessionStorage.removeItem("selectedOptions");
    sessionStorage.removeItem("reviewData");
    sessionStorage.removeItem("answeredQuestions");

    sessionStorage.setItem("quizId", quizId);
    sessionStorage.setItem("LearnerId", LearnerId);

    dispatch(CreateAttemptRequest(TakeQuiz));
    navigate("/attemptquiz");
  };

  return (
    <Container fluid style={{ marginTop: "700px" }}>
      <div>
        <div>
          <button
            class="btn btn-light"
            style={{
              marginLeft: "95%",
              marginTop: "5%",
              backgroundColor: "#365486",
              color: "white",
              width: "50",
            }}
            onClick={() => {
              handleNavigate();
            }}
          >
            Back
          </button>
        </div>
        {/* <AdminNavbar /> */}
        <Container fluid id="container" style={divStyle}>
          <Box
            id="instruction"
            sx={{
              width: "100%",
              maxWidth: 500,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 2,
            }}
          >
            <Card style={{ height: "50px", marginLeft: "-13%" }} variant="soft">
              <CardContent>
                <Typography level="title-md">
                  {quizinstructions.nameOfQuiz} Assessment
                </Typography>
              </CardContent>
            </Card>

            <Card id="card" variant="soft">
              <CardContent>
                <Divider inset="none" id="divider" />
                <Typography level="title-md">
                  Duration : {quizinstructions.duration} (In Minutes)
                </Typography>
                <Typography level="title-md">
                  Pass Mark : {quizinstructions.passMark}{" "}
                </Typography>
                <Typography level="title-md">
                  Attempts Allowed : {quizinstructions.attemptsAllowed}
                </Typography>
                <Divider inset="none" id="divider" />
                <Typography>
                  <b>Quiz Instruction</b>
                </Typography>
                <Typography>
                  <b>
                    Dear {getlearners.learnerFirstName}{" "}
                    {getlearners.learnerLastName},
                  </b>
                </Typography>
                <Typography>
                  <li>
                    The quizzes consists of questions carefully designed to help
                    you self-assess your comprehension of the information
                    presented on the topics covered in the course.
                  </li>
                </Typography>
                <Typography>
                  <li>
                    Each question in the quiz consists of "multiple-choice
                    question" (Mcq) , "multi-select question" (MSQ) or "True Or
                    False" T/F format. Read each question carefully, and attempt
                    the quiz
                  </li>
                </Typography>
                <Typography>
                  <li>
                    In "multi-select question(MSQ)" , You have to choose more
                    than one option. If your chosen answer is partially correct
                    means you will get half mark{" "}
                  </li>
                </Typography>
                <Typography>
                  <b>All the Best !</b>
                </Typography>
              </CardContent>
            </Card>
            <div style={{ marginLeft: "100%" }}>
              <Button
                onClick={handleTakeQuiz}
                variant="default"
                style={{
                  backgroundColor: "#365486",
                  color: "whitesmoke",
                  width: "150px",
                }}
              >
                Attempt Quiz
              </Button>
            </div>
          </Box>
        </Container>
      </div>
    </Container>
  );
}

export default QuizInstruction;






























// import React from "react";
// import { useEffect,useState } from "react";
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
// import { fetchQuizInstructionRequest} from "../../../actions/Quiz And Feedback Module/QuizInstructionAction";
// import { CreateAttemptRequest } from "../../../actions/Quiz And Feedback Module/AttemptQuizAction";
// // import { fetchQuizInstructionRequest } from "../../actions/QuizInstructionAction";
// import { fetchlearneridRequest } from "../../../actions/Quiz And Feedback Module/GetLearnerIDAction";

// function QuizInstruction() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const topicId = sessionStorage.getItem("topicId");
//   const quizId = sessionStorage.getItem("quizId");
//   const LearnerId = sessionStorage.getItem("LearnerId");
//   const AttemptId = sessionStorage.getItem("AttemptId");
//   const quizinstructions = useSelector(
//     (state) => state.fetchquizinstruction.quizinstructiondetails
//   );
//   const learnerId = sessionStorage.getItem("UserSessionID");
//   const getlearners = useSelector(
//     (state) => state.fetchlearnerid.learnerId
//   );
//   console.log(getlearners);
//   const divStyle = {
//     boxShadow: "0px 4px 8px #23275c",
//   };
//   console.log("quizid",quizId);
//   console.log("learnerid",LearnerId);
// const [TakeQuiz,setTakeQuiz]=useState({
//   learnerId:LearnerId,
//   quizId:quizId,
//   attemptId:AttemptId
// })
//   useEffect(() => {
//     dispatch(fetchQuizInstructionRequest(topicId));
//     dispatch(fetchlearneridRequest(learnerId));
//   }, [dispatch]);

//   const handleNavigate = () => {
//     sessionStorage.removeItem("topicId");
//     navigate("/quizengine");
//   };
// //  console.log("takequiz");
//   const handleTakeQuiz=()=>{
//      sessionStorage.removeItem('selectedOptions');
//      sessionStorage.removeItem('reviewData');
//     //  sessionStorage.removeItem('answeredQuestions');

//      sessionStorage.setItem("quizId",quizId);
//      sessionStorage.setItem("LearnerId",LearnerId);

//      dispatch(CreateAttemptRequest(TakeQuiz));
//      navigate("/attemptquiz");
//   }

//   return (
//     <div>
//       <div>
//         <button
//           class="btn btn-light"
//           style={{
//             marginLeft: "95%",
//             marginTop: "5%",
//             backgroundColor: "#365486",
//             color: "white",
//             width: "50",
//           }}
//           onClick={() => {
//             handleNavigate();
//           }}
//         >
//           Back
//         </button>
//       </div>
//       <AdminNavbar />
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
//           <Card  style={{ height: "50px" , marginLeft:"-13%" }} variant="soft">
//             <CardContent>
//               <Typography level="title-md">
//                 {quizinstructions.nameOfQuiz} Assessment
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
//                 <b>Quiz Instruction</b>
//               </Typography>
//               <Typography>
//               <b>
//                   Dear {getlearners.learnerFirstName}
//                   {" "}
//                   {getlearners.learnerLastName},
//                 </b>
//               </Typography>
//               <Typography>
//                 <li>
//                   The quizzes consists of questions carefully designed to help
//                   you self-assess your comprehension of the information
//                   presented on the topics covered in the course.
//                 </li>
//               </Typography>
//               <Typography>
//                 <li>
//                   Each question in the quiz consists of "multiple-choice
//                   question" (Mcq) , "multi-select question" (MSQ) or "True Or
//                   False" T/F format. Read each question carefully, and attempt
//                   the quiz
//                 </li>
//               </Typography>
//               <Typography>
//                 <li>
//                   In "multi-select question(MSQ)" , You have to choose more than
//                   one option. If your chosen answer is partially correct means
//                   you will get half mark{" "}
//                 </li>
//               </Typography>
//               <Typography>
//                 <b>All the Best !</b>
//               </Typography>
//             </CardContent>
//           </Card>
//           <div style={{ marginLeft: "100%" }}>
//             <Button
//              onClick={handleTakeQuiz}
//               variant="default"
//               style={{
//                 backgroundColor: "#365486",
//                 color: "whitesmoke",
//                 width: "150px",
//               }}
//             >
//               Attempt Quiz
//             </Button>
//           </div>
//         </Box>
//       </Container>
//     </div>
//   );
// }
// export default QuizInstruction;
