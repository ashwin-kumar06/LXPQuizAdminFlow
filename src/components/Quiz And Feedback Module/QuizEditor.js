// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
// import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// // import jsonData from '../data/data.json';
// import AdminNavbar from '../components/AdminNavbar';
// import '../styles/QuizEditor.css';

// const QuizEditor = () => {
//   const [questions, setQuestions] = useState([]);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setQuestions(jsonData);
//   }, []);

//   const handleEditQuestion = (questionId, newText) => {
//     const updatedQuestions = questions.map(question =>
//       question.id === questionId ? { ...question, text: newText } : question
//     );
//     setQuestions(updatedQuestions);
//     validateQuestions(updatedQuestions);
//   };

//   const handleEditOption = (questionId, optionId, newText) => {
//     const updatedQuestions = questions.map(question =>
//       question.id === questionId
//         ? {
//             ...question,
//             options: question.options.map(option =>
//               option.id === optionId ? { ...option, text: newText } : option
//             ),
//           }
//         : question
//     );
//     setQuestions(updatedQuestions);
//     validateQuestions(updatedQuestions);
//   };

//   const handleDeleteQuestion = questionId => {
//     const updatedQuestions = questions.filter(question => question.id !== questionId);
//     setQuestions(updatedQuestions);
//     validateQuestions(updatedQuestions);
//   };

//   const handleEditCorrectAnswer = (questionId, newAnswer) => {
//     const updatedQuestions = questions.map(question =>
//       question.id === questionId ? { ...question, correctAnswer: newAnswer } : question
//     );
//     setQuestions(updatedQuestions);
//     validateQuestions(updatedQuestions);
//   };

//   const handleToggleEdit = questionId => {
//     const updatedQuestions = questions.map(question =>
//       question.id === questionId ? { ...question, isEditing: !question.isEditing } : question
//     );
//     setQuestions(updatedQuestions);
//   };

//   const handleAddQuestion = () => {
//     const newQuestion = {
//       id: questions.length + 1,
//       text: `Question ${questions.length + 1}`,
//       options: [
//         { id: 1, text: 'Option A' },
//         { id: 2, text: 'Option B' },
//         { id: 3, text: 'Option C' },
//         { id: 4, text: 'Option D' },
//       ],
//       correctAnswer: 'Option A',
//       isEditing: true,
//     };
//     const updatedQuestions = [...questions, newQuestion];
//     setQuestions(updatedQuestions);
//     validateQuestions(updatedQuestions);
//   };

//   const validateQuestions = questions => {
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
//     setErrors(errors);
//   };

//   return (
//     <div className="previewcontainer">
//       <AdminNavbar />
//       <Container style={{ width: '70%', marginBottom: '10px', marginLeft: '17%' }}>
//         {questions.map((question, index) => (
//           <Card className="mb-3" key={question.id}>
//             <Card.Body>
//               <Row>
//                 <Col>
//                   <Form.Group controlId={`question-${question.id}`}>
//                     <Form.Label>Question {index + 1}</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={2}
//                       value={question.text}
//                       style={{ width: '100%', marginBottom: '10px' }}
//                       onChange={e => handleEditQuestion(question.id, e.target.value)}
//                       readOnly={!question.isEditing}
//                       isInvalid={!!errors[`question-${question.id}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">{errors[`question-${question.id}`]}</Form.Control.Feedback>
//                   </Form.Group>
//                   <Form.Group controlId={`options-${question.id}`}>
//                     <Form.Label>Options</Form.Label>
//                     {question.options.map(option => (
//                       <Row key={option.id}>
//                         <Col xs={6}>
//                           <Form.Control
//                             type="text"
//                             value={option.text}
//                             onChange={e => handleEditOption(question.id, option.id, e.target.value)}
//                             readOnly={!question.isEditing}
//                             placeholder={`Option`}
//                             style={{ width: '100%', marginBottom: '10px' }}
//                             isInvalid={!!errors[`options-${question.id}`]}
//                           />
//                         </Col>
//                       </Row>
//                     ))}
//                     <Form.Control.Feedback type="invalid">{errors[`options-${question.id}`]}</Form.Control.Feedback>
//                   </Form.Group>
//                   <Form.Group controlId={`correctAnswer-${question.id}`}>
//                     <Form.Label>Correct Answer</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={question.correctAnswer}
//                       style={{ width: '100%', marginBottom: '10px' }}
//                       onChange={e => handleEditCorrectAnswer(question.id, e.target.value)}
//                       readOnly={!question.isEditing}
//                       isInvalid={!!errors[`correctAnswer-${question.id}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">{errors[`correctAnswer-${question.id}`]}</Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//                 <Col md="auto">
//                   <div className="d-flex flex-column align-items-end">
//                     {question.isEditing ? (
//                       <Check2Square
//                         size={35}
//                         color="green"
//                         onClick={() => handleToggleEdit(question.id)}
//                         className="mr-2 icon"
//                       />
//                     ) : (
//                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" />
//                     )}
//                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} className="icon" />
//                   </div>
//                 </Col>
//               </Row>
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
















































