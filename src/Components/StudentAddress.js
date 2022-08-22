import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const StudentAddress = () => {

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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>ADDRESS INFO</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>Address</label>
                    <br />
                    <input type="text" defaultValue={user?.address} style={{ padding: '0' }} {...register("address", { required: true })} />
                    <br />
                    {errors.address && <span className='text-danger fw-bold'>Enter Address</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>City / Town</label>
                    <br />
                    <input type="text" defaultValue={user?.cityTown} style={{ padding: '0' }} {...register("cityTown", { required: true })} />
                    <br />
                    {errors.cityTown && <span className='text-danger fw-bold'>Enter City</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>State / Province</label>
                    <br />
                    <input type="text" defaultValue={user?.state} style={{ padding: '0' }} {...register("state", { required: true })} />
                    <br />
                    {errors.state && <span className='text-danger fw-bold'>Enter State</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Country</label>
                    <br />
                    <input type="text" defaultValue={user?.country} style={{ padding: '0' }} {...register("country", { required: true })} />
                    <br />
                    {errors.country && <span className='text-danger fw-bold'>Enter Country</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Postal / Zipcode</label>
                    <br />
                    <input type="number" defaultValue={user?.postal} style={{ padding: '0' }} {...register("postal", { required: true })} />
                    <br />
                    {errors.postal && <span className='text-danger fw-bold'>Enter Zip Code</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Email</label>
                    <br />
                    <input type="email" defaultValue={user?.email} style={{ padding: '0' }} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className='text-danger fw-bold'>Enter Email</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Phone Number</label>
                    <br />
                    <input type="number" defaultValue={user?.phone} style={{ padding: '0' }} {...register("phone", { required: true })} />
                    <br />
                    {errors.phone && <span className='text-danger fw-bold'>Enter Phone</span>}
                    <br />
                </div>
            </div>
        </form>
    );
};

export default StudentAddress;