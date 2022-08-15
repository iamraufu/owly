import React from 'react';
import date_white from '../images/Programs/date_white.png';
import duration_white from '../images/Programs/duration_white.png';
import language_white from '../images/Programs/language_white.png';
import type_white from '../images/Programs/type_white.png';
import fee_white from '../images/Programs/fee_white.png';

const ProgramDetailsProgramFacts = ({program}) => {
    return (
        <div style={{ minHeight: '350px', backgroundColor: '#FFAC29' }} className="container-fluid my-5">
                <div className="container pt-5">
                    <h2 className='fw-bold'>Program Facts</h2>

                    <div className="row justify-content-between align-items-center mt-5">
                        <div className="col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img width={40} className='img-fluid' src={type_white} alt={program.name} />
                            </div>
                            <div className="pt-3 ps-3">
                                <h2 className='fs-6 fw-bold'>Program Type</h2>
                                <p className='text-white fs-5'>{program.type}</p>
                            </div>
                        </div>

                        <div className="col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img width={40} className='img-fluid' src={duration_white} alt={program.name} />
                            </div>
                            <div className="pt-3 ps-3">
                                <h2 className='fs-6 fw-bold'>Duration</h2>
                                <p className='text-white fs-5'>{program.duration}</p>
                            </div>
                        </div>
                        
                        <div className="col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img width={40} className='img-fluid' src={fee_white} alt={program.name} />
                            </div>
                            <div className="pt-3 ps-3">
                                <h2 className='fs-6 fw-bold'>Annual Tuition Fee</h2>
                                <p className='text-white fs-5'>{program.fee}</p>
                            </div>
                        </div>

                        <div className="col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img width={40} className='img-fluid' src={language_white} alt={program.name} />
                            </div>
                            <div className="pt-3 ps-3">
                                <h2 className='fs-6 fw-bold'>Preferred Language</h2>
                                <p className='text-white fs-5'>English</p>
                            </div>
                        </div>

                        <div className="col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img width={40} className='img-fluid' src={date_white} alt={program.name} />
                            </div>
                            <div className="pt-3 ps-3">
                                <h2 className='fs-6 fw-bold'>Start Date</h2>
                                <p className='text-white fs-5'>{program.start_date}</p>
                            </div>
                        </div>

                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
    );
};

export default ProgramDetailsProgramFacts;