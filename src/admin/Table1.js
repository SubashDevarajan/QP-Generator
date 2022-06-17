import React, { Component, Fragment } from "react";
import ListPage from "./../components/ListPage";
// import { Row, Col } from "reactstrap";
import { Formik, Form, Field } from "formik";
import Select from 'react-select';
import axios from 'axios';
import {
  Row,
  ButtonGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Card,
  CardBody,
  Col,
  Input,
  Media,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Swal from "sweetalert2";

class Example1 extends Component {
  state = {
    formdata: { coursecode: "", coursename: "" },
    viewModal: false,
    columns: [
      {
        name: "Course Code",
        selector: "coursecode",
        sortable: true,
        cell: (row) => <div>{row?.coursecode}</div>,
      },
      {
        name: "Course Details",
        selector: "coursename",
        sortable: true,
        cell: (row) => <div>{row?.coursename}</div>,
      },
      {
        name: "Action",
        selector: "action",
        sortable: false,
        cell: (row) => (
          <Row>
            <Col>
              <span onClick={() => this.edit(row)}>
                {" "}
                <i className="fas fas fa-edit text-success" />
                {/* <i className="fas fa-pencil-alt text-success mr-1" /> */}
              </span>
            </Col>
            <Col>
              <span onClick={() => this.ale(row.coursecode)}>
                {" "}
                <i className="fas fa-trash-alt text-danger mr-1" />
                {/* <i className="fas fa-pencil-alt text-success mr-1" /> */}
              </span>
            </Col>
          </Row>
        ),
      },
    ],
    Data: [
    ],
    filteredData : [],
    filterData : false,
    COList : [],
    isLoading: false,
  };

  componentDidMount() {
    this.getData();
  }

  handleSelectChange = (v) => {
    let a = this.state.Data.filter(x=>v?.value===x.coursecode);
    this.setState({filteredData:a,filterData:true})
  }

  getData = () => {
    axios
      .get("http://localhost:5000/api/course")
      .then((res) => {
        this.setState({ Data: res.data.rows,COList: res.data?.rows.map(
          function (a) {
            return { label: a.coursename, value: a.coursecode }
          }
        ) });
        
      })
      .catch((e) => console.log(e));
  };

  ale = (a) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          alert(a);
          // swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success')
          this.successalt("success", "SuccessFully Deleted");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          this.successalt("error", "Cancelled");
        }
      });
  };

  edit = (val) => {
    console.log(val);
    this.setState({ formdata: val });
    this.toggleManageModal();
  };

  successalt = (a, x) => {
    Swal.fire({
      position: "center",
      icon: a,
      title: x,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  handleSubmit = (values) => {
    console.log(values);
  };
  toggleManageModal = () => {
    this.setState({
      viewModal: !this.state.viewModal,
    });
  };

  render() {
    const initialValues = this.state.formdata;
    // console.log(initialValues)
    const conditionalRowStyles = [
      {
        when: (row) => row,
        style: {
          // backgroundColor: 'green',
          "&:hover": {
            cursor: "pointer",
          },
        },
        headCells: {
          style: {
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
            fontWeight: "bold",
          },
        },
      },
    ];
    return (
      <Row>
        {/* style={{ paddingRight: "20px", paddingTop: "20px" }}  */}

        <Col lg={12} style={{ paddingTop: "20px", paddingLeft: "30px" }}>
          {/* <Col lg="4">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Col> */}
          <Col lg="6" style={{ }}>
            <div
              class="row"
            // style={{ display: "flex", float: "right" }}
            >
              <div class="col-lg-3 p-1" align="right">
                <Label>Course Code --></Label>
              </div>
              <div class="col-lg-9">
                <Select
                  name='courseOutcome'
                  // isMulti
                  isClearable
                  isSearchable
                  options={this.state.COList}
                  onChange={(entity, action) => {
                    if (action.action === "clear") {
                      
                      this.setState({filterData:false})
                    } 
                    else {
                      this.handleSelectChange(entity)
                    }
                  }}
                />
              </div>
            </div>
            {/* <Row>
              <Col lg={6} style={{ display: "flex", float: "right" }}>
                <Label>Course Code</Label>
              </Col>
              <Col lg={6}>
                <Input type="text" />
              </Col>
            </Row> */}
          </Col>
        </Col>
        <Col style={{ paddingRight: "30px", paddingLeft: "5px",overflowY:"scroll" }}>
          <ListPage
            conditionalRowStyles={conditionalRowStyles}
            columns={this.state.columns}
            data={this.state.filterData?this.state.filteredData:this.state.Data}
            pagination = {true}
            paginationPerPage = {10}
            // keyField={this.state.keyField}
            // totalCount={this.state.totalCount}
            // rowClicked={this.HandleRowClicked}
            // onSort={this.handleSort}
            // rowsPerPageOnChange={this.handlePerRowsChange}
            // pageChange={this.handlePageChange}
            isDataLoading={this.state.isLoading}
            overFlowXRemoval={false}
          />
        </Col>
        <Modal
          isOpen={this.state.viewModal}
          toggle={this.toggleManageModal}
          size="md"
        >
          <ModalHeader toggle={this.toggleManageModal}>
            {"Create User"}
          </ModalHeader>
          <br />

          <Formik
            initialValues={initialValues}
            // validationSchema={ComplaintsValidation}
            onSubmit={this.handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ errors, values, setFieldValue }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <ModalBody>
                  <Fragment>
                    <Row>
                      <Col lg="12" sm="12" md="12">
                        <FormGroup className="form-group has-float-label">
                          <Label className="requiredField">
                            {"Course Code"}
                          </Label>
                          <Field
                            className="form-control"
                            name="coursecode"
                            type="text"
                          // disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12" sm="12" md="12">
                        <FormGroup className="form-group has-float-label">
                          <Label className="requiredField">
                            {"Course Name"}
                          </Label>
                          <Field
                            className="form-control"
                            name="coursename"
                            type="text"
                          // disabled={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Fragment>
                </ModalBody>
                <ModalFooter>
                  <div className="float-sm-right ">
                    <Row>
                      <FormGroup className="float-sm-right ">
                        <div
                          className="btn-group mr-2 btn-group-justified"
                          role="group"
                          aria-label="First group"
                        >
                          <button
                            type="submit"
                            className="btn btn-outline-success"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          // onClick={() => this.toggleManageModal()}
                          >
                            Cancel
                          </button>
                        </div>
                      </FormGroup>
                    </Row>
                  </div>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </Modal>
      </Row>
    );
  }
}

export default Example1;
