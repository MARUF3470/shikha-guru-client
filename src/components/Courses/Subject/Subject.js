import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Subject = () => {
    const subjectData = useLoaderData()
    console.log(subjectData)
    const { balance, name } = subjectData
    return (
        <div>
            <h1>{name}</h1>
            <p>{balance}</p>
        </div>
    );
};

export default Subject;