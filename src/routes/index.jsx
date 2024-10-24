import { createBrowserRouter } from "react-router-dom";
import { Home } from "../containers/Home";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import {Products}   from '../containers/Products'


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    
    {
        path: '/login',
        element:<Login/>
    },

    {
        path: '/cadastro',
        element:<Register/>
    },
    {
        path: '/produtos',
        element:<Products/>
    },




])