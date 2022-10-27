import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    // console.log(course)
    const { id, photoURL, name } = course
    return (
        <div className='px-14 lg:px-0'>
            <Link className="btn btn-wide my-1 " to={`/courses/${id}`}><img src={photoURL} className="w-10 inline" alt="" />{name}</Link>
        </div>
    );
};

export default Course;