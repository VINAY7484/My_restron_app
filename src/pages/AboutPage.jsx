import About from '../components/About'
import Hero from '../components/Hero'
import Team from '../components/Team'

const AboutPage = () => {
    return (
        <>
            <Hero currentPage="About" title="About Us" />
            <About />
            <Team />
        </>
    )
}

export default AboutPage
