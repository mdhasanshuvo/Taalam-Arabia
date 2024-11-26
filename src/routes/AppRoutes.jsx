import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/learning",
        element: <StartLearning></StartLearning>
    }
]);

export default AppRoutes;