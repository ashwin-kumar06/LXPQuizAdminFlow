import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import { updatequizfeedbackRequest } from "../../../../actions/Quiz And Feedback Module/Admin/UpdateQuizFeedbackAction";
import Alert from "@mui/material/Alert";
import { deletequizfeedbackRequest } from "../../../../actions/Quiz And Feedback Module/Admin/DeleteQuizFeedbcakAction";
import { GetAllFeedbackApi } from "../../../../middleware/Quiz And Feedback Module/Admin/GetAllFeedbackApi";
import GetByIDFeedbackApi from "../../../../middleware/Quiz And Feedback Module/Admin/GetByIDFeedbackApi";
import { fetchQuizIdFailure } from "../../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { IconButton, Stack, Tooltip } from '@mui/material';    // modification for  imports quizteam
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../../../Styles/Quiz And Feedback Module/QuestionTemplate.css";
import Swal from "sweetalert2";

export const GetAllFeedbacks = () => {

  const courseId = sessionStorage.getItem('courseId');
  const [showPopup, setShowPopup] = useState(false);
  const [getallfeedback, setGetAllfeedback] = useState();
  const [getfeedback, setGetFeedback] = useState();
  const [errorfb, setErrorfb] = useState("");
  const [showAddfbModal, setShowAddfbModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [errors, setErrors] = useState("");
  const [showEditfbQuestionModal, setShowEditfbQuestionModal] = useState(false);

  const quizId = sessionStorage.getItem("quizId");
  // const quizId = useSelector((state) => state.quizId.quizId);

  // sessionStorage.setItem('quizId', quizId)
  const topicId = sessionStorage.getItem('topicId')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fbQuestion, setFbQuestion] = useState([]);
  const [editedQuestion, setEditedQuestion] = useState({
    question: "",
    questionType: "",
    options: [],
  }); /// going to store the value of edit

  // const getfeedback = useSelector(
  //   (state) => state.fetchquizfeedbackid.quizfeedback
  // );


  // useEffect(() => {
  //   const fetchAllquizFeedback = async (quizId) => {
  //     const quizFeedbackData = await GetAllFeedbackApi(quizId);
  //     setGetAllfeedback(quizFeedbackData);
  //   };
  //   fetchAllquizFeedback(quizId);
  // });


  useEffect(() => {
    fetchAllquizFeedback(quizId);
  });

  // const fetchAllquizFeedback = async (quizId) => {
  //   dispatch(fetchallquizfeedbackRequest(quizId));
  // }

  const fetchAllquizFeedback = async (quizId) => {
    const quizFeedbackData = await GetAllFeedbackApi(quizId);
    setGetAllfeedback(quizFeedbackData);
    return quizFeedbackData;
  }



  const handleCloseAddfbQuestionModal = () => {
    setShowAddfbModal(false);
  };
  const handleCloseEditQuestionModal = () => {
    setShowEditfbQuestionModal(false);
  };

  const validateField = (fieldName, value, index = null) => {
    let tempErrors = { ...errors };
    switch (fieldName) {
      case "question":
        tempErrors.question = value ? "" : "Question is required";
        break;
      case "options":
        if (index !== null) {
          if (!tempErrors.individualOptions) {
            tempErrors.individualOptions = [];
          }
          tempErrors.individualOptions[index] = value
            ? ""
            : `Option ${index + 1} is required`;
        }
        tempErrors.options = editedQuestion.options.some((option) => option)
          ? ""
          : "option is required";
        break;
      case "correctOptions":
        if (index !== null) {
          if (!tempErrors.individualCorrectOptions) {
            tempErrors.individualCorrectOptions = [];
          }
          tempErrors.individualCorrectOptions[index] = value
            ? ""
            : `Correct Option ${index + 1} is required`;
        }
        tempErrors.correctOptions = editedQuestion.correctOptions.some(
          (option) => option
        )
          ? ""
          : "correct option is required";
        break;
      default:
        break;
    }

    setErrors(tempErrors);
  };

  const handleUpdateQuestion = () => {
    const { quizFeedbackQuestionId, questionType, ...updatedQuestion } =
      editedQuestion;
    const updatedOptions = updatedQuestion.options.map((optionText, index) => ({
      optionText,
    }));

    const requestBody = {
      ...updatedQuestion,
      questionType: questionType,
      quizId: quizId,
      options: updatedOptions,
    };
    console.log("requestBody", requestBody);
    dispatch(updatequizfeedbackRequest(quizFeedbackQuestionId, requestBody));
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
      title: "QuizFeedback Updated Successfully",
      color:'white'
    });


  };

  const validUpdatedQuestion = (event) => {
    event.preventDefault();
    handleUpdateQuestion();
    setShowEditfbQuestionModal(false);

  };

  const handleOpenEditQuestionModal = async (quizfeedbackId) => {
    console.log("handleopen", quizfeedbackId);
    const getIdfeedback = await GetByIDFeedbackApi(quizfeedbackId);
    setGetFeedback(getIdfeedback);
    console.log("edit open", getIdfeedback);
    if (getIdfeedback && getIdfeedback.options) {
      setShowEditfbQuestionModal(true);
      setEditedQuestion({
        quizFeedbackQuestionId: quizfeedbackId,
        question: getIdfeedback.question,
        questionType: getIdfeedback.questionType,
        options: getIdfeedback.options.map((option) => option.optionText),
      });
      console.log(editedQuestion);
    }
  };

  const handleDeletefbQuestion = (quizFeedbackQuestionId) => {
    dispatch(deletequizfeedbackRequest(quizFeedbackQuestionId));
    setShowPopup(false);

  };
  const handleNavigate = () => {
    sessionStorage.removeItem("quizId");
    sessionStorage.removeItem("topicId");
    sessionStorage.removeItem("courseId");
    navigate(`/addtopic/${courseId}`)
    dispatch(fetchQuizIdFailure(topicId))
  }

  // savedtopics/:id
  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleTypeChange = () => {
    setShowAddModal(true);
  };

  return (
    <Container fluid style={{ marginTop: "10px" }}>
      <div>
        {/* <QuizFeedback /> */}
        <div className="question template container">
          <div>
            <h5>
              {getallfeedback ? <b style={{marginLeft:"2%"}}>Review Feedback Questions</b> : <b>No Feedback Questions</b>}

            </h5>
            {getallfeedback &&
              getallfeedback.length > 0 &&
              getallfeedback.map((feedback, index) => (
                <div
                  key={index}
                  className="card mt-3"
                  style={{ backgroundColor: "#F9F5F6" }}
                >
                  <div className="d-flex justify-content-end">
                    <Tooltip title="Edit Feedback"><IconButton aria-label="Editquiz" onClick={() => { handleOpenEditQuestionModal(feedback.quizFeedbackQuestionId) }}><EditIcon style={{ color: "#365486" }} variant="outlined" /> </IconButton></Tooltip>
                    {/* <a
                    onClick={() => {
                      handleOpenEditQuestionModal(
                        feedback.quizFeedbackQuestionId
                      );
                    }}
                    className="m-2 me-2"
                  >
                    <AiFillEdit
                      id="edit"
                      style={{ fontSize: "30", color: "#365486", cursor: "pointer" }}
                    />
                  </a> */}
                    {/* <a
                    onClick={() => {
                      handleDeletefbQuestion(feedback.quizFeedbackQuestionId);
                    }}
                    className="m-2 ms-3"
                  >
                    <FaTrashCan
                      id="delete"
                      style={{ fontSize: "25", color: "#365486", cursor: "pointer" }}
                    />
                  </a> */}

                    <Tooltip title="Delete Feedback">
                      <IconButton aria-label="deletequiz" onClick={() => setShowPopup(true)} >
                        <DeleteIcon style={{ color: "C80036" }} />
                      </IconButton>
                    </Tooltip>



                    {showPopup && (
                      <div id="popupQuizQuestionDelete">
                        <div id="popup-contentQuizQuestionDelete">
                          <button id="popup-close-buttonQuizQuestionDelete" onClick={() => setShowPopup(false)}>×</button>
                          <p id='QuizQuestionDelete' style={{ marginTop: "5%" }}>Are you sure want to Delete the Feedback?</p>
                          <button onClick={() => handleDeletefbQuestion(feedback.quizFeedbackQuestionId)} id='delete-btn'>Delete</button>
                          <button onClick={() => setShowPopup(false)}>Cancel</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Question {feedback.questionNo}:
                    </h5>
                    <input value={feedback.question} className="form-control" />
                    <div className="form-group">
                      {/* <label>Options:</label> */}
                      {feedback.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control mt-2"
                          value={option.optionText}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          {getallfeedback ? <button
            onClick={handleTypeChange}
            className="btn btn-light mt-3 mb-5 float-right"
            style={{
              backgroundColor: "#365486",
              color: "white",
              marginLeft: "90%",
            }}
          >
            Submit
          </button> : <></>}
          <Modal show={showAddModal} onHide={handleCloseModal}  backdrop='static' style={{ marginTop: "2.5%", marginLeft: "4%" }}>
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#23275c" }}
            ></Modal.Header>
            <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
              <div onClick={handleTypeChange}>
                <Alert severity="success" color="info">
                  QuizFeedback Published successfully !
                </Alert>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
              <Button
                className="btn btn-default mt-1 mb-5"
                style={{
                  backgroundColor: "#365486",
                  color: "white",
                  marginLeft: "55%",
                }}
                onClick={() => {

                  handleNavigate();
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Modal
         backdrop='static'
          show={showEditfbQuestionModal}
          onHide={handleCloseEditQuestionModal}
          style={{ marginTop: "2.5%", marginLeft: "4%" }}
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#23275c", color: "whitesmoke" }}
          >
            <Modal.Title>
              <h5>Edit Question</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
            <div className="form-group">
              <label>Question:</label>
              <input
                className="form-control"
                type="text"
                value={editedQuestion.question}
                onChange={(e) => {
                  console.log("p", e.target.value);
                  setEditedQuestion({
                    ...editedQuestion,
                    question: e.target.value,
                  });

                  validateField("question", e.target.value);

                }}
              />
              {errors.question && (
                <div style={{ color: "red" }}>{errors.question}</div>
              )}
            </div>

            {editedQuestion &&
              editedQuestion.options &&
              editedQuestion.options.map((option, index) => (
                <div className="form-group" key={index}>
                  <label>Option {index + 1}:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...editedQuestion.options];
                      updatedOptions[index] = e.target.value;
                      setEditedQuestion({
                        ...editedQuestion,
                        options: updatedOptions,
                      });
                    }}
                  />
                  {errors.individualoptions &&
                    errors.individualOptions[index] && (
                      <div style={{ color: "red" }}>
                        {errors.individualOptions[index]}
                      </div>
                    )}
                </div>
              ))}
            {errors.options && (
              <div style={{ color: "red" }}>{errors.options}</div>
            )}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
            <Button className="btn btn-light" style={{ backgroundColor: "#365486", color: "white" }} onClick={handleCloseEditQuestionModal}>
              Close
            </Button>
            <Button className="btn btn-light" style={{ backgroundColor: "#365486", color: "white" }} onClick={validUpdatedQuestion}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default GetAllFeedbacks;
