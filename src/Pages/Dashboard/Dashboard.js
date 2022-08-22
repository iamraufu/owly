import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    
    const navigate = useNavigate();

    const role = localStorage.getItem('role')

    useEffect(()=>{
        if(role==='student'){
            navigate('/dashboard/student')
        }
        else if (role === 'partner'){
            navigate('/dashboard/partner')
        }
        else{
            navigate('/dashboard/institute')
        }
        // eslint-disable-next-line
    },[role])
    
    return (
        <></>
    );
};

export default Dashboard;