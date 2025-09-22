import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./Login";
import Registser from "./Registser";
import Profile from "./Profile";
import AnotherPage from "./AnotherPage";
import Header from "./MainLayout/Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registser></Registser>
            },


        ]
    },
    {
        path: 'profile',
        element: <Profile></Profile>
    },
    {
        path: 'another',
        element: <AnotherPage></AnotherPage>,
        children:[
            {
                path:'signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default routes;