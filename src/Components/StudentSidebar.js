import React from 'react';
import { NavLink } from 'react-router-dom';
import logOutImage from '../images/Dashboard/logout.png';
import accountDetailsImage from '../images/Dashboard/accountDetails.png';
import applicationsImage from '../images/Dashboard/applications.png';
import documentsImage from '../images/Dashboard/documents.png';
import messagesImage from '../images/Dashboard/messages.png';
import paymentsImage from '../images/Dashboard/payments.png';

const StudentSidebar = () => {
    return (
        <section style={{ minHeight: '100vh', borderRight: '1px solid #eaeaea' }}>
            <img className='img-fluid mx-auto d-block p-3' src="https://i.ibb.co/LNMdQZp/logo.png" alt="logo" />

            <div className="mt-5">
                <div style={{backgroundColor:'#FFAC29'}} className="p-3 fw-bold">
                    <NavLink to='/dashboard/student' className='text-decoration-none text-black ps-5'><img src={accountDetailsImage} alt="" /> Account Details</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/student' className='text-decoration-none text-black ps-5'><img src={applicationsImage} alt="" /> Applications</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/student' className='text-decoration-none text-black ps-5'><img src={paymentsImage} alt="" /> Payments</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/student' className='text-decoration-none text-black ps-5'><img src={documentsImage} alt="" /> Documents</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/student' className='text-decoration-none text-black ps-5'><img src={messagesImage} alt="" /> Messages</NavLink>
                </div>
            </div>

            <div 
            style={{ position: 'absolute', bottom: '0', left:'50px' }} 
            className='p-3 mb-5'>
                <button className='btn mx-auto d-block'><img className='mx-auto d-block' src={logOutImage} alt="" /></button>
            </div>

        </section>
    );
};

export default StudentSidebar;