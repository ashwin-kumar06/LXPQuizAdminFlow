export const isFormValid = (nameofquiz, duration, passMark, attemptsAllowed) => {
    return nameofquiz !== '' && duration !== '' && passMark !== '' && attemptsAllowed !== '';
};

//QuizTitleField Validation
export const ValidationQuizTitle = (value, setError, setQuizTitle) => {
    if (/^\d+$/.test(value)) {
        setError('*Please enter only text ');
    } else {
        setError('');
        setQuizTitle(value);
    };
}
//QuizDuration Field Validation
export const ValidationDuration = (value, setDuration, setErrorDuration) => {
    if (value < 30 || value > 180) {
        setErrorDuration('Invalid range. Please enter a number between 30 and 180.');
        setDuration(Math.min(Math.max(value, 30), 180));
    }

    else {
        setErrorDuration('');
        setDuration(value);
    };
}
//QuizPassmark field validation
export const ValidationGrade = (value, setPassMark, setErrormark) => {
    if (value < 60 || value > 90) {
        setErrormark('Please enter a passmark between 60 and 90.');
        setPassMark(Math.min(Math.max(value, 60), 90));
    }

    else {
        setErrormark('');
        setPassMark(value);
    };
}
//QuizAttempts Allowed field validation
export const ValidationAttempts = (value, setAttemptsAllowed, setErrorAttempt) => {
    if (value < 1 || value > 5) {
        setErrorAttempt('Minimum Attempts Allowed is 5');
        setAttemptsAllowed(Math.min(Math.max(value, 1), 5));
    }

    else {
        setErrorAttempt('');

    }
    setAttemptsAllowed(value);


};



