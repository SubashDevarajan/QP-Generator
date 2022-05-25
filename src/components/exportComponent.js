import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent from './tableComponent';

class ExportPdfComponent extends React.Component {

    render() {
        return (
            <div>

                <div class="d-flex flex-row-reverse">
                    <ReactToPrint
                        content={() => this.componentRef}
                        trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
                    />
                </div>


                {<TableComponent ref={(response) => (this.componentRef = response)} />}


            </div>
        );
    }
}

export default ExportPdfComponent;