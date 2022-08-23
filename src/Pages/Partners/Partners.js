import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Partners = () => {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('https://owlybd.herokuapp.com/partners')
            .then(response => response.json())
            .then(data => setPartners(data))
    }, [])

    return (
        <section>
            <Navbar />
            <div className="container my-5">
            <h1 className='fw-bold'>Find a Partner</h1>
                {
                    partners.map(item =>
                        <div key={item._id} className="programs-card py-3 my-5">

                            <div className="row">
                                <div className="col-md-1 ps-3">
                                    <img width={150} style={{borderRadius: '50%'}} className='img-fluid p-2 mx-auto d-block' src={item.image} alt={item.name} />
                                </div>

                                <div className="col-md-7">
                                    <h2 className='fs-5 fw-bold p-2'>{item.name}</h2>
                                    <h3 className='fs-6 p-2'>{item.partnerAddress}</h3>
                                </div>
                            </div>

                            <div className="row mt-3 ps-3">
                                <div className="col-md-1"></div>

                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Email</h2>
                                        <h3 className="fs-6">{item.email}</h3>
                                    </div>
                                </div>

                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Phone Number</h2>
                                        <h3 className="fs-6">{item.phoneNumber}</h3>
                                    </div>
                                </div>

                                <div className="col-md-5 d-flex align-items-center">
                                    <div className="pt-3">
                                        <h2 className='fs-6 fw-bold'>Services</h2>
                                        {
                                            item.checkbox === false ? 
                                            <h3 className="fs-6">No Service Available</h3>:
                                            <h3 className="fs-6">{item.checkbox}</h3>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />
        </section>
    );
};

export default Partners;