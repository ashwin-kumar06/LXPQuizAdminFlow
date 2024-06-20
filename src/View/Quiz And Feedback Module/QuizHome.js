// import CreateQuiz from "../components/QuizComponents/CreateQuiz";
// import { Provider } from 'react-redux';
// import store from "../Store/Store";
// import QuestionTemplate from "../components/QuizComponents/QuestionTemplate";
import CreateQuiz from "../../components/Quiz And Feedback Module/QuizComponents/CreateQuiz";
import { Provider } from "react-redux";
import store from "../../Store/Store";
import QuestionTemplate from "../../components/Quiz And Feedback Module/QuizComponents/CreateQuiz";

function QuizHomeView() {
  return (
    <>
      <Provider store={store}>
        <CreateQuiz />
        <QuestionTemplate/>
      </Provider>
    </>
  );
}

export default QuizHomeView;