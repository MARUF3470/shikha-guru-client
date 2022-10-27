import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subjects from '../Subject/Subjects';

const CoursesField = () => {
    const subjectLoadedData = useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 px-10'>
            {
                subjectLoadedData.map(subject => <Subjects key={subject.subjectID} subject={subject}></Subjects>)
            }
        </div>
    );
};

export default CoursesField;