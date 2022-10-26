import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)
    return (
        <div>
            <div>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;