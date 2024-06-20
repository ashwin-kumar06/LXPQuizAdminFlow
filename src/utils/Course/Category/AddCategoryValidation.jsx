export const validateCategoryForm = (category,setErrors) => {
    let CatagoryValid = true;
    let errors = {};
  
    // Title validation
    if (!category.category.trim()) {
      errors.category = 'This field is required';
      CatagoryValid= false;
    }
  
   
    
  
    setErrors(errors);
    return CatagoryValid ;
  };
  