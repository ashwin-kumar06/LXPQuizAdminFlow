// import React from 'react';
// import '../../../Styles/Quiz And Feedback Module/QuestionNavigationBar.css';

// const QuestionNavigationBar = ({ questions, currentQuestionIndex, onQuestionClick, flaggedQuestions }) => {
//     return (
//         <div className="question-navigation-bar">
//             {questions.map((question, index) => (
//                 <div
//                     key={index}
//                     className={`question-nav-item ${index === currentQuestionIndex ? 'active' : ''} ${flaggedQuestions.includes(question.quizQuestionId) ? 'flagged' : ''}`}
//                     onClick={() => onQuestionClick(index)}
//                 >
//                     {index + 1}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionNavigationBar;
















// import React from 'react';
// import '../../../Styles/Quiz And Feedback Module/QuestionNavigationBar.css';

// const QuestionNavigationBar = ({ questions, currentQuestionIndex, onQuestionClick, flaggedQuestions }) => {
//     return (
//         <div className="question-navigation-bar">
//             {questions.map((question, index) => (
//                 <div
//                     key={index}
//                     className={`question-nav-item ${index === currentQuestionIndex ? 'active' : ''} ${flaggedQuestions.includes(question.quizQuestionId) ? 'flagged' : ''}`}
//                     onClick={() => onQuestionClick(index)}
//                 >
//                     {index + 1}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionNavigationBar;















// import React from 'react';
// import '../../../Styles/Quiz And Feedback Module/QuestionNavigationBar.css';

// const QuestionNavigationBar = ({ questions, currentQuestionIndex, onQuestionClick, flaggedQuestions }) => {
//     return (
//         <div className="question-navigation-bar">
//             {questions.map((question, index) => (
//                 <div
//                     key={index}
//                     className={`question-nav-item ${index === currentQuestionIndex ? 'active' : ''} ${flaggedQuestions.includes(question.quizQuestionId) ? 'flagged' : ''}`}
//                     onClick={() => onQuestionClick(index)}
//                 >
//                     {index + 1}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionNavigationBar;








  //  1


// import React from 'react';
// import '../../../Styles/Quiz And Feedback Module/QuestionNavigationBar.css';
// import { FaFlag } from 'react-icons/fa'; // Import the flag icon

// const QuestionNavigationBar = ({ questions, selectedOptions, currentQuestionIndex, onQuestionClick, flaggedQuestions, onFlagClick }) => {
//     return (
//         <div className="navbar">
//             {questions && questions.length > 0 ? (
//                 questions.map((_, index) => (
//                     <div key={index} className="question-nav-item">
//                         <button
//                             onClick={() => onQuestionClick(index)}
//                             className={`question-number ${currentQuestionIndex === index ? 'active' : ''} ${selectedOptions[questions[index].quizQuestionId]?.length > 0 ? 'answered' : 'unanswered'}`}
//                         >
//                             {index + 1}
//                         </button>
//                         <button
//                             className={`flag-button ${flaggedQuestions.includes(index) ? 'flagged' : ''}`}
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 onFlagClick(index);
//                             }}
//                         >
//                             <FaFlag />
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No questions available</p>
//             )}
//         </div>
//     );
// };

// export default QuestionNavigationBar;













//    2     ------------- workable ----------------------


import React from 'react';
// import '../../../../Styles/Quiz And Feedback Module/Learner/QuestionNavigationBar.css';

const QuestionNavigationBar = ({ questions, selectedOptions, currentQuestionIndex, onQuestionClick }) => {
    return (
        <div className="navbar">
            {questions && questions.length > 0 ? (
                questions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onQuestionClick(index)}
                        className={`${currentQuestionIndex === index ? 'active' : ''} ${selectedOptions[questions[index].quizQuestionId]?.length > 0 ? 'answered' : 'unanswered'}`}
                    >
                        {index + 1}
                    </button>
                ))
            ) : (
                <p>No questions available</p>
            )}
        </div>
    );
};

export default QuestionNavigationBar;