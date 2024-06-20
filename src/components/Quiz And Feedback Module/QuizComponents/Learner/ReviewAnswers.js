// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';


// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const [localReviewData, setLocalReviewData] = useState(null);

//   useEffect(() => {
//     const storedReviewData = sessionStorage.getItem('reviewData');
//     if (storedReviewData) {
//       setLocalReviewData(JSON.parse(storedReviewData));
//     } else if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   useEffect(() => {
//     if (reviewData) {
//       sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//       setLocalReviewData(reviewData);
//     }
//   }, [reviewData]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     // clearQuizSession();
//     setShowPopup(false);
//     navigate('/learnerscorepage');
//   };

//   const handleNavigate = () => {
//     // clearQuizSession();
//     navigate('/attemptquiz');
//   };

//   // const clearQuizSession = () => {
//   //   sessionStorage.removeItem('selectedOptions');
//   //   sessionStorage.removeItem('reviewData');
//   // };

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const data = localReviewData || reviewData;

//   if (!data || !Array.isArray(data.questionsAndAnswers) || data.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className='review-answer-page'>
//      <AdminNavbar/>
//     <div className="review-container">
//       <br/>
//       <div className="question-grid-container">
//         {data.questionsAndAnswers.length > 0 && (
//           <div className="question-grid">
//             {data.questionsAndAnswers.map((_, index) => (
//               <div
//                 key={index}
//                 className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                 onClick={() => handleSelectQuestion(index)}
//               >
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {data.questionsAndAnswers.map((question, index) => (
//         <div
//           key={question.quizQuestionId}
//           id={`question-${index}`}
//           className="review-question-container"
//         >
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div className="button-container">
//         <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//         <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <button className="popup-close-button" onClick={() => setShowPopup(false)}>×</button>
//             <br/> <br/>
//             <h5>Are you sure you want to submit?</h5>
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {submitLoading && <p>Submitting...</p>}
//       {/* {submitError && <p>Error: {submitError}</p>} */}
//       {submitSuccess && <p>Submitted successfully!</p>}
//     </div>
//     </div>
//   );
// };

// export default ReviewAnswers;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewRequest } from '../../../../actions/Quiz And Feedback Module/Learner/ReviewAction';
import { fetchQuestionsRequest } from '../../../../actions/Quiz And Feedback Module/Learner/AttemptQuizAction';
import { submitAttemptRequest } from '../../../../actions/Quiz And Feedback Module/Learner/SubmitAttemptAction';
// import '../../../../Styles/Quiz And Feedback Module/Learner/ReviewAnswers.css';
import { useNavigate } from 'react-router-dom';

import QuestionNavigationBar from './QuestionNavigationBar'; 
import { Container } from 'react-bootstrap';

const ReviewAnswers = ({ attemptId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reviewData = useSelector((state) => state.Review.reviewData);
    const questions = useSelector((state) => state.AttemptQuiz.questions);
    const loading = useSelector((state) => state.Review.loading);
    const error = useSelector((state) => state.Review.error);
    const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
    const submitError = useSelector((state) => state.SubmitAttempt.error);
    const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
    const AttemptId = reviewData?.learnerAttemptId;
    const [showPopup, setShowPopup] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [localReviewData, setLocalReviewData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [unansweredError, setUnansweredError] = useState(false);

    useEffect(() => {
        const storedReviewData = sessionStorage.getItem('reviewData');
        if (storedReviewData) {
            setLocalReviewData(JSON.parse(storedReviewData));
        } else if (attemptId) {
            dispatch(fetchReviewRequest(attemptId));
        }
        dispatch(fetchQuestionsRequest(sessionStorage.getItem("quizId")));
    }, [dispatch, attemptId]);

    useEffect(() => {
        if (reviewData) {
            sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
            setLocalReviewData(reviewData);
        }
    }, [reviewData]);

    const handleSubmit = () => {
        const allAnswered = questions.every(question => {
            const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId);
            return response && response.selectedOptions && response.selectedOptions.length > 0;
        });

        if (!allAnswered) {
            setUnansweredError(true);
            return;
        }

        if (AttemptId && !isSubmitting) {
            setIsSubmitting(true);
            dispatch(submitAttemptRequest(AttemptId)).then(() => {
                setIsSubmitting(false);
                navigate('/learnerscorepage');
            }).catch(() => {
                setIsSubmitting(false);
            });
            setShowPopup(false);
        } else {
            console.error("Attempt ID is missing or submission is already in progress");
        }
    };

    const handleNavigate = () => {
        navigate('/attemptquiz');
    };

    const handleSelectQuestion = (index) => {
        setSelectedQuestion(index);
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const data = localReviewData || reviewData;

    if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
        return <p>No data available.</p>;
    }

    return (
        <Container fluid style={{marginTop:"700px"}}>
        <div>
            {/* <AdminNavbar /> */}
            <div className="review-container">
                <br />
                <div className="question-navigation-bar">
                    <QuestionNavigationBar
                        questions={questions}
                        selectedOptions={data.questionResponses.reduce((acc, response) => {
                            acc[response.quizQuestionId] = response.selectedOptions || [];
                            return acc;
                        }, {})}
                        currentQuestionIndex={selectedQuestion}
                        onQuestionClick={handleSelectQuestion}
                    />
                </div>

                <div className="review-content">
                    {questions.map((question, index) => {
                        const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId) || {};
                        return (
                            <div
                                key={question.quizQuestionId}
                                id={`question-${index}`}
                                className="review-question-container"
                            >
                                <h5>{index + 1}: {question.question}</h5>
                                <ul className="question-options">
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            <input
                                                type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
                                                name={question.quizQuestionId}
                                                value={option.option}
                                                checked={Array.isArray(response.selectedOptions) ? response.selectedOptions.includes(option.option) : response.selectedOptions === option.option}
                                                readOnly
                                                style={{ cursor: "pointer" }} className="option-type"
                                            />
                                              &nbsp; &nbsp;
                                            {option.option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}

                    <div className="button-container">
                        <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
                        <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
                    </div>

                    {/* {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                {unansweredError && <p className="error-message">Please answer all questions before submitting.</p>}
                                <p>Are you sure you want to submit?</p>
                                <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </div>
                        </div>
                    )} */}
                    
                    {showPopup && (
    <div className="popup">
        <div className="popup-content">
            <button className="popup-close-button" onClick={() => setShowPopup(false)}>×</button>
            <br/>
            {unansweredError && <p className="error-message">Please answer all questions before submitting.</p>}
            <p>Are you sure you want to submit?</p>
            <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
    </div>
)}

                    {submitLoading && <p>Submitting...</p>}
                    {submitSuccess && <p>Submitted successfully!</p>}
                </div>
            </div>
        </div>
        </Container>
    );
};

export default ReviewAnswers;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { fetchQuestionsRequest } from '../../../actions/Quiz And Feedback Module/AttemptQuizAction'; // Ensure you import the action to fetch questions
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const reviewData = useSelector((state) => state.Review.reviewData);
//     const questions = useSelector((state) => state.AttemptQuiz.questions); // Fetch questions from the AttemptQuiz state
//     const loading = useSelector((state) => state.Review.loading);
//     const error = useSelector((state) => state.Review.error);
//     const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//     const submitError = useSelector((state) => state.SubmitAttempt.error);
//     const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//     const AttemptId = reviewData?.learnerAttemptId;
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedQuestion, setSelectedQuestion] = useState(0);
//     const [localReviewData, setLocalReviewData] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); 
//     const [unansweredError, setUnansweredError] = useState(false);

//     useEffect(() => {
//         const storedReviewData = sessionStorage.getItem('reviewData');
//         if (storedReviewData) {
//             setLocalReviewData(JSON.parse(storedReviewData));
//         } else if (attemptId) {
//             dispatch(fetchReviewRequest(attemptId));
//         }

//         // Fetch all questions for the review
//         dispatch(fetchQuestionsRequest(sessionStorage.getItem("quizId")));
//     }, [dispatch, attemptId]);

//     useEffect(() => {
//         if (reviewData) {
//             sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//             setLocalReviewData(reviewData);
//         }
//     }, [reviewData]);

//     const handleSubmit = () => {
//         const allAnswered = questions.every(question => {
//             const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId);
//             return response && response.selectedOptions && response.selectedOptions.length > 0;
//         });

//         if (!allAnswered) {
//             setUnansweredError(true);
//             return;
//         }

//         if (AttemptId && !isSubmitting) {
//             setIsSubmitting(true); 
//             dispatch(submitAttemptRequest(AttemptId)).then(() => {
//                 setIsSubmitting(false); 
//                 navigate('/learnerscorepage');
//             }).catch(() => {
//                 setIsSubmitting(false); 
//             });
//             setShowPopup(false);
//         } else {
//             console.error("Attempt ID is missing or submission is already in progress");
//         }
//     };

//     const handleNavigate = () => {
//         navigate('/attemptquiz');
//     };

//     const handleSelectQuestion = (index) => {
//         setSelectedQuestion(index);
//         const questionElement = document.getElementById(`question-${index}`);
//         if (questionElement) {
//             questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     };

//     const data = localReviewData || reviewData;

//     if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//         return <p>No data available.</p>;
//     }

//     return (
//         <div>
//             <AdminNavbar />
//             <div className="review-container">
//                 <br />
//                 <div className="question-grid-container">
//                     {questions.length > 0 && (
//                         <div className="question-grid">
//                             {questions.map((question, index) => {
//                                 const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId);
//                                 const isAnswered = response && response.selectedOptions && response.selectedOptions.length > 0;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className={`question-number ${selectedQuestion === index ? 'active' : ''} ${isAnswered ? 'answered' : 'unanswered'}`}
//                                         onClick={() => handleSelectQuestion(index)}
//                                     >
//                                         {index + 1}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>

//                 {questions.map((question, index) => {
//                     const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId) || {};
//                     return (
//                         <div
//                             key={question.quizQuestionId}
//                             id={`question-${index}`}
//                             className="review-question-container"
//                         >
//                             <h5>{index + 1}: {question.question}</h5>
//                             <ul>
//                                 {question.options.map((option, optionIndex) => (
//                                     <li key={optionIndex}>
//                                         <input
//                                             type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                                             name={question.quizQuestionId}
//                                             value={option.option}
//                                             checked={Array.isArray(response.selectedOptions) ? response.selectedOptions.includes(option.option) : response.selectedOptions === option.option}
//                                             readOnly
//                                         />
//                                         {option.option}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     );
//                 })}

//                 <div className="button-container">
//                     <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//                     <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//                 </div>

//                 {showPopup && (
//                     <div className="popup">
//                         <div className="popup-content">
//                             {unansweredError && <p className="error-message">Please answer all questions before submitting.</p>}
//                             <p>Are you sure you want to submit?</p>
//                             <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
//                             <button onClick={() => setShowPopup(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 )}

//                 {submitLoading && <p>Submitting...</p>}
//                 {submitSuccess && <p>Submitted successfully!</p>}
//             </div>
//         </div>
//     );
// };

// export default ReviewAnswers;







// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { fetchQuestionsRequest } from '../../../actions/Quiz And Feedback Module/AttemptQuizAction'; // Ensure you import the action to fetch questions
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const reviewData = useSelector((state) => state.Review.reviewData);
//     const questions = useSelector((state) => state.AttemptQuiz.questions); // Fetch questions from the AttemptQuiz state
//     const loading = useSelector((state) => state.Review.loading);
//     const error = useSelector((state) => state.Review.error);
//     const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//     const submitError = useSelector((state) => state.SubmitAttempt.error);
//     const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//     const AttemptId = reviewData?.learnerAttemptId;
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedQuestion, setSelectedQuestion] = useState(0);
//     const [localReviewData, setLocalReviewData] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); 
//     const [unansweredError, setUnansweredError] = useState(false);

//     useEffect(() => {
//         const storedReviewData = sessionStorage.getItem('reviewData');
//         if (storedReviewData) {
//             setLocalReviewData(JSON.parse(storedReviewData));
//         } else if (attemptId) {
//             dispatch(fetchReviewRequest(attemptId));
//         }

//         // Fetch all questions for the review
//         dispatch(fetchQuestionsRequest(sessionStorage.getItem("quizId")));
//     }, [dispatch, attemptId]);

//     useEffect(() => {
//         if (reviewData) {
//             sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//             setLocalReviewData(reviewData);
//         }
//     }, [reviewData]);

//     const handleSubmit = () => {
//         const allAnswered = questions.every(question => {
//             const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId);
//             return response && response.selectedOptions && response.selectedOptions.length > 0;
//         });

//         if (!allAnswered) {
//             setUnansweredError(true);
//             return;
//         }

//         if (AttemptId && !isSubmitting) {
//             setIsSubmitting(true); 
//             dispatch(submitAttemptRequest(AttemptId)).then(() => {
//                 setIsSubmitting(false); 
//                 navigate('/learnerscorepage');
//             }).catch(() => {
//                 setIsSubmitting(false); 
//             });
//             setShowPopup(false);
//         } else {
//             console.error("Attempt ID is missing or submission is already in progress");
//         }
//     };

//     const handleNavigate = () => {
//         navigate('/attemptquiz');
//     };

//     const handleSelectQuestion = (index) => {
//         setSelectedQuestion(index);
//         const questionElement = document.getElementById(`question-${index}`);
//         if (questionElement) {
//             questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     };

//     const data = localReviewData || reviewData;

//     if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//         return <p>No data available.</p>;
//     }

//     return (
//         <div>
//             <AdminNavbar />
//             <div className="review-container">
//                 <br />
//                 <div className="question-grid-container">
//                     {questions.length > 0 && (
//                         <div className="question-grid">
//                             {questions.map((_, index) => (
//                                 <div
//                                     key={index}
//                                     className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                                     onClick={() => handleSelectQuestion(index)}
//                                 >
//                                     {index + 1}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {questions.map((question, index) => {
//                     const response = data.questionResponses.find(q => q.quizQuestionId === question.quizQuestionId) || {};
//                     return (
//                         <div
//                             key={question.quizQuestionId}
//                             id={`question-${index}`}
//                             className="review-question-container"
//                         >
//                             <h5>{index + 1}: {question.question}</h5>
//                             <ul>
//                                 {question.options.map((option, optionIndex) => (
//                                     <li key={optionIndex}>
//                                         <input
//                                             type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                                             name={question.quizQuestionId}
//                                             value={option.option}
//                                             checked={Array.isArray(response.selectedOptions) ? response.selectedOptions.includes(option.option) : response.selectedOptions === option.option}
//                                             readOnly
//                                         />
//                                         {option.option}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     );
//                 })}

//                 <div className="button-container">
//                     <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//                     <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//                 </div>

//                 {showPopup && (
//                     <div className="popup">
//                         <div className="popup-content">
//                             {unansweredError && <p className="error-message">Please answer all questions before submitting.</p>}
//                             <p>Are you sure you want to submit?</p>
//                             <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
//                             <button onClick={() => setShowPopup(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 )}

//                 {submitLoading && <p>Submitting...</p>}
//                 {submitSuccess && <p>Submitted successfully!</p>}
//             </div>
//         </div>
//     );
// };

// export default ReviewAnswers;









// ------------------  Final Workable  -----------------------




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const reviewData = useSelector((state) => state.Review.reviewData);
//     const loading = useSelector((state) => state.Review.loading);
//     const error = useSelector((state) => state.Review.error);
//     const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//     const submitError = useSelector((state) => state.SubmitAttempt.error);
//     const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//     const AttemptId = reviewData?.learnerAttemptId;
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedQuestion, setSelectedQuestion] = useState(0);
//     const [localReviewData, setLocalReviewData] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); // Add this state

//     useEffect(() => {
//         const storedReviewData = sessionStorage.getItem('reviewData');
//         if (storedReviewData) {
//             setLocalReviewData(JSON.parse(storedReviewData));
//         } else if (attemptId) {
//             dispatch(fetchReviewRequest(attemptId));
//         }
//     }, [dispatch, attemptId]);

//     useEffect(() => {
//         if (reviewData) {
//             sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//             setLocalReviewData(reviewData);
//         }
//     }, [reviewData]);

//     const handleSubmit = () => {
//         if (AttemptId && !isSubmitting) {
//             console.log("Attempt ID being passed to action:", AttemptId);
//             setIsSubmitting(true); // Disable submit button
//             dispatch(submitAttemptRequest(AttemptId)).then(() => {
//                 setIsSubmitting(false); // Re-enable submit button after submission
//                 navigate('/learnerscorepage');
//             }).catch(() => {
//                 setIsSubmitting(false); // Re-enable submit button if there's an error
//             });
//             setShowPopup(false);
//         } else {
//             console.error("Attempt ID is missing or submission is already in progress");
//         }
//     };

//     const handleNavigate = () => {
//         navigate('/attemptquiz');
//     };

//     const handleSelectQuestion = (index) => {
//         setSelectedQuestion(index);
//         const questionElement = document.getElementById(`question-${index}`);
//         if (questionElement) {
//             questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     };

//     // if (error) {
//     //     return <p>Error: {error}</p>;
//     // }

//     const data = localReviewData || reviewData;

//     if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//         return <p>No data available.</p>;
//     }

//     return (
//         <div>
//             <AdminNavbar />
//             <div className="review-container">
//                 <br />
//                 <div className="question-grid-container">
//                     {data.questionResponses.length > 0 && (
//                         <div className="question-grid">
//                             {data.questionResponses.map((_, index) => (
//                                 <div
//                                     key={index}
//                                     className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                                     onClick={() => handleSelectQuestion(index)}
//                                 >
//                                     {index + 1}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {data.questionResponses.map((question, index) => (
//                     <div
//                         key={question.quizQuestionId}
//                         id={`question-${index}`}
//                         className="review-question-container"
//                     >
//                         <h5>{index + 1}: {question.question}</h5>
//                         <ul>
//                             {question.options && question.options.map((option, optionIndex) => (
//                                 <li key={optionIndex}>
//                                     <input
//                                         type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                                         name={question.quizQuestionId}
//                                         value={option.option}
//                                         checked={Array.isArray(question.selectedOptions) ? question.selectedOptions.includes(option.option) : question.selectedOptions === option.option}
//                                         readOnly
//                                     />
//                                     {option.option}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}

//                 <div className="button-container">
//                     <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//                     <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//                 </div>

//                 {showPopup && (
//                     <div className="popup">
//                         <div className="popup-content">
//                             <p>Are you sure you want to submit?</p>
//                             <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
//                             <button onClick={() => setShowPopup(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 )}

//                 {submitLoading && <p>Submitting...</p>}
//                 {/* {submitError && <p>Error: {submitError}</p>} */}
//                 {submitSuccess && <p>Submitted successfully!</p>}
//             </div>
//         </div>
//     );
// };

// export default ReviewAnswers;








//  ----------- Workable with double click .......................



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const reviewData = useSelector((state) => state.Review.reviewData);
//     const loading = useSelector((state) => state.Review.loading);
//     const error = useSelector((state) => state.Review.error);
//     const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//     const submitError = useSelector((state) => state.SubmitAttempt.error);
//     const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//     const AttemptId = reviewData?.learnerAttemptId;
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedQuestion, setSelectedQuestion] = useState(0);
//     const [localReviewData, setLocalReviewData] = useState(null);

//     useEffect(() => {
//         const storedReviewData = sessionStorage.getItem('reviewData');
//         if (storedReviewData) {
//             setLocalReviewData(JSON.parse(storedReviewData));
//         } else if (attemptId) {
//             dispatch(fetchReviewRequest(attemptId));
//         }
//     }, [dispatch, attemptId]);

//     useEffect(() => {
//         if (reviewData) {
//             sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//             setLocalReviewData(reviewData);
//         }
//     }, [reviewData]);

//     const handleSubmit = () => {
//         if (AttemptId) {
//             console.log("Attempt ID being passed to action:", AttemptId);
//             dispatch(submitAttemptRequest(AttemptId));
//             setShowPopup(false);
//             navigate('/learnerscorepage');
//         } else {
//             console.error("Attempt ID is missing");
//         }
//     };

//     const handleNavigate = () => {
//         navigate('/attemptquiz');
//     };

//     const handleSelectQuestion = (index) => {
//         setSelectedQuestion(index);
//         const questionElement = document.getElementById(`question-${index}`);
//         if (questionElement) {
//             questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     };

//     // if (error) {
//     //     return <p>Error: {error}</p>;
//     // }

//     const data = localReviewData || reviewData;

//     if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//         return <p>No data available.</p>;
//     }

//     return (
//         <div>
//             <AdminNavbar />
//             <div className="review-container">
//                 <br />
//                 <div className="question-grid-container">
//                     {data.questionResponses.length > 0 && (
//                         <div className="question-grid">
//                             {data.questionResponses.map((_, index) => (
//                                 <div
//                                     key={index}
//                                     className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                                     onClick={() => handleSelectQuestion(index)}
//                                 >
//                                     {index + 1}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {data.questionResponses.map((question, index) => (
//                     <div
//                         key={question.quizQuestionId}
//                         id={`question-${index}`}
//                         className="review-question-container"
//                     >
//                         <h5>{index + 1}: {question.question}</h5>
//                         <ul>
//                             {question.options && question.options.map((option, optionIndex) => (
//                                 <li key={optionIndex}>
//                                     <input
//                                         type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                                         name={question.quizQuestionId}
//                                         value={option.option}
//                                         checked={Array.isArray(question.selectedOptions) ? question.selectedOptions.includes(option.option) : question.selectedOptions === option.option}
//                                         readOnly
//                                     />
//                                     {option.option}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}

//                 <div className="button-container">
//                     <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//                     <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//                 </div>

//                 {showPopup && (
//                     <div className="popup">
//                         <div className="popup-content">
//                             <p>Are you sure you want to submit?</p>
//                             <button onClick={handleSubmit}>Submit</button>
//                             <button onClick={() => setShowPopup(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 )}

//                 {submitLoading && <p>Submitting...</p>}
//                 {/* {submitError && <p>Error: {submitError}</p>} */}
//                 {submitSuccess && <p>Submitted successfully!</p>}
//             </div>
//         </div>
//     );
// };

// export default ReviewAnswers;






// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const [localReviewData, setLocalReviewData] = useState(null);

//   useEffect(() => {
//     const storedReviewData = sessionStorage.getItem('reviewData');
//     if (storedReviewData) {
//       setLocalReviewData(JSON.parse(storedReviewData));
//     } else if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   useEffect(() => {
//     if (reviewData) {
//       sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//       setLocalReviewData(reviewData);
//     }
//   }, [reviewData]);

//   // const handleSubmit = () => {
//   //   console.log("Attempt ID Before Submit :", AttemptId);
//   //   dispatch(submitAttemptRequest(AttemptId));
//   //   setShowPopup(false);
//   //   navigate('/learnerscorepage');
//   // };


//   const handleSubmit = () => {
//     if (AttemptId) {
//       console.log("Attempt ID being passed to action :",AttemptId);
//       dispatch(submitAttemptRequest(AttemptId));
//       setShowPopup(false);
//       navigate('/learnerscorepage');
//     } else {
//       console.error("Attempt ID is missing");
//     }
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   };

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const data = localReviewData || reviewData;

//   if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="review-container">
//         <br />
//         <div className="question-grid-container">
//           {data.questionResponses.length > 0 && (
//             <div className="question-grid">
//               {data.questionResponses.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                   onClick={() => handleSelectQuestion(index)}
//                 >
//                   {index + 1}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {data.questionResponses.map((question, index) => (
//           <div
//             key={question.quizQuestionId}
//             id={`question-${index}`}
//             className="review-question-container"
//           >
//             <h5>{index + 1}: {question.question}</h5>
//             <ul>
//               {question.options && question.options.map((option, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                     name={question.quizQuestionId}
//                     value={option.option}
//                     checked={Array.isArray(question.selectedOptions) ? question.selectedOptions.includes(option.option) : question.selectedOptions === option.option}
//                     readOnly
//                   />
//                   {option.option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="button-container">
//           <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//           <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//         </div>

//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <p>Are you sure you want to submit?</p>
//               <button onClick={handleSubmit}>Submit</button>
//               <button onClick={() => setShowPopup(false)}>Cancel</button>
//             </div>
//           </div>
//         )}

//         {submitLoading && <p>Submitting...</p>}
//         {/* {submitError && <p>Error: {submitError}</p>} */}
//         {submitSuccess && <p>Submitted successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default ReviewAnswers;











// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const [localReviewData, setLocalReviewData] = useState(null);

//   useEffect(() => {
//     const storedReviewData = sessionStorage.getItem('reviewData');
//     if (storedReviewData) {
//       setLocalReviewData(JSON.parse(storedReviewData));
//     } else if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   useEffect(() => {
//     if (reviewData) {
//       sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//       setLocalReviewData(reviewData);
//     }
//   }, [reviewData]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     setShowPopup(false);
//     navigate('/learnerscorepage');
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   };

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const data = localReviewData || reviewData;

//   if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="review-container">
//         <br />
//         <div className="question-grid-container">
//           {data.questionResponses.length > 0 && (
//             <div className="question-grid">
//               {data.questionResponses.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                   onClick={() => handleSelectQuestion(index)}
//                 >
//                   {index + 1}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {data.questionResponses.map((question, index) => (
//           <div
//             key={question.quizQuestionId}
//             id={`question-${index}`}
//             className="review-question-container"
//           >
//             <h5>{index + 1}: {question.question}</h5>
//             <ul>
//               {question.options && question.options.map((option, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                     name={question.quizQuestionId}
//                     value={option}
//                     checked={Array.isArray(question.selectedOptions) ? question.selectedOptions.includes(option) : question.selectedOptions === option}
//                     readOnly
//                   />
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="button-container">
//           <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//           <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//         </div>

//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <p>Are you sure you want to submit?</p>
//               <button onClick={handleSubmit}>Submit</button>
//               <button onClick={() => setShowPopup(false)}>Cancel</button>
//             </div>
//           </div>
//         )}

//         {submitLoading && <p>Submitting...</p>}
//         {submitError && <p>Error: {submitError}</p>}
//         {submitSuccess && <p>Submitted successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default ReviewAnswers;





// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const [localReviewData, setLocalReviewData] = useState(null);

//   useEffect(() => {
//     const storedReviewData = sessionStorage.getItem('reviewData');
//     if (storedReviewData) {
//       setLocalReviewData(JSON.parse(storedReviewData));
//     } else if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   useEffect(() => {
//     if (reviewData) {
//       sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//       setLocalReviewData(reviewData);
//     }
//   }, [reviewData]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     setShowPopup(false);
//     navigate('/learnerscorepage');
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   };

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const data = localReviewData || reviewData;

