import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const StudentExamScore = () => {

    const id = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch(`https://owlybd.herokuapp.com/students/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = details => {
        console.log(details)
        fetch(`https://owlybd.herokuapp.com/student/${id}`, {
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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>EXAM SCORE</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>English Exam Type</label>
                    <br />
                    <input type="text" value={user?.examType} style={{ padding: '0' }} {...register("examType", { required: true })} />
                    <br />
                    {errors.examType && <span className='text-danger fw-bold'>Enter Exam Type</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Date of Exam</label>
                    <br />
                    <input type="text" value={user?.examDate} style={{ padding: '0' }} {...register("examDate", { required: true })} />
                    <br />
                    {errors.examDate && <span className='text-danger fw-bold'>Enter Date</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Band Score</label>
                    <br />
                    <input type="number" step='any' value={user?.bandScore} style={{ padding: '0' }} {...register("bandScore", { required: true })} />
                    <br />
                    {errors.bandScore && <span className='text-danger fw-bold'>Enter Band Score</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Reading Score</label>
                    <br />
                    <input type="number" step='any' value={user?.readingScore} style={{ padding: '0' }} {...register("readingScore", { required: true })} />
                    <br />
                    {errors.readingScore && <span className='text-danger fw-bold'>Enter Reading Score</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Listening Score</label>
                    <br />
                    <input type="number" step='any' value={user?.listeningScore} style={{ padding: '0' }} {...register("listeningScore", { required: true })} />
                    <br />
                    {errors.listeningScore && <span className='text-danger fw-bold'>Enter Listening Score</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Speaking Score</label>
                    <br />
                    <input type="number" step='any' value={user?.speakingScore} style={{ padding: '0' }} {...register("speakingScore", { required: true })} />
                    <br />
                    {errors.speakingScore && <span className='text-danger fw-bold'>Enter Speaking Score</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Writing Score</label>
                    <br />
                    <input type="number" step='any' value={user?.writingScore} style={{ padding: '0' }} {...register("writingScore", { required: true })} />
                    <br />
                    {errors.writingScore && <span className='text-danger fw-bold'>Enter Writing Score</span>}
                    <br />
                </div>
            </div>
        </form>
    );
};

export default StudentExamScore;