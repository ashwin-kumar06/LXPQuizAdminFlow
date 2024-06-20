// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import AdminNavbar from './AdminNavbar';
// import '../../../Styles/Quiz And Feedback Module/QuizEditor.css';
// import Button from 'react-bootstrap/Button';
// import { fetchallquizfeedbackRequest } from '../../../actions/Quiz And Feedback Module/GetAllQuizFeedbackAction';
// import { quizfeedbackresponserequest } from '../../../actions/Quiz And Feedback Module/QuizFeedbackResponseAction';
// import { Container } from 'react-bootstrap';
 
 
 
// const FetchQuizFeedbackQuestion = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const quizfeedbackquestionfetch = useSelector(
//     (state) => state.fetchfeedback.quizfeedback
//   );
//   console.log("selector", quizfeedbackquestionfetch);
//   //console.log("selector12", quizfeedbackquestionfetch.questionNo);
//   // const quizId = "6e84d8f1-1230-416a-bde4-d115d15a23cf";
 
//  const quizId = useSelector((state) => state.quizId.quizId);
//  console.log("fetch quiz id",quizId);
//   useEffect(() => {
//     dispatch(fetchallquizfeedbackRequest(quizId));
 
//   }, [quizId])
 
 
 
 
//   const [answers, setAnswers] = useState(quizfeedbackquestionfetch.map(question => ({
//     quizFeedbackQuestionId: question.quizFeedbackQuestionId,
//     quizId: question.quizId,
//     learnerId: "b9c313df-f48b-43ce-9c12-8a4c4546aad3",
//     response: "",
//     optionText: ""
//   })));
//   console.log("uestate", answers);
//    // Handle change for both MCQ and text responses
//    const onhandleChange = (questionId, optionType, optionValue) => {
//     setAnswers(answers.map(answer =>
//       answer.quizFeedbackQuestionId === questionId ?
//         { ...answer, [optionType]: optionValue } :
//         answer
//     ));
//   };
//   const onhandleResponse = (questionId, optionType) => (e) => {
//     const { value } = e.target;
//     setAnswers(answers.map(answer =>
//       answer.quizFeedbackQuestionId === questionId ?
//         { ...answer, [optionType]: value } :
//         answer
//     ));
//   };
//   // Submit all answers
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Replace with your actual submit logic
//     console.log("Submitting answers:", answers);
//     dispatch(quizfeedbackresponserequest(answers))
//   };
 
//   const handleNavigate = () => {
//     sessionStorage.removeItem("quizId");
//     navigate("/quizengine");
//   };
 
//   const divStyle = {
//     boxShadow: "0px 4px 8px #23275c",
//   };
 
//   return (
//     <div>
//       <AdminNavbar />
//       <div className="question template container" id="fq">
//         <div>
//           <button
//             class="btn btn-light"
//             style={{
//               marginLeft: "100%",
//               marginTop: "8%",
//               backgroundColor: "#365486",
//               color: "white",
//               width: "50",
//             }}
//             onClick={() => {
//               handleNavigate();
//             }}
//           >
//             Back
//           </button>
//         </div>
//         <h4 className="card-title">Quiz Feedback</h4>
//         <div>
//         <Container fluid style={divStyle}>
//         {quizfeedbackquestionfetch && quizfeedbackquestionfetch.map((quizfeedbackquestions, index) => (
//            <div className='cont mt-2'>
//           <div className="card mt-5" key={index}>
//             <div className="card-body">
//               <h6 className="card-title">Question {quizfeedbackquestions.questionNo}</h6>
//               <input
//                 value={quizfeedbackquestions.question}
//                 className="form-control"
//                 readOnly
//               />
//               <div className="card-body">
//                 <div className="form-group">
//                   <h6 className='card-title'>Options:</h6>
//                   {quizfeedbackquestions.questionType === 'MCQ' ? (
//                     quizfeedbackquestions.options.map((option, optionIndex) => (
//                       <div key={optionIndex}>
//                         <input
//                           type="radio"
//                           onChange={() => onhandleChange(quizfeedbackquestions.quizFeedbackQuestionId, 'optionText', option.optionText)}
//                           value={option.optionText}
//                           name={`option_${quizfeedbackquestions.quizFeedbackQuestionId}`} // Unique name for each question
//                         />
//                         <label>{option.optionText}</label>
//                       </div>
//                     ))
//                   ) : (
//                     <textarea
//                       onChange={onhandleResponse(quizfeedbackquestions.quizFeedbackQuestionId, 'response')}
//                       value={answers.find(answer => answer.quizFeedbackQuestionId === quizfeedbackquestions.quizFeedbackQuestionId)?.response}
//                       name='response'
//                       className="form-control"
//                     />
//                   )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* <Button onClick={handleSubmit}>Submit</Button> */}
//         <Button
//           type='submit'
//           onClick={handleSubmit}
//           className="btn btn-light mt-3 mb-5 float-right"
//           style={{
//             backgroundColor: "#365486",
//             color: "white",
//             marginLeft: "95%",
//           }}
//         >
//           Submit
//         </Button>
//         </Container>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default FetchQuizFeedbackQuestion;


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import '../../../../Styles/Quiz And Feedback Module/Learner/FeedbackResponse.css';
import Button from 'react-bootstrap/Button';
import { fetchallquizfeedbackRequest } from '../../../../actions/Quiz And Feedback Module/Learner/GetAllQuizFeedbackAction';
import { fetchquizfeedbackquestionrequest } from '../../../../actions/Quiz And Feedback Module/Learner/FetchQuizFeedbackQuestionAction';
import { quizfeedbackresponserequest } from '../../../../actions/Quiz And Feedback Module/Learner/QuizFeedbackResponseAction';
import { Container } from 'react-bootstrap';
 
 
const FetchQuizFeedbackQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizfeedbackquestionfetch = useSelector(
    (state) => state.fetchquizfeedbackquestion.quizfeedbackquestions
  );
  console.log("selector", quizfeedbackquestionfetch);
  // const quizId = "6e84d8f1-1230-416a-bde4-d115d15a23cf";
 
 const quizId = useSelector((state) => state.quizId.quizId);
 console.log("fetch quiz id",quizId);
  useEffect(() => {
    dispatch(fetchallquizfeedbackRequest(quizId));
 
  }, [quizId])


   useEffect(() => {
    dispatch(fetchquizfeedbackquestionrequest(quizId));
 
  }, [quizId])
 
 
 
