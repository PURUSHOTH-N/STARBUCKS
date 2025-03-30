import { createBrowserRouter } from "react-router-dom";
import NavbarContainer from "../components/NavBarBlock/NavbarContainer";
import Layout from "../layout/Layout";
import Home from "../auth/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ResetPassword from "../auth/ResetPassword";
import ProfileContainer from "../components/UserProfile/ProfileContainer";
import MyAccount from "../components/UserProfile/MyAccount";
import AddProfile from "../components/UserProfile/AddProfile";
import UploadProfilePhoto from "../components/UserProfile/UploadProfilePhoto";
import ChangePasword from "../components/UserProfile/ChangePasword";
import DeleteAccount from "../components/UserProfile/DeleteAccount";

let myRoutes = createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element: <Home/>
        },
        {
            path:"/auth/login",
            element: <Login/>
        },
        {
            path:"/auth/register",
            element: <Register/>
        },
        {
            path:"/auth/reset-password",
            element:<ResetPassword/>
        },
        {
            path:"/user/profile",
            element:<ProfileContainer/>,
            children:[
                {
                    path:"my-account",
                    element:<MyAccount/>
                },
                {
                    path:"add-profile",
                    element:<AddProfile/>
                },
                {
                    path:"upload-profile-photo",
                    element:<UploadProfilePhoto/>
                },
                {
                    path:"change-password",
                    element:<ChangePasword/>
                },
                {
                    path:"delete-account",
                    element:<DeleteAccount/>
                }
            ]
        },
        {
            path:"*",
            element: <h1>404! page not found</h1>
        },
        
        
    ] 
}])
export default myRoutes;