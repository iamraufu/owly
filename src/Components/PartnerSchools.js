import React from 'react';
import partnerSchool from '../Data/partnerschools.json';

const PartnerSchools = () => {
    return (
        <section style={{ backgroundColor: '#F2F2F2' }} className='my-5 p-5'>
            <div className="container mt-5">
                <h2 className='text-center fs-6'>PARTNER SCHOOLS</h2>
                <h3 className='text-center fs-1 fw-bold mt-3'>Reach Diverse and Qualified Students</h3>
                <p className="text-center fs-5 mt-3">The ApplyBoard Platform allows you to enrich and diversify your campus by connecting you
                <br />
                with highly qualified students from around the globe.</p>
                
                <div className="row my-5">
                    {
                        partnerSchool.map((item, index) =>
                        <div key={index} className="col-md-3 col-sm-6 p-3">
                            <img width={150} src={item.image} alt={item.name} className='img-fluid mx-auto d-block' />
                        </div>
                    )}
                </div>
                <button className='button-brand mx-auto d-block my-5'>Explore Institutions &#8594;</button>
            </div>
        </section>
    );
};

export default PartnerSchools;