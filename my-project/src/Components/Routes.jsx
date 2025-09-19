import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";


const routes=createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
])

export default routes;