import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../components/MainPage";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Cart from "../components/Cart";
import CheckOut from "../components/CheckOut";
import Products from "../components/Products";

const router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<MainPage/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/aboutMe',
                element:<AboutMe/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/checkout',
                element:<CheckOut/>
            },
            {
                path:'/products',
                element:<Products/>
            }
        ]
    }
])


export default router;