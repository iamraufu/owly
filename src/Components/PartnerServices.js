import React from 'react';
import { useForm } from "react-hook-form";

const PartnerServices = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <h2 style={{ color: '#FFAC29' }} className='fs-6 fw-bold'>SERVICES OFFERED</h2>
                </div>
                <div className="">
                    <button className='btn btn-secondary px-5'>Save</button>
                </div>
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <input id='air_ticket_booking' {...register("checkbox")} type="checkbox" value="Air Ticket Booking" />
                    <label htmlFor='air_ticket_booking' className='ps-2 fw-bold'>Air Ticket Booking</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='passport_assistance' {...register("checkbox")} type="checkbox" value="Passport Assistance" />
                    <label htmlFor='passport_assistance' className='ps-2 fw-bold'>Passport Assistance</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='financial_assistance' {...register("checkbox")} type="checkbox" value="Financial Assistance" />
                    <label htmlFor='financial_assistance' className="ps-2 fw-bold">Financial Assistance</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='travel_assistance' {...register("checkbox")} type="checkbox" value="Travel Assistance" />
                    <label htmlFor='travel_assistance' className='ps-2 fw-bold'>Travel Assistance</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='foreign_assistance' {...register("checkbox")} type="checkbox" value="Foreign Assistance" />
                    <label htmlFor='foreign_assistance' className='ps-2 fw-bold'>Foreign Assistance</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='ielts_coaching' {...register("checkbox")} type="checkbox" value="IELTS Coaching" />
                    <label htmlFor='ielts_coaching' className='ps-2 fw-bold'>IELTS Coaching</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='sattoefl_coaching' {...register("checkbox")} type="checkbox" value="SAT / TOEFL Coaching" />
                    <label htmlFor='sattoefl_coaching' className='ps-2 fw-bold'>SAT / TOEFL Coaching</label>
                </div>

                <div className="col-md-4 mb-3">
                    <input id='gregmat_coaching' {...register("checkbox")} type="checkbox" value="GRE / GMAT Coaching" />
                    <label htmlFor='gregmat_coaching' className='ps-2 fw-bold'>GRE / GMAT Coaching</label>
                </div>
            
            </div>

        </form>
    );
};

export default PartnerServices;