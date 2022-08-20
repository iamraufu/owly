import React from 'react';
import PartnerMain from '../../Components/PartnerMain';
import PartnerSidebar from '../../Components/PartnerSidebar';

const PartnerPanel = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{margin:'0'}} className="row">
                <div
                    style={{ minWidth: '200px', padding:'0px' }} 
                    className="col-md-2">
                    <PartnerSidebar />
                </div>
                <div style={{padding:'0px'}} className="col-md-10">
                    <PartnerMain />
                </div>
            </div>
        </section>
    );
};

export default PartnerPanel;