//   if (!data || !Array.isArray(data.questionResponses) || data.questionResponses.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="review-container">
//         <br />
//         <div className="question-grid-container">
//           {data.questionResponses.length > 0 && (
//             <div className="question-grid">
//               {data.questionResponses.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                   onClick={() => handleSelectQuestion(index)}
//                 >
//                   {index + 1}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {data.questionResponses.map((question, index) => (
//           <div
//             key={question.quizQuestionId}
//             id={`question-${index}`}
//             className="review-question-container"
//           >
//             <h5>{index + 1}: {question.question}</h5>
//             <ul>
//               {question.options && question.options.map((option, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                     name={question.quizQuestionId}
//                     value={option}
//                     checked={Array.isArray(question.selectedOptions) ? question.selectedOptions.includes(option) : question.selectedOptions === option}
//                     readOnly
//                   />
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="button-container">
//           <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//           <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//         </div>

//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <p>Are you sure you want to submit?</p>
//               <button onClick={handleSubmit}>Submit</button>
//               <button onClick={() => setShowPopup(false)}>Cancel</button>
//             </div>
//           </div>
//         )}

//         {submitLoading && <p>Submitting...</p>}
//         {submitError && <p>Error: {submitError}</p>}
//         {submitSuccess && <p>Submitted successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default ReviewAnswers;








