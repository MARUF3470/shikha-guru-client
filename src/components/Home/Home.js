import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-4'>
            <h1 className='text-5xl text-center mb-3'>Shikhha Guru,</h1>
            <h3 className='text-lg text-center'>The platform where anyone can develop his skills in a perticular field.</h3>
            <hr className='w-7/12 my-7 mx-auto' />
            <p className='w-9/12 text-center mx-auto'>We provide online courses for the student who are interested to build career in web-development sector. We are a trusted platform and we are acheving our goal for the last five years successfully. Join us and let us guide you to a amaizing future.</p>
            <div className='text-center my-8'>
                <Link to='/courses'><button className="btn btn-wide glass btn-sm">Courses</button></Link>
            </div>
        </div>
    );
};

export default Home;