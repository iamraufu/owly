import React from 'react';
import '../styles/PopularCourses.css';
import popularCourses from '../Data/popularcourses.json';

const PopularCourses = () => {
    return (
        <section style={{ backgroundColor: '#F2F2F2' }} className='my-5 p-5'>
            <div className="container mt-5">
                <h1 className='fw-bold'>Popular Courses</h1>

                <div className="row justify-content-between mt-5">
                    <div className="col-sm-8">
                    <p>The ApplyBoard Platform allows you to enrich and 
                        <br />
                        diversify your campus.</p>
                    </div>
                    <div className="col-sm-4">
                    <button className='button-brand mx-auto d-block'>View All &#8594;</button>
                    </div>
                </div>
                
                <div className="row my-5">
                {
                    popularCourses.map((item, index) =>
                    <div key={index} className="col-sm-3 mt-3 p-2">
                        <button className='popular-courses-btn text-center fw-bold'>{item.course}</button>
                    </div>
                )}
                </div>

            </div>

        </section>
    );
};

export default PopularCourses;