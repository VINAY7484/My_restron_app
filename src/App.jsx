import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import MenuPage from "./pages/MenuPage"
import ContactPage from './pages/ContactPage';
import BookingPage from "./pages/BookingPage"
import TeamPage from "./pages/TeamPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
