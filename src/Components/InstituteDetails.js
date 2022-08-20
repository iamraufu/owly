import React from 'react';
import { useForm } from "react-hook-form";

const InstituteDetails = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>INSTITUTE DETAILS</h2>
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
                    <label>Location</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("location", { required: true })} />
                    <br />
                    {errors.location && <span className='text-danger fw-bold'>Enter Location</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Address</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("address", { required: true })} />
                    <br />
                    {errors.address && <span className='text-danger fw-bold'>Enter Address</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Type</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("type", { required: true })} />
                    <br />
                    {errors.type && <span className='text-danger fw-bold'>Enter Type</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Rank</label>
                    <br />
                    <input type="number" style={{ padding: '0' }} {...register("rank", { required: true })} />
                    <br />
                    {errors.rank && <span className='text-danger fw-bold'>Enter Rank</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Nationalities</label>
                    <br />
                    <input type="number" style={{ padding: '0' }} {...register("nationalities", { required: true })} />
                    <br />
                    {errors.nationalities && <span className='text-danger fw-bold'>Enter Nationalities</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>International Students</label>
                    <br />
                    <input type="number" style={{ padding: '0' }} {...register("internationalStudents", { required: true })} />
                    <br />
                    {errors.internationalStudents && <span className='text-danger fw-bold'>Enter Students</span>}
                    <br />
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
                    <label>Acceptance Rate</label>
                    <br />
                    <input type="text" style={{ padding: '0' }} {...register("acceptanceRate", { required: true })} />
                    <br />
                    {errors.acceptanceRate && <span className='text-danger fw-bold'>Enter Rate</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Total Programs</label>
                    <br />
                    <input type="number" style={{ padding: '0' }} {...register("totalPrograms", { required: true })} />
                    <br />
                    {errors.totalPrograms && <span className='text-danger fw-bold'>Enter Programs</span>}
                    <br />
                </div>

                <div className="col-md-4 mb-3">
                    <label>Description</label>
                    <br />
                    <textarea rows='1' cols='40' type="text" style={{ padding: '0' }} {...register("description", { required: true })} />
                    <br />
                    {errors.description && <span className='text-danger fw-bold'>Enter Description</span>}
                    <br />
                </div>

            </div>

        </form>
    );
};

export default InstituteDetails;