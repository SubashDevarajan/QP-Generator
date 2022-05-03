import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      handleChange = {(e) => {
          console.log(e);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;





// import React from 'react';
// import 'react-dropdown/style.css';
// import { Formik } from 'formik';
// import { DataStorage } from './dataProvider';
// import { useContext } from 'react';
// import Select from 'react-select';

// const InputForm = () => {

//     const ColourOption = [
//         { value: 'ocean', label: 'Ocean' },
//         { value: 'blue', label: 'Blue' },
//         { value: 'purple', label: 'Purple' },
//         { value: 'red', label: 'Red' },
//         { value: 'orange', label: 'Orange' },
//         { value: 'yellow', label: 'Yellow' },
//         { value: 'green', label: 'Green' },
//         { value: 'forest', label: 'Forest' },
//         { value: 'slate', label: 'Slate' },
//         { value: 'silver', label: 'Silver' },
//     ];

//     const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
//     const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

//     function handleNext() {
//         const questionNumbers = sectionQuestions[current["section"]];
//         const currentIndex = current["questionIndex"];
//         const nextIndex = (currentIndex + 1) % questionNumbers.length;
//         setCurrent({ ...current, questionIndex: nextIndex });
//     }

//     function handleChange(v, e) {
//         setQPData({
//             ...qpData,
//             [current["section"]]: {
//                 ...qpData[current["section"]],
//                 [currentQuestion]: {
//                     ...qpData[current["section"]][currentQuestion],
//                     courseOutcome: v.value
//                 }
//             }
//         });
//         console.log(qpData);
//     }

//     function addBLVerb(e) {
//         e.preventDefault();
//         console.log(e);
//     }

//     return (
//         <Formik
//             initialValues={{ email: '', password: '' }}
//             validate={values => {
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Invalid email address';
//                 }
//                 return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//             handleChange = {(v, e) => {
//                 // setQPData({
//                 //     ...qpData,
//                 //     [current["section"]]: {
//                 //         ...qpData[current["section"]],
//                 //         [currentQuestion]: {
//                 //             ...qpData[current["section"]][currentQuestion],
//                 //             courseOutcome: v.value
//                 //         }
//                 //     }
//                 // });
//                 console.log("hello");
//             }}
//         >
//             {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 addBLVerb,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//             }) => (
//                 <form onSubmit={handleSubmit}>
//                     <div class="container form form-control row">
//                         <div class="row my-3">
//                             <h5 class="col-lg-3 p-1">Course Outcome</h5>
//                             <div class="col-lg-9">
//                                 <Select
//                                     name='courseOutcome'
//                                     // isMulti
//                                     isSearchable
//                                     options={ColourOption}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div class="row mb-3">
//                             <h5 class="col-lg-3 p-1">Bloom Taxonomy Level </h5>
//                             <div class="col-lg-3">
//                                 <Select />
//                             </div>
//                             <h5 class="col-lg-3 p-1">Bloom Taxonomy Verb </h5>
//                             <div class="col-lg-3">
//                                 <Select />
//                             </div>
//                         </div>
//                         <hr />
//                         <div class="row mb-3">
//                             <h5 class="p-1 mx-2 col-lg-3" align="left">Question <span>{currentQuestion}</span> : </h5>
//                             <textarea style={{ resize: "none", height: 244 }} type="text" class="my-2 mx-3 form-control" >
//                                 {/* {console.log(current["questionIndex"])} */}
//                             </textarea>
//                         </div>
//                         <div class="row my-3">
//                             <div class="col-lg-6 p-0 d-flex flex-row">
//                                 <button class="mx-4 btn btn-info" onClick={addBLVerb} type="submit">Add BL Verb</button>
//                             </div>
//                             <div class="col-lg-6 p-0 d-flex flex-row-reverse">
//                                 <button class="mx-4 col-lg-3 btn btn-secondary" type="button">Reset</button>
//                                 <button class="mr-0 col-lg-3 btn btn-primary " onClick={handleNext} type="submit">Next</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             )}
//         </Formik>
//     );
// };

// export default InputForm;