
export const validateTopicForm = (topic,setErrors) => {
    let formIsValid = true;
    let errors = {};
 
    if (!topic.name.trim()) {
      errors.name = 'Topic name is required';
      formIsValid = false;
    }else if(topic.name.length>=50){
        errors.name = 'Maximum Length is 50 character ';
        formIsValid = false;
    }
 
    if (!topic.description.trim()) {
      errors.description = 'Topic description is required';
      formIsValid = false;
    }else if(topic.description.length>=250){
        errors.description = 'Maximum Length is 250 character ';
        formIsValid = false;
    }
 
   
    setErrors(errors);
    return formIsValid;
  };
 