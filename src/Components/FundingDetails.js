import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const FundingDetails = () => {

    const id = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch(`https://owlybd.herokuapp.com/institutes/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = details => {
        fetch(`https://owlybd.herokuapp.com/institute/${id}`, {
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
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>FUNDING DETAILS</h2>
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
                    <input type="text" value={user?.fundingName} style={{ padding: '0' }} {...register("fundingName", { required: true })} />
                    <br />
                    {errors.fundingName && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Description</label>
                    <br />
                    <textarea rows='1' cols='34' type="text" value={user?.fundingDescription} style={{ padding: '0' }} {...register("fundingDescription", { required: true })} />
                    <br />
                    {errors.fundingDescription && <span className='text-danger fw-bold'>Enter Description</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Amount</label>
                    <br />
                    <input type="text" value={user?.fundingAmount} style={{ padding: '0' }} {...register("fundingAmount", { required: true })} />
                    <br />
                    {errors.fundingAmount && <span className='text-danger fw-bold'>Enter Amount</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Other Details</label>
                    <br />
                    <textarea rows='1' cols='40' type="text" value={user?.otherDetails} style={{ padding: '0' }} {...register("otherDetails", { required: true })} />
                    <br />
                    {errors.otherDetails && <span className='text-danger fw-bold'>Enter Details</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default FundingDetails;