const[answers,setAnswers]=useState([])
 
  useEffect(() => {
    if (quizfeedbackquestionfetch) {
      setAnswers(quizfeedbackquestionfetch.map(question => ({
        quizFeedbackQuestionId: question.quizFeedbackQuestionId,
        quizId: question.quizId,
        learnerId: "b9c313df-f48b-43ce-9c12-8a4c4546aad3",
        response: "",
        optionText: ""
      })));
    }
  }, [quizfeedbackquestionfetch]);
 
  // sessionStorage.getItem("quizId",quizId);
 
 
 
  // Handle change for both MCQ and text responses
  const onhandleChange = (questionId, optionType, optionValue) => {
    setAnswers(answers.map(answer =>
      answer.quizFeedbackQuestionId === questionId ?
        { ...answer, [optionType]: optionValue } :
        answer
    ));
  };
  const onhandleResponse = (questionId, optionType) => (e) => {
    const { value } = e.target;
    setAnswers(answers.map(answer =>
      answer.quizFeedbackQuestionId === questionId ?
        { ...answer, [optionType]: value } :
        answer
    ));
  };
  // Submit all answers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual submit logic
    console.log("Submitting answers:", answers);
    dispatch(quizfeedbackresponserequest(answers))
  };
 
  const handleNavigate = () => {
    // sessionStorage.removeItem("topicId");
    navigate("/quizengine");
  };
 
  const divStyle = {
    boxShadow: "0px 4px 8px #23275c"
  };
 


  
  return (
 
    <div>
      
      <div className="question template container" id="fq">
        <div>
          <button
            class="btn btn-light"
            style={{
              marginLeft: "100%",
              marginTop: "8%",
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
        <h4 className="card-title">Quiz Feedback</h4>
        <div>
        <Container fluid id="cardstyle" style={divStyle}>
        {quizfeedbackquestionfetch && quizfeedbackquestionfetch.map((quizfeedbackquestions, index) => (
          <div className='cont mt-2'>
          <div className="card mt-3" key={index}>
           
            <div className="card-body">
              <h6 className="card-title">Question {quizfeedbackquestions.questionNo}</h6>
              <input
                value={quizfeedbackquestions.question}
                className="form-control"
                readOnly
              />
              <div className="card-body">
                <div className="form-group">
                  <h6 className='card-title'>Options:</h6>
                  {quizfeedbackquestions.questionType === 'MCQ' ? (
                    quizfeedbackquestions.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <input
                          type="radio"
                          onChange={() => onhandleChange(quizfeedbackquestions.quizFeedbackQuestionId, 'optionText', option.optionText)}
                          value={option.optionText}
                          name={`option_${quizfeedbackquestions.quizFeedbackQuestionId}`} // Unique name for each question
                        />
                        <label>{option.optionText}</label>
                      </div>
                    ))
                  ) : (
                    <textarea
                      onChange={onhandleResponse(quizfeedbackquestions.quizFeedbackQuestionId, 'response')}
                      value={answers.find(answer => answer.quizFeedbackQuestionId === quizfeedbackquestions.quizFeedbackQuestionId)?.response}
                      name='response'
                      className="form-control"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
        {/* <Button onClick={handleSubmit}>Submit</Button> */}
        <Button
          type='submit'
          onClick={handleSubmit}
          className="btn btn-light mt-3 mb-5 float-right"
          style={{
            backgroundColor: "#365486",
            color: "white",
            marginLeft:"45%",
          }}
        >
          Submit
        </Button>
        </Container>
        </div>
      </div>
    </div>
 
  );
};
 
export default FetchQuizFeedbackQuestion;