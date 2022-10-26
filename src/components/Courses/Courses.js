import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Course from './Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div className="mx-auto">
                    {
                        courses?.map(course => <Course course={course} key={course.id}></Course>)
                    }
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;