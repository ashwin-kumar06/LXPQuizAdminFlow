export const FETCH_COUNT_REQUEST = "FETCH_COUNT_REQUEST";
export const FETCH_COUNT_SUCCESS = "FETCH_COUNT_SUCCESS";
export const FETCH_COUNT_FAILURE = "FETCH_COUNT_FAILURE";

export const fetchCountRequest = () => ({
  type: FETCH_COUNT_REQUEST,
 
});

export const fetchCountSuccess = (data) => ({
  type: FETCH_COUNT_SUCCESS,
  payload: data,
});

export const fetchCountFailure = (error) => ({
  type: FETCH_COUNT_FAILURE,
  payload: error,
});

//Top Learners
export const FETCH_TOPLEARNERS_REQUEST="FETCH_TOPLEARNERS_REQUEST";
export const FETCH_TOPLEARNERS_SUCCESS="FETCH_TOPLEARNERS_SUCCESS";
export const FETCH_TOPLEARNERS_FAILURE="FETCH_TOPLEARNERS_FAILURE";

export const fetchToplearnersRequest=()=>({
  type:FETCH_TOPLEARNERS_REQUEST,
}
);

export const fetchToplearnersSuccess=(toplearners)=>({
  type:FETCH_TOPLEARNERS_SUCCESS,
  payload:toplearners,

});

export const fetchToplearnerFailure=(error)=>({
  type:FETCH_TOPLEARNERS_SUCCESS,
  payload:error,
});


// Highest Enrollment Course
export const FETCH_HIGHESTENROLLEDCOURSE_REQUEST="FETCH_HIGHESTENROLLEDCOURSE_REQUEST";
export const FETCH_HIGHESTENROLLEDCOURSE_SUCCESS="FETCH_HIGHESTENROLLEDCOURSE_SUCCESS";
export const FETCH_HIGHESTENROLLEDCOURSE_FAILURE="FETCH_HIGHESTENROLLEDCOURSE_FAILURE";

export const fetchHighestenrolledRequest=()=>({
  type:FETCH_HIGHESTENROLLEDCOURSE_REQUEST,
}
);

export const fetchHighestenrolledSuccess=(highestenrolledcourse)=>({
  type:FETCH_HIGHESTENROLLEDCOURSE_SUCCESS,
  payload:highestenrolledcourse,

});

export const fetchHighestenrolledFailure=(error)=>({
  type:FETCH_HIGHESTENROLLEDCOURSE_FAILURE,
  payload:error,
});

//Recent feedback 
export const FETCH_RECENTFEEDBACKRESPONSE_REQUEST="FETCH_RECENTFEEDBACKRESPONSE_REQUEST";
export const FETCH_RECENTFEEDBACKRESPONSE_SUCCESS="FETCH_RECENTFEEDBACKRESPONSE_SUCCESS";
export const FETCH_RECENTFEEDBACKRESPONSE_FAILURE="FETCH_RECENTFEEDBACKRESPONSE_FAILURE";

export const fetchRecentFeedbackResponseRequest=()=>({
  type:FETCH_RECENTFEEDBACKRESPONSE_REQUEST,
}
);

export const fetchRecentFeedbackResponseSuccess=(recentfeedbackresponse)=>({
  type:FETCH_RECENTFEEDBACKRESPONSE_SUCCESS,
  payload:recentfeedbackresponse,

});

export const fetchRecentFeedbackResponseFailure=(error)=>({
  type:FETCH_RECENTFEEDBACKRESPONSE_FAILURE,
  payload:error,
});


// Enrolledcourse barchart
export const FETCH_ENROLLMENTCOURSEBARCHART_REQUEST="FETCH_ENROLLMENTCOURSEBARCHART_REQUEST";
export const FETCH_ENROLLMENTCOURSEBARCHART_SUCCESS="FETCH_ENROLLMENTCOURSEBARCHART_SUCCESS";
export const FETCH_ENROLLMENTCOURSEBARCHART_FAILURE="FETCH_ENROLLMENTCOURSEBARCHART_FAILURE";

export const fetchEnrollmentcourseBarchartRequest=(checking)=>({
  type:FETCH_ENROLLMENTCOURSEBARCHART_REQUEST,
  payload:checking,
}
);


export const fetchEnrollmentcourseBarchartSuccess=(enrollmentcoursebarchart)=>({
  type:FETCH_ENROLLMENTCOURSEBARCHART_SUCCESS,
  payload:enrollmentcoursebarchart,
});

export const fetchEnrollmentcourseBarchartFailure=(error)=>({
  type:FETCH_ENROLLMENTCOURSEBARCHART_FAILURE,
  payload:error,
});