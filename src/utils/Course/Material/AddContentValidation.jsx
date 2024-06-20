export const validateContentForm = (material,setErrors,materialType) => {
    let formIsValid = true;
    let errors = {};
  console.log("ll",materialType);
    // Title validation
    if (!material.name.trim()) {
      errors.name = 'Course name is required';
      formIsValid = false;
    }else if(material.name.length>=50){
        errors.name = 'Maximum Length : 50 character';
        formIsValid = false;
    }
  
    // Thumbnail validation for file type and size
    if (!material.material) {
      errors.material = 'Material is required';
      formIsValid = false;
    } else{
      if(materialType=="VIDEO"){
        if (!/\.(mp4|wav)$/i.test(material.material.name)) {
            errors.material = 'Supported video formats are mp4,wav';
            formIsValid = false;
          } else if (material.material.size > 1024 * 1024 * 1024) { // Check if size is greater than 250KB
            errors.material = 'Image must be less than 1GB';
            formIsValid = false;
          }
     }
     if(materialType=="AUDIO"){
        if (!/\.(mp3)$/i.test(material.material.name)) {
            errors.material = 'Supported audio formats are mp3';
            formIsValid = false;
          } else if (material.material.size > 50 * 1024 *1024) { // Check if size is greater than 250KB
            errors.material = 'Audio must be less than 50MB';
            formIsValid = false;
          }
     }
     if(materialType=="PDF"){

        if (!/\.(pdf)$/i.test(material.material.name)) {
            errors.material = 'Supported pdf formats are pdf';
            formIsValid = false;
          } else if (material.material.size > 50 * 1024 *1024) { // Check if size is greater than 250KB
            errors.material = 'Pdf must be less than 50MB';
            formIsValid = false;
          }
     }
     if(materialType=="PPT"){
        if (!/\.(ppt|pptx)$/i.test(material.material.name)) {
            errors.material = 'Supported ppt formats is ppt';
            formIsValid = false;
          } else if (material.material.size > 50 * 1024 *1024) { // Check if size is greater than 250KB
            errors.material = 'Ppt must be less than 50MB';
            formIsValid = false;
          }
     }
     if(materialType=="TEXT"){
        if (!/\.(txt|doc|rte|docx)$/i.test(material.material.name)) {
            errors.material = 'Supported text formats are rte,doc,doc,txt';
            formIsValid = false;
          } else if (material.material.size > 50 * 1024 *1024) { // Check if size is greater than 250KB
            errors.material = 'Text must be less than 50MB';
            formIsValid = false;
          }
     }
  
    }
 
       
     
    
  
    setErrors(errors);
    return formIsValid;
  };
  