import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../components/dashboards/Dashboard";
import Home from "../pages/home/Home";
import PrivateRouting from "../privaterouting/PrivateRouting";
import Profile from "../components/userpages/Profile";
import UpdateProfile from "../components/userpages/UpdateProfile";
import Settings from "../components/userpages/Settings";
import UserWelcomePage from "../components/userpages/UserWelcomePage";
import AuthRouting from "../privaterouting/AuthRouting";
import CreatePost from "../components/posts/CreatePost";
import AllPost from "../components/posts/AllPost";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<AuthRouting>
                    <Home/>
                </AuthRouting>
            },
            {
                path:"/dashboard",
                element:<PrivateRouting><Dashboard/></PrivateRouting>,
                children:[
                    {
                        path:"/dashboard",
                        element:<UserWelcomePage/>

                    },
                    {
                        path:"/dashboard/profile/:id",
                        element:<Profile/>

                    },
                    {
                        path:"/dashboard/updateprofile/:profileID",
                        element:<UpdateProfile/>
                    },
                    {
                        path:"/dashboard/settings",
                        element:<Settings/>
                    },
                    {
                        path:"/dashboard/createpost",
                        element:<CreatePost/>
                    },
                    {
                        path:"/dashboard/allpost",
                        element:<AllPost/>
                    }
                ]
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    }
    
])