// // import React, { useState, useEffect } from 'react';
// // import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
// // import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// // import jsonData from '../data/data.json';
// // import AdminNavbar from '../components/AdminNavbar';
// // import '../styles/QuizEditor.css';

// // const QuizEditor = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     setQuestions(jsonData);
// //   }, []); 

// //   const handleEditQuestion = (questionId, newText) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { ...question, text: newText } : question
// //     );
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleEditOption = (questionId, optionId, newText) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { 
// //         ...question, 
// //         options: question.options.map(option => 
// //           option.id === optionId ? { ...option, text: newText } : option
// //         ) 
// //       } : question
// //     );
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleDeleteQuestion = (questionId) => {
// //     const updatedQuestions = questions.filter(question => question.id !== questionId);
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleEditCorrectAnswer = (questionId, newAnswer) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { ...question, correctAnswer: newAnswer } : question
// //     );
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleToggleEdit = (questionId) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { ...question, isEditing: !question.isEditing } : question
// //     );
// //     setQuestions(updatedQuestions);
// //   };

// //   const handleAddQuestion = () => {
// //     const newQuestion = { 
// //       id: questions.length + 1,
// //       text: `Question ${questions.length + 1}`,
// //       options: [
// //         { id: 1, text: 'Option A' },
// //         { id: 2, text: 'Option B' },
// //         { id: 3, text: 'Option C' },
// //         { id: 4, text: 'Option D' }
// //       ],
// //       correctAnswer: 'Option A',
// //       isEditing: true
// //     };
// //     const updatedQuestions = [...questions, newQuestion];
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const validateQuestions = (questions) => {
// //     const errors = {};
// //     questions.forEach((question, index) => {
// //       if (!question.text.trim()) {
// //         errors[`question-${question.id}`] = `Question ${index + 1} cannot be empty.`;
// //       }
// //       if (question.options.some(option => !option.text.trim())) {
// //         errors[`options-${question.id}`] = `Options for Question ${index + 1} cannot be empty.`;
// //       }
// //       if (!question.correctAnswer.trim()) {
// //         errors[`correctAnswer-${question.id}`] = `Correct answer for Question ${index + 1} cannot be empty.`;
// //       }
// //     });
// //     setErrors(errors);
// //   };

// //   return (
// //     <div className='previewcontainer'>
// //       <AdminNavbar/>
// //       <Container style={{ width: '70%', marginBottom: '10px', marginLeft: '17%' }}>
// //         {questions.map((question, index) => (
// //           <Card className="mb-3" key={question.id}>
// //             <Card.Body>
// //               <Form.Group controlId={`question-${question.id}`}>
// //                 <Form.Label>Question {index + 1}</Form.Label>
// //                 <Form.Control 
// //                   as="textarea" 
// //                   rows={2} 
// //                   value={question.text} 
// //                   style={{ width: '90%', marginBottom: '10px' }}
// //                   onChange={(e) => handleEditQuestion(question.id, e.target.value)} 
// //                   readOnly={!question.isEditing} 
// //                   isInvalid={!!errors[`question-${question.id}`]}
// //                 />
// //                 <Form.Control.Feedback type="invalid">
// //                   {errors[`question-${question.id}`]}
// //                 </Form.Control.Feedback>
// //               </Form.Group>
// //               <Row>
// //                 <Col>
// //                   <Form.Group controlId={`options-${question.id}`}>
// //                     <Form.Label>Options</Form.Label>
// //                     <Row>
// //                       {question.options.map((option, idx) => (
// //                         <Col xs={6} key={option.id}>
// //                           <Form.Control 
// //                             type="text" 
// //                             value={option.text} 
// //                             onChange={(e) => handleEditOption(question.id, option.id, e.target.value)} 
// //                             readOnly={!question.isEditing} 
// //                             placeholder={`Option ${String.fromCharCode(65 + idx)}`}
// //                             style={{ width: '80%', marginBottom: '10px' }} 
// //                             isInvalid={!!errors[`options-${question.id}`]}
// //                           />
// //                         </Col>
// //                       ))}
// //                     </Row>
// //                     <Form.Control.Feedback type="invalid">
// //                       {errors[`options-${question.id}`]}
// //                     </Form.Control.Feedback>
// //                     <Form.Group controlId={`correctAnswer-${question.id}`}>
// //                       <Form.Label>Correct Answer</Form.Label>
// //                       <Form.Control 
// //                         type="text" 
// //                         value={question.correctAnswer} 
// //                         style={{ width: '39%', marginBottom: '10px' }}
// //                         onChange={(e) => handleEditCorrectAnswer(question.id, e.target.value)} 
// //                         readOnly={!question.isEditing} 
// //                         isInvalid={!!errors[`correctAnswer-${question.id}`]}
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         {errors[`correctAnswer-${question.id}`]}
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Form.Group>
// //                 </Col>
// //               </Row>
// //               {/* <div className="position-absolute top-0 end-0">
// //                 <br/>
// //                 <Row>
// //                   <Col>
// //                     {question.isEditing ? (
// //                       <Check2Square size={35} color="green" onClick={() => handleToggleEdit(question.id)} className="mr-2" />
// //                     ) : (
// //                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2" />
// //                     )}
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col>
// //                     <br/>
// //                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} />
// //                   </Col>
// //                 </Row>
// //               </div> */}

// //               <div className="position-absolute top-0 end-0">
// //                 <br />
// //                 <Row>
// //                   <Col>
// //                     {question.isEditing ? (
// //                       <Check2Square size={35} color="green" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconSave' />
// //                     ) : (
// //                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconEdit' />
// //                     )}
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col>
// //                     <br />
// //                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} className="icon" id='iconDelete' />
// //                   </Col>
// //                 </Row>
// //               </div>

// //             </Card.Body>
// //           </Card>
// //         ))}
// //         <Row className="mt-2 justify-content-end">
// //           <Col xs="auto">
// //             <Button onClick={handleAddQuestion}>Add Question</Button>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default QuizEditor;

























// // import React, { useState, useEffect } from 'react';
// // import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
// // import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { addQuestion, editQuestion } from '../actions/quizActions';
// // import { validateQuestions } from '../utils/validationUtils';
// // import '../styles/QuizEditor.css';
// // import AdminNavbar from './AdminNavbar';
// // import { json } from 'react-router-dom';
// // import jsonData from '../data/data.json';

// // const QuizEditor = () => {
// //   const dispatch = useDispatch();
// //   const [questions, setQuestions] = useState([]);
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     setQuestions(jsonData);
// //   }, []);

// //   const handleEditQuestion = (questionId, newText) => {
// //     dispatch(editQuestion(questionId, newText));
// //     validateQuestions(questions, setErrors);
// //   };

// //   const handleAddQuestion = () => {
// //     dispatch(addQuestion());
// //     // Add validation logic here if needed
// //   };

// //   return (
// //     <Container fluid className='previewcontainer'>
// //       <Row>
// //         <Col sm={3}>
// //           <AdminNavbar />
// //         </Col>
// //         <Col sm={9}>
// //           <Container>
// //             {questions.map((question, index) => (
// //               <Card className="mb-3 question-container" key={question.id}>
// //                 <Card.Body>
// //                   <Form.Group controlId={`question-${question.id}`}>
// //                     <Form.Label>Question {index + 1}</Form.Label>
// //                     <br/>
// //                     <Form.Control
// //                       as="textarea"
// //                       rows={2}
// //                       value={question.text}
// //                       onChange={(e) => handleEditQuestion(question.id, e.target.value)}
// //                       isInvalid={!!errors[`question-${question.id}`]}
// //                     />
// //                     <Form.Control.Feedback type="invalid">
// //                       {errors[`question-${question.id}`]}
// //                     </Form.Control.Feedback>
// //                   </Form.Group>
// //                   <div className="question-options-container">
// //                     {/* Add options and correct answer fields here */}
// //                   </div>
// //                   <div className="action-icons">
// //                     <PencilSquare className="edit-icon" onClick={() => handleEditQuestion(question.id, question.text)} />
// //                     <TrashFill className="delete-icon" />
// //                     <Check2Square className="save-icon" />
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             ))}
// //             <Button onClick={handleAddQuestion}>Add Question</Button>
// //           </Container>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default QuizEditor;



































