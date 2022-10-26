import Courses from "../components/Courses/Courses";
import CoursesField from "../components/Courses/CoursesField/CoursesField";
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
                        element: <CoursesField></CoursesField>
                    }
                ]
            }
        ]
    }
])
export default router