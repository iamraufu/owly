import React from 'react';
import Navbar from '../../Components/Navbar';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { user, setUser } = useAuth();

    if (user?.email || localStorage.getItem('token')) {
        navigate(from, { replace: true })
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => login(data);

    const login = details => {
        fetch('https://owlybd.herokuapp.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data=> 
            {
                if (data.status=== true){
                    if(data.result.student !== null){
                        setUser(data.result.student)
                        localStorage.setItem("token", data.result.student._id)
                        localStorage.setItem("role", "student")
                        navigate('/dashboard')
                    }
                    else if (data.result.partner !== null){
                        setUser(data.result.partner)
                        localStorage.setItem("token", data.result.partner._id)
                        localStorage.setItem("role", "partner")
                        navigate('/dashboard')
                    }
                    else {
                        setUser(data.result.institute)
                        localStorage.setItem("token", data.result.institute._id)
                        localStorage.setItem("role", "institute")
                        navigate('/dashboard')
                    }
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: "Wrong Credentials!",
                        text: `${data.message}`,
                    })
                    document.getElementById('login').reset()
                }
            })
    }

    return (
        <section>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">

                    <div className="col-md-6 d-none d-md-block">
                        <img style={{ borderRadius: '1rem' }} className="img-fluid" src="https://i.ibb.co/yhfVtGW/hero-Image.png" alt="LoginImage" loading='lazy' />
                    </div>

                    <div className="col-md-1"></div>

                    <div className="col-md-4 my-3">
                        <h2 className="text-center fs-5"><span className='fw-bold'>Login</span> to your account</h2>

                        <form id='login' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id='email' className="form-control" aria-describedby="emailHelp" {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor='password' className="form-label">Password</label>
                                <input id='password' type='password' className="form-control" {...register("password", { required: true })} />
                                {errors.password && <span className='text-danger'>This field is required</span>}
                            </div>

                            <input className='button-brand w-100' type="submit" value="Login" />
                        </form>

                        <p className='text-center mt-3 text-muted'>Don't have an account? <span className='text-black fw-bold'>Sign up as</span></p>

                        <div className="d-flex justify-content-around">
                            <button onClick={() => navigate('/student-signup')} className='button-signUp'>Student</button>
                            <button onClick={() => navigate('/partner-signup')} className='button-signUp'>Partner</button>
                            <button onClick={() => navigate('/college-signup')} className='button-signUp'>College</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;