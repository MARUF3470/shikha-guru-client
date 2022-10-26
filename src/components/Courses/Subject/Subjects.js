import React from 'react';

const Subjects = ({ subject }) => {
    const { balance, name, picture } = subject
    return (
        <div>
            <div className="card w-72 h-96 mb-5 glass">
                <figure><img src={picture} className='h-48 w-full' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Enrollment money: {balance}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subjects;