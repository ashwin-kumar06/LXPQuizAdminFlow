import React, { useState} from "react";
import AdminNavbar from "./AdminNavbar";
import {useNavigate } from "react-router-dom";
import "../../../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import GetAllFeedbacks from "./GetAllFeedbacks";
import { QuizFeedbackApi } from "../../../../middleware/Quiz And Feedback Module/Admin/QuizFeedbackApi";
import { Container } from "react-bootstrap";

export const QuizFeedback = () => {
  const quizName = sessionStorage.getItem("quizName");
  const courseId = sessionStorage.getItem('courseId');

  console.log("name", quizName);
  const [getallfeedback, setGetAllfeedback] = useState();
  const [errorfb, setErrorfb] = useState("");
  const [loading, setLoading] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddfbModal, setShowAddfbModal] = useState(false);

  const quizId = sessionStorage.getItem("quizId");
  console.log("quiz feed", quizId);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fbQuestion, setFbQuestion] = useState({
    question: "",
    questionType: "",
    options: ["", "", "", "", "", "", "", ""],
  });
  const [selectedfbType, setSelectedfbType] = useState("");


  const handleSaveQuestion = async () => {
    let tempfbErrors = { question: "", questionType: "", optionText: "" };

    if (!fbQuestion.question) {
      tempfbErrors.question = "Question is required";
    }
    if (!fbQuestion.questionType) {
      tempfbErrors.questionType = "Question type is required";
    }
    if (fbQuestion.options.length === 0 && fbQuestion.questionType == "MCQ") {
      tempfbErrors.optionText = "At least one option is required";
    }

    setErrorfb(tempfbErrors);

    if (
      tempfbErrors.question ||
      tempfbErrors.questionType ||
      tempfbErrors.optionText
  ) {
      return;
    }

    const requestBody = {
      quizId: quizId,
      question: fbQuestion.question,
      questionType: fbQuestion.questionType,
      options: fbQuestion.options.map((optionText, index) => ({
        optionText: optionText,
        // isCorrect: fbQuestion.correctOptions.includes(option) // Check if option is in correctOptions array
      })),
    };
    console.log("checkrequestody",requestBody);
    try{
    await QuizFeedbackApi(requestBody);
    setFbQuestion({ ...fbQuestion,question:"", options: "",});
  //   setTimeout(function () {
  //     window.location.reload(1);
  // }, 500);
    handleCloseAddfbQuestionModal();
    }catch(error){
      console.log(error)
    }
   
  };

  const handleOpenAddfbQuestionModal = () => {
    setShowAddfbModal(true);
  };

  const handleCloseAddfbQuestionModal = () => {
    setShowAddfbModal(false);
   
  };
  const handleChange = (index, field, value) => {
    const updatedoptions = [...fbQuestion.options];
    updatedoptions[index] = value;
    setFbQuestion({ ...fbQuestion, options: updatedoptions });

    setFbQuestion((prevState) => ({
      ...prevState,
      [field]:
        index === -1
          ? value
          : [
            ...prevState[field].slice(0, index),
            value,
            ...prevState[field].slice(index + 1),
          ],
    }));
  };

  const handlefbQuestionTypeChange = (e) => {
    const value = e.target.value;
    setSelectedfbType(value);
    setFbQuestion((prevState) => ({
      ...prevState,
      questionType: value,
      options: [],
    }));
  };

  const handleNavigate = () => {
    navigate(`/reviewquestions`);
  };

  return (
    <>
    <Container fluid style={{marginTop:'700px'}}>
    <div>
      <button
        class="btn btn-light"
        style={{
          marginLeft: "95%",
          marginTop: "-73%",
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

      <div>
        <div>
          <h4 className="text" style={{ marginLeft: "5%", marginTop: "-35%" }}>
            <b>Feedback Questions for {quizName} Quiz</b>
          </h4>
          <button
            onClick={handleOpenAddfbQuestionModal}
            className="btn btn-light mt-3 mb-5 float-right"
            style={{
              backgroundColor: "#365486",
              color: "white",
              marginLeft: "43%",
            }}
          >
            Add Feedback Questions
          </button>
          <GetAllFeedbacks />
          <Modal show={showAddfbModal} onHide={handleCloseAddfbQuestionModal} style={{marginTop:"2.5%",marginLeft:"4%"}}>
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#23275c", color: "whitesmoke" }}
            >
              <h5>Add Feedback Questions</h5>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
              <div className="form-group">
                <label>Question Type</label>
                <select
                  className="form-control"
                  value={selectedfbType}
                  onChange={handlefbQuestionTypeChange}
                >
                  <option value="">Select Question Type</option>
                  <option value="MCQ">MCQ</option>
                  <option value="Descriptive">Descriptive</option>
                </select>
                {errorfb.questionType && (
                  <div style={{ color: "red" }}>{errorfb.questionType}</div>
                )}
              </div>

              {selectedfbType === "MCQ" && (
                <>
                  <div className="form-group">
                    <label>
                      Question: <b id="required">*</b>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={fbQuestion.question}
                      onChange={(e) =>
                        handleChange(-1, "question", e.target.value)
                      }
                    />
                    {errorfb.question && (
                      <div style={{ color: "red" }}>{errorfb.question}</div>
                    )}
                  </div>
                  {[...Array(4)].map((_, index) => (
                    <div className="form-group" key={index}>
                      <label>
                        Option {index + 1} <b id="required">*</b>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={fbQuestion.options[index] || ""}
                        onChange={(e) =>
                          handleChange(index, "options", e.target.value)
                        }
                      />
                      {errorfb.options && (
                        <div style={{ color: "red" }}>{errorfb.options}</div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {selectedfbType === "Descriptive" && (
                <>
                  <div className="form-group">
                    <label>Question: <b id="required">*</b></label>
                    <input
                      className="form-control"
                      type="text"
                      value={fbQuestion.question}
                      onChange={(e) =>
                        handleChange(-1, "question", e.target.value)
                      }
                    />
                    {errorfb.question && (
                      <div style={{ color: "red" }}>{errorfb.question}</div>
                    )}
                  </div>
                </>
              )}
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: "F9F5F6" }}>
              <Button
                variant="default"
                style={{ backgroundColor: "#365486", color: "whitesmoke" }}
                onClick={handleCloseAddfbQuestionModal}
              >
                Close
              </Button>
              <Button
                variant="default"
                style={{ backgroundColor: "#365486", color: "whitesmoke" }}
                onClick={() => {
                  handleSaveQuestion();
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>

    </Container>
    </>
      );
}
export default QuizFeedback;
