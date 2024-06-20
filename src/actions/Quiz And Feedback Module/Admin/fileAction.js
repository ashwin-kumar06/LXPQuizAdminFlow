// fileActions.js
export const uploadFiles = files => {
    return {
      type: 'UPLOAD_FILES',
      payload: files
    };
  };
  