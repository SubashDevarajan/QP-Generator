// import  { useRef } from "react";
// import  { jsPDF } from "jspdf";
// import  html2canvas from "html2canvas";
// import  Preview from "./Preview";
// import './styles/previewStyle.css';
import pdfFile from './XC5551 - Software Engineering.pdf'; 

const Print = () => {

  // const inputReference = useRef(null);
  // const printDocument = () => {
  //   const input = document.getElementById('pdf-element');
  //  const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
  //  pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
  //    pdf.save("test.pdf");
  //   });
  // };
  
  
  function print(){
window.open(pdfFile, "PRINT", "height=800,width=700");  }

function somefunction(){
  // printDocument();
  print();
}
  return (
    <>
      <button class="btn btn-success mx-3" onClick={somefunction} type="submit">
      Print
            </button>
        {/* <div className="mb5">
          <button onClick={somefunction}>Print</button>
        </div> */}
        {/* <div  ref={inputReference}>
         <Preview/>
        </div> */}
    </>
  );
};
export default Print;

