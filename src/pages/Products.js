import bannerImageEquipos from '../assets/images/Equipos.jpg';

const Products = () => {

    return (
        <div>
            {/* Contenedor principal */}
            <div style={{
                position: 'relative',
                height: '90vh',
                width: '100vw',
                overflow: 'hidden' // Evita desbordamientos de los elementos internos
            }}>
                {/* Imagen de fondo */}
                <div style={{
                    backgroundImage: `url(${bannerImageEquipos})`,
                    height: '100%',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(5px)', // Se aplica un ligero blur a toda la imagen
                    zIndex: 1
                }}></div>

                {/* Gradiente transparente en la parte inferior */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                    zIndex: 2
                }}></div>

                {/* Texto sobre la imagen */}
                <h1 className="display-1" style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '4px 4px 10px rgba(0, 0, 0, 1)',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3
                }}>
                    Equipos
                </h1>
            </div>
        </div>
    );
};

export default Products;
