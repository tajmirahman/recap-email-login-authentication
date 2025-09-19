import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./Login";
import Registser from "./Registser";


const routes=createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registser></Registser>
            }
        ]
    }
])

export default routes;