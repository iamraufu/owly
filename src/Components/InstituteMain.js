import React, { useEffect, useState } from 'react';
import CourseDetails from './CourseDetails';
import FundingDetails from './FundingDetails';
import InstituteDetails from './InstituteDetails';

const InstituteMain = () => {

    const id = localStorage.getItem('token')
    const [user,setUser] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/institutes/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    })

    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div style={{ height: '8vh', borderBottom: '1px solid #e5e5e5' }} className="bg-white">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="">
                        <h2 className='fw-bold ps-5 fs-5'>Institute Panel</h2>
                    </div>
                    <div className="d-flex pe-5 justify-content-center align-items-center">
                        <div className="">
                        {
                                user?.image ? 
                                <img style={{borderRadius: '50%'}} width={40} className='img-fluid' src={user?.image} alt="user" /> :
                                <div style={{height:'40px', width:'40px', borderRadius: '50%', backgroundColor:'lightgrey'}} className=""></div>
                            }
                        </div>
                        <div className="ms-3">
                            <h3 className='fs-5 fw-bold'>{user?.firsName} {user?.lastName} {user?.name}</h3>
                            <h4 className='fs-6'>Institute</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '5vh' }} className=""></div>

            <div style={{ height: '87vh', borderBottom: '1px solid #e5e5e5', overflowY: 'auto',  }} className="mx-5 bg-white p-5">
                <InstituteDetails />
                <CourseDetails />
                <FundingDetails />
            </div>

        </section>
    );
};

export default InstituteMain;