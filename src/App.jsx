import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer"
import Home from "./assets/Home/Home"
import Contact from "./assets/Contact/Contact";
import Services from "./assets/Services/Services";
import About from "./assets/About/About";
import Testimonial from "./assets/Testimonials/Testimonial";
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

function App() {
    return (
        <div className="background">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/About' element={<About />} />
                 <Route path='/Testimonial' element={<Testimonial/>} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>


            <Footer />
        </div>

    );
}
export default App