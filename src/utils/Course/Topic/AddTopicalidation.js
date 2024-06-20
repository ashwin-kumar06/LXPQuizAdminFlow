// utils/validation.js
import AddTopic from "../../Component/Course/AddTopic_existed";
export const validateCourseTopic = (topics, course) => {
    if (topics.some(topic => topic.courseTopic === course.courseTopic)) {
        return '⚠️ Topic already exists in this course. Please try with another topic.';
    } else if (!course.courseTopic.trim() || !course.contentCovered.trim()) {
        return 'Please fill in all the fields.';
    } else {
        return '';
    }
};
