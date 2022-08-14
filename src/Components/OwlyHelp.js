import React from 'react';
import owlyhelpData from '../Data/owlyhelp';
const OwlyHelp = () => {

    return (
        <section className='container my-5'>
            <h1 className='text-center fw-bold'>How Owly Can Help You</h1>
            
            <div className='row'>
                {owlyhelpData.map((item, index) => {
                    return (
                        <div className='col-md-4 mt-5 px-4' key={index}>
                            <img src={item.image} className='img-fluid mx-auto d-block' width={100} alt={item.title} />
                            <h2 className='fs-4 mt-3 fw-bold text-center'>{item.title}</h2>
                            <p className='mt-4 text-center'>{item.description}</p>
                        </div>
                    );
                }
                )}
            </div>

        </section>
    );
};

export default OwlyHelp;