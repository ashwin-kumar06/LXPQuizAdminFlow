import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Box from '@mui/material/Box';
// import { useDispatch, useSelector } from "react-redux";
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import { fetchContentUrlRequest,setContentUrlStatus } from "../../../actions/Course/Material/FetchContentUrlAction";
import { Container, Overlay, Row } from "react-bootstrap";
 
function PDFViewer(prop) {
  const [error, setError] = useState(null);
  const { material } = prop;
  const [viewpdf, setViewPdf] = useState(material);
  useEffect(()=>{
    setViewPdf(material)
  },[material])
//   const dispatch = useDispatch();
 
//   let pdfselector = useSelector((state) => state.fetchContentUrl.content);
//   const [pdf,setPdf]=useState({"filePath":undefined});
//   useEffect(() => {
//     dispatch(fetchContentUrlRequest(material));      
//     setPdf(pdfselector.filePath)  

   
//     // console.log("pdf",pdf);           {/*modified  full code */}
//   }, [ material ]);
 
//  useEffect(()=>{
//   setTimeout(()=>{
      
//      setViewPdf(pdf.filePath);

//   },20000)
//   if(pdfselector){
//     if(pdfselector.filePath){
//       dispatch(setContentUrlStatus())
//     // setViewPdf(pdfselector.filePath);

//     }
//     setViewPdf(pdfselector.filePath);


//   }

//  },[pdfselector])
 
//  useEffect(()=>{
//   // setTimeout(()=>{
      
//   //    setViewPdf(pdf.filePath);

//   // },20000)
//   if(pdfselector){
//     if(pdfselector.filePath){
//       dispatch(setContentUrlStatus())
//     }
//     setViewPdf(pdfselector.filePath);


//   }
//  },[pdfselector.filePath])
//  useEffect(()=>{
//   // setTimeout(()=>{
      
//   //    setViewPdf(pdf.filePath);

//   // },20000)
//   if(pdfselector){
//     if(pdfselector.filePath){
//       dispatch(setContentUrlStatus())
//     }
//     setViewPdf(pdfselector.filePath);


//   }
//  },[viewpdf])
//   useEffect(() => {
//     setTimeout(()=>{
//       setViewPdf(pdfselector.filePath);

//     },10000)
//   }, []);
 
  // const newPlugin = defaultLayoutPlugin({
  //   toolbar: {
  //     download: {
  //       enabled: false, // Disable the download button
  //     },
  //   },
  // });
 
  return (
    <Container>
      <Row className="justify-content-md-center">
    {/* <div
           className="container"
           style={{ width: "100%",height:"83vh",marginTop:'0px'}}
       >  */}
      <Box sx={{
  width: { xs: '100%', sm: '85vh', md :'65vh',lg:"83" },
  height: { xs: '100%', sm: '83vh',md :'95vh',lg:"83" },

  overflow: 'auto',
  marginTop: '7px'
}} className="pdf-container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              {viewpdf ? (
                <Viewer fileUrl = {viewpdf} />
              ) : (
                <div>Loading.....</div>
              )}
            </Worker>
          )}
        </Box>
        {/* </div> */}
 
      </Row>
    </Container>
  );
}
 

export default PDFViewer;

