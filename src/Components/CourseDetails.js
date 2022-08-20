import React from 'react';
import { useForm } from "react-hook-form";

const CourseDetails = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>COURSE DETAILS</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>


            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>Course Name</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("courseName", { required: true })} />
                    <br />
                    {errors.courseName && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Start Date</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("startDate", { required: true })} />
                    <br />
                    {errors.startDate && <span className='text-danger fw-bold'>Enter Date</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Language Taught In</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("languageTaughtIn", { required: true })} />
                    <br />
                    {errors.languageTaughtIn && <span className='text-danger fw-bold'>Enter Language</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Duration</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("duration", { required: true })} />
                    <br />
                    {errors.duration && <span className='text-danger fw-bold'>Enter Duration</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Annual Tuition Fee</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("rank", { required: true })} />
                    <br />
                    {errors.rank && <span className='text-danger fw-bold'>Enter Fee</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Requirements</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("nationalities", { required: true })} />
                    <br />
                    {errors.nationalities && <span className='text-danger fw-bold'>Enter Requirements</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default CourseDetails;