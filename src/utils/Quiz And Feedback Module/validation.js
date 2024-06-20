const validateQuestionText = (text) => {
    if (!text || text.trim() === '') {
      return 'Question text cannot be empty.';
    }
    return '';
  };
  
  const validateOptionText = (options) => {
    const invalidOptions = options.filter(option => !option.text || option.text.trim() === '');
    if (invalidOptions.length > 0) {
      return 'All options must have non-empty text.';
    }
    return '';
  };
  
  const validateCorrectAnswer = (correctAnswer, options) => {
    if (!correctAnswer || correctAnswer.trim() === '') {
      return 'Correct answer cannot be empty.';
    }
    if (!options.some(option => option.text === correctAnswer)) {
      return 'Correct answer must match one of the options.';
    }
    return '';
  };
  
  export { validateQuestionText, validateOptionText, validateCorrectAnswer };
  