import Service from '../components/Service'
import About from '../components/About'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import HeroHome from '../components/HeroHome'

const Home = () => {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                <HeroHome />
                <Service />
                <About />
                <Menu />
                <Reservation />
                <Team />
                <Testimonial />
            </div>
        </>
    )
}

export default Home