//  ............Last Workable ....................



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const [localReviewData, setLocalReviewData] = useState(null);

//   useEffect(() => {
//     const storedReviewData = sessionStorage.getItem('reviewData');
//     if (storedReviewData) {
//       setLocalReviewData(JSON.parse(storedReviewData));
//     } else if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   useEffect(() => {
//     if (reviewData) {
//       sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
//       setLocalReviewData(reviewData);
//     }
//   }, [reviewData]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     setShowPopup(false);
//     navigate('/learnerscorepage');
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   }

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const data = localReviewData || reviewData;

//   if (!data || !Array.isArray(data.questionsAndAnswers) || data.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div>
//       <AdminNavbar/>
//     <div className="review-container">
//       <br/>
//       <div className="question-grid-container">
//         {data.questionsAndAnswers.length > 0 && (
//           <div className="question-grid">
//             {data.questionsAndAnswers.map((_, index) => (
//               <div
//                 key={index}
//                 className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                 onClick={() => handleSelectQuestion(index)}
//               >
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {data.questionsAndAnswers.map((question, index) => (
//         <div
//           key={question.quizQuestionId}
//           id={`question-${index}`}
//           className="review-question-container"
//         >
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div className="button-container">
//         <button className="review-previous-button" onClick={handleNavigate}>Previous Page</button>
//         <button className="review-submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <p>Are you sure you want to submit?</p>
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {submitLoading && <p>Submitting...</p>}
//       {/* {submitError && <p>Error: {submitError}</p>} */}
//       {submitSuccess && <p>Submitted successfully!</p>}
//     </div>
//     </div>
//   );
// };

// export default ReviewAnswers;





















// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData?.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//       // console.log("Attempt ID :",AttemptId);
//     }
//   }, [dispatch, attemptId]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     setShowPopup(false);
//     navigate('/learnerscorepage');
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   }

//   const handleSelectQuestion = (index) => {
//     setSelectedQuestion(index);
//     const questionElement = document.getElementById(`question-${index}`);
//     if (questionElement) {
//       questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!reviewData || !Array.isArray(reviewData.questionsAndAnswers) || reviewData.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className="review-container">
//         {/* <h1>Review Answers</h1> */}
//         <br/>
//       <div className="question-grid-container">
//         {reviewData.questionsAndAnswers.length > 0 && (
//           <div className="question-grid">
//             {reviewData.questionsAndAnswers.map((_, index) => (
//               <div
//                 key={index}
//                 className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
//                 onClick={() => handleSelectQuestion(index)}
//               >
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
      
//       {reviewData.questionsAndAnswers.map((question, index) => (
//         <div
//           key={question.quizQuestionId}
//           id={`question-${index}`}
//           className="review-question-container"
//         >
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
      
//       <button className="submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//       <button className="previous-button" onClick={handleNavigate}>Previous Page</button>
      
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <p>Are you sure you want to submit?</p>
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
      
//       {submitLoading && <p>Submitting...</p>}
//       {submitError && <p>Error: {submitError}</p>}
//       {submitSuccess && <p>Submitted successfully!</p>}
//     </div>
//   );
// };

// export default ReviewAnswers;




























// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import { submitAttemptRequest } from '../../../actions/Quiz And Feedback Module/SubmitAttemptAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';
// import { useNavigate } from 'react-router-dom';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);
//   const submitLoading = useSelector((state) => state.SubmitAttempt.loading);
//   const submitError = useSelector((state) => state.SubmitAttempt.error);
//   const submitSuccess = useSelector((state) => state.SubmitAttempt.success);
//   const AttemptId = reviewData.learnerAttemptId;
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//       console.log(attemptId);
//     }
//   }, [dispatch, attemptId]);

//   const handleSubmit = () => {
//     dispatch(submitAttemptRequest(AttemptId));
//     console.log("submit :",AttemptId);
//     setShowPopup(false);
//   };

//   const handleNavigate = () => {
//     navigate('/attemptquiz');
//   }

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!reviewData || !Array.isArray(reviewData.questionsAndAnswers) || reviewData.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className="review-container">
//       {reviewData.questionsAndAnswers.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button className="submit-button" onClick={() => setShowPopup(true)}>Submit</button>
//       <button className="previous-button" onClick={handleNavigate}>Previous Page</button>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <p>Are you sure you want to submit?</p>
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//       {submitLoading && <p>Submitting...</p>}
//       {submitError && <p>Error: {submitError}</p>}
//       {submitSuccess && <p>Submitted successfully!</p>}
//     </div>
//   );
// };

// export default ReviewAnswers;






















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
  
//   // Access the review data, loading state, and error from the Redux store
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   // Fetch review data when the component mounts
//   useEffect(() => {
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   // Handling loading and error states

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Check if reviewData is an object and has questionsAndAnswers
//   if (!reviewData || !Array.isArray(reviewData.questionsAndAnswers) || reviewData.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   // Render the review data
//   return (
//     <div className="review-container">
//       {reviewData.questionsAndAnswers.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;


















// ----- Workable --------



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
  
//   // Access the review data, loading state, and error from the Redux store
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   // Fetch review data when the component mounts
//   useEffect(() => {
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   // Handling loading and error states

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Check if reviewData is an object and has questionsAndAnswers
//   if (!reviewData || !Array.isArray(reviewData.questionsAndAnswers) || reviewData.questionsAndAnswers.length === 0) {
//     return <p>No data available.</p>;
//   }

//   // Render the review data
//   return (
//     <div className="review-container">
//       {reviewData.questionsAndAnswers.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={Array.isArray(question.selectedOption) ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option}
//                   checked={Array.isArray(question.selectedOption) ? question.selectedOption.includes(option) : question.selectedOption === option}
//                   readOnly
//                 />
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;






















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
  
//   // Access the review data, loading state, and error from the Redux store
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   // Add console logs to trace the data
//   console.log('Component Rendered');
//   console.log('Attempt ID:', reviewData.learnerAttemptId);
//   console.log('Questions:', reviewData.questionsAndAnswers);
//   console.log('Review Data:', reviewData);

//   useEffect(() => {
//     // Fetch review data when the component mounts
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   // Handling loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Check if reviewData is an array and has elements
//   if (!Array.isArray(reviewData) || reviewData.length === 0) {
//     return <p>No data available.</p>;
//   }

//   // Render the review data
//   return (
//     <div className="review-container">
//       {reviewData.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option.option}
//                   checked={question.selectedOptions.includes(option.option)}
//                   readOnly
//                 />
//                 {option.option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;

















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
  
//   // Access the review data, loading state, and error from the Redux store
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   // Add console logs to trace the data
//   console.log('Component Rendered');
//   console.log('Attempt ID:', attemptId);
//   console.log('Loading State:', loading);
//   console.log('Error State:', error);
//   console.log('Review Data:', reviewData);

//   useEffect(() => {
//     // Fetch review data when the component mounts
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   // Handling loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Check if reviewData is an array and has elements
//   if (!Array.isArray(reviewData) || reviewData.length === 0) {
//     return <p>No data available.</p>;
//   }

//   // Render the review data
//   return (
//     <div className="review-container">
//       {reviewData.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option.option}
//                   checked={question.selectedOptions.includes(option.option)}
//                   readOnly
//                 />
//                 {option.option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;






















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   useEffect(() => {
//     // Fetch review data when the component mounts
//     if (attemptId) {
//       dispatch(fetchReviewRequest(attemptId));
//     }
//   }, [dispatch, attemptId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!reviewData.length) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className="review-container">
//       {reviewData.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option.option}
//                   checked={question.selectedOptions.includes(option.option)}
//                   readOnly
//                 />
//                 {option.option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;























// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviewRequest } from '../../../actions/Quiz And Feedback Module/ReviewAction';
// import '../../../Styles/Quiz And Feedback Module/ReviewAnswers.css';

// const ReviewAnswers = ({ attemptId }) => {
//   const dispatch = useDispatch();
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const loading = useSelector((state) => state.Review.loading);
//   const error = useSelector((state) => state.Review.error);

//   useEffect(() => {
//     dispatch(fetchReviewRequest(attemptId));
//   }, [dispatch, attemptId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="review-container">
//       {reviewData.map((question, index) => (
//         <div key={question.quizQuestionId} className="question-container">
//           <h5>{index + 1}: {question.question}</h5>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type={question.questionType === 'MSQ' ? 'checkbox' : 'radio'}
//                   name={question.quizQuestionId}
//                   value={option.option}
//                   checked={question.selectedOptions.includes(option.option)}
//                   readOnly
//                 />
//                 {option.option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewAnswers;