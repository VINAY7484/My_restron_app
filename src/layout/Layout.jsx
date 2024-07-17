import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <Hero /> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
