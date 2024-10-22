import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Products, Services, Supplies } from '../pages/index.js';
import { Header, Footer } from "../components/molecules/index.js";
import { ScrollToTop } from "../components/atoms/index.js";



const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/supplies" element={<Supplies />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
