import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';

const Leads = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://owlybd.herokuapp.com/students')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <Navbar />
            <div style={{ padding: '0' }} className="container-fluid">
                <h2 className='fs-4 my-5 text-center'>Total Leads: <span className='text-primary fw-bold fs-2'>{users.length}</span></h2>
                {
                    users?.length > 0 ?
                        <div className="table-responsive pb-5">
                            <table style={{ border: '1px solid lightgrey' }} className="table table-secondary table-striped table-hover">
                                <thead style={{ backgroundColor: '#E9EEF4' }}>
                                    <tr className='text-center'>
                                        <th>No.</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date of Birth</th>
                                        <th>Citizen</th>
                                        <th>First Language</th>
                                        <th>Marital Status</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Highest Education</th>
                                        <th>CGPA</th>
                                        <th>English Proficiency Exam</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => (
                                            <tr key={user._id} className='text-center'>
                                                <td>{index + 1}</td>
                                                <td>{user?.firstName}</td>
                                                <td>{user?.lastName}</td>
                                                <td>{user?.birth}</td>
                                                <td>{user?.citizen}</td>
                                                <td>{user?.firstLanguage}</td>
                                                <td>{user?.maritalStatus}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.phone}</td>
                                                <td>{user?.address} {user?.cityTown} {user?.state} {user?.postal} {user?.country}</td>
                                                <td>{user?.highestEducation}</td>
                                                <td>{user?.gradeAverage}</td>
                                                <td>{user?.examType}</td>
                                                <td>{user?.bandScore}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <p style={{ maxWidth: '500px', backgroundColor: '#E9EEF4' }} className='p-2 text-primary'>We Currently have No Students
                        </p>
                }
            </div>
        </div>
    );
};

export default Leads;