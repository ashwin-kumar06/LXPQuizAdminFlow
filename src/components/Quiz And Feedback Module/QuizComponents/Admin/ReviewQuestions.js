import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    createquizfeedbackRequest,
} from "../../../../actions/Quiz And Feedback Module/Admin/QuizFeedbackAction";
import { useDispatch } from 'react-redux';
import AdminNavbar from './AdminNavbar';
import { useLocation } from 'react-router-dom';
import { fetchAllQuizQuestionRequest } from "../../../../actions/Quiz And Feedback Module/Admin/FetchQuizQuestionsAction";
import { useSelector } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import Alert from "@mui/material/Alert";
import { FetchQuizQuestionsApi } from '../../../../middleware/Quiz And Feedback Module/Admin/FetchQuizQuestionsApi';
import { fetchQuizIdFailure } from '../../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction';

export const ReviewQuestions = () => {

    const courseId = sessionStorage.getItem('courseId');

    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [questions, setQuestions] = useState();
    const location = useLocation();
    const [error, setError] = useState('');
    const [errorfb, setErrorfb] = useState('');
    // const [loading, setLoading] = useState('');
    const [showAddfbModal, setShowAddfbModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    // const [handleTypeChange, setHandleTypeChange] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const quizId = sessionStorage.getItem('quizId');
    const topicId = sessionStorage.getItem('topicId');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            // await GetAllQuestion();
            navigate('/createquiz')
                ``
        } catch (error) {
            console.error('Error fetching data:', error)
        }

    };

    const [fbQuestion, setFbQuestion] = useState({
        question: '',
        questionType: '',
        options: ['', '', '', '', '', '', '', ''],

    });
    const [selectedfbType, setSelectedfbType] = useState('');

    // const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions(quizId);
    }, []);

    const fetchQuestions = async (quizId) => {
        try {
            const questionsData = await FetchQuizQuestionsApi(quizId);
            setQuestions(questionsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // const questions = useSelector((state) => state.quizQuestions.quizQuestions);

    const handleFeedback = () => {
        try {
            navigate(`/quizfeedback`);
        } catch (error) {
            console.error('Error navigating:', error);
        }
    };

    const handleSaveQuestion = () => {
        let tempfbErrors = { question: '', questionType: '', optionText: '' };

        if (!fbQuestion.question) {
            tempfbErrors.question = 'Question is required';
        }
        if (!fbQuestion.questionType) {
            tempfbErrors.questionType = 'Question type is required';
        }
        if (fbQuestion.options.length === 0 && fbQuestion.questionType == "MCQ") {
            tempfbErrors.optionText = 'At least one option is required';
        }

        setErrorfb(tempfbErrors);

        if (tempfbErrors.question || tempfbErrors.questionType || tempfbErrors.optionText) {
            return;
        }

        const requestBody = {
            quizId: quizId,
            question: fbQuestion.question,
            questionType: fbQuestion.questionType,
            options: fbQuestion.options.map((optionText, index) => ({
                optionText: optionText
                // isCorrect: fbQuestion.correctOptions.includes(option) // Check if option is in correctOptions array
            }))
        };
        console.log(requestBody)
        dispatch(createquizfeedbackRequest(requestBody));
        handleCloseAddfbQuestionModal();
    };

    const handleOpenAddfbQuestionModal = () => {
        setShowAddfbModal(true);
    };
    const handleTypeChange = () => {
        setShowAddModal(true);
    };

    const handleOpenModal = () => {
        setShowAddModal(true);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
    };
    const handleCloseAddfbQuestionModal = () => {
        setShowAddfbModal(false);
    };
    const handleChange = (index, field, value) => {
        const updatedoptions = [...fbQuestion.options];
        updatedoptions[index] = value;
        setFbQuestion({ ...fbQuestion, options: updatedoptions });


        setFbQuestion(prevState => ({
            ...prevState,
            [field]: index === -1 ? value : [...prevState[field].slice(0, index), value, ...prevState[field].slice(index + 1)]
        }));
        // }
    };

    const handlefbQuestionTypeChange = (e) => {
        const value = e.target.value;
        setSelectedfbType(value);
        setFbQuestion(prevState => ({
            ...prevState,
            questionType: value,
            options: [],
        }));
    };

    const handleSelectQuestion = (index) => {
        setSelectedQuestion(index);
        // Scroll to the question details
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleNavigate = () => {
        navigate(`/createquiz`);
    }

    const handleClose = () => {
        sessionStorage.removeItem("quizId");
        sessionStorage.removeItem("topicId");
        sessionStorage.removeItem("courseId");
        navigate(`/addtopic/${courseId}`)
        dispatch(fetchQuizIdFailure(topicId))
    }


    return (
        <>
            <Container fluid style={{ marginTop: '300px' }}>
                <div>
                    <button class="btn btn-light" style={{ marginLeft: "95%", marginTop: "-29%", backgroundColor: "#365486", color: "white", width: '50' }} onClick={() => { handleNavigate() }}>Back</button>
                    <div>

                        <div className='question-template-container' style={{ display: 'flex', marginTop: "-10%" }}>
                            <div className="question-grid-container ">
                                {questions && questions.length > 0 && (
                                    <div className="question-grid">
                                        {questions.map((question, index) => (
                                            <div
                                                key={index}
                                                className={`question-number ${selectedQuestion === index ? 'active' : ''}`}
                                                onClick={() => handleSelectQuestion(index)}
                                            >
                                                {index + 1}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Container style={{ width:1200}}>
                                <div className="question-details-container">

                                    {error && <p>Error: {error}</p>}
                                    {questions && questions.length > 0 && (
                                        <div>
                                            <h5 className='text' style={{ marginTop: "-5%" , marginLeft:"1%" }}>Review Questions</h5>
                                            {questions.map((question, index) => (
                                                <div
                                                    key={index}
                                                    id={`question-${index}`} // Add an ID to each question card
                                                    className='card mt-3'>
                                                    <div className="card-body" style={{backgroundColor:"#F9F5F6"}}>
                                                        <h5 className="card-title">Question {question.questionNo}:</h5>
                                                        <input value={question.question} className='form-control' readOnly />
                                                        <div className="form-group">
                                                            <label>Options:</label>
                                                            {question.options.map((option, index) => (
                                                                <input key={index} type="text" className="form-control mt-2" value={option.option} readOnly />
                                                            ))}
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Correct Answers:</label>
                                                            {question.options.filter(option => option.isCorrect).map((correctOption, index) => (
                                                                <input key={index} type="text" className="form-control mt-2" value={correctOption.option} readOnly />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <button onClick={handleSubmit} className="btn btn-light mt-3 mb-5 float-right" style={{ backgroundColor: "#365486", color: "white" }}>Go to Edit Page</button>
                                            <button onClick={handleTypeChange} className="btn btn-light mb-5 float-right" style={{ backgroundColor: "#365486", color: "white", marginLeft: "80%", marginTop: "-15%" }}>Review & Publish</button>
                                        </div>
                                    )}
                                </div>
                            </Container>

                            <div>
                                <Modal show={showAddfbModal} onHide={handleCloseAddfbQuestionModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Feedback Questions</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
                                        <div className="form-group">
                                            <label>Question Type:</label>
                                            <select className='form-control' value={selectedfbType} onChange={handlefbQuestionTypeChange}>
                                                <option value="">Select Question Type</option>
                                                <option value="MCQ">MCQ</option>
                                                <option value="Descriptive">Descriptive</option>
                                            </select>
                                            {errorfb.questionType && <div style={{ color: "red" }}>{errorfb.questionType}</div>}
                                        </div>

                                        {selectedfbType === 'MCQ' && (
                                            <>
                                                <div className="form-group">
                                                    <label>Question:</label>
                                                    <input className='form-control' type="text" value={fbQuestion.question} onChange={(e) => handleChange(-1, 'question', e.target.value)} />
                                                    {errorfb.question && <div style={{ color: "red" }}>{errorfb.question}</div>}
                                                </div>
                                                {[...Array(4)].map((_, index) => (
                                                    <div className="form-group" key={index}>
                                                        <label>Option {index + 1}:</label>
                                                        <input className='form-control' type="text" value={fbQuestion.options[index] || ''} onChange={(e) => handleChange(index, 'options', e.target.value)} />
                                                        {errorfb.options && <div style={{ color: "red" }}>{errorfb.options}</div>}
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        {selectedfbType === 'Descriptive' && (
                                            <>
                                                <div className="form-group">
                                                    <label>Question:</label>
                                                    <input className='form-control' type="text" value={fbQuestion.question} onChange={(e) => handleChange(-1, 'question', e.target.value)} />
                                                    {errorfb.question && <div style={{ color: "red" }}>{errorfb.question}</div>}
                                                </div>
                                            </>
                                        )}
                                    </Modal.Body>
                                    <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
                                        <Button variant="secondary" onClick={handleCloseAddfbQuestionModal}>Close</Button>
                                        <Button variant="primary" onClick={() => { handleSaveQuestion() }}>Save</Button>

                                    </Modal.Footer>
                                </Modal>

                                <Modal show={showAddModal} onHide={handleCloseModal} backdrop='static' style={{ marginTop: "2.5%", marginLeft: "3%" }}>
                                    <Modal.Header closeButton style={{ backgroundColor: "#23275c" }}>
                                    </Modal.Header>
                                    <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
                                        <div onChange={handleTypeChange}>
                                            <Alert severity="success" color='info'>Quiz Questions Published successfully</Alert>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer style={{ backgroundColor: "#F9F5F6", display:'flex' }}>
                                        <Button onClick={handleFeedback} className="btn btn-light" style={{ backgroundColor: "#365486", color: "white" }}>Add Feedback</Button>
                                        <Button className="btn btn-light" style={{ backgroundColor: "#365486", color: "white", marginLeft: "40%" }} onClick={handleClose}>Go to course</Button>

                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default ReviewQuestions