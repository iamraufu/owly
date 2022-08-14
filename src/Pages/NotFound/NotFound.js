import React from 'react';
import Navbar from '../../Components/Navbar';

const NotFound = () => {
    return (
        <section>
            <Navbar />
            <h1 className='d-flex justify-content-center align-items-center text-center text-danger fw-bold mt-5'>404 <br /> Not Found</h1>
        </section>
    );
};

export default NotFound;