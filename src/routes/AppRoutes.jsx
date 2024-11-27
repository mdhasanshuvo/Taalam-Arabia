import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import TutorialsPage from "../pages/TutorialsPage ";
import AboutUs from "../pages/AboutUs ";
import Login from "../pages/Login";
import AuthLayout from "../LayoutComponent/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage ";
import PrivateRoute from "./PrivateRoute";
import Lessons from "../pages/Lessons";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

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
        element: <PrivateRoute>
            <TutorialsPage></TutorialsPage>
        </PrivateRoute>
    },
    {
        path: "/about",
        element: <AboutUs></AboutUs>
    },
    {
        path: "/profile",
        element: <MyProfile></MyProfile>
    },
    {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
    },
    {
        path: "/lesson/:id",
        element: <PrivateRoute>
            <Lessons></Lessons>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`/lesson-${params.id}.json`),
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