import React from 'react';
import linkedinImage from '../images/Homepage/linkedin.svg';
import facebookImage from '../images/Homepage/facebook.svg';
import twitterImage from '../images/Homepage/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#414141', color: 'white' }}>
            <section className='container py-5'>
                <div className="row">
                    <div className="col-md-4">
                        <img width={120} src="https://i.ibb.co/8gBfD3t/logowhite.png" alt="owly logo" className="img-fluid" />
                        <p className='mt-3'>Owly connects
                            <br />
                            international students and
                            <br />
                            recruitment partners.</p>
                    </div>
                    <div className="col-md-2">
                        <h2 style={{ color: '#FEA00B' }} className='fs-5 fw-bold'>About</h2>
                        <ul className='list-unstyled'>
                            <li className='mt-1'><Link to='/' className='text-decoration-none text-white'>Our Story</Link></li>
                            <li className='mt-1'><Link to='/' className='text-decoration-none text-white'>Careers</Link></li>
                            <li className='mt-1'><Link to='/' className='text-decoration-none text-white'>Blog</Link></li>
                            <li className='mt-1'><Link to='/' className='text-decoration-none text-white'>Press</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h2 style={{ color: '#FEA00B' }} className='fs-5 fw-bold'>Services</h2>
                        <ul className='list-unstyled'>
                            <li className='f'><Link to='/' className='text-decoration-none text-white'>Students</Link></li>
                            <li className='f'><Link to='/' className='text-decoration-none text-white'>Schools</Link></li>
                            <li className='f'><Link to='/' className='text-decoration-none text-white'>Recruiters</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h2 style={{ color: '#FEA00B' }} className='fs-5 fw-bold'>Contact</h2>
                        <p>120 N Racine Ave. Suite 100
                            <br />
                            Chicago, IL 60607</p>
                            <p>0544 55689</p>
                            <h3 style={{ color: '#FEA00B' }} className='fs-5 fw-bold'>Social</h3>
                            <div className='d-flex'>
                                <a href='https://www.linkedin.com/in/eftykharrahman/' className='me-3' target='_blank' rel='noopener noreferrer'><img width={25} src={linkedinImage} alt="linkedin" className="img-fluid" /></a>
                                <a href='https://www.facebook.com/iamraufu/' className='me-3' target='_blank' rel='noopener noreferrer'><img width={20} src={facebookImage} alt="facebook" className="img-fluid" /></a>
                                <a href='https://twitter.com/iamraufu/' className='me-3' target='_blank' rel='noopener noreferrer'><img width={20} src={twitterImage} alt="twitter" className="img-fluid" /></a>
                            </div>
                    </div>
                </div>
                <p className='pt-5'>&copy; {new Date().getFullYear()} Owlys</p>
            </section>
        </footer>
    );
};

export default Footer;