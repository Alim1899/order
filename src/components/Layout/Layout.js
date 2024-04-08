import Navbar from "../Navbar/Navbar"
import Home from "../Pages/Home/Home"
import classes from './Layout.module.css'
const Layout = () => {
  return (
    <div className={classes.main}>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default Layout
