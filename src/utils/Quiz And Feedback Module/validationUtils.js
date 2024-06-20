export const validateQuestions = (questions, setErrors) => {
    const errors = {};
    
    questions.forEach((question, index) => {
      const questionId = question.id;
      const questionText = question.text.trim();
      const options = question.options.map(option => option.text.trim());
      const correctAnswer = question.correctAnswer.trim();
      
      if (!questionText) {
        errors[`question-${questionId}`] = `Question ${index + 1} cannot be empty.`;
      }
      
      if (options.some(option => !option)) {
        errors[`options-${questionId}`] = `Options for Question ${index + 1} cannot be empty.`;
      }
      
      if (!correctAnswer) {
        errors[`correctAnswer-${questionId}`] = `Correct answer for Question ${index + 1} cannot be empty.`;
      }
    });
  
    setErrors(errors);
  };
  