// // import React, { useState, useEffect } from 'react';
// // import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
// // import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { addQuestion, editQuestion } from '../actions/quizActions';
// // import { validateQuestions } from '../utils/validationUtils';
// // import '../styles/QuizEditor.css';
// // import AdminNavbar from './AdminNavbar';
// // import { json } from 'react-router-dom';
// // import jsonData from '../data/data.json';


// // const QuizEditor = () => {
// //   const dispatch = useDispatch();
// // //   const questions = useSelector(state => state.quiz.questions);
// //   const [ questions,setQuestions] = useState([]);
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     setQuestions(jsonData);
// //   }, []);

// //   const handleEditQuestion = (questionId, newText) => {
// //     dispatch(editQuestion(questionId, newText));
// //     validateQuestions(questions, setErrors);
// //   };

// //   const handleAddQuestion = () => {
// //     dispatch(addQuestion());
// //     // Add validation logic here if needed
// //   };

// //   return (
// //     <Container fluid className='previewcontainer'>
// //       <Row>
// //         <Col sm={3}>
// //           <AdminNavbar />
// //         </Col>
// //         <Col sm={9}>
// //           <Container>
// //             {questions.map((question, index) => (
// //               <Card className="mb-3 question-container" key={question.id}>
// //                 <Card.Body>
// //                   <Form.Group controlId={`question-${question.id}`}>
// //                     <Form.Label>Question {index + 1}</Form.Label>
// //                     <br/>
// //                     <Form.Control
// //                       as="textarea"
// //                       rows={2}
// //                       value={question.text}
// //                       onChange={(e) => handleEditQuestion(question.id, e.target.value)}
// //                       isInvalid={!!errors[`question-${question.id}`]}
// //                     />
// //                     <Form.Control.Feedback type="invalid">
// //                       {errors[`question-${question.id}`]}
// //                     </Form.Control.Feedback>
// //                   </Form.Group>
// //                   <div className="question-options-container">
// //                     {/* Add options and correct answer fields here */}
// //                   </div>
// //                   <div className="action-buttons">
// //                     <Button variant="primary">Edit</Button>
// //                     <Button variant="danger">Delete</Button>
// //                     <Button variant="success">Save</Button>
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             ))}
// //             <Button onClick={handleAddQuestion}>Add Question</Button>
// //           </Container>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default QuizEditor;















































// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
// // import { PencilSquare, TrashFill, Check2Square } from 'react-bootstrap-icons';
// // import { addQuestion, editQuestion } from '../actions/quizActions';
// // import { validateQuestions } from '../utils/validationUtils';
// // import '../styles/QuizEditor.css';
// // import AdminNavbar from './AdminNavbar';
// // import jsonData from '../data/data.json';



// // const QuizEditor = () => {
// //   const dispatch = useDispatch();
// //  //const questions = useSelector(state => state.quiz.questions);
// //   const [ questions,setQuestions] = useState([]);
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     setQuestions(jsonData);
// //   }, []);

// //   const handleEditQuestion = (questionId, newText) => {
// //     dispatch(editQuestion(questionId, newText));
// //     validateQuestions(questions, setErrors);
// //   };

// //   const handleEditOption = (questionId, optionId, newText) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { 
// //         ...question, 
// //         options: question.options.map(option => 
// //           option.id === optionId ? { ...option, text: newText } : option
// //         ) 
// //       } : question
// //     );
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleDeleteQuestion = (questionId) => {
// //     const updatedQuestions = questions.filter(question => question.id !== questionId);
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleEditCorrectAnswer = (questionId, newAnswer) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { ...question, correctAnswer: newAnswer } : question
// //     );
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };

// //   const handleToggleEdit = (questionId) => {
// //     const updatedQuestions = questions.map(question => 
// //       question.id === questionId ? { ...question, isEditing: !question.isEditing } : question
// //     );
// //     setQuestions(updatedQuestions);
// //   };

