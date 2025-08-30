import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer"
import Home from "./assets/Home/Home"
import Contact from "./assets/Contact/Contact";
import Services from "./assets/Services/Services";
import About from "./assets/About/About";
import Testimonial from "./assets/Testimonials/Testimonial";
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="background">
            <Header />
            <Home />
            <Services />
            <About />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}
export default App