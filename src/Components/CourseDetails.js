import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const CourseDetails = () => {

    const id = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/institutes/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = details => {
        fetch(`http://localhost:8000/institute/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data =>
                data.status === true ?
                    Swal.fire({
                        icon: 'success',
                        title: "Updated!!",
                        text: `${data.message}`,
                    })
                    :
                    Swal.fire({
                        icon: 'error',
                        title: "Something Went Wrong!",
                        text: `${data.message}`,
                    })
            )
    }

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
                    <input type="text" defaultValue={user?.courseName} style={{ padding: '0' }} {...register("courseName", { required: true })} />
                    <br />
                    {errors.courseName && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Start Date</label>
                    <br />
                    <input type="text" defaultValue={user?.startDate} style={{ padding: '0' }} {...register("startDate", { required: true })} />
                    <br />
                    {errors.startDate && <span className='text-danger fw-bold'>Enter Date</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Language Taught In</label>
                    <br />
                    <input type="text" defaultValue={user?.languageTaughtIn} style={{ padding: '0' }} {...register("languageTaughtIn", { required: true })} />
                    <br />
                    {errors.languageTaughtIn && <span className='text-danger fw-bold'>Enter Language</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Duration</label>
                    <br />
                    <input type="text" defaultValue={user?.duration} style={{ padding: '0' }} {...register("duration", { required: true })} />
                    <br />
                    {errors.duration && <span className='text-danger fw-bold'>Enter Duration</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Annual Tuition Fee</label>
                    <br />
                    <input type="text" defaultValue={user?.annualTuitionFee} style={{ padding: '0' }} {...register("annualTuitionFee", { required: true })} />
                    <br />
                    {errors.annualTuitionFee && <span className='text-danger fw-bold'>Enter Fee</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Requirements</label>
                    <br />
                    <input type="text" defaultValue={user?.requirements} style={{ padding: '0' }} {...register("requirements", { required: true })} />
                    <br />
                    {errors.requirements && <span className='text-danger fw-bold'>Enter Requirements</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default CourseDetails;