import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Subject = () => {
    const subjectData = useLoaderData()
    console.log(subjectData)
    const { balance, name } = subjectData
    return (
        <div>
            <h1 className='text-center text-2xl'>{name}</h1>
            <p className='text-center text-lg'> Enrollment Money: {balance}</p>
        </div>
    );
};

export default Subject; 