import Tittle from "../components/atoms/TittleProducs";
import BannerSection from "../components/molecules/BannerEncabezado";
import Products from "../components/molecules/SectionProducts";


const Home = () => {
    return (
        <>
            <h1 style={{ height: '20vh' }}>UNA NAVBAR XD</h1>
            <BannerSection />
            <Tittle />
            <Products />

        </>
    );
};

export default Home;
