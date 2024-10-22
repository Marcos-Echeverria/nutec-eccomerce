import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Products, Checkout, Contact } from '../pages/index.js';



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
