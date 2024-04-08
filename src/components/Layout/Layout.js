import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Services from "../Pages/About/Services/Services";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import classes from './Layout.module.css'
import logo from '../../assets/logo.png'
import About from "../Pages/About/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
 { path: "/about",
  element: <About />,
},
{ path: "/services",
element: <Services />,
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
