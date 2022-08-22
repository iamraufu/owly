import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const StudentEducation = () => {

    const id = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/students/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = details => {
        console.log(details)
        fetch(`http://localhost:8000/student/${id}`, {
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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>EDUCATION INFO</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>Country of Education</label>
                    <br />
                    <input type="text" defaultValue={user?.countryEducation} style={{ padding: '0' }} {...register("countryEducation", { required: true })} />
                    <br />
                    {errors.countryEducation && <span className='text-danger fw-bold'>Enter Country</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Highest Level of Education</label>
                    <br />
                    <input type="text" defaultValue={user?.highestEducation} style={{ padding: '0' }} {...register("highestEducation", { required: true })} />
                    <br />
                    {errors.highestEducation && <span className='text-danger fw-bold'>Enter Highest Education</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Grading Scheme</label>
                    <br />
                    <input type="text" defaultValue={user?.gradingScheme} style={{ padding: '0' }} {...register("gradingScheme", { required: true })} />
                    <br />
                    {errors.gradingScheme && <span className='text-danger fw-bold'>Enter Grading Scheme</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Grade Average</label>
                    <br />
                    <input type="number" step='any' defaultValue={user?.gradeAverage} style={{ padding: '0' }} {...register("gradeAverage", { required: true })} />
                    <br />
                    {errors.gradeAverage && <span className='text-danger fw-bold'>Enter Grade Average</span>}
                    <br />
                </div>

            </div>
        </form>
    );
};

export default StudentEducation;