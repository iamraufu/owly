import React from 'react';
import up_rightImage from '../images/Programs/up_right.png';

const ProgramDetailsHeader = ({program}) => {

    return (
        <div className="container my-3">
                <img style={{ borderRadius: '1rem' }} className='img-fluid mx-auto d-block' src={program.course_thumbnail} alt={program.name} />
                <div className="row justify-content-around align-items-center my-3">
                    <div className="col-sm-9">
                        <h1 className='fw-bold fs-2'>{program.name}</h1>
                    </div>
                    <div className="col-sm-3">
                        <button className='button-brand mx-auto d-block'>Apply Now</button>
                    </div>
                </div>

                <p>Owly connects international students and recruitment partners for educational opportunities at institutions around the world.</p>
                <a style={{ borderBottom: '1px solid #010101' }} href={program.link} target='_blank' rel="noreferrer" className='text-decoration-none text-black fw-bold'>Program Website <img src={up_rightImage} alt="" /></a>

                <div className="row justify-content-between align-items-center mt-5 px-5 text-center">
                    <div className="col-sm-2 p-2 cursor-pointer fw-bold">Program Overview</div>
                    <div className="col-sm-2 p-2 cursor-pointer fw-bold">Admission Requirements</div>
                    <div className="col-sm-2 p-2 cursor-pointer fw-bold">Fees & Funding</div>
                </div>

                <div id='default-focused' className='default-focused col-sm-2'></div>
                <div className='focused'></div>
            </div>
    );
};

export default ProgramDetailsHeader;