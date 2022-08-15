import React from 'react';

const ProgramDetailsFeesFunding = ({ program }) => {
    return (
        <section className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://i.ibb.co/DGQhLyq/fees-funding.png" alt={program.name} />
                </div>
                <div className="col-md-6">
                    <h2 className='fw-bold'>Fees and funding</h2>
                    <p>What {program.university} says about their
                        <br />program:</p>
                    <p style={{ maxWidth: '450px', textAlign: 'justify' }}>"{program.funding}"</p>
                </div>

            </div>
        </section>
    );
};

export default ProgramDetailsFeesFunding;