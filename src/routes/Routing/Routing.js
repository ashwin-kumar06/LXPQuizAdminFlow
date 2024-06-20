import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../../View/Admin/Login/LoginPage";
import ForgotPassword from "../../View/Admin/Login/ForgotPassword";
import Email from "../../View/Admin/Login/Email";
import Admincourse from "../../View/Admin/Course/Admincourse";
import Adminviewcourse from "../../View/Admin/Course/Adminviewcourse";
import Admindashboard from "../../View/Admin/Dashboard/Admindashboard";
import Courseupdate from "../../View/Admin/Course/Courseupdate";
import Adminrouting from "../Admin/AdminRouting";
import { Box } from "@mui/material";
import IndividualLearnerView from "../../View/Admin/Learner/IndividualLearnerView";
import LearnerReduxView from "../../View/Admin/Learner/LearnerReduxView";
import { IndividualLearner } from "../../View/Admin/Learner/IndividualLearner";
import LearnerReportView from "../../View/Admin/Report/LearnerReportView";
import CourseReportView from '../../View/Admin/Report/CourseReportView';
import QuizReportView from '../../View/Admin/Report/QuizReportView';
import PageNotFound from '../../components/Admin/PageNotFound';

import ReportSkeleton from '../../components/Loading/Reportskeleton'
import UpdateUserProfileComponent from "../../components/LearnerComponent/UpdateUserProfile";
import PasswordChange from "../../components/LearnerComponent/PasswordChange";
import RegisterView from "../../View/LearnerView/RegisterView";
import LearnerDashboard from "../../components/LearnerComponent/LearnerDashboard";
import GetEnrollment from "../../components/LearnerComponent/GetEnrollment";
import SidebarTopics from "../../components/LearnerComponent/SidebarTopics";
import PDFViewer from "../../components/LearnerComponent/PDFViewer";
import PptViewerComponent from "../../components/LearnerComponent/Pptxday";
import QuizPassedUsers from "../../View/Admin/Report/QuizPassedUsers";
import QuizFailedReport from "../../View/Admin/Report/QuizFailedUsers";
import EnrollCourseLearners from "../../components/Admin/EnrollCourseLearners";
import CourseEnrollmentReportView from "../../View/Admin/Report/CourseEnrollmentReportView";
import EnrollCoursePassLearners from "../../components/Admin/EnrollCoursePassLearners";
import EnrollCourseProgressLearners from "../../components/Admin/EnrollCourseProgressLearners";
import ReportMainView from "../../View/Admin/Report/ReportMainView";

//learner

// quizandfeedback
import CreateQuizView from "../../View/Quiz And Feedback Module/CreateQuizView";
import UploadBulkQuiz from "../../components/Quiz And Feedback Module/QuizComponents/Admin/UploadBulkQuiz";
import ReviewQuestions from "../../components/Quiz And Feedback Module/QuizComponents/Admin/ReviewQuestions";
import GetAllFeedbacks from "../../components/Quiz And Feedback Module/QuizComponents/Admin/GetAllFeedbacks";
import CoursePageView from "../../View/Quiz And Feedback Module/CoursePageView";
import QuestionTemplateView from "../../View/Quiz And Feedback Module/QuestionTemplateView";
import QuizFeedback from "../../components/Quiz And Feedback Module/QuizComponents/Admin/QuizFeedback";
import TopicFeedback from "../../components/Quiz And Feedback Module/QuizComponents/Admin/TopicFeedback";

import LearnerCoursepageView from "../../View/Quiz And Feedback Module/LearnerCoursepageview";
import AttemptQuiz from '../../components/Quiz And Feedback Module/QuizComponents/Learner/AttemptQuiz';
import QuizInstruction from '../../components/Quiz And Feedback Module/QuizComponents/Learner/QuizInstruction';
import ReviewAnswers from '../../components/Quiz And Feedback Module/QuizComponents/Learner/ReviewAnswers';
import LearnerScorePage from '../../components/Quiz And Feedback Module/QuizComponents/Learner/LearnerScorePage';
import TopicFeedbackquestion from '../../components/Quiz And Feedback Module/QuizComponents/Learner/FetchTopicFeedbackQuestion';
import FetchQuizFeedbackQuestion from '../../components/Quiz And Feedback Module/QuizComponents/Learner/FetchQuizFeedbackQuestion';

// course team

import { AddCourseView } from '../../View/Course/Course/AddCourseView'
import { CourseContent } from "../../View/Course/Course/CourseContentView";
import Topics from "../../View/Course/Topic/Topics";
import SavedTopics from "../../components/Course/Topic/SavedTopics";
import AddMaterial from "../../View/Course/Material/AddMaterial";

