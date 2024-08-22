
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../components/Navbar/Navnar';
import Home from './../pages/Home/Home';
import About from './../pages/AboutUs/About';
import Contact from './../pages/Contact/Contact';
import Products from './../pages/Products/Products';
import Details from './../pages/Products/Details';
import Notfound from './../pages/NotFound/Notfound';
import Footer from './../components/Footer/Footer';
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="m-5">
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="*" element={<Notfound />} />

                    </Routes>

                </div>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Router;
