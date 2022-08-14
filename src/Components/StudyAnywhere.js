import React from 'react';
import studyAnywhere from '../Data/studyanywhere.json';

const StudyAnywhere = () => {
    return (
        <section className='container pt-5 my-5'>

            <h1 className='text-center fw-bold'>Study Anywhere</h1>
            <p className='text-center'>The ApplyBoard Platform allows you to enrich and diversify your campus by connecting you with highly qualified students from around the globe.
            </p>

            <div className="d-flex my-5">
                {
                    studyAnywhere.map((item, index) =>
                        <div key={index} className="col-sm-4 p-2">
                            <img width={250} src={item.image} className='img-fluid' alt="uk" />
                            <h2 className='fs-4 fw-bold mt-3'>{item.country}</h2>
                        </div>
                    )}
            </div>

            <button className='button-brand mx-auto d-block'>View All &#8594;</button>
        </section>
    );
};

export default StudyAnywhere;