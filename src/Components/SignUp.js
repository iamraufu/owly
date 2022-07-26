import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const SignUp = ({ as }) => {

    const signUpAs = as;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => signUp(data);

    const signUp = details => {

        if (signUpAs === 'student') {
            fetch('https://owlybd.herokuapp.com/addStudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    data.status === true ?
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: data.message,
                        })
                        :
                        Swal.fire({
                            icon: 'info',
                            title: `${data.message}`,
                            text: `A Student with ${details.email} is already registered!`,
                        })
                        document.getElementById('form').reset()
                })
        }
        // sign up as partner
        else if (signUpAs === 'partner') {
            fetch('https://owlybd.herokuapp.com/addPartner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    data.status === true ?
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: data.message,
                        })
                        :
                        Swal.fire({
                            icon: 'info',
                            title: `${data.message}`,
                            text: `A partner with ${details.email} is already registered!`,
                        })
                        document.getElementById('form').reset()
                })
        }
        // sign up as institute
        else {
            fetch('https://owlybd.herokuapp.com/addInstitute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    data.status === true ?
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: data.message,
                        })
                        :
                        Swal.fire({
                            icon: 'info',
                            title: `${data.message}`,
                            text: `An institute with ${details.email} is already registered!`,
                        })
                        document.getElementById('form').reset()
                })
        }
    }

    return (
        <section>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">

                    <div className="col-md-6 d-none d-md-block">
                        <img style={{ borderRadius: '1rem' }} className="img-fluid" src="https://i.ibb.co/yhfVtGW/hero-Image.png" alt="LoginImage" />
                    </div>

                    <div className="col-md-1"></div>

                    <div className="col-md-4 my-3">
                        <h2 className="text-center fs-5 text-muted"><span className='fw-bold text-black'>Sign up</span> to get started</h2>

                        <form id='form' onSubmit={handleSubmit(onSubmit)}>
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

                            <input className='button-brand w-100' type="submit" value="Create Account" />
                        </form>

                        <p className='text-center mt-3 text-muted'>Already have an account ? <Link to='/login' className='text-decoration-none text-black fw-bold'>Login</Link></p>

                        <p style={{ fontSize: '15px' }} className='text-center text-muted mt-4'>By joining Owlys, you agree to Owlys <span className="fw-bold text-black">Terms & Conditions, Privacy Policy</span> and <span className="text-black fw-bold">Terms of Use</span>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;