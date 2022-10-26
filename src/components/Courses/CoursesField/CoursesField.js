import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subjects from '../Subject/Subjects';

const CoursesField = () => {
    const subjectLoadedData = useLoaderData()
    return (
        <div className='grid grid-cols-3'>
            {
                subjectLoadedData.map(subject => <Subjects key={subject.subjectID} subject={subject}></Subjects>)
            }
        </div>
    );
};

export default CoursesField;