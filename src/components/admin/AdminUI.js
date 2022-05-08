import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

function AdminUI() {
    const [shows, setShow] = useState(false);
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal)
        console.log(modal);
    }
    const [modal1, setModal1] = useState(false);
    const toggle1 = () => {
        setModal1(!modal1)
        console.log(modal1);
    }

    return (
        <>
            <div>
                {modal ?
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-10 z-50 outline-none focus:outline-none max-w-10x "
                        >
                            <div className="relative w-50 my-10 mx-auto max-w-30xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t"  >
                                        <h3 className="text-3xl font-semibold">
                                            Add Course Detail
                                        </h3>

                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setModal(false)}
                                        >
                                            <span className=" bg-red text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-nonetext-red-500 ">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-7 flex-auto w-max">

                                        <div>
                                            <label for="email" class="block mb-3 text-gray-600 font-semibold text-2l">Course Code</label>
                                            <input type="text" class="bg-indigo-50 px-8 py-2 outline-none rounded-md w-96" />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-3 text-gray-600 font-semibold">Course Title</label>
                                            <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-96" />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-3 text-gray-600 font-semibold">Course Outcome</label>
                                            <textarea type="textarea" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-96" />
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => toggle()}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setModal(false)}
                                        >
                                            Save 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                    : ''
                }
                {modal1 ?
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-10 z-50 outline-none focus:outline-none max-w-10x "
                        >
                            <div className="relative w-auto my-10 mx-auto max-w-20xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t"  >
                                        <h3 className="text-2xl font-semibold  text-center">
                                            Delete
                                        </h3>
                          

                                        {/* <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setModal(false)}
                                        >
                                            <span className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                                                ×
                                            </span>
                                        </button> */}
                                    </div>
                                    {/*body*/}
                                    <div class="text-center p-5 flex-auto justify-center">

                                        <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                                        <p class="text-xl text-gray-500 px-8">Do you really want to delete your account?
                                            This process cannot be undone</p>
                                    </div>
                                    {/*footer*/} <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                   
                                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                                     <button onClick={() => toggle1()} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                         Cancel
                                     </button>
                                     <button onClick={() => setModal1(false)} class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                                 </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                    // <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style="background-image: url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80);" id="modal-id">
                    //     <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
                    //     <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

                    //         <div class="">

                    //             <div class="text-center p-5 flex-auto justify-center">
                    //               
                    //                 <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                    //                 <p class="text-sm text-gray-500 px-8">Do you really want to delete your account?
                    //                     This process cannot be undone</p>
                    //             </div>

                    //             <div class="p-3  mt-2 text-center space-x-4 md:block">
                    //                 <button onClick={() => toggle1()} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    //                     Cancel
                    //                 </button>
                    //                 <button onClick={() => setModal1(false)} class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    : ""
                }
                <div className="sm:px-6 w-full">
                    <div className="px-4 md:px-10 py-4 md:py-7">
                        <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg md:text-xxl lg:text-6xl font-bold leading-normal text-gray-800 font-sans subpixel-antialiased italic">Admin</p>

                            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                                <p>Sort By:</p>
                                <select className="focus:outline-none bg-transparent ml-1">
                                    <option className="text-sm text-indigo-800">Latest</option>
                                    <option className="text-sm text-indigo-800">Oldest</option>
                                    <option className="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Done</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Pending</p>
                                    </div>
                                </a>

                            </div>
                            <div class="flex items-center justify-center  pl-16  ml-80">
                                <div class="flex border-2 rounded basis-1/2 ">
                                    <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
                                    <button class="flex items-center justify-center px-4 border-l">
                                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-4 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                                onClick={() => setModal(true)} >
                                <p className="text-sm font-medium leading-none text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Add Task</p>
                            </button>
                        </div>
                        <div className="mt-7 overflow-x-auto place-items-center">
                            <table className="w-full whitespace-nowrap place-items-center">
                                <thead>
                                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 place-items-center">
                                        <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-lm tracking-normal leading-4 pl-2">S. No</th>
                                        <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-lm tracking-normal leading-4 pl-7">Course Code</th>
                                        <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-lm tracking-normal leading-4 pl-12">Course Title</th>
                                        <td className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-lm tracking-normal leading-4 pl-7">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">1</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XC7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Numerocal Metyhods</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">2</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XC7365</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Software project management</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none" onClick={() => setModal(true)}  >Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none" onClick={() => setModal1(true)}>Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">3</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XT7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Software Testing</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">4</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">MT7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Applied statistics</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">5</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XT7823</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Principles of compilere design</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">6</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XC7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Pattern recognition</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">7</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XC7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Cloud computing</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">8</p>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">XC7821</p>

                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Machine learning</p>
                                            </div>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Update</button>
                                        </td>
                                        <td className="pl-4">
                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Delete</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <style>
                    {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
                </style>

                <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                    <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                        </div>
                        <div className="sm:flex hidden">
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                        </div>
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <p className="text-sm font-medium leading-none mr-3">Next</p>
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal /> */}
        </>
    );
}

export default AdminUI;

{/* <Modal showsa={showModal} onHide={()=>{setShowModal(false)}}>
              <ModalHeader closeButton>
                <ModalTitle>Modal heading</ModalTitle>
              </ModalHeader>
              <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={()=>{setShowModal(false)}}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=>{setShowModal(false)}}>
                  Save Changes
                </Button>
              </ModalFooter>
            </Modal> */}