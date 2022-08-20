import React from 'react';
import { useForm } from "react-hook-form";

const FundingDetails = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                    <input type="text" style={{ padding: '0' }} {...register("fundingName", { required: true })} />
                    <br />
                    {errors.fundingName && <span className='text-danger fw-bold'>Enter Name</span>}
                </div>

                <div className="col-md-4 mb-3">
                    <label>Description</label>
                    <br />
                    <textarea rows='1' cols='40' type="text" style={{ padding: '0' }} {...register("fundingDescription", { required: true })} />
                    <br />
                    {errors.fundingDescription && <span className='text-danger fw-bold'>Enter Description</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Amount</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("fundingAmount", { required: true })} />
                    <br />
                    {errors.fundingAmount && <span className='text-danger fw-bold'>Enter Amount</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Other Details</label>
                    <br />
                    <textarea rows='1' cols='40' type="text" style={{ padding: '0' }} {...register("otherDetails", { required: true })} />
                    <br />
                    {errors.otherDetails && <span className='text-danger fw-bold'>Enter Details</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default FundingDetails;