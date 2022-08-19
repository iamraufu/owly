import React from 'react';

const GetStartedWithOwlys = () => {
    return (
        <section className='container'>
            
            <div className="row justify-content-center align-items-center pb-5">
                <div className="col-md-6 mt-5">
                    <h2 className="fs-1 fw-bold">Get Started with Owlys</h2>
                    <p className="fs-5 mt-3">Discover opportunities around the world. Get matched and apply to programs at educational institutions that meet your needs, and start your study abroad journey!</p>
                    <h3 className='fs-5 mt-5'>I'm a 
                        <select className='ms-3' name="" id="">
                            <option value="">Student</option>
                            <option value="">Institution</option>
                            <option value="">Partner</option>
                            <option value="">Recruiter</option>
                        </select>
                    </h3>
                </div>
                <div className="col-md-6 mt-5">
                    <img src="https://i.ibb.co/3cTPD2F/getstarted.png" alt="Get Started with Owlys" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default GetStartedWithOwlys;