import React from 'react';
import StudentAddress from './StudentAddress';
import StudentInfo from './StudentInfo';

const StudentMain = () => {
    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div style={{ height: '8vh', borderBottom: '1px solid #e5e5e5' }} className="bg-white">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="">
                        <h2 className='fw-bold ps-5 fs-4'>User Panel</h2>
                    </div>
                    <div className="d-flex pe-5">
                        <div className="">
                            <img width={40} className='img-fluid' src="https://miro.medium.com/max/3150/1*KS8-MJMTa6eq3zlL5l9Hjg.png" alt="user" />
                        </div>
                        <div className="ms-3">
                            <h3 className='fs-5 fw-bold'>User Name</h3>
                            <h4 className='fs-6'>User Role</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '5vh' }} className=""></div>

            <div style={{ height: '87vh', borderBottom: '1px solid #e5e5e5', overflowY: 'auto',  }} className="mx-5 bg-white p-5">
                <StudentInfo />
                <StudentAddress />
            </div>

        </section>
    );
};

export default StudentMain;