import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home";
import Login from "../Sining/Login";
import Register from "../Sining/Register";
import Reviwe from "../Component/Reviwe";
import PrivateRoute from "../Page/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/sining',
                element: <Register></Register>
            },
            {
                path:'/reviwe',
                element:<PrivateRoute><Reviwe></Reviwe></PrivateRoute>
            }

        ]
    }
])