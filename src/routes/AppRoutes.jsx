import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import TutorialsPage from "../pages/TutorialsPage ";
import AboutUs from "../pages/AboutUs ";

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
]);

export default AppRoutes;