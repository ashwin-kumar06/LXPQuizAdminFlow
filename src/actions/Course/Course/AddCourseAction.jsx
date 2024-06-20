export const CREATE_COURSES_REQUEST = 'CREATE_COURSES_REQUEST';
export const CREATE_COURSES_SUCCESS = 'CREATE_COURSES_SUCCESS';
export const CREATE_COURSES_FAILURE = 'CREATE_COURSES_FAILURE';
export const CREATE_COURSES_EXISTS = 'CREATE_COURSES_EXISTS';
export const CREATE_CONTENT = 'CREATE_CONTENT';
export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const FETCH_LEVEL_REQUEST = 'FETCH_LEVEL_REQUEST';
export const FETCH_LEVEL_SUCCESS = 'FETCH_LEVEL_SUCCESS';
export const FETCH_LEVEL_FAILURE = 'FETCH_LEVEL_FAILURE';
export const SET_COURSE_STATUS = 'SET_COURSE_STATUS';

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,

});

export const fetchCategorySuccess = (courses) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: courses,
});

export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});
export const fetchLevelRequest = () => ({
  type: FETCH_LEVEL_REQUEST,

});

export const fetchLevelSuccess = (courses) => ({
  type: FETCH_LEVEL_SUCCESS,
  payload: courses,
});

export const fetchLevelFailure = (error) => ({
  type: FETCH_LEVEL_FAILURE,
  payload: error,
});



export const createCoursesRequest = (formData) => ({
  type: CREATE_COURSES_REQUEST,
  payload: formData

});

export const createCoursesSuccess = (course) => ({
  type: CREATE_COURSES_SUCCESS,
  payload: course,
});


export const createCoursesFailure = (error) => ({
  type: CREATE_COURSES_FAILURE,
  payload: error,
});

export const createCoursesExists = () => ({
  type: CREATE_COURSES_EXISTS,
})

export const createcontent = (course) => ({
  type: CREATE_CONTENT,
  payload: course,
})

export const setCourseStatus = (isRequesting) => ({
  type: SET_COURSE_STATUS,
  payload: isRequesting,
});

