import React from "react";

export default function modaal() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Enter Course Details
      </button>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Course Details
              </h5>
            </div>
            <div class="modal-body">
              <form action="" method="post">
                <div class="row">
                  <div class="col-md-6 ml-auto">
                    <label class="col-form-label">Department:</label>
                    {/* <input type="text" class="" placeholder="Select Department"/> */}
                    <select
                      type="department"
                      name="department"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option disabled selected>
                        Select Department
                      </option>
                      <option>Mathematics</option>
                      <option>CSE</option>
                      <option>IT</option>
                    </select>
                  </div>
                  <div class="col-md-6 ml-auto form-group">
                    <label class="col-form-label">Branch:</label>
                    {/* <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"  placeholder=""/> */}
                    <select
                      type="branch"
                      name="branch"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option disabled selected>
                        Select Branch
                      </option>
                      <option>B.E. </option>
                      <option>M.C.A.</option>
                      <option>M.Sc Integrated 5 yrs CS/IT</option>
                      <option>M.Sc Mathematics 2 yrs</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 ml-auto">
                    <label class="font-semibold leading-none">Semester:</label>
                    {/* <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"   placeholder=""/> */}
                    <select
                      type="semester"
                      name="semester"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option disabled selected>
                        Select Semester
                      </option>
                      <option>I</option>
                      <option>II</option>
                      <option>III</option>
                      <option>IV</option>
                      <option>V</option>
                      <option>VI</option>
                      <option>VII</option>
                      <option>VIII</option>
                      <option>IX</option>
                      <option>X</option>
                    </select>
                  </div>
                  <div class="col-md-6 ml-auto">
                    <label class="font-semibold leading-none">
                      Regulation:
                    </label>
                    {/* <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"  placeholder=""/> */}
                    <select
                      type="regulation"
                      name="regulation"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option disabled selected>
                        Select Regulation
                      </option>
                      <option>R2015</option>
                      <option>R2019</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="w-full flex flex-col">
                    <label class="font-semibold leading-none">
                      Subject Code & Title:
                    </label>
                    <select
                      type="codeTitle"
                      name="CodeTitle"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option>Select Subject Code & Title</option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 ml-auto">
                    <label class="font-semibold leading-none">Date:</label>
                    <input
                      type="date"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                      placeholder="Select Date"
                    />
                  </div>

                  <div class="col-md-6 ml-auto">
                    <label class="font-semibold leading-none">
                      University:
                    </label>
                    {/* <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"  placeholder=""/> */}
                    <select
                      type="university"
                      name="university"
                      class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option disabled selected>
                        Select University
                      </option>
                      <option>Anna University - CEG Campus</option>
                      <option>Anna University - ACT Campus</option>
                      <option>Anna University - MIT Campus</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                onClick={() => {
                  alert("Hi");
                }}
                type="button"
                class="btn btn-primary"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
