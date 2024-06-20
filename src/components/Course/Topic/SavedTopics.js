import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { Modal } from 'react-bootstrap';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchTopicsRequest } from '../../../action/Course/Topic/FetchTopicsAction';
import { fetchTopicsRequest } from '../../../actions/Course/Topic/FetchTopicsAction'
import { useSelector } from 'react-redux';
import PDFViewer from '../Material/PDFViewer';
// import '../../style/AddTopic.css'

import { CiMusicNote1 } from "react-icons/ci";
import { BsFiletypePdf, BsFiletypePpt } from "react-icons/bs";
import EditIcon from '@mui/icons-material/Edit';
import { FaFileAlt } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import DeleteIcon from '@mui/icons-material/Delete';
//edit
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { createTopicsRequest } from '../../../action/Course/Topic/AddTopicAction'

// import { fetchEditTopicsRequest } from '../../../action/Course/Topic/FetchEditTopicRequest'
import { fetchEditTopicsRequest } from '../../../actions/Course/Topic/FetchEditTopicRequest'

// import { updateTopicsRequest } from '../../../action/Course/Topic/UpdateTopicsAction'
import { updateTopicsRequest } from '../../../actions/Course/Topic/UpdateTopicsAction'
// import { deleteTopicsRequest } from '../../../action/Course/Topic/DeleteTopicsAction';
import { deleteTopicsRequest } from '../../../actions/Course/Topic/DeleteTopicsAction'
//import DialogContentText from '@mui/material/DialogContentText';
import { fetchContentUrlSuccess } from '../../../actions/Course/Material/FetchContentUrlAction'
import { useParams, useNavigate, Link } from 'react-router-dom';
//----------------------------------------------------------------------------------------------DELETE----------
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogContentText from '@mui/material/DialogContentText';
import { validateTopicForm } from '../../../utils/Course/Topic/AddTopicValidation';
import { Container } from '@mui/material';
import { Card } from 'react-bootstrap';
import VideoViewer from '../Material/VideoViewer';
import AudioViewer from '../Material/AudioViewer';
import { fetchQuizIdRequest } from '../../../actions/Quiz And Feedback Module/Admin/FetchQuizIdAction';

