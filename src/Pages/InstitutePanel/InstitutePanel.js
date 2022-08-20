import React from 'react';
import InstituteMain from '../../Components/InstituteMain';
import InstituteSidebar from '../../Components/InstituteSidebar';

const InstitutePanel = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{margin:'0'}} className="row">
                <div
                    style={{ minWidth: '200px', padding:'0px' }} 
                    className="col-md-2">
                    <InstituteSidebar />
                </div>
                <div style={{padding:'0px'}} className="col-md-10">
                    <InstituteMain />
                </div>
            </div>
        </section>
    );
};

export default InstitutePanel;