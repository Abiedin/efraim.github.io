import React from 'react';
import { useEffect, useState } from 'react';
import './button-to-up.scss';
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', //smooth
    });
  };

  return (
    <div calssName="button-to-top">
      {backToTopButton && (
        <div  className="button-up" onClick={scrollUp}>
          ^
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
