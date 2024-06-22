import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IconButton, Stack, Tooltip } from '@mui/material';    // modification for  imports quizteam 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ImFolderUpload } from "react-icons/im";
import { BiSolidCoinStack } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import {
    ValidationQuizTitle,
    ValidationDuration,
    ValidationGrade,
    ValidationAttempts,
} from "../../../../utils/Quiz And Feedback Module/ValidationCreateQuiz";
import { DeleteQuizDetails } from "../../../../middleware/Quiz And Feedback Module/Admin/api";
import { GetQuizDetails } from "../../../../middleware/Quiz And Feedback Module/Admin/FetchQuizApi";
import { setQuizDetailsRequest } from "../../../../actions/Quiz And Feedback Module/Admin/CreateQuizAction";
import { useNavigate } from "react-router-dom";
import { editQuizDetailsRequest } from "../../../../actions/Quiz And Feedback Module/Admin/EditQuizAction";
import QuestionTemplateView from "../../../../View/Quiz And Feedback Module/QuestionTemplateView";
import { fetchQuizIdFailure } from "../../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import CreateQuizApi from "../../../../middleware/Quiz And Feedback Module/Admin/CreateQuizApi";

export const Home = () => {
    const quizId = sessionStorage.getItem('quizId');
    const topicId = sessionStorage.getItem('topicId');
    const courseId = sessionStorage.getItem('courseId');
    const [button, setButton] = useState(true);
    // console.log("create page topic id", topicId);
    const [showQuestions, setShowQuestions] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [quizTitle, setQuizTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [passMark, setPassMark] = useState('');
    const [attemptsAllowed, setAttemptsAllowed] = useState('');
    const [error, setError] = useState('');
    const [errorduration, setErrorDuration] = useState('');
    const [errormark, setErrormark] = useState('');
    const [errorattempts, setErrorAttempt] = useState('');
    const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
    const [showQuizEditModal, setShowQuizEditModal] = useState(false);
    const [showQuizDeleteModal, setShowQuizDeleteModal] = useState(false);
    const [inputQuizTitle, setInputQuizTitle] = useState('');
    const [errordeletequiz, setErrorDeleteQuiz] = useState('');
    const [formComplete, setFormComplete] = useState(false);
    const [quizDetails, setQuizDetails] = useState({
        topicId: topicId,
        nameOfQuiz: '',
        duration: '',
        passMark: '',
        attemptsAllowed: ''
    });
    const [quizData, setQuizData] = useState({
        topicId: topicId,
        courseId: 'course',
        nameOfQuiz: '',
        duration: '',
        passMark: '',
        attemptsAllowed: ''
    });

    const [isQuizEditable, setIsQuizEditable] = useState(!quizId);

    console.log("create page Id: ", quizId, topicId);

    useEffect(() => {
        fetchQuizData(quizId);
    }, []);

    const toggleOptions = (event) => {
        event.preventDefault();
        setShowOptions(!showOptions);
        event.target.nextSibling.style.display = showOptions ? 'none' : 'block';
    };



    const toggleQuestions = () => {
        setShowQuestions(!showQuestions);
    };


    const handleUploadClick = async (e) => {
        e.preventDefault();
        console.log("quiz details:", quizDetails);
        // dispatch(setQuizDetailsRequest(quizDetails));
        await CreateQuizApi(quizDetails)
        navigate('/upload');
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleQuizTitleChange = (e) => {
        ValidationQuizTitle(e.target.value, setError, setQuizTitle);
        handleQuizChange(e);
    };
    
    const handleInputChange = (e) => {
        ValidationDuration(e.target.value, setDuration, setErrorDuration);
        handleQuizChange(e);
    };
    
    const handlemarkChange = (e) => {
        ValidationGrade(e.target.value, setPassMark, setErrormark);
        handleQuizChange(e);
    };
    
    const handleattemptsChange = (e) => {
        ValidationAttempts(e.target.value, setAttemptsAllowed, setErrorAttempt);
        handleQuizChange(e);
    };

    const handleOpenAddQuestionModal = () => {
        setShowAddQuestionModal(true);
    };

    const handleCloseQuizEditModal = () => {
        setShowQuizEditModal(false);
    }

    const handleCloseQuizDeleteModal = () => {
        setShowQuizDeleteModal(false);
    }

    const handleOpenQuizEditModal = () => {
        setShowQuizEditModal(true);
    }

    const handleOpenQuizDeleteModal = () => {
        setShowQuizDeleteModal(true);
    }

    const handleQuizChange = (e) => {
        const updatedQuizDetails = { ...quizDetails, [e.target.name]: e.target.value };
        setQuizDetails(updatedQuizDetails);
        setQuizData({ ...quizData, [e.target.name]: e.target.value });
        setFormComplete(isFormComplete(updatedQuizDetails));
    };

    const isFormComplete = (details) => {
        return (
            details.nameOfQuiz.trim() !== '' &&
            Number(details.duration) > 0 &&
            Number(details.passMark) > 0 &&
            Number(details.attemptsAllowed) > 0
        );
    };

    const handleSubmit = () => {
        try {
            navigate(`/reviewquestions`)

        } catch (error) {
            console.error('Error fetching data:', error)
        }

    };

    const handleDurationChange = (e) => {
        setDuration('SET_DURATION', e.target.value);
    };

    const handleGradeChange = (e) => {
        setPassMark('SET_PASSMARK', e.target.value);
    };

    const fetchQuizData = async (quizId) => {
        try {
            const data = await GetQuizDetails(quizId);
            sessionStorage.setItem('quizName', data.nameOfQuiz);
            setQuizData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleUpdateQuiz = () => {
        const updatedQuizData = {
            quizId: quizId,
            nameOfQuiz: quizData.nameOfQuiz,
            duration: parseInt(quizData.duration),
            attemptsAllowed: parseInt(quizData.attemptsAllowed),
            passMark: parseInt(quizData.passMark)
        };
        console.log("update", updatedQuizData);
        dispatch(editQuizDetailsRequest(updatedQuizData));
        handleCloseQuizEditModal();
        const Toast = Swal.mixin({
            className:"swal2-toast",
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000,
            background:'green',
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Quiz Updated Successfully",
            color:'white'
          });

    };

    const handleDeleteQuiz = (quizId) => {
        setShowQuestions(false);
        console.log('Entered Title:', inputQuizTitle);
        console.log('Actual Quiz Title:', quizData.nameOfQuiz);

        if (inputQuizTitle === quizData.nameOfQuiz) {
            DeleteQuizDetails(quizId);
            const Toast = Swal.mixin({
                className:"swal2-toast",
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 2000,
                background:'green',
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Quiz deleted successfully",
                color:'white'
              });
            // alert('Quiz deleted successfully');
            handleCloseQuizDeleteModal();
            setTimeout(() => {
            navigate(`/addtopic/${courseId}`)
            }, 2000);
            dispatch(fetchQuizIdFailure(topicId))
        } else {
            setErrorDeleteQuiz('The QuizTitle you entered does not match !');
        }
    };

    const handleQuizTitle = (event) => {
        setInputQuizTitle(event.target.value);
    };



    const handleNavigate = () => {
        sessionStorage.removeItem("quizId");
        sessionStorage.removeItem("topicId");
        navigate(`/addtopic/${courseId}`)
        dispatch(fetchQuizIdFailure(topicId))
    }

    return (
        <div>
            <Container fluid className="creat-quiz-container">
                <div >
                    <div className="d-flex justify-content-end mb-5">
                        <button class="btn btn-light" style={{ color: "white", width: '50', marginTop: 100, backgroundColor:"#365486"}} onClick={() => { handleNavigate() }}>Back</button>
                    </div>
                    <form className='quiz-content'>
                        <div className="" id="QuizCard" style={{ backgroundColor: 'white' }}>
                            <div className="card-bodycreatequiz">
                                <div className="dx mt-2">
                                    <div className="container">
                                        <div className="d-flex justify-content-end" >
                                            {/* <Button class="btn btn-default" style={{ backgroundColor: "#365486", color: "white", margin:3 }} onClick={handleOpenQuizEditModal}><AiFillEdit /> Edit</Button> */}
                                            <Tooltip title="Edit quiz"><IconButton aria-label="Editquiz" onClick={handleOpenQuizEditModal}  ><EditIcon style={{ color: "#365486" }} variant="outlined" /> </IconButton></Tooltip>
                                            <Tooltip title="Delete quiz"><IconButton aria-label="deletequiz" onClick={handleOpenQuizDeleteModal}  ><DeleteIcon style={{ color: "C80036" }} /></IconButton></Tooltip>


                                            {/* <Button class="btn btn-default" style={{ backgroundColor: "#365486", color: "white", margin:3 }} onClick={handleOpenQuizDeleteModal}><FaTrashCan /> Delete</Button> */}
                                        </div>

                                        <div className="form-group row mt-3">
                                            <label htmlFor="lbl1" className="col-sm-3 quizfield col-form-label" style={{ fontWeight: "bold" }} >Quiz Title<span id='required'>*</span></label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="lbl1" placeholder="Enter the Quiz Title" style={{ borderRadius: 8 }} name='nameOfQuiz' value={quizData.nameOfQuiz} readOnly={!isQuizEditable} onChange={handleQuizTitleChange} />
                                            </div>
                                        </div>
                                        <div class="form-group row mt-3">
                                            <label for="lbl3" class="col-sm-3 quizfield col-form-label" style={{ fontWeight: "bold" }}>Duration (In Minutes)<span id='required'>*</span></label>
                                            <div class="col-sm-8">
                                                <input type="number" class="form-control" id="lbl3" placeholder="Enter the Time Limit in Minutes" style={{ borderRadius: 8 }} name='duration' value={quizData.duration} readOnly={!isQuizEditable} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div class="form-group row mt-3">
                                            <label for="lbl5" class="col-sm-3 quizfield col-form-label" style={{ fontWeight: "bold" }}>Grade to be Secured<span id='required'>*</span></label>
                                            <div class="col-sm-8">
                                                <input type="number" class="form-control" id="lbl5" placeholder="Enter the Minimum Score to be Passed" style={{ borderRadius: 8 }} name='passMark' value={quizData.passMark} readOnly={!isQuizEditable} onChange={handlemarkChange} />
                                            </div>
                                        </div>
                                        <div class="form-group row mt-3">
                                            <label for="lbl4" class="col-sm-3 quizfield col-form-label" style={{ fontWeight: "bold" }}>Attempts Allowed<span id='required'>*</span></label>
                                            <div class="col-sm-8">
                                                <input type="number" className="form-control" id="lbl1" placeholder="Attempts Allowed" style={{ borderRadius: 8 }} name='attemptsAllowed' value={quizData.attemptsAllowed} readOnly={!isQuizEditable} onChange={handleattemptsChange} />
                                            </div>
                                        </div>
                                        {quizId ? (
                                            <div></div>
                                        ) : (
                                            <div className="form-group" style={{ textAlign: 'center' }}>
                                                <div className="">
                                                <Button
    type="submit"
    className="btn btn-primary"
    onClick={(e) => {
        handleUploadClick(e);
    }}
    style={{ color: 'white', width: 200 }}
    disabled={!formComplete}
>
    <FaUpload /> Import Question
</Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* --------------------------------------------------------------*/}
                    {/* {quizId ? <div style={{ textAlign: 'center', marginTop: 50 }}>
                        <Button
                            type="submit"
                            className="btn btn-light"
                            onClick={toggleQuestions}

                            style={{
                                backgroundColor:"#365486",
                                color:"white",
                                borderRadius: 8,

                            }}
                        >
                            {showQuestions ? "Hide Questions" : "View Questions"}
                        </Button>
                    </div> : <></>} */}
                    {showQuestions && quizId ? (
                        <div className="">
                            <QuestionTemplateView />
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {quizId ? <div>
                        <button onClick={handleSubmit} className="btn btn-light mt-3 mb-5 float-left" style={{ color: "white", marginLeft: "92%" ,  backgroundColor:"#365486" }}>Proceed</button>
                    </div> : <div></div>}
                    {/* DeleteQuiz */}
                    <Modal show={showQuizDeleteModal} onHide={handleCloseQuizDeleteModal} backdrop='static' style={{ marginTop: "2.5%", marginLeft: "4%" }}>
                        <Modal.Header  closeButton style={{ backgroundColor: "#23275c", color: "whitesmoke" }}>
                            <Modal.Title><h5>Deleting the Quiz</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#F9F5F6" }} >
                            <div className="container">
                                <div className="form-group row mt-3">
                                    <label htmlFor="lbl1" className="col-sm-10 col-form-label" style={{ fontWeight: "bold" }}>To confirm, deleting type the QuizTitle "{quizData.nameOfQuiz}"in the Input<span id='required'>*</span></label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="lbl1" placeholder="Enter the Quiz Title" style={{ borderRadius: 8 }} onChange={handleQuizTitle} />
                                        {errordeletequiz && <p style={{ color: 'red', fontSize: "50" }}>{errordeletequiz}</p>}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
                            <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleCloseQuizDeleteModal}>Back</Button>
                            <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={() => { handleDeleteQuiz(quizId) }}>Delete</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* EditQuiz */}
                    <Modal show={showQuizEditModal} onHide={handleCloseQuizEditModal} backdrop='static' style={{ marginTop: "2.5%", marginLeft: "4%" }}>
                        <Modal.Header closeButton style={{ backgroundColor: "#23275c", color: "whitesmoke" }}>
                            <Modal.Title><h5>Quiz Editor</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
                            <div className="container">
                                <div className="form-group row mt-3">
                                    <label htmlFor="lbl1" className="col-sm-5 col-form-label" style={{ fontWeight: "bold" }}>Quiz Title<span id='required'>*</span></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="lbl1" placeholder="Enter the Quiz Title" style={{ borderRadius: 8 }} name='nameOfQuiz' value={quizData.nameOfQuiz} onChange={(e) => { handleQuizTitleChange(e); handleQuizChange(e) }} />
                                        {error && <p style={{ color: 'red', fontSize: "50" }}>{error}</p>}
                                    </div>
                                </div>
                                <div class="form-group row mt-3">
                                    <label for="lbl3" class="col-sm-5 col-form-label" style={{ fontWeight: "bold" }}>Duration(In Minutes)<span id='required'>*</span></label>
                                    <div class="col-sm-8">
                                        <input type="number" class="form-control" id="lbl3" placeholder="Enter the Time Limit in Minutes" style={{ borderRadius: 8 }} name='duration' value={quizData.duration} onChange={(e) => { handleDurationChange(e); handleQuizChange(e); handleInputChange(e) }} />
                                        {errorduration && <p style={{ color: 'red', fontSize: "50" }}>{errorduration}</p>}
                                    </div>
                                </div>
                                <div class="form-group row mt-3">
                                    <label for="lbl5" class="col-sm-5 col-form-label" style={{ fontWeight: "bold" }}>Grade to be Secured<span id='required'>*</span></label>
                                    <div class="col-sm-8">
                                        <input type="number" class="form-control" id="lbl5" placeholder="Enter the Minimum Score to be Passed" style={{ borderRadius: 8 }} name='passMark' value={quizData.passMark} onChange={(e) => { handleGradeChange(e); handleQuizChange(e); handlemarkChange(e) }}></input>
                                        {errormark && <p style={{ color: 'red', fontSize: "50" }}>{errormark}</p>}
                                    </div>
                                </div>
                                <div class="form-group row mt-3">
                                    <label for="lbl4" class="col-sm-5 col-form-label" style={{ fontWeight: "bold" }}>Attempts Allowed<span id='required'>*</span></label>
                                    <div class="col-sm-8">
                                        <input type="number" className="form-control" id="lbl1" placeholder="Attempts Allowed" style={{ borderRadius: 8 }} name='attemptsAllowed' value={quizData.attemptsAllowed} onChange={(e) => { handleQuizChange(e); handleattemptsChange(e) }} />
                                        {errorattempts && <p style={{ color: 'red', fontSize: "50" }}>{errorattempts}</p>}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}  >
                            <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleCloseQuizEditModal}>Back</Button>
                            <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleUpdateQuiz}>Update</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title id='questitle'>Question Library</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <h6><BiSolidCoinStack style={{ fontSize: "30", color: "GrayText", marginBottom: "11", marginLeft: "10" }} /><Link id='bulklink' onClick={() => { handleBulkUpload(bulkQuizId) }}> Add Question from Bulk Upload</Link></h6> */}
                            <h6><ImFolderUpload style={{ fontSize: "20", color: "GrayText", marginBottom: "11", marginLeft: "13" }} /><Link id='newquelink' onClick={() => { handleOpenAddQuestionModal(); closeModal() }}> Add New Question</Link></h6>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </Container>
        </div>
    );
};

export default Home;
