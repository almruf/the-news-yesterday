import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Profile from "../../Pages/Others/Profile/Profile";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
                        {
                            path:'/',
                            element:<Home></Home>,
                            loader: () => fetch(`http://localhost:5000/news`) 
                        },
                        {
                            path:'/category/:id',
                            element:<Category></Category>,
                            loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),  
                        },
                        {
                            path:'/news/:id',
                            element:<PrivateRoute><News></News></PrivateRoute>,
                            loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                        },
                        {
                            path:'/login',
                            element:<Login></Login>,
                        },
                        {
                            path:'/register',
                            element:<Register></Register>,                            
                        },
                        {
                            path:'/terms',
                            element:<TermsAndCondition></TermsAndCondition>,
                        },
                        {
                            path:'/profile',
                            element:<PrivateRoute><Profile></Profile></PrivateRoute>,
                        }

                    ]         
    }   
        
    
])