import React, { Component, Fragment } from "react";
import ListPage from "../components/ListPage";
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

class CourseEdit extends Component {
  state = {
    formdata: { coursecode: "", coursename: "" },
    viewModal: false,
    viewAddModal: false,
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
    filteredData: [],
    filterData: false,
    COList: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getData();
  }

  handleSelectChange = (v) => {
    let a = this.state.Data.filter(x => v?.value === x.coursecode);
    this.setState({ filteredData: a, filterData: true })
  }

  getData = () => {
    axios
      .get("http://localhost:5000/api/course")
      .then((res) => {
        this.setState({
          Data: res.data.rows, COList: res.data?.rows.map(
            function (a) {
              return { label: a.coursename, value: a.coursecode }
            }
          )
        });

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
          var delObj = { coursecode: a }
          console.log(delObj)
          // let headers = {
          //   'Content-Type': 'application/json;charset=UTF-8',
          //   'Authorization': `JWT ${localStorage.getItem("AuthId")}`
          // };

          var headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'authorization' : `${localStorage.getItem("AuthId")}`
          }
          axios
            .get(`http://localhost:5000/api/coursedelete/`, delObj)
            .then((res) => {
              console.log(res);
            })
            .catch((e) => console.log(e.response));
          // this.getData();
          // this.handleSelectChange({});
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

  handleAddSubmit = (values) => {
    axios
      .post(`http://localhost:5000/api/coursepost/`, values)
      .then((res) => {
        this.getData();
      })
      .catch((e) => console.log(e.response));
    this.toggleAddModal();
  };

  toggleManageModal = () => {
    this.setState({
      viewModal: !this.state.viewModal,
    });
  };
  toggleAddModal = () => {
    this.setState({
      viewAddModal: !this.state.viewAddModal,
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
        <Col lg={12} style={{ paddingTop: "20px", paddingLeft: "30px" }}>
          <Col lg="12" style={{}}>
            <div
              class="row"
            >
              <div class="col-lg-6 row container">
                <div class="col-lg-3 p-1" align="center">
                  <Label>Search Course</Label>
                </div>
                <div class="col-lg-9" align="left">
                  <div class="col-lg-8">
                    <Select
                      name='courseOutcome'
                      isClearable
                      isSearchable
                      options={this.state.COList}
                      onChange={(entity, action) => {
                        if (action.action === "clear") {

                          this.setState({ filterData: false })
                        }
                        else {
                          this.handleSelectChange(entity)
                        }
                      }}
                    />
                  </div>

                </div>
              </div>

              <div class="col-lg-6">
                <div class="d-flex flex-row-reverse">
                  <button class="mx-4 btn btn-primary" onClick={this.toggleAddModal} type="button">Add New Course</button>
                </div>
              </div>
            </div>
          </Col>
        </Col >
        <Col style={{ paddingRight: "30px", paddingLeft: "5px", overflowY: "scroll" }}>
          <ListPage
            conditionalRowStyles={conditionalRowStyles}
            columns={this.state.columns}
            data={this.state.filterData ? this.state.filteredData : this.state.Data}
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
                            onClick={() => this.toggleManageModal()}
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

        <Modal
          isOpen={this.state.viewAddModal}
          toggle={this.toggleAddModal}
          size="md"
        >
          <ModalHeader toggle={this.toggleAddModal}>
            {"Create User"}
          </ModalHeader>
          <br />

          <Formik
            initialValues={{ coursecode: "", coursename: "" }}
            // validationSchema={ComplaintsValidation}
            onSubmit={this.handleAddSubmit}
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
                            Add
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => this.toggleAddModal()}
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
      </Row >
    );
  }
}

export default CourseEdit;
