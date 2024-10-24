import React from 'react';
import { useParams } from 'react-router-dom';
import { InkDetailHero, InkDetailCompatibilitys, InkDetailFooter} from '../sections/index.js';

const InkDetail = () => {
  const { id } = useParams();

  return (
    <>
      <InkDetailHero id={id} />
      <InkDetailCompatibilitys id={id} />
      <InkDetailFooter />
    </>
  );
};

export default InkDetail;
