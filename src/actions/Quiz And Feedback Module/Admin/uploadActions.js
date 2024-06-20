export const UPLOAD_FILES = "UPLOAD_FILES";

export const uploadFiles = (files) => {
  return {
    type: UPLOAD_FILES,
    payload: files,
  };
};
