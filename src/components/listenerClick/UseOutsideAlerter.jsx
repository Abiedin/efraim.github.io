import { useEffect, useRef, useState } from 'react';

export default function UseOutsideAlerter(initialIsVisible) {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && isShow) {
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isShow]);

  return { ref, isShow, setIsShow };
}
