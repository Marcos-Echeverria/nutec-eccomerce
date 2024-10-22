import { Button } from "../components/atoms/index.js";
import Navegacion from "../components/molecules/navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <Navegacion />
            <h1>Home Page</h1>
            <Button>Shop Now</Button>
        </div>
    );
};

export default Home;
