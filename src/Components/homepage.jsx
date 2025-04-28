import { Link } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import HeroSection from "./Hero.jsx"
import Services from "./Services.jsx"
import AboutUs from "./whyus.jsx"
import Footter from "./Footter.jsx"

const Homepage=()=>{
    return(
    <div className="scroll-hidden">
        <div className="container-fluid" style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url(hero_1.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh"}}>
            <Navbar/>
            <HeroSection/>
        </div>
        <div className="container-fluid p-0">
            <Services/>
            <AboutUs/>
            <Footter/>
        </div>
    </div>
    )
}
export default Homepage