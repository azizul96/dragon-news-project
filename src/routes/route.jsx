import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/news.json')
        },
        {
            path: "/news/:id",
            element: <PrivateRoute><News></News></PrivateRoute>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/career",
            element: <Career></Career>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);
  export default router;