//mano changes
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { VscFeedback } from "react-icons/vsc";
import { IconButton,Stack, Tooltip } from '@mui/material';    // modification for  imports quizteam 
//stop mano changes
export default function SavedTopics(props) {

    // const topicsDetail=useSelector((state)=>state);
    const selectorTopicsDetail = useSelector((state) => state.fetchTopic.topics[0]);
    const [topicsDetail, setTopicsDetails] = useState([]);
    // const topicsDetailSelector = useSelector((state) => state.fetchTopic.topics[0].topics);
    const quizId = useSelector((state) => state.quizId.quizId);

    const isSuccess = useSelector((state) => state.quizId.isSubmitted);

    const [loading, setLoading] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [viewerModelHeader, setViewerModelHeader] = useState();
    const [errors, setErrors] = useState({});
    const [selectedComponent, setSelectedComponent] = useState();

    const [show, setShow] = useState(false);

    const [material_id, setMaterialIdl] = useState(false);
    const { id } = useParams();
    sessionStorage.setItem("userName", "karni");


    //Delete
    // const[topicId,setSelectedTopicId]=useState(null);

    //const [courseId, setCourseId] = useState("273a1881-adb6-498c-9c35-5ba7d4b0c64b");
    // const courseId={id};
    //Edit operation
    const [open, setOpen] = React.useState(false);

    // const [topics, setTopics] = useState({
    //     courseId:props.courseId??"273a1881-adb6-498c-9c35-5ba7d4b0c64b",
    //     topicName: "",
    //     topicDescription: "",
    //     // modifiedBy: sessionStorage.getItem("userName")

    // });
    //Edit topic to get that topicId
    const [updateTopic, setUpdateTopic] = useState({
        topicId: "",
        name: "",
        description: "",
        modifiedBy: sessionStorage.getItem("userName")

    })

    // console.log("Check the seleted topic list", topics);

    useEffect(() => {
        fetchTopics();
        setLoading(true);
        //     const response=fetchTopics();
        //   console.log(response)
        //     setTopicsDetails(selectorTopicsDetail)
        //         console.log(";t.,:",topicsDetail);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            sessionStorage.setItem("courseId", id)
            sessionStorage.setItem("quizId", quizId);
            navigate(`/createquiz`);
        }
    }, [isSuccess, quizId, navigate])

    const fetchTopics = async () => {
        try {
            await
                dispatch(fetchTopicsRequest(id));
            setLoading(false);
        }
        catch (error) {
            console.error('Error fetching topics:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectorTopicsDetail && Array.isArray(selectorTopicsDetail.topics)) {
            setTopicsDetails(selectorTopicsDetail.topics);
        }
        else {
            setTopicsDetails([]);
        }
    }, [selectorTopicsDetail]);

    //fetch topic details for edit and get using useSelector

    let topicForEdit = useSelector((state) => state.fetchEditTopic.topics);
    // let topicForEdit= selectorTopicById;

    //Edit operation
    const handleEditClickOpen = (topicId) => {
        console.log("topicId", topicId);


        dispatch(fetchEditTopicsRequest(topicId))

        setOpen(true);

    };
    useEffect(() => {
        setUpdateTopic({
            topicId: topicForEdit.topicId,
            name: topicForEdit.name,
            description: topicForEdit.description,
            modifiedBy: sessionStorage.getItem("userName")

        })
    }, [topicForEdit])

    const handleClose = () => {
        setOpen(false);
        setUpdateTopic({
            topicId: "",
            name: "",
            description: "",
            modifiedBy: sessionStorage.getItem("userName")

        })
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(createTopicsRequest(topics))
    //     // navigate('/savedtopics')
    //     handleEditClose();
    // };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // const {name,description,isactive}=e.target;
        setUpdateTopic((updateTopic) => ({ ...updateTopic, [name]: value }));
    };
    //---------------------------------------------UPDATE-------------------------------------

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log("lecec")
        // setTopicForEdit({...topicForEdit, modifiedBy: sessionStorage.getItem("userName")})
        const isFormValid = validateTopicForm(updateTopic, setErrors);

        if (isFormValid) {
            try {
                dispatch(updateTopicsRequest(updateTopic))

                handleClose();


            } catch (error) {
                console.error('Error creating course:', error);
            }
        }
        handleClose();
        dispatch(fetchTopicsRequest(id));
    }
    //----------------------------------------------------DELETE------------------------------------
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleDelete = (topicId) => {
        console.log("delete topic", topicId);
        dispatch(deleteTopicsRequest(topicId));
        handleDeleteClose();


    }
    const handleShow = () => setShow(true);
    const handlePreview = (filePath, materialType, materialName, materialId) => {
        setViewerModelHeader(materialName);
        switch (materialType) {
            case 'PDF':
                setSelectedComponent(<PDFViewer material={filePath} />);
                break;
            case 'VIDEO':
                // setSelectedComponent(<VideoViewer material={materialId}/>)
                setSelectedComponent(<VideoViewer material={filePath} />)
                break;
            case 'AUDIO':
                setSelectedComponent(<AudioViewer material={filePath} />)
                break;
            case 'PPT':
                setSelectedComponent(<PDFViewer material={filePath} />);
                break;
            case 'TEXT':
                setSelectedComponent(<PDFViewer material={filePath} />);
                break;
            default:
                setSelectedComponent(<></>)

        }

        handleShow();
    }
    const handleDeleteClickOpen = (topicId) => {
        setDeleteId(topicId)
        setOpenDelete(true);
    };
    const handleDeleteClose = () => {
        setOpenDelete(false);
        setDeleteId("");
        dispatch(fetchTopicsRequest(id));

    };
    //----------------------------------------------------------------------------------------------
    //   const handleNavigate=(id)=>{
    //     // id.preventDefault();
    //       navigate(`/addcontent/${id}`)
    //   }
    // -----------Model opening for pdf viewer model opening function---------//           modifued lines

    const handleModelClose = () => { setShow(false); dispatch(fetchContentUrlSuccess(null)); };
    const handleModelShow = () => setShow(true);
    // -----------Model opening for pdf viewer model opening function end---------//


    const handlePDFview = (materialId) => {
        console.log(materialId);                                              // Modified lines
        setMaterialIdl(materialId);
        handleModelShow();
    }


    //----------------------------------------------------------------------------------------------

    const divStyle = {
        boxShadow: '0px 4px 8px #23275c', // Replace #yourShadowColor with your color
    };

    // ------------------Handlefunctions ffor quiz

    const handleAddFeedBackButton = (topicId) => {
        sessionStorage.setItem("courseId", id)

        sessionStorage.setItem('topicId', topicId);
        navigate('/topicfeedback')
    }


    const handleAddQuizButton = (topicId) => {
        dispatch(fetchQuizIdRequest(topicId));
        sessionStorage.setItem('topicId', topicId);
    }
    const handleAddQuizFeedBackButton=(topicId)=>{
        sessionStorage.setItem('topicId',topicId);
        navigate('/quizfeedback')
        }

    return (
        <Container fluid className='mt-5' style={divStyle}>


            {/* <div> */}
            {loading ? (
                <p>Loading...</p>
            ) : (

                topicsDetail.map((topic, index) => (


                    <Accordion key={index}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                        ><div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>  {topic.topicName}</span>
                                <div>
                                    


{/* mano changes */}

                                     <Tooltip title="Add Quiz"> <IconButton aria-label="Addquiz"  onClick={()=>{handleAddQuizButton(topic.topicId)}}><QuizOutlinedIcon style={{color:"#0074D9"}}/></IconButton> </Tooltip>
                                      <Tooltip title="Add QuizFeedback"><IconButton aria-label="Addquizfeedback"  onClick={()=>{handleAddQuizFeedBackButton(topic.topicId)}}><FeedbackOutlinedIcon style={{color:"#FF851B"}}/></IconButton></Tooltip>
                                      <Tooltip title="Add Feedback"><IconButton aria-label="Addfeedback"  onClick={()=>{handleAddFeedBackButton(topic.topicId)}} ><VscFeedback style={{color:"#FFDC00"}}/></IconButton></Tooltip>
                                      <Tooltip title="Edit topics"><IconButton aria-label="Edittopics"  onClick={() => handleEditClickOpen(topic.topicId)}  ><EditIcon style={{ color:"604CC3" }} variant="outlined" /> </IconButton></Tooltip>
                                      <Tooltip title="Delete topics"><IconButton aria-label="deletetopics"  onClick={() => handleDeleteClickOpen(topic.topicId)}  ><DeleteIcon style={{color:"C80036"}} /></IconButton></Tooltip>

                                  

                                   {/* // <EditIcon style={{ marginRight: 16 }} variant="outlined" onClick={() => handleEditClickOpen(topic.topicId)} /> */}
                                    {/* //<DeleteIcon onClick={() => handleDeleteClickOpen(topic.topicId)} /></div></div> */}
                            {/* added button for quiz teams */}
                            {/* //<button class="btn btn-primary" style={{ marginLeft: '250px' }} onClick={() => { handleAddFeedBackButton(topic.topicId) }}>Add  Feedback</button> */}

                            {/* //<button class="btn btn-primary" style={{ marginLeft: '250px' }} onClick={() => { handleAddQuizButton(topic.topicId) }}>Add Quiz</button> */}
                            {/* <DeleteIcon onClick={() => handleDelete(topic.topicId)} />/ */}
                              {/* stop mano changes */}
                            </div></div>

                        </AccordionSummary>

                        <AccordionDetails>
                            Description : {topic.topicDescription}
                            <ul type='none'>
                                {topic.materials.map((material) => (<>

                                    <li onClick={() => { handlePreview(material.filePath, material.materialType, material.materialName, material.materialId) }}>{material.materialType === 'VIDEO' ? <><CiYoutube className="icon" style={{ color: 'blue', fontSize: '20px' }} /></> : material.materialType == 'AUDIO' ? <><CiMusicNote1 className="icon" style={{ color: 'blue' }} /></> : material.materialType == 'TEXT' ? <><FaFileAlt className="icon" style={{ color: 'red' }} /></> : material.materialType == 'PDF' ? <><BsFiletypePdf className="icon" style={{ color: 'red' }} /></> : <><BsFiletypePpt className="icon" style={{ color: 'red' }} /></>}{material.materialName}</li>
                                </>))}
                            </ul>

                            <Link style={{ marginLeft: '250px' }} to={`/addcontent/${topic.topicId}`}>Add Content</Link>
                            {/* <Button onClick={handleNavigate(topic.topicId)} >Add Content</Button> */}
                        </AccordionDetails>

                    </Accordion>
                ))

            )}
            {/* //-------------------------------------------UPDATE-------------------------------------- */}
            <Dialog
                open={open}
                onClose={handleClose}
            // PaperProps={{
            //     component: 'form',
            //     onSubmit: handleSubmit,
            // }}

            >
                <DialogTitle className='dialog-clr'>Edit Topics</DialogTitle>
                <DialogContent className='dialog-content'>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Course Topic"
                        type="longtext"
                        fullWidth
                        variant="standard"
                        // value={topics.topicName}
                        value={updateTopic.name}
                        onChange={handleInputChange}
                    // onChange={(e) => setTopics({ ...topics, name: e.target.value })}
                    // style={{margin:'10px'}}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        fullWidth
                        // value={topics.topicDescription}
                        value={updateTopic.description}
                        onChange={handleInputChange}

                        // onChange={(e) => setTopics({ ...topics,description: e.target.value })}
                        style={{ marginTop: '45px' }}

                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
            {/* //---------------------------------------------------------DELETE----------------------------------------------------- */}

            <Dialog
                // fullScreen={fullScreen}
                open={openDelete}
                onClose={handleDeleteClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Confirm Deletion"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the topics ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDeleteClose}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={() => handleDelete(deleteId)}>
                        Delete
                    </Button>
                    {/* <Button autoFocus onClick={handleDeleteClose}>
                        Cancel
                    </Button> */}

                </DialogActions>
            </Dialog>

            {/* //---------------------------------------------------PDF model------------------------------------------ */}
            <Modal show={show} onHide={handleModelClose} centered size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>{viewerModelHeader}</Modal.Title>                                                     {/*Modified lines */}
                </Modal.Header>
                <Modal.Body style={{ minHeight: "83vh" }}  >
                    {selectedComponent}
                </Modal.Body>
            </Modal>
            {/* </div> */}
        </Container>
    );
}


