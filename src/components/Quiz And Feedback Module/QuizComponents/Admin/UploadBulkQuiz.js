// import React, { useRef, useState } from 'react';
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom';
// import "../../../../Styles/Quiz And Feedback Module/UploadBulkQuiz.css";
// import AdminNavbar from './AdminNavbar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchQuizIdRequest } from "../../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction";
// import { useSelector } from 'react-redux';
// import { BulkUploadQuestion } from '../../../../middleware/Quiz And Feedback Module/Admin/QuestionApi';
// import Exceltemplate from "../../../../assets/Quiz And Feedback Module/ExcelTemplate/Bulk upload format.xlsx"
// import { Button, Container } from 'react-bootstrap';
// import { FcInfo } from "react-icons/fc";

// const UploadBulkQuiz = () => {
//   const dispatch = useDispatch();
//   const topicId = sessionStorage.getItem("topicId");
//   const [files, setFiles] = useState(undefined);
//   const inputref = useRef();
//   const navigate = useNavigate();
//   const [importedQuestions, setImportedQuestions] = useState([]);
//   const allowedFileTypes = [".xlsx"];

//   useEffect(() => {
//     fetchQuizId(topicId);
//   });

//   const fetchQuizId = async (topicId) => {
//     dispatch(fetchQuizIdRequest(topicId));
//     // setQuizId(response);
//   };

//   const quizId = useSelector((state) => state.quizId.quizId);
//   console.log("upload page", quizId);
//   sessionStorage.setItem("quizId", quizId);

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     validateFiles(selectedFiles);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setFiles(event.dataTransfer.files);
//   };

//   const validateFiles = (files) => {
//     const selectedFileNames = Array.from(files).map((file) => file.name);
//     const invalidFiles = selectedFileNames.filter(
//       (fileName) => !allowedFileTypes.some((type) => fileName.endsWith(type))
//     );

//     if (invalidFiles.length > 0) {
//       alert(
//         `Invalid file types: ${invalidFiles.join(
//           ", "
//         )}. Please select .xlsx file`
//       );
//     } else {
//       setFiles(files);
//     }
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     console.log("handleFileUpload: ", quizId);
//     BulkUploadQuestion(files, quizId);
//     navigate(`/createquiz`);
//   };
//   return (
//     <>
//   <Container fluid style={{marginTop:"820px"}}>
//       <div id="uploadContent">
//         <h5 id="heading" style={{ marginTop: "-38%", marginLeft: "25%" }}>
//           Upload Question from device{" "}
//         </h5>
//         <div id="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
//           <FaCloudUploadAlt
//             style={{ fontSize: "50px", marginTop: "-3%", color: "#365486" }}
//           />
//           <h5 id="heading">Drag and Drop Files to Upload</h5>
//           <h5 id="heading">Or</h5>
//           <input
//             type="file"
//             multiple
//             onChange={handleFileChange}
//             hidden
//             ref={inputref}
//           />
//           <button
//             class="btn btn-light"
//             style={{ backgroundColor: "#365486", color: "white" }}
//             onClick={(e) => {
//               e.preventDefault();
//               inputref.current.click();
//             }}
//           >
//             Browse Files
//           </button>
//         </div>
//         <div style={{ marginLeft: "25%", marginTop: "2%" }}>
//           <h6 id="heading">Supported File formats : .xlsx</h6>
//           <br />
//           {files ? (
//             <>
//               <div>
//                 <h5 id="heading">Selected File</h5>
//                 {Array.from(files).map((file, idx) => (
//                   <p key={idx}>{file.name}</p>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//         <br />
//         <div className="position-absolute start-50 translate-middle">
//           <button
//             style={{ backgroundColor: "#365486", color: "white" }}
//             className="btn btn-light mt-3 ms-5"
//             type="submit"
//             onClick={handleFileUpload}
//             disabled={!files || files.length === 0}
//           >
//             Upload File
//           </button>
//           <div id="temp">
//             <a
//               href={Exceltemplate}
//               download="Bulk upload template"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FcInfo size="25px" />
//               <Button variant="default">
//                 <h6>Download Question Format</h6>
//               </Button>
//             </a>
//           </div>
//         </div>
//       </div>
//       </Container>
//     </>
//   );
// };
// export default UploadBulkQuiz


