import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const PartnerDetails = () => {

    const id = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/partners/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = details => {
        console.log(details)
        fetch(`http://localhost:8000/partner/${id}`, {
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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>PARTNER DETAILS</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>


            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label>Name</label>
                    <br />
                    <input type="text" defaultValue={user?.name} style={{ padding: '0' }} {...register("name", { required: true })} />
                    <br />
                    {errors.name && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Email</label>
                    <br />
                    <input type="email" defaultValue={user?.email} style={{ padding: '0' }} {...register("email", { required: true })} />
                    <br />
                    {errors.partnerEmail && <span className='text-danger fw-bold'>Enter Email</span>}
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

                <div className="col-md-4 mb-3">
                    <label>Address</label>
                    <br />
                    <input type="text" defaultValue={user?.partnerAddress} style={{ padding: '0' }} {...register("partnerAddress", { required: true })} />
                    <br />
                    {errors.partnerAddress && <span className='text-danger fw-bold'>Enter Address</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Phone Number</label>
                    <br />
                    <input type="number" defaultValue={user?.phoneNumber} style={{ padding: '0' }} {...register("phoneNumber", { required: true })} />
                    <br />
                    {errors.phoneNumber && <span className='text-danger fw-bold'>Enter Number</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default PartnerDetails;