import React from 'react';
import '../styles/Header.css';
// import heroImage from '../images/Homepage/heroImage.png';

const Header = () => {

    const heroImage = 'https://i.ibb.co/12ptFDZ/hero-Image.png';

    return (
        <section className='container my-5'>

            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 d-lg-none">
                    <img src={heroImage} width={300} className='img-fluid mx-auto d-block' alt="A Girl holding some papers" loading='lazy' />
                </div>

                <div className="col-md-8">
                    <h1 className='fw-bold header-title'>Mission to
                        <br />
                        <span style={{ color: '#FFAC29' }}>educate</span>
                        <br />
                        our world</h1>
                    <p className='header-description'>Owly connects international students and <br /> recruitment partners for educational <br /> oppurtunities at institutions around the world.</p>
                    <button className='button-brand'>How it works</button>
                </div>

                <div className="col-md-4 d-none d-lg-block">
                    <img src={heroImage} className='img-fluid mx-auto d-block' alt="A Girl holding some papers" loading='lazy' />
                </div>
            </div>

        </section>
    );
};

export default Header;