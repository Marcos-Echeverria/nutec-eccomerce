import Tittle from "../components/atoms/TittleProducs";
import BannerSection from "../components/molecules/BannerEncabezado";
import Products from "../components/molecules/SectionProducts";

import Navegacion from "../components/molecules/navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Navegacion />
            <BannerSection />
            <Tittle />
            <Products />
        </>
    );
};

export default Home;
