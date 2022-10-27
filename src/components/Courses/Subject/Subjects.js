import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subjects = ({ subject }) => {
    const { balance, name, picture, subjectID } = subject
    const navigate = useNavigate()
    const hanldeEnrollment = () => {
        navigate(`subject/${subjectID}`)
    }
    return (
        <div>
            <div className="card w-72 h-96 mb-5 glass">
                <figure><img src={picture} className='h-48 w-full' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Enrollment money: {balance}</p>
                    <div className="card-actions justify-end">
                        <button onClick={hanldeEnrollment} className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subjects;