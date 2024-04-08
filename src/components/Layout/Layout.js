import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home/Home";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import classes from './Layout.module.css'
import logo from '../../assets/logo.png'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const Layout = () => {
  return (
    <Fragment>
    <div className={classes.header}>
    <img className={classes.logo} alt="logo" src={logo}></img>

    </div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
};

export default Layout;
