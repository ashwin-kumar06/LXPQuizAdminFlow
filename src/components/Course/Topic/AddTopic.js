import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Alert } from "@mui/material";
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { createTopicsRequest } from '../../../action/Course/Topic/AddTopicAction'

import {createTopicsRequest} from '../../../actions/Course/Topic/AddTopicAction';

// import { fetchTopicsRequest } from '../../../action/Course/Topic/FetchTopicsAction';
import {fetchTopicsRequest} from '../../../actions/Course/Topic/FetchTopicsAction';
import { Col,Row } from 'react-bootstrap';
// import '../../../style/Course/Topic/AddTopic.css';

import '../../../Styles/Course/Topic/AddTopic.css'

import { useState ,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { validateTopicForm } from '../../../utils/Course/Topic/AddTopicValidation';
export default function AddTopic(props) {
  //remove for integration
  sessionStorage.setItem("userName","Mano");
  //end
  const navigate=useNavigate();
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const {id}=useParams();
  //const [courseId,setCourseId]=useState(props.courseId??"273a1881-adb6-498c-9c35-5ba7d4b0c64b")
  // const Id=id;
  //console.log("topic inside courseId",Id);

  const [open, setOpen] = React.useState(false);
  const [topics, setTopics] = useState({

    courseId:id,
    name: "",
    description: "",
    createdBy:"Mano"
   
  });
  const isExist=useSelector((state)=>state.Topic.isExisted);
  const [existMsg,setExistMsg]=useState('');
  useEffect(()=>{
    if(isExist){
        setExistMsg('Topic already exists');
        const timer = setTimeout(() => {
            setExistMsg('');
          }, 5000);

          return()=>clearTimeout(timer);
    }
  },[isExist])

  const addSuccessState=useSelector((state)=>state.Topic.isSubmitted);
  
  const [successMsg,setSuccessMsg]=useState('')
  useEffect(()=>{
    if(addSuccessState){
      
       setSuccessMsg('Topic added successfully');
       
       const timer = setTimeout(() => {
        setSuccessMsg('');
      }, 7000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
      
       
       
    }
  },[addSuccessState])

  //const[topics,setTopics]=useState([]);

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
 // window.location.reload();
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("createdispatch",topics);
    const isFormValid = validateTopicForm(topics, setErrors);
   
      if (isFormValid) {
        try {
          dispatch(createTopicsRequest(topics))
          dispatch(fetchTopicsRequest(id));

    handleClose();
 
 
        } catch (error) {
          console.error('Error creating course:', error);
        }
      } 
    setTopics({
      courseId:id,
      name: "",
      description: "",
      createdBy:sessionStorage.getItem("userName")
     
    });

    

   // navigate('/savedtopics')
    // handleClose();
  

  };

  const handleInputChange=(e)=>{
    const { name, value } = e.target;
    // const {name,description,isactive}=e.target;
    setTopics({...topics,[name]:value });
  }
  return (
    <React.Fragment>
       <Row>
            {/* <Col></Col>
            <Col> */}
            {!open && successMsg && (
        <Alert  severity="success" className="mt-3">
          {successMsg}
        </Alert>
      )}

{/* {!open && failurMsg && (
        <Alert severity="error" className="mt-3">
          {failurMsg}
        </Alert>
      )} */}



{/* {!open && failure && (
        <Alert severity="error" className="mt-3">
          {failure}
        </Alert>
      )} */}

{!open && existMsg && (
        <Alert severity="warning" className="mt-3">
          {existMsg}
        </Alert>
      )}
      
      {/* </Col>
            <Col></Col> */}
        </Row>
      <Button className='mt-2' variant="outlined" onClick={handleClickOpen}>
        Add Topic
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle className='dialog-clr'>Add Topics</DialogTitle>
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
            value={topics.name}
            onChange={handleInputChange}
            style={{  fontWeight:'700px'}}
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
            value={topics.description}
            onChange={handleInputChange}

            // onChange={(e) => setTopics({ ...topics,description: e.target.value })}
            style={{ marginTop: '45px' }}

          />
          {errors.description && <p className="error">{errors.description}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
