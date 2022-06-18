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

class CourseOutcomeEdit extends Component {
    state = {
        formdata: { levels: "", courseoutcomes: "" },
        viewModal: false,
        columns: [
            {
                name: "CO No.",
                selector: "levels",
                sortable: true,
                width: "100px",
                cell: (row) => <div>{row?.levels}</div>,
            },
            {
                name: "Course Outcome",
                selector: "courseoutcomes",
                sortable: true,
                cell: (row) => <div>{row?.courseoutcomes}</div>,
            },
            {
                name: "Action",
                selector: "action",
                sortable: false,
                width: "100px",
                cell: (row) => (
                    // <Row>
                        <div>
                            <span onClick={() => this.edit(row)}>
                                {" "}
                                <i className="fas fas fa-edit text-success" />
                            </span>
                        </div>
                    // </Row>
                ),
            },
        ],
        Data: [
        ],
        course: "",
        COList: [],
        isLoading: false,
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios
            .get("http://localhost:5000/api/course")
            .then((res) => {
                this.setState({
                    COList: res.data?.rows.map(
                        function (a) {
                            return { label: a.coursename, value: a.coursecode }
                        }
                    )
                });

            })
            .catch((e) => console.log(e));
    };

    handleSelectChange = (v) => {
        // let a = this.state.Data.filter(x => v?.value === x.levels);
        // this.setState({ course: v.value, filterData: true })
        this.getCOData(v.value);
    }

    getCOData = (co) => {
        axios
            .get(`http://localhost:5000/api/courseoutcome/${co}`)
            .then((res) => {
                this.setState({ Data: res.data.rows })
                // setCo(res.data.rows);
                console.log(res.data.rows);
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
        axios
            .post(`http://localhost:5000/api/updateCourseOutcome/`, values)
            .then((res) => {
                this.getCOData(values["coursecode"]);
                console.log(res);
            })
            .catch((e) => console.log(e.response));
        // this.getCOData();
        this.toggleManageModal();
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
                    <Col lg="6" style={{}}>
                        <div
                            class="row"
                        // style={{ display: "flex", float: "right" }}
                        >
                            <div class="col-lg-3 p-1" align="right">
                                <Label>Course Code</Label>
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

                                            this.setState({ Data: [] })
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
                <Col style={{ paddingRight: "30px", paddingLeft: "5px", overflowY: "scroll" }}>
                    <ListPage
                        conditionalRowStyles={conditionalRowStyles}
                        columns={this.state.columns}
                        data={this.state.filterData ? this.state.filteredData : this.state.Data}
                        // pagination={true}
                        // paginationPerPage={5}
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
                                                        name="levels"
                                                        type="text"
                                                        disabled={true}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12" sm="12" md="12">
                                                <FormGroup className="form-group has-float-label">
                                                    <Label className="requiredField">
                                                        {"Course Outcome"}
                                                    </Label>
                                                    <Field
                                                        className="form-control"
                                                        name="courseoutcomes"
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
            </Row>
        );
    }
}

export default CourseOutcomeEdit;
