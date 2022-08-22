import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const StudentInfo = () => {

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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>PERSONAL INFO</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>


            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>First Name</label>
                    <br />
                    <input type="text" defaultValue={user?.firstName} style={{ padding: '0' }} {...register("firstName", { required: true })} />
                    <br />
                    {errors.firstName && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Middle Name</label>
                    <br />
                    <input type="text" defaultValue={user?.middleName} style={{ padding: '0' }} {...register("middleName")} />
                    <br />
                    {errors.middleName && <span className='text-danger fw-bold'>Enter Name</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Last Name</label>
                    <br />
                    <input type="text" defaultValue={user?.lastName} style={{ padding: '0' }} {...register("lastName", { required: true })} />
                    <br />
                    {errors.lastName && <span className='text-danger fw-bold'>Enter Name</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Date of Birth</label>
                    <br />
                    <input type="text" defaultValue={user?.birth} style={{ padding: '0' }} {...register("birth", { required: true })} />
                    <br />
                    {errors.birth && <span className='text-danger fw-bold'>Enter Date of Birth</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>First Language</label>
                    <br />
                    <input type="text" defaultValue={user?.firstLanguage} style={{ padding: '0' }} {...register("firstLanguage", { required: true })} />
                    <br />
                    {errors.firstLanguage && <span className='text-danger fw-bold'>Enter Language</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Country of Citizenship</label>
                    <br />
                    <input type="text" defaultValue={user?.citizen} style={{ padding: '0' }} {...register("citizen", { required: true })} />
                    <br />
                    {errors.citizen && <span className='text-danger fw-bold'>Enter Citizenship</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Gender</label>
                    <br />
                    <input type="text" defaultValue={user?.gender} style={{ padding: '0' }} {...register("gender", { required: true })} />
                    <br />
                    {errors.gender && <span className='text-danger fw-bold'>Enter Gender</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Marital Status</label>
                    <br />
                    <input type="text" defaultValue={user?.maritalStatus} style={{ padding: '0' }} {...register("maritalStatus", { required: true })} />
                    <br />
                    {errors.maritalStatus && <span className='text-danger fw-bold'>Enter Status</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Image Url</label>
                    <br />
                    <input type="text" defaultValue={user?.image} style={{ padding: '0' }} {...register("image", { required: true })} />
                    <br />
                    {errors.image && <span className='text-danger fw-bold'>Enter Url</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default StudentInfo;