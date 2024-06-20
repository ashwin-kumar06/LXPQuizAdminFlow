import React, { useState, useContext, useEffect, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import BasicPagination from "../../../../components/Quiz And Feedback Module/QuizComponents/Admin/Pagination";
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { IconButton, Stack, Tooltip } from '@mui/material';    // modification for  imports quizteam 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import {
  GetOpenEditQuestionModal,
  PostSingleQuestion,
  UpdateQuizQuestionsApi,
} from "../../../../middleware/Quiz And Feedback Module/Admin/QuestionApi";
import { deleteQuizQuestionRequest } from "../../../../actions/Quiz And Feedback Module/Admin/DeleteQuizQuestionAction";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { updateQuizQuestionRequest } from '../../../../actions/Quiz And Feedback Module/Admin/UpdateQuizQuestionAction';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { set } from 'react-hook-form';
import { FetchQuizQuestionsApi } from '../../../../middleware/Quiz And Feedback Module/Admin/FetchQuizQuestionsApi';

const QuestionTemplate = () => {
  const quizId = sessionStorage.getItem("quizId");

  useEffect(() => {
    fetchQuestions(quizId);
  }, []);

  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  const [error, setError] = useState("");
  const [errors, setErrors] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
  const questionsPerPage = 5;
  const [numCorrectOptions, setNumCorrectOptions] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const fetch = useRef(false);
  const [numOptions, setNumOptions] = useState(5);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const [selectedFilterQuestionType, setSelectedFilterQuestionType] = useState('')
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    questionType: "",
    options: ["", "", "", "", "", "", "", ""],
    correctOptions: ["", "", ""],
  });

  const [editedQuestion, setEditedQuestion] = useState({
    question: "",
    options: ["", "", "", "", "", "", "", ""],
    correctOptions: ["", "", ""],
  });


  // const questions = useSelector((state) => state.quizQuestions.quizQuestions);

  const fetchQuestions = async (quizId) => {
    try {

      // dispatch(fetchAllQuizQuestionRequest(quizId));
      const data = await FetchQuizQuestionsApi(quizId);
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteQuestion = (quizQuestionId) => {
    setQuestionToDelete(quizQuestionId);
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteQuizQuestionRequest(questionToDelete));
    setShowConfirmationModal(false);
    setQuestionToDelete(null);
    window.location.reload();
  };


  const handleOpenEditQuestionModal = async (quizQuestionId) => {
    try {
      const response = await GetOpenEditQuestionModal(quizQuestionId);
      const questionData = response;
      setEditedQuestion({
        quizQuestionId: quizQuestionId,
        question: questionData.question,
        questionType: questionData.questionType,
        options: questionData.options.map((option) => option.option),
        correctOptions: questionData.options
          .filter((option) => option.isCorrect)
          .map((option) => option.option),
      });
      setShowEditQuestionModal(true);
    } catch (error) {
      console.error("Error fetching question data:", error);
    }
  };

  const handleOpenAddQuestionModal = () => {
    setShowAddQuestionModal(true);
  };
  const handleCloseEditQuestionModal = () => {
    setShowEditQuestionModal(false);
    // window.location.reload();
  };

  // const handleDeleteQuestion = (quizQuestionId) => {
  //   dispatch(deleteQuizQuestionRequest(quizQuestionId));
  //   window.location.reload();
  // };

  const handleChange = (index, field, value) => {
    if (field === "correctOptions") {
      setNewQuestion((prevState) => ({
        ...prevState,
        correctOptions: [
          ...prevState.correctOptions.slice(0, index),
          value,
          ...prevState.correctOptions.slice(index + 1),
        ],
      }));
    } else {
      setNewQuestion((prevState) => ({
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
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const validUpdatedQuestion = (event) => {
    event.preventDefault();

    if (validateUpdateQuestion()) {
      handleUpdateQuestion();
    }
  };

  const handleCloseAddQuestionModal = () => {
    setShowAddQuestionModal(false);
  };

  const handleQuestionTypeChange = (e) => {
    const value = e.target.value;
    setSelectedQuestionType(value);
    setNewQuestion((prevState) => ({
      ...prevState,
      questionType: value,
      options: [],
      correctOptions: [],
    }));
  };

  const validateUpdateQuestion = () => {
    let tempErrors = {
      question: "",
      questionType: "",
      options: "",
      correctOptions: "",
      individualOptions: [],
      individualCorrectOptions: [],
    };
    if (!editedQuestion.question) {
      tempErrors.question = "Question is required";
    }
    if (!editedQuestion.questionType) {
      tempErrors.questionType = "Question type is required";
    }
    if (
      editedQuestion.options.length === 0 ||
      !editedQuestion.options.some((option) => option)
    ) {
      tempErrors.options = "option is required";
    } else {
      editedQuestion.options.forEach((option, index) => {
        if (!option) {
          tempErrors.individualOptions[index] = `Option ${index + 1
            } is required`;
        }
      });
    }
    if (
      editedQuestion.correctOptions.length === 0 ||
      !editedQuestion.correctOptions.some((option) => option)
    ) {
      tempErrors.correctOptions = "Correct option is required";
    } else {
      editedQuestion.correctOptions.forEach((option, index) => {
        if (!option) {
          tempErrors.individualCorrectOptions[index] = `Correct Option ${index + 1
            } is required`;
        }
      });
    }

    setErrors(tempErrors);
    return (
      !tempErrors.question &&
      !tempErrors.questionType &&
      !tempErrors.options &&
      !tempErrors.correctOptions &&
      tempErrors.individualOptions.every((e) => !e) &&
      tempErrors.individualCorrectOptions.every((e) => !e)
    );
  };

  const handleUpdateQuestion = () => {
    const { quizQuestionId, questionType, ...updatedQuestion } = editedQuestion;
    const updatedOptions = updatedQuestion.options.map((option, index) => ({
      option,
      isCorrect: updatedQuestion.correctOptions.includes(option),
    }));

    const requestBody = {
      ...updatedQuestion,
      options: updatedOptions,
      questionType: questionType,
      quizId: quizId,
      quizQuestionId: quizQuestionId,
    };

    if (validateUpdateQuestion()) {
      UpdateQuizQuestionsApi(requestBody)
      handleCloseEditQuestionModal();
    }
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
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
  useEffect(() => {
    const newFilteredQuestions = questions.filter(
      (question) =>
        !selectedFilterQuestionType || question.questionType === selectedFilterQuestionType
    );
    setFilteredQuestions(newFilteredQuestions);
  }, [selectedFilterQuestionType, questions]);

  const searchFilteredQuestions = questions.filter(
    (question) =>
      question.question.toLowerCase().includes(searchTerm) &&
      (!selectedFilterQuestionType || question.questionType === selectedFilterQuestionType)
  );

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const currentQuestions = searchFilteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleAddCorrectOption = () => {
    if (numCorrectOptions < newQuestion.options.length) {
      setNumCorrectOptions(numCorrectOptions + 1);
      setNewQuestion((prevState) => ({
        ...prevState,
        correctOptions: [...prevState.correctOptions, ""],
      }));
    }
  };

  const handleRemoveCorrectOption = (index) => {
    if (numCorrectOptions > 1) {
      setNumCorrectOptions(numCorrectOptions - 1);
      const updatedCorrectOptions = [...newQuestion.correctOptions];
      updatedCorrectOptions.splice(index, 1);
      setNewQuestion((prevState) => ({
        ...prevState,
        correctOptions: updatedCorrectOptions,
      }));
    }
  };

  const handleAddOption = () => {
    if (numOptions < 8) {
      setNumOptions(numOptions + 1);
      setNewQuestion((prevState) => ({
        ...prevState,
        options: [...prevState.options, ""],
      }));
    }
  };

  const handleRemoveOption = (index) => {
    if (numOptions > 5) {
      setNumOptions(numOptions - 1);
      const updatedOptions = [...newQuestion.options];
      updatedOptions.splice(index, 1);
      setNewQuestion((prevState) => ({
        ...prevState,
        options: updatedOptions,
      }));
    }
  };
  const handleSaveQuestion = () => {
    let tempErrors = {
      question: "",
      questionType: "",
      options: "",
      correctOptions: "",
    };

    if (!newQuestion.question) {
      tempErrors.question = "Question is required";
    }
    if (!newQuestion.questionType) {
      tempErrors.questionType = "Question type is required";
    }
    if (newQuestion.options.length === 0) {
      tempErrors.options = "At least one option is required";
    }

    setErrors(tempErrors);

    if (
      tempErrors.question ||
      tempErrors.questionType ||
      tempErrors.options ||
      tempErrors.correctOptions
    ) {
      return;
    }

    const requestBody = {
      quizId: quizId,
      question: newQuestion.question,
      questionType: newQuestion.questionType,
      options: newQuestion.options.map((option, index) => ({
        option: option,
        isCorrect:
          newQuestion.questionType === "MCQ" ||
            newQuestion.questionType === "T/F"
            ? newQuestion.correctOptions[0] === option
            : newQuestion.correctOptions.includes(option),
      })),
    };

    PostSingleQuestion(requestBody);
    // handleCloseAddQuestionModal();
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
  };

  return (
    <Container >
      <div className='question-template-container'>
        <div className="form-group row">
          <div className="col-sm-2" id="filter">
            <select
              id="questionType"
              className="form-control"
              value={selectedFilterQuestionType}
              onChange={(e) => setSelectedFilterQuestionType(e.target.value)}
            >
              <option value="" disabled selected>
                Filter by question type
              </option>
              <option value="">All</option>
              <option value="MCQ">MCQ</option>
              <option value="MSQ">MSQ</option>
              <option value="TF">True/False</option>
            </select>
          </div>
        </div>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          className="search-box"
          onChange={handleSearchChange}
        />

        <div className="question-template">
          {error && <p>Error: {error}</p>}
          {currentQuestions.length > 0 ? (
            <div style={{ marginTop: "-15%" }}>
              <h5>Uploaded Questions</h5>
              <div style={{ marginTop: "-6px", marginLeft: "68.5%" }}>
                <div>
                  <BasicPagination
                    totalQuestions={filteredQuestions.length}
                    questionsPerPage={questionsPerPage}
                    page={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
              {currentQuestions.map((question, index) => (
                <div
                  key={index}
                  className="card mt-4"
                  style={{ backgroundColor: "rgb(237, 231, 231)" }}
                >
                  <div className="d-flex justify-content-end header">
                    <Tooltip title="Edit quiz"><IconButton aria-label="Editquiz" onClick={() => { handleOpenEditQuestionModal(question.quizQuestionId) }}  ><EditIcon style={{ color: "#365486" }} variant="outlined" /> </IconButton></Tooltip>

                    {/* <a
                      onClick={() => {
                        handleOpenEditQuestionModal(question.quizQuestionId);
                      }}
                      className="m-2 me-2"
                    >
                      <AiFillEdit
                        style={{
                          fontSize: "30",
                          color: "#365486",
                          cursor: "pointer",
                        }}
                      />
                    </a> */}
                    <Tooltip title="Delete quiz"><IconButton aria-label="deletequiz" onClick={() => {handleDeleteQuestion(question.quizQuestionId)}}  ><DeleteIcon style={{ color: "C80036" }} /></IconButton></Tooltip>

                    {/* <a
                      onClick={() => {
                        handleDeleteQuestion(question.quizQuestionId);
                      }}
                      className="m-2 ms-3"
                    >
                      <FaTrashCan
                        style={{
                          fontSize: "23",
                          color: "#365486",
                          cursor: "pointer",
                        }}
                      />
                    </a> */}
                  </div>
                  <div className="card-body" style={{backgroundColor:"#F9F5F6"}}>
                    <h5 className="card-title">
                      Question Type : {question.questionType}
                    </h5>
                    <h5 className="card-title">
                      Question {question.questionNo}:
                    </h5>

                    <input
                      value={question.question}
                      className="form-control"
                      readOnly
                    />
                    <div className="form-group">
                      <label>Options:</label>
                      {question.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control mt-2"
                          value={option.option}
                          readOnly
                        />
                      ))}
                    </div>
                    <div className="form-group">
                      <label>Correct Answers:</label>
                      {question.options
                        .filter((option) => option.isCorrect)
                        .map((correctOption, index) => (
                          <input
                            key={index}
                            type="text"
                            className="form-control mt-2"
                            value={correctOption.option}
                            readOnly
                          />
                        ))}
                    </div>
                    <button
                      onClick={handleOpenAddQuestionModal}
                      className="btn btn-light mt-3 mb-5 float-right"
                      style={{ color: "white" , backgroundColor:"#365486" }}
                    >
                      Add More Question
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No questions match your search.</p>
          )}
        </div>
        <Modal show={showAddQuestionModal} onHide={handleCloseAddQuestionModal} style={{ marginTop: "2.5%", marginLeft: "3%" }}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#23275c", color: "whitesmoke" }}
          >
            <Modal.Title>Add New Question</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#F9F5F6" }}>
            <div className="form-group">
              <label>Question Type:<b id="required">*</b></label>
              <select
                className="form-control"
                value={selectedQuestionType}
                onChange={handleQuestionTypeChange}
              >
                <option value="">Select Question Type</option>
                <option value="MSQ">Multiple Select Question (MSQ)</option>
                <option value="MCQ">Multiple Choice Question (MCQ)</option>
                <option value="T/F">True/False (T/F)</option>
              </select>
              {errors.questionType && (
                <div style={{ color: "red" }}>{errors.questionType}</div>
              )}
            </div>

            {selectedQuestionType === "MSQ" && (
              <>
                <div className="form-group">
                  <label>Question:<b id="required">*</b></label>
                  <input
                    className="form-control"
                    type="text"
                    value={newQuestion.question}
                    onChange={(e) => handleChange(-1, "question", e.target.value)}
                  />
                </div>
                {[...Array(numOptions)].map((_, index) => (
                  <div className="form-group" key={index}>
                    <label>Option {index + 1}:<b id="required">*</b></label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        value={newQuestion.options[index] || ""}
                        onChange={(e) =>
                          handleChange(index, "options", e.target.value)
                        }
                      />
                      {index >= 5 && (
                        <div className="input-group-append">
                          <button className="btn btn-default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={() => handleRemoveOption(index)}>
                            <FaMinus style={{ fontSize: "10px" }} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="form-group mt-3">
                  <button className="btn btn-default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleAddOption}>
                    <FaPlus style={{ fontSize: "10px" }} /> Add Option
                  </button>
                </div>
                {[...Array(numCorrectOptions)].map((_, index) => (
                  <div className="form-group" key={index}>
                    <label>Correct Option {index + 1}:<b id="required">*</b></label>
                    <div className="input-group">
                      <select
                        className="form-control"
                        value={newQuestion.correctOptions[index] || ""}
                        onChange={(e) =>
                          handleChange(index, "correctOptions", e.target.value)
                        }
                      >
                        <option value="">Select Correct Option</option>
                        {newQuestion.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {index >= 1 && (
                        <div className="input-group-append">
                          <button className="btn btn-default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={() => handleRemoveCorrectOption(index)}>
                            <FaMinus style={{ fontSize: "10px" }} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="form-group mt-3">
                  <button className="btn btn-default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleAddCorrectOption}>
                    <FaPlus style={{ fontSize: "10px" }} />Add Correct Option
                  </button>
                </div>
              </>
            )}
            {selectedQuestionType === "MCQ" && (
              <>
                <div className="form-group">
                  <label>Question:<b id="required">*</b></label>
                  <input
                    className="form-control"
                    type="text"
                    value={newQuestion.question}
                    onChange={(e) => handleChange(-1, "question", e.target.value)}
                  />
                  {errors.question && (
                    <div style={{ color: "red" }}>{errors.question}</div>
                  )}
                </div>
                {[...Array(4)].map((_, index) => (
                  <div className="form-group" key={index}>
                    <label>Option {index + 1}:<b id="required">*</b></label>
                    <input
                      className="form-control"
                      type="text"
                      value={newQuestion.options[index] || ""}
                      onChange={(e) =>
                        handleChange(index, "options", e.target.value)
                      }
                    />
                    {errors.options && (
                      <div style={{ color: "red" }}>{errors.options}</div>
                    )}
                  </div>
                ))}

                <div className="form-group">
                  <label>Correct Option:<b id="required">*</b></label>
                  <select
                    className="form-control"
                    value={newQuestion.correctOptions[0] || ""}
                    onChange={(e) =>
                      handleChange(0, "correctOptions", e.target.value)
                    }
                  >
                    <option value="">Select Correct Option</option>
                    {newQuestion.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.correctOptions && (
                    <div style={{ color: "red" }}>{errors.correctOptions}</div>
                  )}
                </div>
              </>
            )}
            {selectedQuestionType === "T/F" && (
              <>
                <div className="form-group">
                  <label>Question:<b id="required">*</b></label>
                  <input
                    className="form-control"
                    type="text"
                    value={newQuestion.question}
                    onChange={(e) => handleChange(-1, "question", e.target.value)}
                  />
                  {errors.question && (
                    <div style={{ color: "red" }}>{errors.question}</div>
                  )}
                </div>
                {[...Array(2)].map((_, index) => (
                  <div className="form-group" key={index}>
                    <label>Option {index + 1}:<b id="required">*</b></label>
                    <input
                      className="form-control"
                      type="text"
                      value={newQuestion.options[index] || ""}
                      onChange={(e) =>
                        handleChange(index, "options", e.target.value)
                      }
                    />
                    {errors.options && (
                      <div style={{ color: "red" }}>{errors.options}</div>
                    )}
                  </div>
                ))}
                <div className="form-group">
                  <label>Correct Option:<b id="required">*</b></label>
                  {errors.correctOptions && (
                    <div style={{ color: "red" }}>{errors.correctOptions}</div>
                  )}
                  <select
                    className="form-control"
                    value={newQuestion.correctOptions[0] || ""}
                    onChange={(e) =>
                      handleChange(0, "correctOptions", e.target.value)
                    }
                  >
                    <option value="">Select Correct Option</option>
                    {newQuestion.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#F9F5F6" }}>
            <Button variant="default" style={{ backgroundColor: "#365486", color: "whitesmoke" }} onClick={handleCloseAddQuestionModal}>
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
        <Modal show={showEditQuestionModal} onHide={handleCloseEditQuestionModal} style={{ marginTop: "2.5%", marginLeft: "3%" }} >
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
            {editedQuestion.options.map((option, index) => (
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
                    validateField("options", e.target.value);
                  }}
                />
                {errors.individualoptions && errors.individualOptions[index] && (
                  <div style={{ color: "red" }}>
                    {errors.individualOptions[index]}
                  </div>
                )}
              </div>
            ))}
            {errors.options && (
              <div style={{ color: "red" }}>{errors.options}</div>
            )}
            <div className="form-group">
              {editedQuestion.correctOptions.map((option, index) => (
                <div key={index} className="form-group">
                  <label>Correct Option {index + 1}:</label>
                  <select
                    className="form-control"
                    value={option}
                    onChange={(e) => {
                      const updatedCorrectOptions = [...editedQuestion.correctOptions];
                      updatedCorrectOptions[index] = e.target.value;
                      setEditedQuestion({
                        ...editedQuestion,
                        correctOptions: updatedCorrectOptions,
                      });
                      validateField("correctOptions", e.target.value, index);
                    }}
                  >
                    <option value="">Select Correct Option</option>
                    {editedQuestion.options.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.individualCorrectOptions &&
                    errors.individualCorrectOptions[index] && (
                      <div style={{ color: "red" }}>
                        {errors.individualCorrectOptions[index]}
                      </div>
                    )}
                </div>
              ))}
              {errors.correctOptions && (
                <div style={{ color: "red" }}>{errors.correctOptions}</div>
              )}
            </div>
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
        <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} style={{ marginTop: "2.5%", marginLeft: "3%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this question?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default QuestionTemplate