import React from 'react';
import '../styles/HomeSearch.css';

const HomeSearch = () => {
    return (
        <section className='home-search-container my-5'>
            
            <div className="container">
                <h1 className='fw-bold ps-1'>Lets get you started </h1>
                <input type="search" placeholder="Search by University, Subject, Start Date, Program Type" className='home-search-input mt-3' />
            </div>

        </section>
    );
};

export default HomeSearch;