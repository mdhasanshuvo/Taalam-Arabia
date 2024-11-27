import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import TutorialsPage from "../pages/TutorialsPage ";

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
    }
]);

export default AppRoutes;