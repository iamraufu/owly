import React from 'react';
import '../../styles/Programs.css';
import Navbar from '../../Components/Navbar';
import programs from '../../Data/programs.json';
import typeImage from '../../images/Programs/type.png';
import durationImage from '../../images/Programs/duration.png';
import feeImage from '../../images/Programs/fee.png';
import dateImage from '../../images/Programs/date.png';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Programs = () => {

    const navigate = useNavigate();

    return (
        <section>
            <Navbar />
            <div className="container my-5">
                <h1 className='fw-bold'>Find a Program</h1>
                {
                    programs.map((item, index) =>
                        <div key={index} className="programs-card py-3 my-5">

                            <div className="row">
                                <div className="col-md-1 ps-3">
                                    <img className='img-fluid' src={item.university_logo} alt={item.university} />
                                </div>

                                <div className="col-md-7 p-3">
                                    <h2 className='fs-5 fw-bold'>{item.name}</h2>
                                    <h3 className='fs-6'>{item.university}</h3>
                                </div>

                                <div className="col-md-4 d-flex justify-content-around pt-3">
                                    <button className='programs-apply-btn fw-bold'>Apply</button>
                                    <button onClick={()=>{
                                        navigate('/program-details/'+item.id)
                                    }} className='programs-details-btn fw-bold'>Program Details</button>
                                </div>
                            </div>

                            <div className="row mt-3 ps-3">
                                <div className="col-md-1"></div>
                                <div className="col-md-2 d-flex align-items-center">
                                    <div className="">
                                        <img src={typeImage} className='pe-2' alt={item.name} />
                                    </div>
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Program Type</h2>
                                        <h3 className="fs-6">{item.type}</h3>
                                    </div>
                                </div>

                                <div className="col-md-2 d-flex align-items-center">
                                    <div className="">
                                        <img src={durationImage} className='pe-2' alt={item.name} />
                                    </div>
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Duration</h2>
                                        <h3 className="fs-6">{item.duration}</h3>
                                    </div>
                                </div>

                                <div className="col-md-2 d-flex align-items-center">
                                    <div className="">
                                        <img src={feeImage} className='pe-2' alt={item.name} />
                                    </div>
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Annual Tuition Fee</h2>
                                        <h3 className="fs-6">{item.fee}</h3>
                                    </div>
                                </div>
                                
                                <div className="col-md-2 d-flex align-items-center">
                                    <div className="">
                                        <img src={dateImage} className='pe-2' alt={item.name} />
                                    </div>
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Start Date</h2>
                                        <h3 className="fs-6">{item.start_date}</h3>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    )}
            </div>
            <Footer />
        </section>
    );
};

export default Programs;