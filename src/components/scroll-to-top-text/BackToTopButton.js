import React from 'react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
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
        <button
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
          }}
           onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