// //   const handleAddQuestion = () => {
// //     const newQuestion = { 
// //       id: questions.length + 1,
// //       text: `Question ${questions.length + 1}`,
// //       options: [
// //         { id: 1, text: 'Option A' },
// //         { id: 2, text: 'Option B' },
// //         { id: 3, text: 'Option C' },
// //         { id: 4, text: 'Option D' }
// //       ],
// //       correctAnswer: 'Option A',
// //       isEditing: true
// //     };
// //     const updatedQuestions = [...questions, newQuestion];
// //     setQuestions(updatedQuestions);
// //     validateQuestions(updatedQuestions);
// //   };


// //   return (
// //     <div className='previewcontainer'>
// //       <AdminNavbar/>
// //       <Container style={{ width: '70%', marginBottom: '10px', marginLeft: '17%' }}>
// //         {questions.map((question, index) => (
// //           <Card className="mb-3" key={question.id}>
// //             <Card.Body>
// //               <Form.Group controlId={`question-${question.id}`}>
// //                 <Form.Label>Question {index + 1}</Form.Label>
// //                 <Form.Control 
// //                   as="textarea" 
// //                   rows={2} 
// //                   value={question.text} 
// //                   style={{ width: '90%', marginBottom: '10px' }}
// //                   onChange={(e) => handleEditQuestion(question.id, e.target.value)} 
// //                   readOnly={!question.isEditing} 
// //                   isInvalid={!!errors[`question-${question.id}`]}
// //                 />
// //                 <Form.Control.Feedback type="invalid">
// //                   {errors[`question-${question.id}`]}
// //                 </Form.Control.Feedback>
// //               </Form.Group>
// //               <Row>
// //                 <Col>
// //                   <Form.Group controlId={`options-${question.id}`}>
// //                     <Form.Label>Options</Form.Label>
// //                     <Row>
// //                       {question.options.map((option, idx) => (
// //                         <Col xs={6} key={option.id}>
// //                           <Form.Control 
// //                             type="text" 
// //                             value={option.text} 
// //                             onChange={(e) => handleEditOption(question.id, option.id, e.target.value)} 
// //                             readOnly={!question.isEditing} 
// //                             placeholder={`Option ${String.fromCharCode(65 + idx)}`}
// //                             style={{ width: '80%', marginBottom: '10px' }} 
// //                             isInvalid={!!errors[`options-${question.id}`]}
// //                           />
// //                         </Col>
// //                       ))}
// //                     </Row>
// //                     <Form.Control.Feedback type="invalid">
// //                       {errors[`options-${question.id}`]}
// //                     </Form.Control.Feedback>
// //                     <Form.Group controlId={`correctAnswer-${question.id}`}>
// //                       <Form.Label>Correct Answer</Form.Label>
// //                       <Form.Control 
// //                         type="text" 
// //                         value={question.correctAnswer} 
// //                         style={{ width: '39%', marginBottom: '10px' }}
// //                         onChange={(e) => handleEditCorrectAnswer(question.id, e.target.value)} 
// //                         readOnly={!question.isEditing} 
// //                         isInvalid={!!errors[`correctAnswer-${question.id}`]}
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         {errors[`correctAnswer-${question.id}`]}
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Form.Group>
// //                 </Col>
// //               </Row>
// //               {/* <div className="position-absolute top-0 end-0">
// //                 <br/>
// //                 <Row>
// //                   <Col>
// //                     {question.isEditing ? (
// //                       <Check2Square size={35} color="green" onClick={() => handleToggleEdit(question.id)} className="mr-2" />
// //                     ) : (
// //                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2" />
// //                     )}
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col>
// //                     <br/>
// //                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} />
// //                   </Col>
// //                 </Row>
// //               </div> */}

// //               <div className="position-absolute top-0 end-0">
// //                 <br />
// //                 <Row>
// //                   <Col>
// //                     {question.isEditing ? (
// //                       <Check2Square size={35} color="green" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconSave' />
// //                     ) : (
// //                       <PencilSquare size={35} color="blue" onClick={() => handleToggleEdit(question.id)} className="mr-2 icon" id='iconEdit' />
// //                     )}
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col>
// //                     <br />
// //                     <TrashFill size={35} color="red" onClick={() => handleDeleteQuestion(question.id)} className="icon" id='iconDelete' />
// //                   </Col>
// //                 </Row>
// //               </div>

// //             </Card.Body>
// //           </Card>
// //         ))}
// //         <Row className="mt-2 justify-content-end">
// //           <Col xs="auto">
// //             <Button onClick={handleAddQuestion}>Add Question</Button>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default QuizEditor;
