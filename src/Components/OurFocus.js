import React from 'react';
import '../styles/OurFocus.css';

const OurFocus = () => {

    // function for student handler
    // const studentsHandler = () => {
    //     // document.getElementById('default-focused').style.display = 'none'
    //     document.getElementById('focused_students').style.borderBottom = '4px solid #FFAC29'
    //     document.getElementById('focused_institutions').style.borderBottom = 'none'
    //     document.getElementById('focused-partners').style.borderBottom = 'none'
    //     document.getElementById('focused-recruiters').style.borderBottom = 'none'
    // }

    // function for institutions handler
    // const institutionsHandler = () => {
    //     // document.getElementById('default-focused').style.display = 'none'
    //     document.getElementById('focused_students').style.borderBottom = 'none'
    //     document.getElementById('focused_institutions').style.borderBottom = '4px solid #FFAC29'
    //     document.getElementById('focused_partners').style.borderBottom = 'none'
    //     document.getElementById('focused_recruiters').style.borderBottom = 'none'
    // }

    // function for partners handler
    // const partnersHandler = () => {
    //     // document.getElementById('default-focused').style.display = 'none'
    //     document.getElementById('focused_students').style.borderBottom = 'none'
    //     document.getElementById('focused_institutions').style.borderBottom = 'none'
    //     document.getElementById('focused_partners').style.borderBottom = '4px solid #FFAC29'
    //     document.getElementById('focused_recruiters').style.borderBottom = 'none'
    // }

    // function for recruiters handler
    // const recruitersHandler = () => {
    //     // document.getElementById('default-focused').style.display = 'none'
    //     document.getElementById('focused_students').style.borderBottom = 'none'
    //     document.getElementById('focused_institutions').style.borderBottom = 'none'
    //     document.getElementById('focused_partners').style.borderBottom = 'none'
    //     document.getElementById('focused_recruiters').style.borderBottom = '4px solid #FFAC29'
    // }

    return (
        <section className='container my-5'>

            <h1 className='fw-bold text-center'>Our Focus</h1>

            <div className="row justify-content-between align-items-center mt-5 px-5 text-center">
                <div 
                // onClick={() => studentsHandler()} id='focused_students' 
                className="col-sm-2 p-2 cursor-pointer">STUDENTS</div>
                <div 
                // onClick={() => institutionsHandler()} id='focused_institutions' 
                className="col-sm-2 p-2 cursor-pointer">INSTITUTIONS</div>
                <div 
                // onClick={() => partnersHandler()} id='focused_partners' 
                className="col-sm-2 p-2 cursor-pointer">PARTNERS</div>
                <div 
                // onClick={() => recruitersHandler()} id='focused_recruiters' 
                className="col-sm-2 p-2 cursor-pointer">RECRUITERS</div>
            </div>
            
            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-sm-6">
                    <h2 className='fs-5'>STUDENTS</h2>
                    <h3 className='header-title'>Simplifying the
                    <br />application process</h3>
                    <p className='header-description'>Owly connects international students and 
                    <br />
                    recruitment partners for educational opportunities 
                    <br />
                    at institutions around the world.</p>
                    <button className='button-brand'>Apply Now</button>
                </div>
                <div className="col-sm-6">
                    <img src="https://i.ibb.co/MBwM5fP/focused-Image.png" className='img-fluid mt-5' alt="" />
                </div>
            </div>
        </section>
    );
};

export default OurFocus;