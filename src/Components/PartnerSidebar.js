import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logOutImage from '../images/Dashboard/logout.png';
import uniImage from '../images/Dashboard/uni.png';
import leadsImage from '../images/Dashboard/leads.png';
import messagesImage from '../images/Dashboard/messages.png';

const PartnerSidebar = () => {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <section style={{ minHeight: '100vh', borderRight: '1px solid #eaeaea' }}>
            <Link to='/'><img className='img-fluid mx-auto d-block p-3' src="https://i.ibb.co/LNMdQZp/logo.png" alt="logo" /></Link>

            <div className="mt-5">
                <div style={{ backgroundColor: '#FFAC29' }} className="p-3 fw-bold">
                    <NavLink to='/dashboard/partner' className='text-decoration-none text-black ps-5'><img src={uniImage} alt="" /> Partner</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/leads' className='text-decoration-none text-black ps-5'><img src={leadsImage} alt="" /> Leads</NavLink>
                </div>

                <div className="p-3">
                    <NavLink to='/dashboard/partner' className='text-decoration-none text-black ps-5'><img src={messagesImage} alt="" /> Messages</NavLink>
                </div>

            </div>

            <div
                onClick={() => logOut()}
                style={{ position: 'absolute', bottom: '0', left: '50px' }}
                className='p-3 mb-5'>
                <button className='btn mx-auto d-block'><img className='mx-auto d-block' src={logOutImage} alt="" /></button>
            </div>

        </section>
    );
};

export default PartnerSidebar;