import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "../../../../Styles/Quiz And Feedback Module/UploadBulkQuiz.css";
import AdminNavbar from './AdminNavbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuizIdRequest } from "../../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction";
import { useSelector } from 'react-redux';
import { BulkUploadQuestion } from '../../../../middleware/Quiz And Feedback Module/Admin/QuestionApi';
import Exceltemplate from "../../../../assets/Quiz And Feedback Module/ExcelTemplate/Bulk upload format.xlsx"
import { Button, Container } from 'react-bootstrap';
import { FcInfo } from "react-icons/fc";
import Swal from "sweetalert2";

const UploadBulkQuiz = () => {
  const dispatch = useDispatch();
  const topicId = sessionStorage.getItem("topicId");
  const [files, setFiles] = useState(undefined);
  const inputref = useRef();
  const navigate = useNavigate();
  const [importedQuestions, setImportedQuestions] = useState([]);
  const allowedFileTypes = [".xlsx"];

  useEffect(() => {
    fetchQuizId(topicId);
  });

  const fetchQuizId = async (topicId) => {
    dispatch(fetchQuizIdRequest(topicId));
    // setQuizId(response);
  };

  const quizId = useSelector((state) => state.quizId.quizId);
  console.log("upload page", quizId);
  sessionStorage.setItem("quizId", quizId);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    validateFiles(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const validateFiles = (files) => {
    const selectedFileNames = Array.from(files).map((file) => file.name);
    const invalidFiles = selectedFileNames.filter(
      (fileName) => !allowedFileTypes.some((type) => fileName.endsWith(type))
    );

    if (invalidFiles.length > 0) {
      alert(
        `Invalid file types: ${invalidFiles.join(
          ", "
        )}. Please select .xlsx file`
      );
    } else {
      setFiles(files);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    console.log("handleFileUpload: ", quizId);
    BulkUploadQuestion(files, quizId);
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
      title: "Bulk Uploaded Successfully",
      color:'white'
    });
    navigate(`/createquiz`);
  };
  return (
    <>
  <Container fluid style={{marginTop:"600px"}}>
      <div id="uploadContent">
        <h5 id="heading" style={{ marginTop: "-38%", marginLeft: "25%" }}>
          Upload Question from device{" "}
        </h5>
        <div id="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
          <FaCloudUploadAlt
            style={{ fontSize: "50px", marginTop: "-3%", color: "#365486" }}
          />
          <h5 id="heading">Drag and Drop Files to Upload</h5>
          <h5 id="heading">Or</h5>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            hidden
            ref={inputref}
          />
          <button
            class="btn btn-light"
            style={{ backgroundColor: "#365486", color: "white" }}
            onClick={(e) => {
              e.preventDefault();
              inputref.current.click();
            }}
          >
            Browse Files
          </button>
        </div>
        <div style={{ marginLeft: "25%", marginTop: "2%" }}>
          <h6 id="heading">Supported File formats : .xlsx</h6>
          <br />
          {files ? (
            <>
              <div>
                <h5 id="heading">Selected File</h5>
                {Array.from(files).map((file, idx) => (
                  <p id="selectedfilename" key={idx}>{file.name}</p>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <br />
        <div className="position-absolute start-50 translate-middle">
          <div id="uploadfilebtn">
          <button 
            style={{ backgroundColor: "#365486", color: "white"}}
            className="btn btn-light mt-3 ms-5"
            type="submit"
            onClick={handleFileUpload}
            disabled={!files || files.length === 0}
          >
            Upload File
          </button>
          </div>
          <div id="temp">
            <a
              href={Exceltemplate}
              download="Bulk upload template"
              target="_blank"
              rel="noreferrer"
            >
              <FcInfo size="25px" />
              <Button variant="default">
                <h6>Download Question Format</h6>
              </Button>
            </a>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
};
export default UploadBulkQuiz