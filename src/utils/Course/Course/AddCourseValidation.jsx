export const validateForm = (course,setErrors) => {
    let formIsValid = true;
    let errors = {};
  
    // Title validation
    if (!course.title.trim()) {
      errors.title = 'Course title is required';
      formIsValid = false;
    }
  
    // Category validation
    if (!course.category || course.category === '') {
      errors.category = 'Please select a course category';
      formIsValid = false;
    }
  
    // Level validation
    if (!course.level || course.level === '') {
      errors.level = 'Please select a course level';
      formIsValid = false;
    }
  
    // Duration validation
    if (!course.duration) {
      errors.duration = 'Duration is required';
      formIsValid = false;
     } //else if (isNaN(course.duration) || parseInt(course.duration) <= 0) {
    //   errors.duration = 'Please enter a valid duration (positive number)';
    //   formIsValid = false;
    // }
  
    // Description validation
    if (!course.description.trim()) {
      errors.description = 'Course description is required';
      formIsValid = false;
    }
  
    // Thumbnail validation for file type and size
    if (course.thumbnailimage) {
      if (!/\.(jpg|jpeg|png)$/i.test(course.thumbnailimage.name)) {
        errors.thumbnailimage = 'Supported image formats are jpg, jpeg, png';
        formIsValid = false;
      } else if (course.thumbnailimage.size > 250 * 1024) { // Check if size is greater than 250KB
        errors.thumbnailimage = 'Image must be less than 250KB';
        formIsValid = false;
      }
    }
  
    setErrors(errors);
    return formIsValid;
  };

  export const validateCategory = (category, setCategoryErrors) => {
    let formIsValid = true;
    let errors = {};
  
     // Check if the category field is empty
  if (!category.category || !category.category.trim()) {
    errors.category = 'Category is required';
    formIsValid = false;
  }
  // Check if the category contains only alphabetic characters
  else if (!/^[A-Za-z\s]+$/.test(category.category.trim())) {
    errors.category = 'Please enter only alphabetic characters';
    formIsValid = false;
  }
  
    setCategoryErrors(errors);
    return formIsValid;
  };
  