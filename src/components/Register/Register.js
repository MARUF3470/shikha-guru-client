import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { registretion, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const handleRegistretion = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value
        if (confirmPassword !== password) {
            setError('Check your password')
            return;
        }
        console.log(email, password, name, photo)


        registretion(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handleUserProfile(name, photo)
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error))
    }
    const handleUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleRegistretion} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-3">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">If you don't have any account on our website, please do registretion first.</p>
                        <p>Allready have an account? <Link to='/login' className='btn btn-link'>Login</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <p className='text-red-500'>{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;