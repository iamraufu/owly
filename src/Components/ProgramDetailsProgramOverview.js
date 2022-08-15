import React from 'react';

const ProgramDetailsProgramOverview = ({ program }) => {
    return (
        <section className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <h2 className='fw-bold'>Program Overview</h2>
                    <p>What {program.university} says about their 
                    <br />program:</p>
                    <p style={{maxWidth:'450px', textAlign:'justify'}}>"{program.overview}"</p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://i.ibb.co/gWbwcRv/program-overview.png" alt={program.name} />
                </div>
            </div>
        </section>
    );
};

export default ProgramDetailsProgramOverview;