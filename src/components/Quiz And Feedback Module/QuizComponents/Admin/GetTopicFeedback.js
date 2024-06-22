import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import Alert from "@mui/material/Alert";
import { deletetopicfeedbackRequest } from "../../../../actions/Quiz And Feedback Module/Admin/DeleteTopicFeedbackAction";
import { updatetopicfeedbackRequest } from "../../../../actions/Quiz And Feedback Module/Admin/UpdateTopicFeedbackAction";
import { GetTopicFeedbackApi } from "../../../../middleware/Quiz And Feedback Module/Admin/GetTopicFeedbackApi";
import GetByIDTopicFeedbackApi from "../../../../middleware/Quiz And Feedback Module/Admin/GetByIDTopicFeedbackApi";
import DeleteTopicFeedbackApi from "../../../../middleware/Quiz And Feedback Module/Admin/DeleteTopicFeedbackApi";
import { IconButton, Stack, Tooltip } from '@mui/material';    // modification for  imports quizteam
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../../../Styles/Quiz And Feedback Module/QuestionTemplate.css";
import Swal from "sweetalert2";

export const GetTopicFeedback = () => {
  // const { topicFeedbackId } = useParams();
  //  const getallfeedback = useSelector(
  //    (state) => state.fetchtopicfeedback.quizfeedback[0]
  //  );
  const courseId = sessionStorage.getItem('courseId');
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [topicfeedback, setGetAllfeedback] = useState();
  const [getfeedback, setGetFeedback] = useState();
  const [errorfb, setErrorfb] = useState("");
  const [showAddfbModal, setShowAddfbModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [errors, setErrors] = useState("");
  const [showEditfbQuestionModal, setShowEditfbQuestionModal] = useState(false);

  const navigate = useNavigate();
  const topicId = sessionStorage.getItem("topicId");
  const dispatch = useDispatch();
  const [fbQuestion, setFbQuestion] = useState([]);
  const [editedQuestion, setEditedQuestion] = useState({
    question: "",
    questionType: "",
    options: [],
  }); /// going to store the value of edit

  // const getfeedback = useSelector(
  //   (state) => state.fetchtopicfeedbackid.quizfeedback
  // );
  // console.log("hi", getfeedback);

  // useEffect(() => {
  //   dispatch(fetchalltopicfeedbackRequest(topicId));
  // }, [dispatch]);

  useEffect(() => {
    fetchAllTopicFeedback(topicId);
  });

  const fetchAllTopicFeedback = async (topicId) => {
    const topicFeedbackData = await GetTopicFeedbackApi(topicId);
    setGetAllfeedback(topicFeedbackData);
    return topicFeedbackData;
  }

  const handleCloseAddfbQuestionModal = () => {
    setShowAddfbModal(false);
  };
  const handleCloseEditQuestionModal = () => {
    setShowEditfbQuestionModal(false);
  };

  const handleOpenConfirmationModal = (topicFeedbackId) => {
    setShowConfirmationModal(true);
    // Store the topicFeedbackId in a state variable or use it directly in the delete function
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
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
    const { topicFeedbackId, questionType, ...updatedQuestion } =
      editedQuestion;
    const updatedOptions = updatedQuestion.options.map((optionText, index) => ({
      optionText,
    }));

    const requestBody = {
      ...updatedQuestion,
      questionType: questionType,
      topicId: topicId,
      options: updatedOptions,
    };
    console.log("requestBody", requestBody);
    dispatch(updatetopicfeedbackRequest(topicFeedbackId, requestBody));
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
      title: "TopicFeedback Updated Successfully",
      color:'white'
    });
    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 1000);

  };

  const validUpdatedQuestion = (event) => {
    event.preventDefault();
    handleUpdateQuestion();
    setShowEditfbQuestionModal(false);
  };


  const handleOpenEditQuestionModal = async (TopicFeedbackQuestionId) => {
    console.log("handle topic ", TopicFeedbackQuestionId);
    const getIdfeedback = await GetByIDTopicFeedbackApi(TopicFeedbackQuestionId)
    setGetFeedback(getIdfeedback);
    console.log("topic edit open", getIdfeedback)
    if (getIdfeedback && getIdfeedback.options) {
      setShowEditfbQuestionModal(true);
      setEditedQuestion({
        topicFeedbackId: TopicFeedbackQuestionId,
        question: getIdfeedback.question,
        questionType: getIdfeedback.questionType,
        options: getIdfeedback.options.map((options) => options.optionText),
      });
      console.log(editedQuestion);
    }
  };

  const handleDeletetopicfbQuestion = async (topicFeedbackId) => {
    await DeleteTopicFeedbackApi(topicFeedbackId);
    setShowPopup(false);
    // Optionally, you can add a success message or perform any other actions after deleting the feedback question
  };

  // const handleDeletetopicfbQuestion = async (topicFeedbackId) => {
  //   // await dispatch(deletetopicfeedbackRequest(topicFeedbackId));
  //   await DeleteTopicFeedbackApi(topicFeedbackId);
  // };

  const handleNavigate = () => {
    sessionStorage.removeItem("topicId");
    navigate(`/addtopic/${courseId}`)
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleTypeChange = () => {
    setShowAddModal(true);
  };

  return (
    <div>
      {/* <TopicFeedback /> */}
      <div className="question template container">
        <div>
          {topicfeedback ? <h5>
            <b style={{marginLeft:"2%"}}>Review Feedback Questions</b>
          </h5> : <h5>No feedback questions</h5>}
          {topicfeedback && topicfeedback.length > 0 ? (
            topicfeedback.map((feedback, index) => (
              <div
                key={index}
                className="card mt-3"
                style={{ backgroundColor: "#F9F5F6" }}
              >
                <div className="d-flex justify-content-end">
                <Tooltip title="Edit Feedback"><IconButton aria-label="Editquiz" onClick={() => { handleOpenEditQuestionModal(feedback.topicFeedbackQuestionId) }}><EditIcon style={{ color: "#365486" }} variant="outlined" /> </IconButton></Tooltip>
                  {/* <a
                    onClick={() => {
                      handleOpenEditQuestionModal(feedback.topicFeedbackQuestionId);
                    }}
                    className="m-2 me-2"
                  >
                    <AiFillEdit style={{ fontSize: "30", color: "#365486", cursor: "pointer" }} />
                  </a>
                  <a
                    onClick={() => handleOpenConfirmationModal(feedback.topicFeedbackQuestionId)}
                    className="m-2 ms-3"
                  >
                    <FaTrashCan style={{ fontSize: "23", color: "#365486", cursor: "pointer" }} />
                  </a> */}
                  <Tooltip title="Delete Feedback">
                      <IconButton aria-label="deletequiz" onClick={()=>setShowPopup(true)} >
                        <DeleteIcon style={{ color: "C80036" }} />
                      </IconButton>
                    </Tooltip>
 
 
 
                    {showPopup && (
                      <div id="popupQuizQuestionDelete">
                        <div id="popup-contentQuizQuestionDelete">
                          <button id="popup-close-buttonQuizQuestionDelete" onClick={() => setShowPopup(false)}>×</button>
                          <p id='QuizQuestionDelete' style={{ marginTop: "5%" }}>Are you sure want to Delete the Feedback?</p>
                          <button onClick={()=> handleDeletetopicfbQuestion(feedback.topicFeedbackQuestionId)} id='delete-btn'>Delete</button>
                          <button onClick={() => setShowPopup(false)}>Cancel</button>
                        </div>
                      </div>
                    )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Question {feedback.questionNo}:
                  </h5>
                  <input
                    value={feedback.question}
                    className="form-control"
                    readOnly
                  />
                  <div className="form-group">
                    {/* <label>Options:</label> */}
                    {feedback.options &&
                      feedback.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control mt-2"
                          value={option.optionText}
                          readOnly
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {topicfeedback ? <button
          onClick={handleTypeChange}
          className="btn btn-light mt-3 mb-5 float-right"
          style={{
            backgroundColor: "#365486",
            color: "white",
            marginLeft: "93%",
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
                TopicFeedback Published successfully !
              </Alert>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
            <Button
              className="btn btn-light mt-1 mb-5"
              style={{
                backgroundColor: "#365486",
                color: "white",
                marginLeft: "55%",
              }}
              onClick={() => {
                handleCloseModal();
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
            <label>Question:<b id="required">*</b></label>
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
                //   setEditedQuestion (e.target.value)
                //                             setEditedQuestion(prevState => ({
                //   ...prevState,
                //   question: e.target.value
                //                             }))
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
                <label>Option {index + 1}:<b id="required">*</b></label>
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
                    // validateField('options', e.target.value);
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
          <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleCloseEditQuestionModal}>
            Close
          </Button>
          <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={validUpdatedQuestion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this feedback question?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDeletetopicfbQuestion(/* Pass the topicFeedbackId here */);
              handleCloseConfirmationModal();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
};
export default GetTopicFeedback;
