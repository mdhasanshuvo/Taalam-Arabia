import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import TutorialsPage from "../pages/TutorialsPage ";
import AboutUs from "../pages/AboutUs ";
import Login from "../pages/Login";
import AuthLayout from "../LayoutComponent/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage ";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/learning",
        element: <StartLearning></StartLearning>
    },
    {
        path: "/tutorials",
        element: <TutorialsPage></TutorialsPage>
    },
    {
        path: "/about",
        element: <AboutUs></AboutUs>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default AppRoutes;