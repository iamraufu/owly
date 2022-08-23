import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Institutes = () => {

    const [institutes, setInstitutes] = useState([]);

    useEffect(() => {
        fetch('https://owlybd.herokuapp.com/institutes')
            .then(response => response.json())
            .then(data => setInstitutes(data))
    }, [])
    return (
        <section>
            <Navbar />
            <div className="container my-5">
                <h1 className='fw-bold'>Find a University</h1>
                {
                    institutes.map((item, index) =>
                        <div key={index} className="programs-card py-3 my-5">

                            <div className="row">
                                <div className="col-md-3 ps-3">
                                    <img width={200} className='img-fluid p-2 mx-auto d-block' src={item?.image} alt={item.name} />
                                </div>

                                <div className="col-md-8 p-3">
                                    <h2 className='fs-5 fw-bold'>{item.name}</h2>
                                    <h3 className='fs-6'>{item?.address} {item?.location}</h3>

                                    <div className="row mt-3">
                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>Type</h2>
                                                <h3 className="fs-6">{item?.type}</h3>
                                            </div>
                                        </div>

                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>Rank</h2>
                                                <h3 className="fs-6">{item?.rank}</h3>
                                            </div>
                                        </div>

                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>Nationalities</h2>
                                                <h3 className="fs-6">{item?.nationalities}</h3>
                                            </div>
                                        </div>

                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>International Student</h2>
                                                <h3 className="fs-6">{item?.internationalStudents}</h3>
                                            </div>
                                        </div>

                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>Start Date</h2>
                                                <h3 className="fs-6">{item?.startDate}</h3>
                                            </div>
                                        </div>

                                        <div className="col-md-4 d-flex align-items-center">
                                            <div className="pt-3">
                                                <h2 className='fs-6 fw-bold'>Acceptance Rate</h2>
                                                <h3 className="fs-6">{item?.acceptanceRate}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 d-flex justify-content-around align-items-right pt-3">
                                        <button onClick={()=>{
                                            window.open(`mailto:${item.email}`)
                                        }} className='programs-apply-btn fw-bold'>Apply</button>
                                        <button className='programs-details-btn fw-bold'>Program Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <Footer />
        </section>
    );
};

export default Institutes;