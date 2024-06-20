import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImFolderUpload } from "react-icons/im";
import { BiSolidCoinStack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import UploadBulkQuiz from "../QuizComponents/Quiz And Feedback Module/UploadBulkQuiz";


function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Question Library</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h6>
            <BiSolidCoinStack
              style={{
                fontSize: "30",
                color: "GrayText",
                marginBottom: "11",
                marginLeft: "10",
              }}
            />
            <Link id="bulklink" to="/bulkquiz">
              {" "}
              Add Question from Bulk Upload
            </Link>
          </h6>
        </Modal.Body>
        <Modal.Body>
          <h6>
            <ImFolderUpload
              style={{
                fontSize: "20",
                color: "GrayText",
                marginBottom: "10",
                marginLeft: "11",
              }}
            />
            <Link id="newquelink"> Add New Question</Link>
          </h6>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;