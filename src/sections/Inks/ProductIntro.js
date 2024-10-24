import React from 'react';
import { Layout } from '../../components/molecules/index.js'

const ProductIntro = () => {
  return (
    
    <Layout>
      <p className="text-center" style={{ fontWeight: '600' }}>
        La tinta Nutec es una tinta de calidad premium, ofrece el más alto nivel de estabilidad de impresión, garantizando mayor velocidad de impresión durante una gran cantidad de metros sin necesidad de procedimientos de limpieza o mantenimiento durante el trabajo, aumentando así la productividad y disminuyendo consumo innecesario de tinta. Las tintas Nutec ofrecen una gran compatibilidad con medios autoadhesivos y otros sustratos flexibles.
        Esta característica se debe principalmente a la formulación química de la tinta que de forma constante controla el tamaño de la gota en el momento de la impresión, garantizando la mejor calidad. En su formulación utilizamos sólo lo mejor y más avanzado en pigmentos y componentes, asegurando así el máximo de durabilidad externa y un amplio gammut de colores.
      </p>
    </Layout>
  );
};

export default ProductIntro;
