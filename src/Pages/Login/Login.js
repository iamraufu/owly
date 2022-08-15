import React from 'react';
import Navbar from '../../Components/Navbar';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const navigate = useNavigate();

    return (
        <section>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <img style={{borderRadius: '1rem'}} className="img-fluid" src="https://i.ibb.co/yhfVtGW/hero-Image.png" alt="LoginImage" />
                    </div>
                    
                    <div className="col-md-2"></div>
                    
                    <div className="col-md-3 my-3">
                        <h2 className="text-center fs-5"><span className='fw-bold'>Login</span> to your account</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <button onClick={()=>navigate('/student-signup')} className='button-signUp'>Student</button>
                            <button onClick={()=>navigate('/partner-signup')} className='button-signUp'>Partner</button>
                            <button onClick={()=>navigate('/college-signup')} className='button-signUp'>College</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;