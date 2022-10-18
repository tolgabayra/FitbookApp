import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//layouts
import DashboardLayout from "./layouts/dashboard/index"
import HomeLayout from "./layouts/home/index"
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Recipes'
import Notfound from "./pages/Page404"
import Users from './pages/Favs';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';
import Landing from './pages/Landing';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Favs from './pages/Favs';
 
const ProtectedRoute = () => {
  const user = useSelector((state)=> state.auth.user)
  if(!user){
    return <Login />
  }
  return <DashboardLayout />
}


export default function Router(){
    return useRoutes([
        {
            path: "/dashboard",
            element: <ProtectedRoute />,
            children: [
                {path: "recipes", element: <Recipes />},
                {path: "favs", element: <Favs />},
                {path: "home", element: <Home />},
                {path: "me", element: <Profile />},


            ]
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "forget_password",
            element: <ForgetPassword />
        },
        {
            path: "/",
            children: [
                { path: '/', element: <Landing /> },
                { path: '404', element: <Notfound /> },
                { path: '*', element: <Notfound /> },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ])
}