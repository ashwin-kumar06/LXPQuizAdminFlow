import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import "../../../../Styles/Quiz And Feedback Module/Pagination.css";

export default function BasicPagination({
  totalQuestions,
  questionsPerPage,
  page,
  onPageChange,
}) {
  // Calculate the total number of pages
  const pageCount = Math.ceil(totalQuestions / questionsPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onPageChange}
        variant="outlined"
        color="primary"
        className="pagination"
      />

      {/* <label>Question Per Page</label>
      <select className="form-select" id="dropdown">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> */}
    </Stack>
  );
}
