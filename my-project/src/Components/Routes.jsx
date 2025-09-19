import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./Login";


const routes=createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element:<Login></Login>
            }
        ]
    }
])

export default routes;