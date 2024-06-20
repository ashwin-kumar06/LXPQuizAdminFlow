export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  payload: question
});

export const editQuestion = (questionId, newText) => ({
  type: 'EDIT_QUESTION',
  payload: { questionId, newText }
});



























//   import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
// import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions, editQuestion, editOption, deleteQuestion, editCorrectAnswer, addQuestion } from '../../actions/quizActions';

// const QuizEditor = () => {
//   const dispatch = useDispatch();
//   const questions = useSelector(state => state.questions);
//   const errors = useSelector(state => state.errors);

//   useEffect(() => {
//     dispatch(fetchQuestions());
//   }, [dispatch]);

//   const handleEditQuestion = (questionId, newText) => {
//     dispatch(editQuestion(questionId, newText));
//     validateQuestions();
//   };

//   const handleEditOption = (questionId, optionId, newText) => {
//     dispatch(editOption(questionId, optionId, newText));
//     validateQuestions();
//   };

//   const handleDeleteQuestion = (questionId) => {
//     dispatch(deleteQuestion(questionId));
//   };

//   const handleEditCorrectAnswer = (questionId, newAnswer) => {
//     dispatch(editCorrectAnswer(questionId, newAnswer));
//     validateQuestions();
//   };

//   const handleSaveChanges = () => {
//     questions.forEach(modifiedQuestion => {
//       axios.put(`http://localhost:3001/questions/${modifiedQuestion.id}`, modifiedQuestion)
//         .then(response => {
//           console.log('Question updated successfully:', response.data);
//         })
//         .catch(error => {
//           console.error('Error updating question:', error);
//         });
//     });
//   };

//   const handleToggleEdit = (questionId) => {
//     dispatch({ type: 'TOGGLE_EDIT', payload: questionId });
//     handleSaveChanges();
//   };

//   const handleAddQuestion = () => {
//     const newQuestion = {
//       text: `Question ${questions.length + 1}`,
//       options: [
//         { id: 1, text: 'Option A' },
//         { id: 2, text: 'Option B' },
//         { id: 3, text: 'Option C' },
//         { id: 4, text: 'Option D' }
//       ],
//       correctAnswer: 'Option A',
//       isEditing: false
//     };
//     dispatch(addQuestion(newQuestion));
//   };

//   const validateQuestions = () => {
//     const errors = {};
//     questions.forEach((question, index) => {
//       if (!question.text.trim()) {
//         errors[`question-${question.id}`] = `Question ${index + 1} cannot be empty.`;
//       }
//       if (question.options.some(option => !option.text.trim())) {
//         errors[`options-${question.id}`] = `Options for Question ${index + 1} cannot be empty.`;
//       }
//       if (!question.correctAnswer.trim()) {
//         errors[`correctAnswer-${question.id}`] = `Correct answer for Question ${index + 1} cannot be empty.`;
//       }
//     });
//     // Dispatch action to update errors state in Redux store
//     // dispatch({ type: 'SET_ERRORS', payload: errors });
//   };

//   return (
//     <div className='previewcontainer'>
//       <AdminNavbar/>
//       <Container style={{ width: '70%', marginBottom: '10px', marginLeft: '17%' }}>
//         {questions.map((question, index) => (
//           <Card className="mb-3" key={question.id}>
//             <Card.Body>
//               <Form.Group controlId={`question-${question.id}`}>
//                 <Form.Label>Question {index + 1}</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   value={question.text}
//                   style={{ width: '90%', marginBottom: '10px' }}
//                   onChange={(e) => handleEditQuestion(question.id, e.target.value)}
//                   readOnly={!question.isEditing}
//                   isInvalid={!!errors[`question-${question.id}`]}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors[`question-${question.id}`]}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Row>
//                 <Col>
//                   <Form.Group controlId={`options-${question.id}`}>
//                     <Form.Label>Options</Form.Label>
//                     <Row>
//                       {question.options.map((option, idx) => (
//                         <Col xs={6} key={option.id}>
//                           <Form.Control
//                             type="text"
//                             value={option.text}
//                             onChange={(e) => handleEditOption(question.id, option.id, e.target.value)}
//                             readOnly={!question.isEditing}
//                             placeholder={`Option ${String.fromCharCode(65 + idx)}`}
//                             style={{ width: '80%', marginBottom: '10px' }}
//                             isInvalid={!!errors[`options-${question.id}`]}
//                           />
//                         </Col>
//                       ))}
//                     </Row>
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`options-${question.id}`]}
//                     </Form.Control.Feedback>
//                     <Form.Group controlId={`correctAnswer-${question.id}`}>
//                       <Form.Label>Correct Answer</Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={question.correctAnswer}
//                         style={{ width: '39%', marginBottom: '10px' }}
//                         onChange={(e) => handleEditCorrectAnswer(question.id, e.target.value)}
//                         readOnly={!question.isEditing}
//                         isInvalid={!!errors[`correctAnswer-${question.id}`]}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors[`correctAnswer-${question.id}`]}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <div className="position-absolute top-0 end-0">
//                 <br />
//                 <Row>
//                   <Col>
//                     {question.isEditing ? (
//                       <Check2Square size={35} color="green" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconSave' />
//                     ) : (
//                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconEdit' />
//                     )}
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <br />
//                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} className="icon" id='iconDelete' />
//                   </Col>
//                 </Row>
//               </div>

//             </Card.Body>
//           </Card>
//         ))}
//         <Row className="mt-2 justify-content-end">
//           <Col xs="auto">
//             <Button onClick={handleAddQuestion}>Add Question</Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default QuizEditor;