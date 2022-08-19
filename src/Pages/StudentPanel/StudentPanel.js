import React from 'react';
import StudentMain from '../../Components/StudentMain';
import StudentSidebar from '../../Components/StudentSidebar';

const StudentPanel = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{margin:'0'}} className="row">
                <div
                    style={{ minWidth: '200px', padding:'0px' }} 
                    className="col-md-2">
                    <StudentSidebar />
                </div>
                <div style={{padding:'0px'}} className="col-md-10">
                    <StudentMain />
                </div>
            </div>
        </section>
    );
};

export default StudentPanel;