import ReactToPrint from "react-to-print";
import ComponentToPrint from "./printFC";
import pdfFile from './XC5551 - Software Engineering.pdf';

const Print = () => {


  function print() {
    window.open(pdfFile, "PRINT", "height=800,width=700");
  }

  function somefunction() {
    // printDocument();
    print();
  }
  return (
    <>
      {/* <button class="btn btn-success mx-3" onClick={somefunction} type="submit">
        Print
      </button> */}
      {/* <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => componentRef.current}
        />  
      </div> */}
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

