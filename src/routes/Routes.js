import Courses from "../components/Courses/Courses";
import CoursesField from "../components/Courses/CoursesField/CoursesField";
import Subject from "../components/Courses/Subject/Subject";
import Home from "../components/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses/:id',
                        loader: ({ params }) => {
                            return fetch(`http://localhost:5000/subjects/${params.id}`)
                        },

                        element: <CoursesField></CoursesField>
                    }
                ]
            },
            {
                path: '/courses/:id/subject/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/subject/${params.id}`)
                },
                element: <Subject></Subject>
            }
        ]
    }
])
export default router