import React from 'react';

const ProgramDetailsAdmissionRequirements = ({ program }) => {
    return (
        <section style={{ minHeight: '460px', backgroundColor: '#F9F8F8' }} className='my-5'>
            <div className="container pt-5">
                <h2 className='fw-bold'>Admissions requirements</h2>
                <p>What {program.university} says about their Program</p>

                <div className="row justify-content-between align-items-center mt-5 px-5 text-center">
                    <div style={{backgroundColor: 'black', height:'60px', borderRadius: '0.5rem'}} className="col-sm-2  p-3 cursor-pointer fw-bold text-white text-center">English Requirement</div>
                    <div className="col-sm-2 p-2 cursor-pointer fw-bold">Entry Requirement</div>
                    <div className="col-sm-4 p-2 cursor-pointer fw-bold">Intake / Application Requirement</div>
                </div>

                {/* <div id='default-focused' className='default-focused col-sm-2'></div> */}
                <div className='focused'></div>

                <ul style={{ maxWidth: '700px' }} className='py-5'>
                    <li>{program.requirement}</li>
                </ul>
            </div>
        </section>
    );
};

export default ProgramDetailsAdmissionRequirements;