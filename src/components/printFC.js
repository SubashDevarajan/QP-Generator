import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

const ComponentToPrint = React.forwardRef((props, ref) => (
      <div ref={ref} class="w-100">
          <Preview />
      </div>
));

const Examplee = () => {
    const componentRef = useRef();
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => componentRef.current}
        />  
      </div>
    );
}

export default ComponentToPrint;