function Routing() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Loginpage />} />
        <Route path="/email" element={<Email />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
        <Route path='/PageNotFound' element={<PageNotFound />} />
        <Route path='*' element={< PageNotFound />}></Route>
        <Route path='/passwordchange' element={<PasswordChange />} />
        <Route path='/updateuserprofile' element={<UpdateUserProfileComponent />} />
        <Route exact path="/" element={<Loginpage />} />
        <Route path="/email" element={<Email />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/RegisterView' element={<RegisterView />}></Route>
        <Route path='/LearnerDashboard' element={<LearnerDashboard />}></Route>
        {/* <Route path='/LearnerNavbar' element={<LearnerNavbar />}></Route> */}
        {/* <Route path='/LearnerPage' element={<CourseNavbar />}></Route> */}
        <Route path="/LearnerenrolledCourse" element={<GetEnrollment />}></Route>
        <Route path="/ViewTopics" element={<SidebarTopics />}></Route>

        {/* <Route path="/PDF" element={<PDFViewer />}></Route>
        <Route path="/PPT" element={<PptViewerComponent />}></Route> */}
        <Route element={<Adminrouting />}>
          <Route path="/home" element={<Admindashboard />} />
          <Route path="/admincourse" element={<Admincourse />} />
          <Route path="/adminviewallcourse" element={<Adminviewcourse />} ></Route>
          <Route path="/admindashboard" element={<Admindashboard />}></Route>
          <Route path="/admindupdatecourse/:courseId" element={<Courseupdate />} ></Route>
          <Route path="/learnerviewall" element={<LearnerReduxView />} ></Route>
          <Route path="/individuallearner/:learnerId" element={<IndividualLearner />}></Route>
          <Route path="/learnerreport" element={<LearnerReportView />}></Route>
          <Route path="/coursereport" element={<CourseReportView />}></Route>
          <Route path='/quizreport' element={<QuizReportView />}></Route>
          <Route path='/quizpassedusers/:quizId' element={<QuizPassedUsers />}></Route>
          <Route path="/quizfailedusers/:FailedUserQuizId" element={<QuizFailedReport />}></Route>
          <Route path='/ReportSkeleton' element={<ReportSkeleton />}></Route>
          <Route path='/individualenrollcourselearner/:courseId' element={<EnrollCourseLearners />}></Route>
          <Route path='/individualenrollpasscourselearner/:courseId' element={<EnrollCoursePassLearners />}></Route>
          <Route path='/individualenrollprogresscourselearner/:courseId' element={<EnrollCourseProgressLearners />}></Route>
          <Route path="/enrollreport" element={<CourseEnrollmentReportView />}></Route>
          <Route path="/report" element={<ReportMainView />}></Route>
          {/* quiz team */}
          <Route path="/coursepageview" element={<CoursePageView />} />
          <Route path="/createquiz" element={<CreateQuizView />} />
          <Route path="/topicfeedback" element={<TopicFeedback />} />
          <Route path="/questiontemplate" element={<QuestionTemplateView />} />
          {/* <Route path="/getallfeedback" element={<GetAllFeedbacks />} /> */}
          <Route path="/reviewquestions" element={<ReviewQuestions />} />
          <Route path="/quizfeedback" element={<QuizFeedback />} />
          <Route path="/upload" element={<UploadBulkQuiz />} />

          {/* course module */}
          <Route path="/addcourse" element={<AddCourseView />} />
          {/* mano changes */}
          <Route path="/coursecontent/:id" element={<CourseContent />} />/
          {/* stop mano changes */}

          <Route path="/addtopic/:id" element={<Topics />} />
          <Route path="/savedtopics/:id" element={<SavedTopics />} />
          <Route path='/addcontent/:id' element={<AddMaterial />} />
        </Route>
        {/* quiz learnermodule */}
        <Route path="/quizengine" element={<LearnerCoursepageView />} />
        <Route path="/instruction" element={<QuizInstruction />} />
        <Route path="/attemptquiz" element={<AttemptQuiz />} />
        <Route path="/reviewanswer" element={<ReviewAnswers />} />
        <Route path="/learnerscorepage" element={<LearnerScorePage />} />
        <Route path="/topicfeedbackquestion" element={<TopicFeedbackquestion />} />
        <Route path="/quizfeedbackquestion" element={<FetchQuizFeedbackQuestion />} />

        {/* course team */}

        <Route path="/addcourse" element={<AddCourseView />} />
          {/* mano changes */}

        <Route path="/coursecontent/:id" element={<CourseContent />} />
          {/* stop mano changes */}

        <Route path="/addtopic/:id" element={<Topics />} />
        <Route path="/savedtopics/:id" element={<SavedTopics />} />
        <Route path='/addcontent/:id' element={<AddMaterial />} />


      </Routes>
    </BrowserRouter>
  );
}

export default Routing;