// import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../Store/Store';
// import QuizEditor from '../components/QuizEditor';
import React from "react";
import { Provider } from "react-redux";
import store from "../../Store/Store";
import QuizEditor from "../../components/Quiz And Feedback Module/QuizEditor";

const QuizEditorView = () => {
  return (
    <Provider store={store}>
      <QuizEditor />
    </Provider>
  );
};

export default QuizEditorView;