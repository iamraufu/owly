import React from 'react';
import JoinMillionsOfHappyStudentsData from '../Data/JoinMillionsOfHappyStudents.json';

const JoinMillionsOfHappyStudents = () => {
    return (
        <section className='container my-5 pt-5'>
            <h1 className='text-center mt-5 fw-bold'>Join Millions Of Happy Students</h1>

            <div className="row mt-5">
                {
                    JoinMillionsOfHappyStudentsData.map((item, index) =>
                        <div key={index} className="col-lg-4 my-5">
                            
                            <div style={{height:'400px', backgroundColor:'#FFA00A', borderRadius:'1rem', textAlign:'justify'}} className='d-flex justify-content-center align-items-center'>
                                <p className="p-5 fs-5">{item.description}</p>
                            </div>

                            <div className="triangle-down"></div>
                            
                            <div className="d-flex mt-3">
                                <div style={{}} className="">
                                    <img width={80} className='img-fluid image-round' src={item.image} alt="" />
                                </div>
                                <div className="ms-3 mt-3">
                                    <h2 className='fs-5 fw-bold'>{item.name}</h2>
                                    <h3 className='fs-6'>{item.designation}</h3>
                                </div>
                            </div>

                        </div>
                    )}
            </div>
        </section>
    );
};

export default JoinMillionsOfHappyStudents;