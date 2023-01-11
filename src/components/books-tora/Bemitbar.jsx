import React, { useState } from 'react';
import '../tora.scss';

const Bemitbar = () => {
   const [w, setW] = useState(window.innerWidth);
  return (
    <>
      <div className="book__fals">
        <div className="book__fals-one">
          BEMITBAR
        </div>          
      </div>
    </>
  );
};

export default  Bemitbar;
