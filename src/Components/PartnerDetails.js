import React from 'react';
import { useForm } from "react-hook-form";

const PartnerDetails = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                    <input type="text" style={{ padding: '0' }} {...register("name", { required: true })} />
                    <br />
                    {errors.name && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Email</label>
                    <br />
                    <input type="email" style={{ padding: '0' }} {...register("partnerEmail", { required: true })} />
                    <br />
                    {errors.partnerEmail && <span className='text-danger fw-bold'>Enter Email</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Address</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("partnerAddress", { required: true })} />
                    <br />
                    {errors.partnerAddress && <span className='text-danger fw-bold'>Enter Address</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Phone Number</label>
                    <br />
                    <input type="number" style={{ padding: '0' }} {...register("phoneNumber", { required: true })} />
                    <br />
                    {errors.phoneNumber && <span className='text-danger fw-bold'>Enter Number</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default PartnerDetails;