import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Inks, InkDetail, Printers, Services, Supplies } from '../pages/index.js';
import { Header, Footer } from "../components/molecules/index.js";
import { ScrollToTop, ButtonWppScroll } from "../components/atoms/index.js";



const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <ButtonWppScroll />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inks" element={<Inks />} />
                <Route path="/printers" element={<Printers />} />
                <Route path="/services" element={<Services />} />
                <Route path="/supplies" element={<Supplies />} />
                <Route path="/inks/:id" element={<InkDetail />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
